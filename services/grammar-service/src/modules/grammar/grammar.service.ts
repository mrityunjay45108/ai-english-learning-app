import { Injectable, NotFoundException } from '@nestjs/common';
import { GrammarRepository } from './grammar.repository';
import { TopicQueryDto, SubmitExerciseDto, UserProgressStatus } from '../../common/dto/grammar.dto';

@Injectable()
export class GrammarService {
  constructor(private readonly repo: GrammarRepository) {}

  async getAllTopics(query: TopicQueryDto) {
    const { page = 1, limit = 20, category, difficulty, search } = query;
    const skip = (page - 1) * limit;
    const where: any = {};
    if (category) where.category = category;
    if (difficulty) where.difficulty = difficulty;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }
    const [data, total] = await Promise.all([
      this.repo.findAllTopics({ skip, take: limit, where }),
      this.repo.countTopics(where),
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getTopic(id: string) {
    const topic = await this.repo.findTopicById(id);
    if (!topic) throw new NotFoundException('Topic not found');
    return topic;
  }

  async getExercises(topicId: string) {
    const topic = await this.repo.findTopicById(topicId);
    if (!topic) throw new NotFoundException('Topic not found');
    return topic.exercises.map((ex: any) => ({
      id: ex.id,
      question: ex.question,
      options: ex.options,
      type: ex.type,
      difficulty: ex.difficulty,
      hints: ex.hints,
    }));
  }

  async submitExercise(userId: string, dto: SubmitExerciseDto) {
    const exercise = await this.repo.getExerciseById(dto.exerciseId);
    if (!exercise) throw new NotFoundException('Exercise not found');

    const isCorrect = String(dto.answer).trim().toLowerCase() === String(exercise.correctAnswer).trim().toLowerCase();
    await this.updateProgress(userId, exercise.topicId, isCorrect);

    return {
      exerciseId: dto.exerciseId,
      isCorrect,
      correctAnswer: exercise.correctAnswer,
      explanation: exercise.explanation,
      explanationHindi: exercise.explanationHindi,
      score: isCorrect ? 1 : 0,
      totalScore: 1,
    };
  }

  async getProgress(userId: string, topicId: string) {
    const progress = await this.repo.getProgress(userId, topicId);
    return progress || {
      userId,
      topicId,
      status: UserProgressStatus.NOT_STARTED,
      score: 0,
      attempts: 0,
      correctCount: 0,
      wrongCount: 0,
    };
  }

  async getAllProgress(userId: string, query: any) {
    const { page = 1, limit = 20, status } = query;
    const skip = (page - 1) * limit;
    const where: any = {};
    if (status) where.status = status;

    const [data, total] = await Promise.all([
      this.repo.getAllProgress(userId, { skip, take: limit, where }),
      this.repo.countProgress(userId, where),
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getMasteredTopics(userId: string) {
    const progress = await this.repo.getAllProgress(userId, { where: { status: 'MASTERED' } });
    return progress.map((p: any) => p.topic);
  }

  private async updateProgress(userId: string, topicId: string, isCorrect: boolean) {
    const current = await this.repo.getProgress(userId, topicId);
    const attempts = (current?.attempts || 0) + 1;
    const correctCount = (current?.correctCount || 0) + (isCorrect ? 1 : 0);
    const wrongCount = (current?.wrongCount || 0) + (isCorrect ? 0 : 1);
    const score = Math.round((correctCount / attempts) * 100);

    let status = UserProgressStatus.LEARNING;
    if (score >= 80 && attempts >= 5) status = UserProgressStatus.MASTERED;

    return this.repo.upsertProgress(userId, topicId, {
      status,
      score,
      attempts,
      correctCount,
      wrongCount,
      lastPracticed: new Date(),
      masteredAt: status === 'MASTERED' ? new Date() : undefined,
    });
  }
}