const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'analytics'),
  path.join(src, 'modules', 'events'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/analytics-service',
  version: '0.1.0',
  private: true,
  description: 'Analytics Service',
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
    'uuid': '^9.0.0',
    'ioredis': '^6.0.0',
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
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/analytics_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="analytics-service"
KAFKA_GROUP_ID="analytics-service-group"
PORT=3017
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
    port: parseInt(process.env.PORT || '3017', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/analytics_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380', 10),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
  kafka: {
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
    clientId: process.env.KAFKA_CLIENT_ID || 'analytics-service',
    groupId: process.env.KAFKA_GROUP_ID || 'analytics-service-group',
  },
};`);

// 5. Response DTO
fs.writeFileSync(path.join(src, 'common', 'dto', 'response.dto.ts'),
`export class ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
  constructor(partial: Partial<ApiResponse<T>>) {
    this.success = partial.success ?? true;
    this.data = partial.data;
    this.error = partial.error;
    this.message = partial.message;
    this.timestamp = new Date().toISOString();
  }
  static success<T>(data: T, message?: string): ApiResponse<T> {
    return new ApiResponse<T>({ success: true, data, message });
  }
  static error(error: string, message?: string): ApiResponse<null> {
    return new ApiResponse<null>({ success: false, error, message });
  }
}`);

// 6. Analytics DTO
fs.writeFileSync(path.join(src, 'common', 'dto', 'analytics.dto.ts'),
`import { IsString, IsOptional, IsDateString, IsUUID } from 'class-validator';

export class AnalyticsQueryDto {
  @IsOptional() @IsDateString() startDate?: string;
  @IsOptional() @IsDateString() endDate?: string;
  @IsOptional() @IsString() period?: 'daily' | 'weekly' | 'monthly';
  @IsOptional() @IsUUID() userId?: string;
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

// 8. Analytics Service Logic
fs.writeFileSync(path.join(src, 'modules', 'analytics', 'analytics.service.ts'),
`import { Injectable } from '@nestjs/common';
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
        eventId: event.eventId || \`evt_\${Date.now()}\`,
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
}`);

// 9. Analytics Controller
fs.writeFileSync(path.join(src, 'modules', 'analytics', 'analytics.controller.ts'),
`import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsQueryDto } from '../../common/dto/analytics.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('analytics')
@UseGuards(JwtAuthGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('overview')
  async getOverview() {
    const result = await this.analyticsService.getOverview();
    return ApiResponse.success(result, 'Analytics overview retrieved successfully');
  }

  @Get('engagement')
  async getEngagement(@Query() query: AnalyticsQueryDto) {
    const result = await this.analyticsService.getEngagement(query);
    return ApiResponse.success(result, 'Engagement analytics retrieved successfully');
  }

  @Get('courses')
  async getCourseAnalytics() {
    const result = await this.analyticsService.getCourseAnalytics();
    return ApiResponse.success(result, 'Course analytics retrieved successfully');
  }

  @Get('ai-usage')
  async getAIUsage() {
    const result = await this.analyticsService.getAIUsage();
    return ApiResponse.success(result, 'AI usage analytics retrieved successfully');
  }

  @Get('subscriptions')
  async getSubscriptionAnalytics() {
    const result = await this.analyticsService.getSubscriptionAnalytics();
    return ApiResponse.success(result, 'Subscription analytics retrieved successfully');
  }
}`);

// 10. Kafka Consumer Service
fs.writeFileSync(path.join(src, 'modules', 'events', 'kafka.consumer.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { AnalyticsService } from '../analytics/analytics.service';
import { config } from '../../config/environment.config';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private readonly analyticsService: AnalyticsService) {
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
        topics: ['user-events', 'lesson-events', 'speaking-events', 'ai-events', 'grammar-events', 'vocabulary-events', 'subscription-events', 'payment-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          try {
            const value = JSON.parse(message.value.toString());
            console.log(\`📨 Received event in Analytics Service: \${topic}\`, value);
            await this.processEvent(topic, value, partition, String(message.offset));
          } catch (e) {}
        },
      });
      console.log('✅ Kafka Consumer started for Analytics Service');
    } catch (err) {
      console.warn('⚠️ Kafka connection deferred (brokers offline):', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.consumer.disconnect(); } catch (e) {}
  }

  private async processEvent(topic: string, event: any, partition: number, offset: string) {
    const envelope = {
      eventId: event.eventId || \`evt_\${uuidv4()}\`,
      eventType: event.event || event.eventType || topic.replace('-events', '.'),
      eventVersion: event.version || '1.0',
      occurredAt: event.timestamp || event.occurredAt || new Date().toISOString(),
      producer: topic.replace('-events', ''),
      userId: event.userId,
      payload: event,
      kafkaTopic: topic,
      kafkaPartition: partition,
      kafkaOffset: offset,
    };
    await this.analyticsService.storeRawEvent(envelope);
  }
}`);

// 11. Health Controller
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
    } catch {
      database = false;
    }
    return {
      status: database ? 'healthy' : 'unhealthy',
      service: 'analytics-service',
      version: '1.0.0',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 12. App Module & Main.ts
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { AnalyticsController } from './modules/analytics/analytics.controller';
import { AnalyticsService } from './modules/analytics/analytics.service';
import { KafkaConsumerService } from './modules/events/kafka.consumer';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, AnalyticsController],
  providers: [
    PrismaService,
    AnalyticsService,
    KafkaConsumerService,
  ],
})
export class AppModule {}`);

fs.writeFileSync(path.join(src, 'main.ts'),
`import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, transform: true }));
  app.setGlobalPrefix('api/v1');
  const port = process.env.PORT || 3017;
  await app.listen(port);
  console.log('📊 Analytics Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('📈 Analytics: http://localhost:' + port + '/api/v1/analytics');
}
bootstrap().catch((error) => {
  console.error('Failed to start Analytics Service:', error);
  process.exit(1);
});`);

// 13. Prisma Schema
fs.writeFileSync(path.join(root, 'prisma', 'schema.prisma'),
`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model RawEvent {
  id             String   @id @default(uuid())
  eventId        String   @unique @map("event_id")
  eventType      String   @map("event_type")
  eventVersion   String   @map("event_version")
  occurredAt     DateTime @map("occurred_at")
  producer       String
  userId         String?  @map("user_id")
  requestId      String?  @map("request_id")
  correlationId  String?  @map("correlation_id")
  payload        Json
  kafkaTopic     String?  @map("kafka_topic")
  kafkaPartition Int?     @map("kafka_partition")
  kafkaOffset    String?  @map("kafka_offset")
  processedAt    DateTime @default(now()) @map("processed_at")
  createdAt      DateTime @default(now()) @map("created_at")

  @@map("raw_events")
  @@index([eventType])
  @@index([occurredAt])
  @@index([userId])
}

