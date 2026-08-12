import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class GamificationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreateUserXP(userId: string) {
    let xp = await this.prisma.userXP.findUnique({ where: { userId } });
    if (!xp) {
      xp = await this.prisma.userXP.create({ data: { userId } });
    }
    return xp;
  }

  async updateUserXP(userId: string, data: any) {
    return this.prisma.userXP.update({ where: { userId }, data });
  }

  async createTransaction(data: any) {
    return this.prisma.xPTransaction.create({ data });
  }

  async getTransactions(userId: string, limit: number = 50) {
    return this.prisma.xPTransaction.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    });
  }

  async getXPSummary(userId: string) {
    const xp = await this.getOrCreateUserXP(userId);
    const xpToNextLevel = this.getXpToNextLevel(xp.currentLevel);
    return {
      ...xp,
      xpToNextLevel,
      levelProgress: Math.round((xp.levelProgress / xpToNextLevel) * 100),
    };
  }

  private getXpToNextLevel(level: number): number {
    if (level <= 1) return 100;
    if (level <= 2) return 150;
    if (level <= 3) return 250;
    if (level <= 5) return 500;
    if (level <= 10) return 1000;
    return 2000;
  }

  async getOrCreateStreak(userId: string) {
    let streak = await this.prisma.userStreak.findUnique({ where: { userId } });
    if (!streak) {
      streak = await this.prisma.userStreak.create({
        data: { userId, lastActivityDate: new Date() },
      });
    }
    return streak;
  }

  async updateStreak(userId: string, data: any) {
    return this.prisma.userStreak.update({ where: { userId }, data });
  }

  async getAllBadges() {
    return this.prisma.badge.findMany({
      where: { isActive: true },
      orderBy: { category: 'asc' },
    });
  }

  async getUserBadges(userId: string) {
    return this.prisma.userBadge.findMany({
      where: { userId },
      include: { badge: true },
      orderBy: { earnedAt: 'desc' },
    });
  }

  async awardBadge(userId: string, badgeId: string, metadata?: any) {
    const existing = await this.prisma.userBadge.findUnique({
      where: { userId_badgeId: { userId, badgeId } },
    });
    if (existing) return existing;
    return this.prisma.userBadge.create({
      data: { userId, badgeId, metadata },
      include: { badge: true },
    });
  }

  async getAllAchievements() {
    return this.prisma.achievement.findMany({
      where: { isActive: true },
      orderBy: { type: 'asc' },
    });
  }

  async getUserAchievements(userId: string) {
    return this.prisma.userAchievement.findMany({
      where: { userId },
      include: { achievement: true },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async updateAchievementProgress(userId: string, achievementId: string, progress: number) {
    return this.prisma.userAchievement.upsert({
      where: { userId_achievementId: { userId, achievementId } },
      update: {
        progress,
        isCompleted: progress >= 100,
        completedAt: progress >= 100 ? new Date() : undefined,
        earnedAt: progress >= 100 ? new Date() : undefined,
      },
      create: {
        userId,
        achievementId,
        progress,
        isCompleted: progress >= 100,
        completedAt: progress >= 100 ? new Date() : undefined,
        earnedAt: progress >= 100 ? new Date() : undefined,
      },
    });
  }
}