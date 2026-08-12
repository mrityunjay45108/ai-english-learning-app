import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class GrammarRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findTopicById(id: string) {
    return this.prisma.grammarTopic.findUnique({
      where: { id },
      include: {
        rules: { orderBy: { orderIndex: 'asc' } },
        exercises: { orderBy: { orderIndex: 'asc' } },
      },
    });
  }

  async findAllTopics(params: { skip?: number; take?: number; where?: any }) {
    const { skip, take, where } = params;
    return this.prisma.grammarTopic.findMany({
      skip,
      take,
      where: { ...where, status: 'ACTIVE' },
      orderBy: { orderIndex: 'asc' },
      include: { _count: { select: { rules: true, exercises: true } } },
    });
  }

  async countTopics(where?: any) {
    return this.prisma.grammarTopic.count({ where: { ...where, status: 'ACTIVE' } });
  }

  async getExerciseById(id: string) {
    return this.prisma.grammarExercise.findUnique({ where: { id } });
  }

  async getProgress(userId: string, topicId: string) {
    return this.prisma.userGrammarProgress.findUnique({
      where: { userId_topicId: { userId, topicId } },
    });
  }

  async getAllProgress(userId: string, params: { skip?: number; take?: number; where?: any }) {
    const { skip, take, where } = params;
    return this.prisma.userGrammarProgress.findMany({
      skip,
      take,
      where: { ...where, userId },
      include: { topic: true },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async countProgress(userId: string, where?: any) {
    return this.prisma.userGrammarProgress.count({ where: { ...where, userId } });
  }

  async upsertProgress(userId: string, topicId: string, data: any) {
    return this.prisma.userGrammarProgress.upsert({
      where: { userId_topicId: { userId, topicId } },
      update: data,
      create: { userId, topicId, ...data },
    });
  }
}