model DailyAggregation {
  id                  String   @id @default(uuid())
  date                DateTime @unique
  dateKey             String   @unique @map("date_key")
  dailyActiveUsers    Int      @default(0) @map("daily_active_users")
  newUsers            Int      @default(0) @map("new_users")
  lessonsStarted      Int      @default(0) @map("lessons_started")
  lessonsCompleted    Int      @default(0) @map("lessons_completed")
  avgLessonScore      Float    @default(0) @map("avg_lesson_score")
  speakingSessions    Int      @default(0) @map("speaking_sessions")
  avgSpeakingScore    Float    @default(0) @map("avg_speaking_score")
  grammarExercises    Int      @default(0) @map("grammar_exercises")
  avgGrammarScore     Float    @default(0) @map("avg_grammar_score")
  vocabularyLearned   Int      @default(0) @map("vocabulary_learned")
  aiMessages          Int      @default(0) @map("ai_messages")
  avgAILatency        Float    @default(0) @map("avg_ai_latency")
  newSubscriptions    Int      @default(0) @map("new_subscriptions")
  subscriptionRevenue Int      @default(0) @map("subscription_revenue")
  totalTimeMinutes    Int      @default(0) @map("total_time_minutes")
  avgSessionMinutes   Float    @default(0) @map("avg_session_minutes")
  createdAt           DateTime @default(now()) @map("created_at")
  updatedAt           DateTime @updatedAt @map("updated_at")

  @@map("daily_aggregations")
  @@index([dateKey])
}

model MonthlyAggregation {
  id                    String   @id @default(uuid())
  month                 DateTime @unique
  monthKey              String   @unique @map("month_key")
  monthlyActiveUsers    Int      @default(0) @map("monthly_active_users")
  totalUsers            Int      @default(0) @map("total_users")
  totalLessonsCompleted Int      @default(0) @map("total_lessons_completed")
  avgMonthlyLessons     Float    @default(0) @map("avg_monthly_lessons")
  totalSubscriptions    Int      @default(0) @map("total_subscriptions")
  conversionRate        Float    @default(0) @map("conversion_rate")
  monthlyRevenue        Int      @default(0) @map("monthly_revenue")
  retentionRate         Float    @default(0) @map("retention_rate")
  churnRate             Float    @default(0) @map("churn_rate")
  createdAt             DateTime @default(now()) @map("created_at")
  updatedAt             DateTime @updatedAt @map("updated_at")

  @@map("monthly_aggregations")
  @@index([monthKey])
}

model UserAnalytics {
  id                    String    @id @default(uuid())
  userId                String    @unique @map("user_id")
  firstActivityAt       DateTime  @map("first_activity_at")
  lastActivityAt        DateTime  @map("last_activity_at")
  totalDaysActive       Int       @default(0) @map("total_days_active")
  totalLessonsCompleted Int       @default(0) @map("total_lessons_completed")
  totalSpeakingSessions Int       @default(0) @map("total_speaking_sessions")
  totalAIMessages       Int       @default(0) @map("total_ai_messages")
  totalTimeMinutes      Int       @default(0) @map("total_time_minutes")
  avgLessonScore        Float     @default(0) @map("avg_lesson_score")
  avgSpeakingScore      Float     @default(0) @map("avg_speaking_score")
  currentPlan           String?   @map("current_plan")
  subscriptionStartAt   DateTime? @map("subscription_start_at")
  isActive              Boolean   @default(true) @map("is_active")
  isAnonymized          Boolean   @default(false) @map("is_anonymized")
  anonymizedAt          DateTime? @map("anonymized_at")
  updatedAt             DateTime  @updatedAt @map("updated_at")
  createdAt             DateTime  @default(now()) @map("created_at")

  @@map("user_analytics")
  @@index([userId])
}`);

console.log('✅ setup-analytics.js written successfully.');
