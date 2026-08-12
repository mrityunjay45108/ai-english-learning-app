import { Injectable } from '@nestjs/common';
import { ProgressRepository } from './progress.repository';
import { CourseProgressQueryDto, ProgressStatus } from '../../common/dto/progress.dto';

@Injectable()
export class ProgressService {
  constructor(private readonly repo: ProgressRepository) {}

  async getCourseProgress(userId: string, courseId: string) {
    const progress = await this.repo.getCourseProgress(userId, courseId);
    return progress || {
      userId,
      courseId,
      status: ProgressStatus.NOT_STARTED,
      progressPercentage: 0,
      lessonsCompleted: 0,
      totalLessons: 0,
    };
  }

  async getAllCourseProgress(userId: string, query: CourseProgressQueryDto) {
    const { page = 1, limit = 20, status } = query;
    const skip = (page - 1) * limit;
    const where: any = {};
    if (status) where.status = status;

    const [data, total] = await Promise.all([
      this.repo.getAllCourseProgress(userId, { skip, take: limit, where }),
      this.repo.countCourseProgress(userId, where),
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getLessonProgress(userId: string, lessonId: string) {
    const progress = await this.repo.getLessonProgress(userId, lessonId);
    return progress || {
      userId,
      lessonId,
      status: ProgressStatus.NOT_STARTED,
      score: 0,
      timeSpent: 0,
      attempts: 0,
    };
  }

  async getSummary(userId: string) {
    return this.repo.getSummary(userId);
  }

  async getActivities(userId: string, limit: number = 50) {
    return this.repo.getActivities(userId, { take: limit });
  }

  async handleLessonCompleted(event: any) {
    const { userId, lessonId, courseId, score, timeSpent } = event;
    const lessonProgress = await this.repo.upsertLessonProgress(userId, lessonId, courseId, {
      status: ProgressStatus.COMPLETED,
      score,
      timeSpent,
      attempts: { increment: 1 },
      completedAt: new Date(),
    });
    await this.updateCourseProgress(userId, courseId);
    await this.updateUserStats(userId, 'LESSON_COMPLETED', timeSpent || 0);
    await this.repo.createActivity({
      userId,
      activityType: 'LESSON_COMPLETED',
      activityId: lessonId,
      metadata: { courseId, score },
      xpEarned: 10,
    });
    return lessonProgress;
  }

  async handleGrammarExerciseCompleted(event: any) {
    const { userId, topicId, exerciseId, isCorrect } = event;
    await this.repo.createActivity({
      userId,
      activityType: 'GRAMMAR_EXERCISE_COMPLETED',
      activityId: exerciseId,
      metadata: { topicId, isCorrect },
      xpEarned: isCorrect ? 5 : 2,
    });
    await this.updateUserStats(userId, 'GRAMMAR_EXERCISE_COMPLETED', 0);
  }

  async handleVocabularyLearned(event: any) {
    const { userId, wordId, confidence } = event;
    await this.repo.createActivity({
      userId,
      activityType: 'VOCABULARY_LEARNED',
      activityId: wordId,
      metadata: { confidence },
      xpEarned: 3,
    });
    await this.updateUserStats(userId, 'VOCABULARY_LEARNED', 0);
  }

  async handleAssessmentCompleted(event: any) {
    const { userId, assessmentId, score, level } = event;
    await this.repo.createActivity({
      userId,
      activityType: 'ASSESSMENT_COMPLETED',
      activityId: assessmentId,
      metadata: { score, level },
      xpEarned: 20,
    });
    await this.updateUserStats(userId, 'ASSESSMENT_COMPLETED', 0);
  }

  private async updateCourseProgress(userId: string, courseId: string) {
    const courseProgress = await this.repo.getCourseProgress(userId, courseId);
    if (!courseProgress) {
      await this.repo.upsertCourseProgress(userId, courseId, {
        status: ProgressStatus.IN_PROGRESS,
        startedAt: new Date(),
        lastAccessed: new Date(),
      });
      return;
    }
    const completedLessons = await this.repo.prisma.lessonProgress.count({
      where: { userId, courseId, status: ProgressStatus.COMPLETED },
    });
    const totalLessons = courseProgress.totalLessons || 0;
    const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    const status = progressPercentage === 100 ? ProgressStatus.COMPLETED : ProgressStatus.IN_PROGRESS;

    await this.repo.upsertCourseProgress(userId, courseId, {
      lessonsCompleted: completedLessons,
      progressPercentage,
      status,
      completedAt: progressPercentage === 100 ? new Date() : undefined,
      lastAccessed: new Date(),
    });
  }

  private async updateUserStats(userId: string, activity: string, timeSpent: number) {
    const stats = await this.repo.getOrCreateUserStats(userId);
    let xp = 0;
    switch (activity) {
      case 'LESSON_COMPLETED': xp = 10; break;
      case 'GRAMMAR_EXERCISE_COMPLETED': xp = 5; break;
      case 'VOCABULARY_LEARNED': xp = 3; break;
      case 'ASSESSMENT_COMPLETED': xp = 20; break;
      default: xp = 1;
    }
    const totalXp = stats.totalXp + xp;
    const level = Math.floor(totalXp / 100) + 1;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const lastActive = stats.lastActive || new Date(0);
    const lastDate = new Date(lastActive.getFullYear(), lastActive.getMonth(), lastActive.getDate());

    let streakDays = stats.streakDays;
    const dayDiff = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    if (dayDiff === 1) streakDays += 1;
    else if (dayDiff > 1) streakDays = 0;

    const bestStreak = Math.max(stats.bestStreak, streakDays);
    await this.repo.updateUserStats(userId, {
      totalXp,
      level,
      streakDays,
      bestStreak,
      totalTimeSpent: stats.totalTimeSpent + Math.floor(timeSpent / 60),
      lastActive: now,
      lastStreakDate: today,
    });
  }
}