import { Injectable } from '@nestjs/common';
import { GamificationRepository } from './gamification.repository';
import { config } from '../../config/environment.config';

@Injectable()
export class GamificationService {
  private readonly processedEvents = new Set<string>();

  constructor(private readonly repo: GamificationRepository) {}

  async getXPSummary(userId: string) {
    return this.repo.getXPSummary(userId);
  }

  async getTransactions(userId: string, limit: number = 50) {
    return this.repo.getTransactions(userId, limit);
  }

  async getStreak(userId: string) {
    return this.repo.getOrCreateStreak(userId);
  }

  async getAllBadges(userId?: string) {
    const badges = await this.repo.getAllBadges();
    const userBadges = userId ? await this.repo.getUserBadges(userId) : [];
    const userBadgeIds = new Set(userBadges.map((ub: any) => ub.badgeId));
    return badges.map((badge: any) => ({
      ...badge,
      isEarned: userBadgeIds.has(badge.id),
      earnedAt: userBadges.find((ub: any) => ub.badgeId === badge.id)?.earnedAt,
    }));
  }

  async getUserBadges(userId: string) {
    return this.repo.getUserBadges(userId);
  }

  async getUserAchievements(userId: string) {
    return this.repo.getUserAchievements(userId);
  }

  async handleLessonCompleted(event: any) {
    const { userId, lessonId, courseId, score } = event;
    const eventId = `lesson-${userId}-${lessonId}`;
    if (this.processedEvents.has(eventId)) return;

    const xp = config.gamification.xpPerLesson || 10;
    await this.addXP(userId, xp, 'LESSON_COMPLETED', lessonId, { courseId, score });
    await this.updateStreak(userId);
    await this.checkBadges(userId);
    await this.updateAchievementProgress(userId, 'lesson_completed', 1);
    this.processedEvents.add(eventId);
    this.limitProcessedEvents();
  }

  async handleGrammarExerciseCompleted(event: any) {
    const { userId, topicId, exerciseId, isCorrect } = event;
    const eventId = `grammar-${userId}-${exerciseId}`;
    if (this.processedEvents.has(eventId)) return;

    const xp = isCorrect ? (config.gamification.xpPerExercise || 5) : Math.floor((config.gamification.xpPerExercise || 5) / 2);
    await this.addXP(userId, xp, 'GRAMMAR_EXERCISE_COMPLETED', exerciseId, { topicId, isCorrect });
    await this.updateStreak(userId);
    await this.updateAchievementProgress(userId, 'grammar_exercise', 1);
    this.processedEvents.add(eventId);
    this.limitProcessedEvents();
  }

  async handleVocabularyLearned(event: any) {
    const { userId, wordId, confidence } = event;
    const eventId = `vocab-${userId}-${wordId}`;
    if (this.processedEvents.has(eventId)) return;

    const xp = config.gamification.xpPerVocabulary || 3;
    await this.addXP(userId, xp, 'VOCABULARY_LEARNED', wordId, { confidence });
    await this.updateStreak(userId);
    await this.updateAchievementProgress(userId, 'vocabulary_learned', 1);
    this.processedEvents.add(eventId);
    this.limitProcessedEvents();
  }

  async handleSpeakingPractice(event: any) {
    const { userId, practiceId, score } = event;
    const eventId = `speaking-${userId}-${practiceId}`;
    if (this.processedEvents.has(eventId)) return;

    const xp = config.gamification.xpPerSpeaking || 8;
    await this.addXP(userId, xp, 'SPEAKING_PRACTICE', practiceId, { score });
    await this.updateStreak(userId);
    this.processedEvents.add(eventId);
    this.limitProcessedEvents();
  }

  async handleAssessmentCompleted(event: any) {
    const { userId, assessmentId, score, level } = event;
    const eventId = `assessment-${userId}-${assessmentId}`;
    if (this.processedEvents.has(eventId)) return;

    const xp = config.gamification.xpPerAssessment || 20;
    await this.addXP(userId, xp, 'ASSESSMENT_COMPLETED', assessmentId, { score, level });
    await this.updateStreak(userId);
    await this.checkBadges(userId);
    this.processedEvents.add(eventId);
    this.limitProcessedEvents();
  }

