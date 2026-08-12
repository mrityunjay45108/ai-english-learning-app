import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { AnalyticsQueryDto } from '../../common/dto/analytics.dto';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getOverview() {
    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const [todayStats, monthStats, users] = await Promise.all([
      this.getTodayStats(),
      this.getMonthStats(thirtyDaysAgo, today),
      this.getUserStats(),
    ]);

    return { today: todayStats, last30Days: monthStats, users };
  }

  private async getTodayStats() {
    const today = new Date();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const todayEnd = new Date(todayStart);
    todayEnd.setDate(todayEnd.getDate() + 1);

    const [events, lessons, speaking] = await Promise.all([
      this.prisma.rawEvent.count({ where: { occurredAt: { gte: todayStart, lt: todayEnd } } }),
      this.prisma.rawEvent.count({ where: { eventType: 'lesson.completed', occurredAt: { gte: todayStart, lt: todayEnd } } }),
      this.prisma.rawEvent.count({ where: { eventType: 'speaking.practice', occurredAt: { gte: todayStart, lt: todayEnd } } }),
    ]);

    const uniqueUsers = await this.prisma.rawEvent.groupBy({
      by: ['userId'],
      where: { userId: { not: null }, occurredAt: { gte: todayStart, lt: todayEnd } },
    });

    return {
      events,
      lessonsCompleted: lessons,
      speakingSessions: speaking,
      activeUsers: uniqueUsers.length,
      date: todayStart.toISOString().split('T')[0],
    };
  }

  private async getMonthStats(startDate: Date, endDate: Date) {
    const [events, lessons, newUsers] = await Promise.all([
      this.prisma.rawEvent.count({ where: { occurredAt: { gte: startDate, lt: endDate } } }),
      this.prisma.rawEvent.count({ where: { eventType: 'lesson.completed', occurredAt: { gte: startDate, lt: endDate } } }),
      this.prisma.rawEvent.groupBy({ by: ['userId'], where: { eventType: 'user.registered', occurredAt: { gte: startDate, lt: endDate } } }),
    ]);

    const dailyUsers = await this.prisma.rawEvent.groupBy({
      by: ['userId'],
      where: { userId: { not: null }, occurredAt: { gte: startDate, lt: endDate } },
    });

    return {
      events,
      lessonsCompleted: lessons,
      newUsers: newUsers.length,
      activeUsers: dailyUsers.length,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
    };
  }

  private async getUserStats() {
    const [totalUsers, activeUsers, premiumUsers] = await Promise.all([
      this.prisma.rawEvent.groupBy({ by: ['userId'], where: { userId: { not: null } } }),
      this.prisma.rawEvent.groupBy({
        by: ['userId'],
        where: { userId: { not: null }, occurredAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } },
      }),
      this.prisma.rawEvent.groupBy({
        by: ['userId'],
        where: { eventType: 'subscription.activated', userId: { not: null } },
      }),
    ]);

    return {
      totalUsers: totalUsers.length,
      activeUsers30Days: activeUsers.length,
      premiumUsers: premiumUsers.length,
    };
  }

  async getEngagement(query: AnalyticsQueryDto) {
    const { startDate, endDate, period = 'daily' } = query;
    const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const end = endDate ? new Date(endDate) : new Date();

    const aggregations = await this.prisma.dailyAggregation.findMany({
      where: { date: { gte: start, lte: end } },
      orderBy: { date: 'asc' },
    });

    return { period, startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0], data: aggregations };
  }

  async getCourseAnalytics() {
    const lessons = await this.prisma.rawEvent.findMany({
      where: { eventType: 'lesson.completed' },
      select: { payload: true, occurredAt: true, userId: true },
      orderBy: { occurredAt: 'desc' },
      take: 1000,
    });

    const lessonMap = new Map();
    lessons.forEach((l: any) => {
      const lessonId = l.payload?.lessonId || 'unknown';
      if (!lessonMap.has(lessonId)) lessonMap.set(lessonId, { count: 0, scores: [] });
      const data = lessonMap.get(lessonId);
      data.count += 1;
      if (l.payload?.score) data.scores.push(l.payload.score);
    });

    const result = [];
    for (const [lessonId, data] of lessonMap) {
      const avgScore = data.scores.length > 0 ? data.scores.reduce((a: number, b: number) => a + b, 0) / data.scores.length : 0;
      result.push({ lessonId, completions: data.count, avgScore: Math.round(avgScore * 100) / 100 });
    }

    return result.sort((a, b) => b.completions - a.completions).slice(0, 20);
  }

  async getAIUsage() {
    const aiEvents = await this.prisma.rawEvent.findMany({
      where: { eventType: 'ai.message.generated' },
      select: { payload: true, occurredAt: true, userId: true },
      orderBy: { occurredAt: 'desc' },
      take: 1000,
    });

    const totalMessages = aiEvents.length;
    const avgLatency = aiEvents.reduce((sum, e: any) => sum + (e.payload?.latency || 0), 0) / (totalMessages || 1);
    const uniqueUsers = new Set(aiEvents.map(e => e.userId)).size;

    return { totalMessages, uniqueUsers, avgLatency: Math.round(avgLatency), sample: aiEvents.slice(0, 10) };
  }

  async getSubscriptionAnalytics() {
    const registrations = await this.prisma.rawEvent.findMany({
      where: { eventType: 'user.registered' },
      select: { userId: true },
    });
    const subscriptions = await this.prisma.rawEvent.findMany({
      where: { eventType: 'subscription.activated' },
      select: { userId: true },
    });

    const totalUsers = new Set(registrations.map(r => r.userId)).size;
    const convertedUsers = new Set(subscriptions.map(s => s.userId)).size;
    const conversionRate = totalUsers > 0 ? (convertedUsers / totalUsers) * 100 : 0;

    return {
      totalUsers,
      convertedUsers,
      conversionRate: Math.round(conversionRate * 100) / 100,
      registrations: registrations.length,
      subscriptions: subscriptions.length,
    };
  }

  async storeRawEvent(event: any) {
    return this.prisma.rawEvent.create({
      data: {
        eventId: event.eventId || `evt_${Date.now()}`,
        eventType: event.eventType,
        eventVersion: event.eventVersion || '1.0',
        occurredAt: event.occurredAt ? new Date(event.occurredAt) : new Date(),
        producer: event.producer || 'unknown',
        userId: event.userId,
        requestId: event.requestId,
        correlationId: event.correlationId,
        payload: event.payload || {},
        kafkaTopic: event.kafkaTopic,
        kafkaPartition: event.kafkaPartition,
        kafkaOffset: String(event.kafkaOffset || '0'),
      },
    });
  }
}