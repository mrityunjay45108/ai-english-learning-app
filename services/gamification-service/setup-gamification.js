const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'gamification'),
  path.join(src, 'modules', 'events'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/gamification-service',
  version: '0.1.0',
  private: true,
  description: 'Gamification Service',
  main: 'dist/main.js',
  scripts: {
    build: 'tsc',
    dev: 'ts-node-dev src/main.ts',
    start: 'node dist/main.js'
  },
  dependencies: {
    '@nestjs/common': '^10.0.0',
    '@nestjs/core': '^10.0.0',
    '@nestjs/platform-express': '^10.0.0',
    '@nestjs/config': '^3.0.0',
    '@nestjs/jwt': '^10.0.0',
    '@nestjs/passport': '^10.0.0',
    '@prisma/client': '^5.22.0',
    'class-validator': '^0.14.0',
    'class-transformer': '^0.5.1',
    'reflect-metadata': '^0.1.13',
    'rxjs': '^7.8.0',
    'dotenv': '^16.0.0',
    'kafkajs': '^2.2.4',
    'ioredis': '^6.0.0'
  },
  devDependencies: {
    '@types/node': '^20.0.0',
    'typescript': '5.3.3',
    'ts-node-dev': '^2.0.0',
    'prisma': '^5.22.0'
  }
}, null, 2));

// 2. tsconfig.json
fs.writeFileSync(path.join(root, 'tsconfig.json'), JSON.stringify({
  compilerOptions: {
    module: "commonjs",
    declaration: true,
    removeComments: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    allowSyntheticDefaultImports: true,
    target: "ES2021",
    sourceMap: true,
    outDir: "./dist",
    baseUrl: "./",
    incremental: true,
    skipLibCheck: true
  }
}, null, 2));

// 3. .env
fs.writeFileSync(path.join(root, '.env'), 
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/gamification_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="gamification-service"
KAFKA_GROUP_ID="gamification-service-group"
PORT=3009
NODE_ENV=development
LOG_LEVEL=debug
XP_PER_LESSON=10
XP_PER_EXERCISE=5
XP_PER_VOCABULARY=3
XP_PER_SPEAKING=8
XP_PER_ASSESSMENT=20
STREAK_BONUS_XP=5`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3009', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/gamification_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  kafka: {
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
    clientId: process.env.KAFKA_CLIENT_ID || 'gamification-service',
    groupId: process.env.KAFKA_GROUP_ID || 'gamification-service-group',
  },
  gamification: {
    xpPerLesson: parseInt(process.env.XP_PER_LESSON || '10', 10),
    xpPerExercise: parseInt(process.env.XP_PER_EXERCISE || '5', 10),
    xpPerVocabulary: parseInt(process.env.XP_PER_VOCABULARY || '3', 10),
    xpPerSpeaking: parseInt(process.env.XP_PER_SPEAKING || '8', 10),
    xpPerAssessment: parseInt(process.env.XP_PER_ASSESSMENT || '20', 10),
    streakBonusXp: parseInt(process.env.STREAK_BONUS_XP || '5', 10),
  },
};`);

// 5. response.dto.ts
fs.writeFileSync(path.join(src, 'common', 'dto', 'response.dto.ts'),
`export class ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  constructor(partial: Partial<ApiResponse<T>>) {
    this.success = partial.success ?? true;
    this.data = partial.data;
    this.error = partial.error;
    this.message = partial.message;
    this.timestamp = new Date().toISOString();
    this.pagination = partial.pagination;
  }
  static success<T>(data: T, message?: string, pagination?: any): ApiResponse<T> {
    return new ApiResponse<T>({ success: true, data, message, pagination });
  }
  static error(error: string, message?: string): ApiResponse<null> {
    return new ApiResponse<null>({ success: false, error, message });
  }
}`);

// 6. gamification.dto.ts
fs.writeFileSync(path.join(src, 'common', 'dto', 'gamification.dto.ts'),
`export class XPResponseDto {
  userId: string;
  totalXp: number;
  currentLevel: number;
  levelProgress: number;
  xpToNextLevel: number;
}

export class StreakResponseDto {
  userId: string;
  currentStreak: number;
  bestStreak: number;
  lastActivityDate: Date;
}`);

