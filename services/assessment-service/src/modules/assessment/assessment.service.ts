import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { AssessmentRepository } from './assessment.repository';
import { StartAssessmentDto, SubmitAnswerDto } from '../../common/dto/assessment.dto';
import { Assessment } from '@prisma/client-assessment';
@Injectable()
export class AssessmentService {
  constructor(private readonly assessmentRepository: AssessmentRepository) {}

  private questionBank = [
    {
      questionText: 'Choose the correct sentence:',
      options: ['I go to school yesterday.', 'I went to school yesterday.', 'I gone to school yesterday.'],
      correctAnswer: 'I went to school yesterday.',
      type: 'MULTIPLE_CHOICE',
      category: 'GRAMMAR',
      difficulty: 'BEGINNER',
      points: 1,
    },
    {
      questionText: 'Fill in the blank: She ___ to the store every day.',
      options: ['go', 'goes', 'going'],
      correctAnswer: 'goes',
      type: 'MULTIPLE_CHOICE',
      category: 'GRAMMAR',
      difficulty: 'BEGINNER',
      points: 1,
    },
    {
      questionText: 'What is the meaning of "happy"?',
      options: ['Sad', 'Joyful', 'Angry', 'Tired'],
      correctAnswer: 'Joyful',
      type: 'MULTIPLE_CHOICE',
      category: 'VOCABULARY',
      difficulty: 'BEGINNER',
      points: 1,
    },
    {
      questionText: 'Choose the correct synonym for "big":',
      options: ['Small', 'Large', 'Tiny', 'Narrow'],
      correctAnswer: 'Large',
      type: 'MULTIPLE_CHOICE',
      category: 'VOCABULARY',
      difficulty: 'BEGINNER',
      points: 1,
    },
    {
      questionText: 'Which sentence uses the present perfect tense correctly?',
      options: ['I have visited Paris last year.', 'I have visited Paris.', 'I visited Paris.', 'I am visiting Paris.'],
      correctAnswer: 'I have visited Paris.',
      type: 'MULTIPLE_CHOICE',
      category: 'GRAMMAR',
      difficulty: 'ELEMENTARY',
      points: 2,
    },
    {
      questionText: 'What does "frustrated" mean?',
      options: ['Happy', 'Annoyed', 'Excited', 'Calm'],
      correctAnswer: 'Annoyed',
      type: 'MULTIPLE_CHOICE',
      category: 'VOCABULARY',
      difficulty: 'ELEMENTARY',
      points: 2,
    },
    {
      questionText: 'Complete the sentence: If I ___ harder, I would have passed.',
      options: ['studied', 'had studied', 'have studied', 'study'],
      correctAnswer: 'had studied',
      type: 'MULTIPLE_CHOICE',
      category: 'GRAMMAR',
      difficulty: 'INTERMEDIATE',
      points: 2,
    },
    {
      questionText: 'What is the meaning of "ambiguous"?',
      options: ['Clear', 'Unclear', 'Precise', 'Exact'],
      correctAnswer: 'Unclear',
      type: 'MULTIPLE_CHOICE',
      category: 'VOCABULARY',
      difficulty: 'INTERMEDIATE',
      points: 2,
    },
    {
      questionText: 'Which sentence uses the subjunctive mood correctly?',
      options: ['I wish I was there.', 'I wish I were there.', 'I wish I am there.', 'I wish I have been there.'],
      correctAnswer: 'I wish I were there.',
      type: 'MULTIPLE_CHOICE',
      category: 'GRAMMAR',
      difficulty: 'ADVANCED',
      points: 3,
    },
    {
      questionText: 'The word "ephemeral" means:',
      options: ['Permanent', 'Short-lived', 'Ancient', 'Future'],
      correctAnswer: 'Short-lived',
      type: 'MULTIPLE_CHOICE',
      category: 'VOCABULARY',
      difficulty: 'ADVANCED',
      points: 3,
    },
  ];

