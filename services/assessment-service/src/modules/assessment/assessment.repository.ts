import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Assessment, Prisma } from '@prisma/client-assessment';

export type AssessmentWithQuestions = Prisma.AssessmentGetPayload<{
  include: { questions: true };
}>;

@Injectable()
export class AssessmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.AssessmentCreateInput): Promise<AssessmentWithQuestions> {
    return this.prisma.assessment.create({
      data,
      include: { questions: true },
    });
  }

  async findById(id: string): Promise<AssessmentWithQuestions | null> {
    return this.prisma.assessment.findUnique({
      where: { id },
      include: { questions: true },
    });
  }

  async findByUserId(userId: string): Promise<AssessmentWithQuestions[]> {
    return this.prisma.assessment.findMany({
      where: { userId },
      include: { questions: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async addQuestions(assessmentId: string, questions: any[]): Promise<void> {
    await this.prisma.assessmentQuestion.createMany({
      data: questions.map((question, orderIndex) => ({
        assessmentId,
        questionText: question.questionText,
        options: question.options,
        correctAnswer: question.correctAnswer,
        type: question.type,
        category: question.category,
        difficulty: question.difficulty,
        points: question.points,
        orderIndex,
      })),
    });
  }

  async getAttempts(assessmentId: string, userId: string) {
    return this.prisma.assessmentAttempt.findMany({
      where: { assessmentId, userId },
      orderBy: { createdAt: 'asc' },
    });
  }

  async createAttempt(data: Prisma.AssessmentAttemptCreateInput) {
    return this.prisma.assessmentAttempt.create({ data });
  }

  async createResult(data: Prisma.AssessmentResultCreateInput) {
    return this.prisma.assessmentResult.create({ data });
  }

  async getResult(assessmentId: string) {
    return this.prisma.assessmentResult.findUnique({
      where: { assessmentId },
    });
  }

  async getResultsByUserId(userId: string) {
    return this.prisma.assessmentResult.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' },
    });
  }

  async findMany(params?: Prisma.AssessmentFindManyArgs): Promise<AssessmentWithQuestions[]> {
    return this.prisma.assessment.findMany({
      ...params,
      include: { questions: true },
    });
  }

  async update(id: string, data: Prisma.AssessmentUpdateInput): Promise<AssessmentWithQuestions> {
    return this.prisma.assessment.update({
      where: { id },
      data,
      include: { questions: true },
    });
  }
}
