const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'progress'),
  path.join(src, 'modules', 'events'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/progress-service',
  version: '0.1.0',
  private: true,
  description: 'User Progress Tracking Service',
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
    'kafkajs': '^2.2.4'
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
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/progress_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="progress-service"
KAFKA_GROUP_ID="progress-service-group"
PORT=3008
NODE_ENV=development
LOG_LEVEL=debug`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3008', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/progress_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  kafka: {
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
    clientId: process.env.KAFKA_CLIENT_ID || 'progress-service',
    groupId: process.env.KAFKA_GROUP_ID || 'progress-service-group',
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

// 6. progress.dto.ts
fs.writeFileSync(path.join(src, 'common', 'dto', 'progress.dto.ts'),
`import { IsOptional, IsEnum } from 'class-validator';

export enum ProgressStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export class CourseProgressQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(ProgressStatus) status?: ProgressStatus;
}

export class LessonProgressQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(ProgressStatus) status?: ProgressStatus;
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

// 8. Progress Repository
fs.writeFileSync(path.join(src, 'modules', 'progress', 'progress.repository.ts'),
`import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ProgressRepository {
  constructor(public readonly prisma: PrismaService) {}

  async getOrCreateUserStats(userId: string) {
    let stats = await this.prisma.userStats.findUnique({ where: { userId } });
    if (!stats) {
      stats = await this.prisma.userStats.create({
        data: { userId, lastActive: new Date() },
      });
    }
    return stats;
  }

  async updateUserStats(userId: string, data: any) {
    return this.prisma.userStats.update({ where: { userId }, data });
  }

  async getCourseProgress(userId: string, courseId: string) {
    return this.prisma.courseProgress.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });
  }

  async getAllCourseProgress(userId: string, params: { skip?: number; take?: number; where?: any }) {
    const { skip, take, where } = params;
    return this.prisma.courseProgress.findMany({
      skip,
      take,
      where: { ...where, userId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async countCourseProgress(userId: string, where?: any) {
    return this.prisma.courseProgress.count({ where: { ...where, userId } });
  }

  async upsertCourseProgress(userId: string, courseId: string, data: any) {
    return this.prisma.courseProgress.upsert({
      where: { userId_courseId: { userId, courseId } },
      update: data,
      create: { userId, courseId, ...data },
    });
  }

  async getLessonProgress(userId: string, lessonId: string) {
    return this.prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    });
  }

  async upsertLessonProgress(userId: string, lessonId: string, courseId: string, data: any) {
    return this.prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: data,
      create: { userId, lessonId, courseId, ...data },
    });
  }

  async createActivity(data: any) {
    return this.prisma.learningActivity.create({ data });
  }

  async getActivities(userId: string, params: { skip?: number; take?: number; where?: any }) {
    const { skip, take, where } = params;
    return this.prisma.learningActivity.findMany({
      skip,
      take,
      where: { ...where, userId },
      orderBy: { timestamp: 'desc' },
    });
  }

  async getSummary(userId: string) {
    const stats = await this.getOrCreateUserStats(userId);
    const [courseCount, lessonCount] = await Promise.all([
      this.prisma.courseProgress.count({ where: { userId, status: 'COMPLETED' } }),
      this.prisma.lessonProgress.count({ where: { userId, status: 'COMPLETED' } }),
    ]);
    return { ...stats, coursesCompleted: courseCount, lessonsCompleted: lessonCount };
  }
}`);

// 9. Progress Service
fs.writeFileSync(path.join(src, 'modules', 'progress', 'progress.service.ts'),
`import { Injectable } from '@nestjs/common';
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
}`);

// 10. Progress Controller
fs.writeFileSync(path.join(src, 'modules', 'progress', 'progress.controller.ts'),
`import { Controller, Get, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CourseProgressQueryDto } from '../../common/dto/progress.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('progress')
@UseGuards(JwtAuthGuard)
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get('summary')
  async getSummary(@Request() req: any) {
    const result = await this.progressService.getSummary(req.user.id);
    return ApiResponse.success(result, 'Progress summary retrieved successfully');
  }

  @Get('courses')
  async getCourseProgress(@Request() req: any, @Query() query: CourseProgressQueryDto) {
    const result = await this.progressService.getAllCourseProgress(req.user.id, query);
    return ApiResponse.success(result.data, 'Course progress retrieved successfully', result.pagination);
  }

  @Get('courses/:courseId')
  async getSpecificCourseProgress(@Request() req: any, @Param('courseId', ParseUUIDPipe) courseId: string) {
    const result = await this.progressService.getCourseProgress(req.user.id, courseId);
    return ApiResponse.success(result, 'Course progress retrieved successfully');
  }

  @Get('lessons/:lessonId')
  async getLessonProgress(@Request() req: any, @Param('lessonId', ParseUUIDPipe) lessonId: string) {
    const result = await this.progressService.getLessonProgress(req.user.id, lessonId);
    return ApiResponse.success(result, 'Lesson progress retrieved successfully');
  }

  @Get('activities')
  async getActivities(@Request() req: any, @Query('limit') limit?: string) {
    const result = await this.progressService.getActivities(
      req.user.id,
      limit ? parseInt(limit, 10) : 50,
    );
    return ApiResponse.success(result, 'Activities retrieved successfully');
  }
}`);