  async startAssessment(userId: string, dto: StartAssessmentDto): Promise<Assessment> {
    const existing = await this.assessmentRepository.findByUserId(userId);
    const inProgress = existing.find(a => a.status === 'STARTED' || a.status === 'ACTIVE');
    
    if (inProgress) {
      throw new BadRequestException('You already have an assessment in progress. Complete it first.');
    }

    const questions = this.selectQuestions(dto.type || 'INITIAL', dto.questionCount || 20);

    const assessment = await this.assessmentRepository.create({
      userId,
      title: `${dto.type || 'INITIAL'} Assessment`,
      description: `English ${(dto.type || 'INITIAL').toLowerCase()} assessment`,
      type: dto.type || 'INITIAL',
      status: 'ACTIVE',
      totalQuestions: questions.length,
      timeLimit: dto.timeLimit || 30,
      expiresAt: new Date(Date.now() + (dto.timeLimit || 30) * 60 * 1000),
    });

    await this.assessmentRepository.addQuestions(assessment.id, questions);
    return (await this.assessmentRepository.findById(assessment.id))!;
  }

  async getQuestions(assessmentId: string, userId: string): Promise<any> {
    const assessment = await this.assessmentRepository.findById(assessmentId);
    
    if (!assessment) {
      throw new NotFoundException('Assessment not found');
    }
    if (assessment.userId !== userId) {
      throw new BadRequestException('You do not have access to this assessment');
    }
    if (assessment.status === 'COMPLETED') {
      throw new BadRequestException('This assessment is already completed');
    }

    return assessment.questions.map(q => ({
      id: q.id,
      questionText: q.questionText,
      options: q.options,
      type: q.type,
      category: q.category,
      difficulty: q.difficulty,
      points: q.points,
      orderIndex: q.orderIndex,
    }));
  }

  async submitAnswer(assessmentId: string, userId: string, dto: SubmitAnswerDto): Promise<any> {
    const assessment = await this.assessmentRepository.findById(assessmentId);
    
    if (!assessment) {
      throw new NotFoundException('Assessment not found');
    }
    if (assessment.userId !== userId) {
      throw new BadRequestException('You do not have access to this assessment');
    }
    if (assessment.status === 'COMPLETED') {
      throw new BadRequestException('This assessment is already completed');
    }

    const question = assessment.questions.find(q => q.id === dto.questionId);
    if (!question) {
      throw new NotFoundException('Question not found');
    }

    const existingAttempt = await this.assessmentRepository.getAttempts(assessmentId, userId);
    if (existingAttempt.find(a => a.questionId === dto.questionId)) {
      throw new BadRequestException('This question has already been answered');
    }

    const isCorrect = this.evaluateAnswer(question, dto.answer);
    const score = isCorrect ? question.points : 0;

    await this.assessmentRepository.createAttempt({
      assessment: { connect: { id: assessmentId } },
      userId,
      question: { connect: { id: dto.questionId } },
      userAnswer: dto.answer,
      isCorrect,
      score,
      timeTaken: dto.timeTaken || 0,
    });

    const allAttempts = await this.assessmentRepository.getAttempts(assessmentId, userId);
    
    if (allAttempts.length === assessment.totalQuestions) {
      await this.completeAssessment(assessmentId, userId);
    }

    return {
      questionId: dto.questionId,
      isCorrect,
      score,
      correctAnswer: question.correctAnswer,
      explanation: isCorrect ? 'Correct!' : 'Incorrect. The correct answer was: ' + question.correctAnswer,
      progress: `${allAttempts.length}/${assessment.totalQuestions}`,
    };
  }

