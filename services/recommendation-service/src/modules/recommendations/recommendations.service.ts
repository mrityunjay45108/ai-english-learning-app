import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { RecommendationEngine } from '../engine/recommendation-engine.service';
import { RecommendationQueryDto, RecommendationFeedbackDto } from '../../common/dto/recommendation.dto';

@Injectable()
export class RecommendationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly engine: RecommendationEngine,
  ) {}

  async getRecommendations(userId: string, query: RecommendationQueryDto) {
    const { page = 1, limit = 20, type, status = 'ACTIVE' } = query;
    const cacheKey = `recommendations:${userId}:${type || 'all'}:${status}`;
    const cached = await this.redis.getJson(cacheKey);
    if (cached) return cached;

    const where: any = { userId, status };
    if (type) where.type = type;
    const skip = (page - 1) * limit;

    let [data, total] = await Promise.all([
      this.prisma.recommendation.findMany({ where, orderBy: { score: 'desc' }, skip, take: limit }),
      this.prisma.recommendation.count({ where }),
    ]);

    if (total === 0) {
      await this.engine.generateRecommendations(userId);
      data = await this.prisma.recommendation.findMany({ where, orderBy: { score: 'desc' }, skip, take: limit });
      total = data.length;
    }

    const result = {
      data,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };

    await this.redis.setJson(cacheKey, result, 3600);
    return result;
  }

  async submitFeedback(userId: string, dto: RecommendationFeedbackDto) {
    const recommendation = await this.prisma.recommendation.findUnique({
      where: { id: dto.recommendationId },
    });
    if (!recommendation) throw new NotFoundException('Recommendation not found');

    const feedback = await this.prisma.recommendationFeedback.create({
      data: {
        recommendationId: dto.recommendationId,
        userId,
        action: dto.action,
        timeSpent: dto.timeSpent,
        rating: dto.rating,
        feedbackText: dto.feedbackText,
      },
    });

    let status = recommendation.status;
    if (dto.action === 'completed') status = 'COMPLETED';
    else if (dto.action === 'dismissed') status = 'DISMISSED';

    await this.prisma.recommendation.update({
      where: { id: dto.recommendationId },
      data: { status, feedbackReceived: true },
    });

    return feedback;
  }

  async updateUserSignal(userId: string, data: any) {
    const signal = await this.prisma.userLearningSignal.findUnique({ where: { userId } });
    if (!signal) return this.prisma.userLearningSignal.create({ data: { userId, ...data } });
    return this.prisma.userLearningSignal.update({ where: { userId }, data });
  }

  async getUserSignal(userId: string) {
    let signal = await this.prisma.userLearningSignal.findUnique({ where: { userId } });
    if (!signal) signal = await this.prisma.userLearningSignal.create({ data: { userId } });
    return signal;
  }
}