// 11. Kafka Consumer Service
fs.writeFileSync(path.join(src, 'modules', 'events', 'kafka.consumer.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { ProgressService } from '../progress/progress.service';
import { config } from '../../config/environment.config';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;
  private readonly processedEvents = new Set<string>();

  constructor(private readonly progressService: ProgressService) {
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
        topics: ['lesson-events', 'grammar-events', 'vocabulary-events', 'assessment-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, message }) => {
          try {
            const eventId = message.headers?.['event-id']?.toString() || \`\${topic}-\${message.offset}\`;
            if (this.processedEvents.has(eventId)) return;

            const value = JSON.parse(message.value.toString());
            console.log(\`📨 Received event: \${topic}\`, value);
            await this.handleEvent(topic, value);
            this.processedEvents.add(eventId);

            if (this.processedEvents.size > 10000) {
              const toDelete = Array.from(this.processedEvents).slice(0, 5000);
              toDelete.forEach(id => this.processedEvents.delete(id));
            }
          } catch (error) {
            console.error('❌ Error processing event:', error);
          }
        },
      });
      console.log('✅ Kafka Consumer started for Progress Service');
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
        if (event.event === 'lesson.completed') await this.progressService.handleLessonCompleted(event);
        break;
      case 'grammar-events':
        if (event.event === 'grammar.exercise.completed') await this.progressService.handleGrammarExerciseCompleted(event);
        break;
      case 'vocabulary-events':
        if (event.event === 'vocabulary.learned') await this.progressService.handleVocabularyLearned(event);
        break;
      case 'assessment-events':
        if (event.event === 'assessment.completed') await this.progressService.handleAssessmentCompleted(event);
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
      service: 'progress-service',
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
import { ProgressController } from './modules/progress/progress.controller';
import { ProgressService } from './modules/progress/progress.service';
import { ProgressRepository } from './modules/progress/progress.repository';
import { KafkaConsumerService } from './modules/events/kafka.consumer';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, ProgressController],
  providers: [
    PrismaService,
    ProgressService,
    ProgressRepository,
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
  const port = process.env.PORT || 3008;
  await app.listen(port);
  console.log('📊 Progress Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('📈 Progress: http://localhost:' + port + '/api/v1/progress');
}
bootstrap().catch((error) => {
  console.error('Failed to start Progress Service:', error);
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

enum ProgressStatus {
  NOT_STARTED
  IN_PROGRESS
  COMPLETED
}

enum ActivityType {
  LESSON_STARTED
  LESSON_COMPLETED
  CONTENT_VIEWED
  EXERCISE_COMPLETED
  GRAMMAR_EXERCISE_COMPLETED
  VOCABULARY_LEARNED
  ASSESSMENT_COMPLETED
  SPEAKING_PRACTICE
  COURSE_STARTED
  COURSE_COMPLETED
  DAILY_STREAK
}

model UserStats {
  id               String   @id @default(uuid())
  userId           String   @unique @map("user_id")
  totalXp          Int      @default(0) @map("total_xp")
  level            Int      @default(1)
  streakDays       Int      @default(0) @map("streak_days")
  bestStreak       Int      @default(0) @map("best_streak")
  coursesCompleted Int      @default(0) @map("courses_completed")
  lessonsCompleted Int      @default(0) @map("lessons_completed")
  totalTimeSpent   Int      @default(0) @map("total_time_spent")
  lastActive       DateTime @map("last_active")
  lastStreakDate   DateTime? @map("last_streak_date")
  updatedAt        DateTime @updatedAt @map("updated_at")

  @@map("user_stats")
  @@index([userId])
  @@index([level])
}

model CourseProgress {
  id                 String         @id @default(uuid())
  userId             String         @map("user_id")
  courseId           String         @map("course_id")
  status             ProgressStatus @default(NOT_STARTED)
  progressPercentage Int            @default(0) @map("progress_percentage")
  lessonsCompleted   Int            @default(0) @map("lessons_completed")
  totalLessons       Int            @default(0) @map("total_lessons")
  score              Int            @default(0)
  timeSpent          Int            @default(0) @map("time_spent")
  startedAt          DateTime?      @map("started_at")
  completedAt        DateTime?      @map("completed_at")
  lastAccessed       DateTime       @default(now()) @map("last_accessed")
  createdAt          DateTime       @default(now()) @map("created_at")
  updatedAt          DateTime       @updatedAt @map("updated_at")
  lessons            LessonProgress[]

  @@map("course_progress")
  @@index([userId])
  @@index([courseId])
  @@index([status])
  @@unique([userId, courseId])
}

model LessonProgress {
  id           String         @id @default(uuid())
  userId       String         @map("user_id")
  lessonId     String         @map("lesson_id")
  courseId     String         @map("course_id")
  status       ProgressStatus @default(NOT_STARTED)
  score        Int            @default(0)
  maxScore     Int?           @map("max_score")
  timeSpent    Int            @default(0) @map("time_spent")
  attempts     Int            @default(0)
  completedAt  DateTime?      @map("completed_at")
  lastAccessed DateTime       @default(now()) @map("last_accessed")
  createdAt    DateTime       @default(now()) @map("created_at")
  updatedAt    DateTime       @updatedAt @map("updated_at")
  course       CourseProgress @relation(fields: [courseId, userId], references: [courseId, userId])

  @@map("lesson_progress")
  @@index([userId])
  @@index([lessonId])
  @@index([courseId])
  @@index([status])
  @@unique([userId, lessonId])
}

model LearningActivity {
  id           String       @id @default(uuid())
  userId       String       @map("user_id")
  activityType ActivityType @map("activity_type")
  activityId   String       @map("activity_id")
  metadata     Json?
  xpEarned     Int          @default(0) @map("xp_earned")
  timestamp    DateTime     @default(now())
  createdAt    DateTime     @default(now()) @map("created_at")

  @@map("learning_activities")
  @@index([userId])
  @@index([activityType])
  @@index([timestamp])
  @@index([userId, timestamp])
}`);

console.log('✅ setup-progress.js written successfully.');