  async completeAssessment(assessmentId: string, userId: string): Promise<any> {
    const assessment = await this.assessmentRepository.findById(assessmentId);
    
    if (!assessment) {
      throw new NotFoundException('Assessment not found');
    }
    if (assessment.userId !== userId) {
      throw new BadRequestException('You do not have access to this assessment');
    }
    if (assessment.status === 'COMPLETED') {
      return this.getResult(assessmentId, userId);
    }

    const attempts = await this.assessmentRepository.getAttempts(assessmentId, userId);
    
    const totalScore = attempts.reduce((sum, a) => sum + (a.score || 0), 0);
    const maxScore = assessment.questions.reduce((sum, q) => sum + q.points, 0);
    const correctCount = attempts.filter(a => a.isCorrect).length;
    const wrongCount = attempts.filter(a => a.isCorrect === false).length;
    const unansweredCount = assessment.totalQuestions - attempts.length;
    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    const categoryScores = this.calculateCategoryScores(assessment.questions, attempts);
    const recommendedLevel = this.determineLevel(percentage) as any;

    await this.assessmentRepository.update(assessmentId, {
      status: 'COMPLETED',
      completedAt: new Date(),
    });

    await this.assessmentRepository.createResult({
      assessment: { connect: { id: assessmentId } },
      userId,
      totalScore,
      maxScore,
      percentage,
      correctCount,
      wrongCount,
      unansweredCount,
      grammarScore: categoryScores.grammar,
      vocabularyScore: categoryScores.vocabulary,
      listeningScore: categoryScores.listening,
      readingScore: categoryScores.reading,
      recommendedLevel,
      rawLevel: recommendedLevel,
      feedback: this.generateFeedback(percentage, recommendedLevel),
    });

    return {
      assessmentId,
      userId,
      totalScore,
      maxScore,
      percentage,
      correctCount,
      wrongCount,
      unansweredCount,
      categoryScores,
      recommendedLevel,
      feedback: this.generateFeedback(percentage, recommendedLevel),
      completedAt: new Date(),
    };
  }

  async getResult(assessmentId: string, userId: string): Promise<any> {
    const result = await this.assessmentRepository.getResult(assessmentId);
    
    if (!result) {
      throw new NotFoundException('Result not found');
    }
    if (result.userId !== userId) {
      throw new BadRequestException('You do not have access to this result');
    }

    return {
      ...result,
      feedback: this.generateFeedback(result.percentage, result.recommendedLevel),
    };
  }

  async getHistory(userId: string) {
    return this.assessmentRepository.getResultsByUserId(userId);
  }

  private selectQuestions(type: string, count: number): any[] {
    let filtered = [...this.questionBank];
    
    if (type === 'GRAMMAR') {
      filtered = filtered.filter(q => q.category === 'GRAMMAR');
    } else if (type === 'VOCABULARY') {
      filtered = filtered.filter(q => q.category === 'VOCABULARY');
    }

    const shuffled = this.shuffleArray(filtered);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  private shuffleArray(array: any[]): any[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  private evaluateAnswer(question: any, answer: any): boolean {
    if (question.type === 'MULTIPLE_CHOICE' || question.type === 'TRUE_FALSE') {
      return answer === question.correctAnswer;
    } else if (question.type === 'FILL_BLANK') {
      return String(answer).toLowerCase().trim() === String(question.correctAnswer).toLowerCase().trim();
    }
    return false;
  }

  private calculateCategoryScores(questions: any[], attempts: any[]): any {
    const categories = ['GRAMMAR', 'VOCABULARY', 'LISTENING', 'READING'];
    const result = { grammar: 0, vocabulary: 0, listening: 0, reading: 0 };

    for (const category of categories) {      const catQuestions = questions.filter(q => q.category === category);
      if (catQuestions.length === 0) continue;

      const catAttempts = attempts.filter(a => 
        questions.find(q => q.id === a.questionId)?.category === category
      );

      const maxScore = catQuestions.reduce((sum, q) => sum + q.points, 0);
      const totalScore = catAttempts.reduce((sum, a) => sum + (a.score || 0), 0);
      
      const key = category.toLowerCase() as keyof typeof result;
      result[key] = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
    }

    return result;
  }

  private determineLevel(percentage: number): string {
    if (percentage >= 86) return 'ADVANCED';
    if (percentage >= 71) return 'UPPER_INTERMEDIATE';
    if (percentage >= 56) return 'INTERMEDIATE';
    if (percentage >= 31) return 'ELEMENTARY';
    return 'BEGINNER';
  }

  private generateFeedback(percentage: number, level: string): string {
    if (percentage >= 86) {      return 'Excellent! You have a very strong command of English.';
    } else if (percentage >= 71) {      return 'Great job! You have a good understanding of English.';
    } else if (percentage >= 56) {      return 'Good work! You have a solid foundation.';
    } else if (percentage >= 31) {      return 'Nice start! You have basic understanding. Keep practicing!';
    } else {      return 'Keep learning and practicing. You will improve!';
    }
  }
}