// 7. Prisma Service
fs.writeFileSync(path.join(src, 'database', 'prisma.service.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}`);

// 8. Gamification Repository
fs.writeFileSync(path.join(src, 'modules', 'gamification', 'gamification.repository.ts'),
`import { Injectable } from '@nestjs/common';
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
}`);

// 9. Gamification Service
fs.writeFileSync(path.join(src, 'modules', 'gamification', 'gamification.service.ts'),
`import { Injectable } from '@nestjs/common';
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
    const eventId = \`lesson-\${userId}-\${lessonId}\`;
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
    const eventId = \`grammar-\${userId}-\${exerciseId}\`;
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
    const eventId = \`vocab-\${userId}-\${wordId}\`;
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
    const eventId = \`speaking-\${userId}-\${practiceId}\`;
    if (this.processedEvents.has(eventId)) return;

    const xp = config.gamification.xpPerSpeaking || 8;
    await this.addXP(userId, xp, 'SPEAKING_PRACTICE', practiceId, { score });
    await this.updateStreak(userId);
    this.processedEvents.add(eventId);
    this.limitProcessedEvents();
  }

  async handleAssessmentCompleted(event: any) {
    const { userId, assessmentId, score, level } = event;
    const eventId = \`assessment-\${userId}-\${assessmentId}\`;
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
}`);

// 10. Gamification Controller
fs.writeFileSync(path.join(src, 'modules', 'gamification', 'gamification.controller.ts'),
`import { Controller, Get, Query, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { GamificationService } from './gamification.service';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('gamification')
@UseGuards(JwtAuthGuard)
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) {}

  @Get('xp')
  async getXP(@Request() req: any) {
    const result = await this.gamificationService.getXPSummary(req.user.id);
    return ApiResponse.success(result, 'XP summary retrieved successfully');
  }

  @Get('xp/transactions')
  async getTransactions(@Request() req: any, @Query('limit') limit?: string) {
    const result = await this.gamificationService.getTransactions(req.user.id, limit ? parseInt(limit, 10) : 50);
    return ApiResponse.success(result, 'Transactions retrieved successfully');
  }

  @Get('streak')
  async getStreak(@Request() req: any) {
    const result = await this.gamificationService.getStreak(req.user.id);
    return ApiResponse.success(result, 'Streak retrieved successfully');
  }

  @Get('badges')
  async getBadges(@Request() req: any) {
    const result = await this.gamificationService.getAllBadges(req.user.id);
    return ApiResponse.success(result, 'Badges retrieved successfully');
  }

  @Get('badges/user')
  async getUserBadges(@Request() req: any) {
    const result = await this.gamificationService.getUserBadges(req.user.id);
    return ApiResponse.success(result, 'User badges retrieved successfully');
  }

  @Get('achievements')
  async getAchievements(@Request() req: any) {
    const result = await this.gamificationService.getUserAchievements(req.user.id);
    return ApiResponse.success(result, 'Achievements retrieved successfully');
  }
}`);

// 11. Kafka Consumer Service
fs.writeFileSync(path.join(src, 'modules', 'events', 'kafka.consumer.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { GamificationService } from '../gamification/gamification.service';
import { config } from '../../config/environment.config';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private readonly gamificationService: GamificationService) {
    this.kafka = new Kafka({
      clientId: config.kafka.clientId,
      brokers: config.kafka.brokers,
      retry: { initialRetryTime: 300, retries: 10 },
    });
    this.consumer = this.kafka.consumer({ groupId: config.kafka.groupId });
  }

  async onModuleInit() {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({
        topics: ['lesson-events', 'grammar-events', 'vocabulary-events', 'speaking-events', 'assessment-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, message }) => {
          try {
            const value = JSON.parse(message.value.toString());
            console.log(\`📨 Received event: \${topic}\`, value);
            await this.handleEvent(topic, value);
          } catch (error) {
            console.error('❌ Error processing event:', error);
          }
        },
      });
      console.log('✅ Kafka Consumer started for Gamification Service');
    } catch (err) {
      console.warn('⚠️ Kafka connection deferred (brokers offline):', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.consumer.disconnect(); } catch (e) {}
  }

  private async handleEvent(topic: string, event: any) {
    switch (topic) {
      case 'lesson-events':
        if (event.event === 'lesson.completed') await this.gamificationService.handleLessonCompleted(event);
        break;
      case 'grammar-events':
        if (event.event === 'grammar.exercise.completed') await this.gamificationService.handleGrammarExerciseCompleted(event);
        break;
      case 'vocabulary-events':
        if (event.event === 'vocabulary.learned') await this.gamificationService.handleVocabularyLearned(event);
        break;
      case 'speaking-events':
        if (event.event === 'speaking.practice') await this.gamificationService.handleSpeakingPractice(event);
        break;
      case 'assessment-events':
        if (event.event === 'assessment.completed') await this.gamificationService.handleAssessmentCompleted(event);
        break;
    }
  }
}`);

// 12. Health Controller
fs.writeFileSync(path.join(src, 'modules', 'health', 'health.controller.ts'),
`import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async health() {
    let database = false;
    try {
      await this.prisma.$queryRaw\`SELECT 1\`;
      database = true;
    } catch (error) {
      database = false;
    }
    return {
      status: database ? 'healthy' : 'unhealthy',
      service: 'gamification-service',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 13. App Module
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { GamificationController } from './modules/gamification/gamification.controller';
import { GamificationService } from './modules/gamification/gamification.service';
import { GamificationRepository } from './modules/gamification/gamification.repository';
import { KafkaConsumerService } from './modules/events/kafka.consumer';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, GamificationController],
  providers: [
    PrismaService,
    GamificationService,
    GamificationRepository,
    KafkaConsumerService,
  ],
})
export class AppModule {}`);

// 14. Main.ts
fs.writeFileSync(path.join(src, 'main.ts'),
`import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', credentials: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.setGlobalPrefix('api/v1');
  const port = process.env.PORT || 3009;
  await app.listen(port);
  console.log('🏆 Gamification Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('🎮 Gamification: http://localhost:' + port + '/api/v1/gamification');
}
bootstrap().catch((error) => {
  console.error('Failed to start Gamification Service:', error);
  process.exit(1);
});`);

// 15. Prisma Schema
fs.writeFileSync(path.join(root, 'prisma', 'schema.prisma'),
`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum EventType {
  LESSON_COMPLETED
  GRAMMAR_EXERCISE_COMPLETED
  VOCABULARY_LEARNED
  SPEAKING_PRACTICE
  ASSESSMENT_COMPLETED
  DAILY_STREAK_BONUS
  COURSE_COMPLETED
}

enum AchievementType {
  XP_BASED
  STREAK_BASED
  ACTION_BASED
}

enum BadgeCategory {
  LEARNING
  STREAK
  ASSESSMENT
  SPEAKING
  VOCABULARY
  GRAMMAR
  SPECIAL
}

model UserXP {
  id            String   @id @default(uuid())
  userId        String   @unique @map("user_id")
  totalXp       Int      @default(0) @map("total_xp")
  currentLevel  Int      @default(1) @map("current_level")
  levelProgress Int      @default(0) @map("level_progress")
  updatedAt     DateTime @updatedAt @map("updated_at")
  transactions  XPTransaction[]

  @@map("user_xp")
  @@index([userId])
  @@index([currentLevel])
}

model XPTransaction {
  id        String    @id @default(uuid())
  userId    String    @map("user_id")
  eventType EventType @map("event_type")
  eventId   String?   @map("event_id")
  xpEarned  Int       @map("xp_earned")
  xpBalance Int       @map("xp_balance")
  metadata  Json?
  timestamp DateTime  @default(now())
  createdAt DateTime  @default(now()) @map("created_at")
  user      UserXP    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("xp_transactions")
  @@index([userId])
  @@index([eventType])
  @@index([timestamp])
  @@index([userId, timestamp])
}

model UserStreak {
  id                 String   @id @default(uuid())
  userId             String   @unique @map("user_id")
  currentStreak      Int      @default(0) @map("current_streak")
  bestStreak         Int      @default(0) @map("best_streak")
  lastActivityDate   DateTime @map("last_activity_date")
  streakBonusClaimed Boolean  @default(false) @map("streak_bonus_claimed")
  updatedAt          DateTime @updatedAt @map("updated_at")

  @@map("user_streak")
  @@index([userId])
  @@index([currentStreak])
}

model Badge {
  id          String        @id @default(uuid())
  name        String        @unique
  description String
  icon        String
  category    BadgeCategory
  xpRequired  Int?          @map("xp_required")
  criteria    Json?
  isActive    Boolean       @default(true) @map("is_active")
  createdAt   DateTime      @default(now()) @map("created_at")
  updatedAt   DateTime      @updatedAt @map("updated_at")
  userBadges  UserBadge[]

  @@map("badges")
  @@index([category])
  @@index([isActive])
}

model UserBadge {
  id          String   @id @default(uuid())
  userId      String   @map("user_id")
  badgeId     String   @map("badge_id")
  earnedAt    DateTime @default(now()) @map("earned_at")
  metadata    Json?
  isDisplayed Boolean  @default(true) @map("is_displayed")
  badge       Badge    @relation(fields: [badgeId], references: [id], onDelete: Cascade)

  @@map("user_badges")
  @@index([userId])
  @@index([badgeId])
  @@index([earnedAt])
  @@unique([userId, badgeId])
}

model Achievement {
  id               String          @id @default(uuid())
  name             String          @unique
  description      String
  type             AchievementType
  criteria         Json
  rewardXp         Int             @default(0) @map("reward_xp")
  isActive         Boolean         @default(true) @map("is_active")
  createdAt        DateTime        @default(now()) @map("created_at")
  updatedAt        DateTime        @updatedAt @map("updated_at")
  userAchievements UserAchievement[]

  @@map("achievements")
  @@index([type])
  @@index([isActive])
}

model UserAchievement {
  id            String      @id @default(uuid())
  userId        String      @map("user_id")
  achievementId String      @map("achievement_id")
  progress      Int         @default(0)
  isCompleted   Boolean     @default(false) @map("is_completed")
  completedAt   DateTime?   @map("completed_at")
  earnedAt      DateTime?   @map("earned_at")
  createdAt     DateTime    @default(now()) @map("created_at")
  updatedAt     DateTime    @updatedAt @map("updated_at")
  achievement   Achievement @relation(fields: [achievementId], references: [id], onDelete: Cascade)

  @@map("user_achievements")
  @@index([userId])
  @@index([achievementId])
  @@index([isCompleted])
  @@unique([userId, achievementId])
}`);

// 16. Prisma Seed
fs.writeFileSync(path.join(root, 'prisma', 'seed.js'),
`const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding gamification data...');
  const badges = [
    { name: 'First Lesson', description: 'Complete your first lesson', icon: '🌟', category: 'LEARNING', xpRequired: 10 },
    { name: 'Lesson Master', description: 'Complete 10 lessons', icon: '📚', category: 'LEARNING', xpRequired: 100 },
    { name: 'Vocabulary Star', description: 'Learn 50 words', icon: '📝', category: 'VOCABULARY', xpRequired: 150 },
    { name: 'Grammar Guru', description: 'Complete 20 grammar exercises', icon: '✍️', category: 'GRAMMAR', xpRequired: 100 },
    { name: 'Speaking Star', description: 'Complete 10 speaking practices', icon: '🎤', category: 'SPEAKING', xpRequired: 80 },
    { name: 'Assessment Ace', description: 'Score 90%+ on an assessment', icon: '🏅', category: 'ASSESSMENT', xpRequired: 200 },
    { name: 'Streak Warrior', description: 'Maintain a 7-day streak', icon: '🔥', category: 'STREAK', xpRequired: 70 },
    { name: 'Streak Legend', description: 'Maintain a 30-day streak', icon: '⚡', category: 'STREAK', xpRequired: 300 }
  ];

  for (const badgeData of badges) {
    const existing = await prisma.badge.findUnique({ where: { name: badgeData.name } });
    if (!existing) {
      await prisma.badge.create({ data: badgeData });
      console.log('✅ Added badge: ' + badgeData.name);
    } else {
      console.log('ℹ️ Badge already exists: ' + badgeData.name);
    }
  }

  const achievements = [
    { name: 'First Steps', description: 'Complete your first lesson', type: 'ACTION_BASED', criteria: { action: 'lesson_completed', count: 1 }, rewardXp: 10 },
    { name: 'Dedicated Learner', description: 'Complete 50 lessons', type: 'ACTION_BASED', criteria: { action: 'lesson_completed', count: 50 }, rewardXp: 50 },
    { name: 'Vocabulary Builder', description: 'Learn 100 words', type: 'ACTION_BASED', criteria: { action: 'vocabulary_learned', count: 100 }, rewardXp: 30 },
    { name: 'Grammar Master', description: 'Complete 100 grammar exercises', type: 'ACTION_BASED', criteria: { action: 'grammar_exercise', count: 100 }, rewardXp: 40 }
  ];

  for (const achievementData of achievements) {
    const existing = await prisma.achievement.findUnique({ where: { name: achievementData.name } });
    if (!existing) {
      await prisma.achievement.create({ data: achievementData });
      console.log('✅ Added achievement: ' + achievementData.name);
    } else {
      console.log('ℹ️ Achievement already exists: ' + achievementData.name);
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());`);

console.log('✅ setup-gamification.js written successfully.');
