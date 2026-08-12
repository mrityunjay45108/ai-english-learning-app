import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RecommendationType } from '../../common/dto/recommendation.dto';

@Injectable()
export class RecommendationEngine {
  constructor(private readonly prisma: PrismaService) {}

  async generateRecommendations(userId: string, limit: number = 10): Promise<any[]> {
    const signal = await this.getOrCreateUserSignal(userId);
    const recommendations = [];

    recommendations.push(...(await this.recommendLessons(signal)));
    recommendations.push(...(await this.recommendGrammar(signal)));
    recommendations.push(...(await this.recommendVocabulary(signal)));
    recommendations.push(...(await this.recommendSpeaking(signal)));

    const scored = this.scoreRecommendations(recommendations, signal);
    const sorted = scored.sort((a, b) => b.score - a.score);

    return this.storeRecommendations(userId, sorted.slice(0, limit));
  }

  private async recommendLessons(signal: any): Promise<any[]> {
    return [{
      type: RecommendationType.LESSON,
      targetId: 'lesson-next-01',
      targetTitle: 'Present Continuous Mastery',
      targetMetadata: { difficulty: signal.englishLevel },
      reason: 'Continue your main learning path',
    }];
  }

  private async recommendGrammar(signal: any): Promise<any[]> {
    return [{
      type: RecommendationType.GRAMMAR_TOPIC,
      targetId: 'grammar-topic-tenses',
      targetTitle: 'Grammar Basics - Tenses',
      targetMetadata: { difficulty: 'BEGINNER' },
      reason: 'Strengthen weak grammar concepts',
    }];
  }

  private async recommendVocabulary(signal: any): Promise<any[]> {
    return [{
      type: RecommendationType.VOCABULARY_WORD,
      targetId: 'vocab-daily-01',
      targetTitle: 'Daily Life Vocabulary Pack',
      targetMetadata: { count: 10 },
      reason: 'Expand active vocabulary',
    }];
  }

  private async recommendSpeaking(signal: any): Promise<any[]> {
    return [{
      type: RecommendationType.SPEAKING_PRACTICE,
      targetId: 'speaking-intro-01',
      targetTitle: 'Self Introduction Speaking Room',
      targetMetadata: { difficulty: signal.englishLevel },
      reason: 'Boost fluency and confidence',
    }];
  }

  private async getOrCreateUserSignal(userId: string) {
    let signal = await this.prisma.userLearningSignal.findUnique({ where: { userId } });
    if (!signal) {
      signal = await this.prisma.userLearningSignal.create({ data: { userId } });
    }
    return signal;
  }

  private scoreRecommendations(recommendations: any[], signal: any): any[] {
    return recommendations.map(rec => {
      let score = 70 + Math.random() * 20;
      return { ...rec, score: Math.min(Math.round(score), 100) };
    });
  }

  private async storeRecommendations(userId: string, recommendations: any[]): Promise<any[]> {
    await this.prisma.recommendation.updateMany({
      where: { userId, status: 'ACTIVE' },
      data: { status: 'EXPIRED' },
    });

    const stored = [];
    for (const rec of recommendations) {
      const item = await this.prisma.recommendation.create({
        data: {
          userId,
          type: rec.type,
          targetId: rec.targetId,
          targetTitle: rec.targetTitle,
          targetMetadata: rec.targetMetadata,
          score: rec.score,
          reason: rec.reason,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
      stored.push(item);
    }
    return stored;
  }
}