  private async addXP(userId: string, xp: number, eventType: string, eventId?: string, metadata?: any) {
    const userXP = await this.repo.getOrCreateUserXP(userId);
    const newTotal = userXP.totalXp + xp;
    const newLevel = this.calculateLevel(newTotal);
    const levelProgress = this.calculateLevelProgress(newTotal);

    await this.repo.updateUserXP(userId, {
      totalXp: newTotal,
      currentLevel: newLevel,
      levelProgress,
    });
    await this.repo.createTransaction({
      user: { connect: { id: userXP.id } },
      eventType,
      eventId,
      xpEarned: xp,
      xpBalance: newTotal,
      metadata,
    });
  }

  private async updateStreak(userId: string) {
    const streak = await this.repo.getOrCreateStreak(userId);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const lastDate = new Date(streak.lastActivityDate);
    const lastDay = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
    const dayDiff = Math.floor((today.getTime() - lastDay.getTime()) / (1000 * 60 * 60 * 24));

    let currentStreak = streak.currentStreak;
    let bestStreak = streak.bestStreak;
    let streakBonusClaimed = false;

    if (dayDiff === 0) {
      if (!streak.streakBonusClaimed && currentStreak >= 7) {
        await this.addXP(userId, config.gamification.streakBonusXp || 5, 'DAILY_STREAK_BONUS', undefined, { streakDays: currentStreak });
        streakBonusClaimed = true;
      }
    } else if (dayDiff === 1) {
      currentStreak += 1;
      bestStreak = Math.max(bestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }

    await this.repo.updateStreak(userId, {
      currentStreak,
      bestStreak,
      lastActivityDate: now,
      streakBonusClaimed: dayDiff === 0 ? streak.streakBonusClaimed : false,
    });
  }

  private async checkBadges(userId: string) {
    const userXP = await this.repo.getOrCreateUserXP(userId);
    const allBadges = await this.repo.getAllBadges();
    for (const badge of allBadges) {
      if (badge.xpRequired && userXP.totalXp >= badge.xpRequired) {
        await this.repo.awardBadge(userId, badge.id, { xpAtAward: userXP.totalXp });
      }
    }
  }

  private async updateAchievementProgress(userId: string, action: string, increment: number = 1) {
    const achievements = await this.repo.getAllAchievements();
    for (const achievement of achievements) {
      const criteria = achievement.criteria as any;
      if (criteria && criteria.action === action) {
        const current = await this.repo.getUserAchievements(userId);
        const existing = current.find((a: any) => a.achievementId === achievement.id);
        const progress = Math.min(100, ((existing?.progress || 0) + (increment / criteria.count) * 100));
        await this.repo.updateAchievementProgress(userId, achievement.id, progress);
      }
    }
  }

  private calculateLevel(xp: number): number {
    if (xp < 100) return 1;
    if (xp < 250) return 2;
    if (xp < 500) return 3;
    if (xp < 1000) return 4;
    if (xp < 2000) return 5;
    return Math.floor(xp / 1000) + 5;
  }

  private calculateLevelProgress(xp: number): number {
    const level = this.calculateLevel(xp);
    const thresholds = this.getLevelThresholds(level);
    return xp - thresholds[0];
  }

  private getLevelThresholds(level: number): [number, number] {
    const thresholds = [0, 100, 250, 500, 1000, 2000];
    if (level <= 5) return [thresholds[level - 1], thresholds[level]];
    return [(level - 5) * 1000 + 2000, (level - 4) * 1000 + 2000];
  }

  private limitProcessedEvents() {
    if (this.processedEvents.size > 10000) {
      const toDelete = Array.from(this.processedEvents).slice(0, 5000);
      toDelete.forEach(id => this.processedEvents.delete(id));
    }
  }
}