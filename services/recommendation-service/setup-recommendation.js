const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'recommendations'),
  path.join(src, 'modules', 'engine'),
  path.join(src, 'modules', 'events'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/recommendation-service',
  version: '0.1.0',
  private: true,
  description: 'Personalized Recommendation Service',
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
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/recommendation_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="recommendation-service"
KAFKA_GROUP_ID="recommendation-service-group"
PORT=3013
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
    port: parseInt(process.env.PORT || '3013', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/recommendation_db',
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
    clientId: process.env.KAFKA_CLIENT_ID || 'recommendation-service',
    groupId: process.env.KAFKA_GROUP_ID || 'recommendation-service-group',
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

// 6. Recommendation DTO
fs.writeFileSync(path.join(src, 'common', 'dto', 'recommendation.dto.ts'),
`import { IsString, IsOptional, IsUUID, IsEnum, IsNumber, Min, Max } from 'class-validator';

export enum RecommendationType {
  LESSON = 'LESSON',
  GRAMMAR_TOPIC = 'GRAMMAR_TOPIC',
  VOCABULARY_WORD = 'VOCABULARY_WORD',
  SPEAKING_PRACTICE = 'SPEAKING_PRACTICE',
  ASSESSMENT = 'ASSESSMENT',
  REVIEW = 'REVIEW',
}

export class RecommendationQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(RecommendationType) type?: RecommendationType;
  @IsOptional() @IsString() status?: string = 'ACTIVE';
}

export class RecommendationFeedbackDto {
  @IsUUID() recommendationId: string;
  @IsString() action: 'clicked' | 'completed' | 'dismissed' | 'ignored';
  @IsNumber() @IsOptional() @Min(0) timeSpent?: number;
  @IsNumber() @IsOptional() @Min(1) @Max(5) rating?: number;
  @IsString() @IsOptional() feedbackText?: string;
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

// 8. Redis Service
fs.writeFileSync(path.join(src, 'database', 'redis.service.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { config } from '../config/environment.config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: config.redis.host,
      port: config.redis.port,
      password: config.redis.password,
      retryStrategy: (times) => Math.min(times * 50, 2000),
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      console.log('✅ Redis connected for Recommendation Service');
    } catch (err) {
      console.warn('⚠️ Redis connection deferred:', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.client.quit(); } catch (e) {}
  }

  async get(key: string): Promise<string | null> {
    try { return await this.client.get(key); } catch (e) { return null; }
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    try {
      if (ttl) await this.client.setex(key, ttl, value);
      else await this.client.set(key, value);
    } catch (e) {}
  }

  async getJson<T>(key: string): Promise<T | null> {
    const data = await this.get(key);
    return data ? JSON.parse(data) : null;
  }

  async setJson<T>(key: string, value: T, ttl?: number): Promise<void> {
    await this.set(key, JSON.stringify(value), ttl);
  }

  async del(key: string): Promise<void> {
    try { await this.client.del(key); } catch (e) {}
  }

  getClient(): Redis {
    return this.client;
  }
}`);

// 9. Recommendation Engine
fs.writeFileSync(path.join(src, 'modules', 'engine', 'recommendation-engine.service.ts'),
`import { Injectable } from '@nestjs/common';
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
}`);

// 10. Recommendations Service
fs.writeFileSync(path.join(src, 'modules', 'recommendations', 'recommendations.service.ts'),
`import { Injectable, NotFoundException } from '@nestjs/common';
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
    const cacheKey = \`recommendations:\${userId}:\${type || 'all'}:\${status}\`;
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
}`);

// 11. Recommendations Controller
fs.writeFileSync(path.join(src, 'modules', 'recommendations', 'recommendations.controller.ts'),
`import { Controller, Get, Post, Body, Query, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { RecommendationQueryDto, RecommendationFeedbackDto } from '../../common/dto/recommendation.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('recommendations')
@UseGuards(JwtAuthGuard)
export class RecommendationsController {
  constructor(private readonly service: RecommendationsService) {}

  @Get()
  async getRecommendations(@Request() req: any, @Query() query: RecommendationQueryDto) {
    const result = await this.service.getRecommendations(req.user.id, query);
    return ApiResponse.success(result.data, 'Recommendations retrieved successfully', result.pagination);
  }

  @Post('feedback')
  @HttpCode(HttpStatus.OK)
  async submitFeedback(@Request() req: any, @Body() dto: RecommendationFeedbackDto) {
    const result = await this.service.submitFeedback(req.user.id, dto);
    return ApiResponse.success(result, 'Feedback submitted successfully');
  }

  @Get('signal')
  async getUserSignal(@Request() req: any) {
    const result = await this.service.getUserSignal(req.user.id);
    return ApiResponse.success(result, 'User signal retrieved successfully');
  }
}`);

// 12. Kafka Consumer Service
fs.writeFileSync(path.join(src, 'modules', 'events', 'kafka.consumer.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { RecommendationsService } from '../recommendations/recommendations.service';
import { config } from '../../config/environment.config';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private readonly recommendationsService: RecommendationsService) {
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
        topics: ['lesson-events', 'grammar-events', 'vocabulary-events', 'assessment-events', 'speaking-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, message }) => {
          try {
            const value = JSON.parse(message.value.toString());
            console.log(\`📨 Received event in Recommendation Service: \${topic}\`, value);
          } catch (e) {}
        },
      });
      console.log('✅ Kafka Consumer started for Recommendation Service');
    } catch (err) {
      console.warn('⚠️ Kafka connection deferred (brokers offline):', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.consumer.disconnect(); } catch (e) {}
  }
}`);

// 13. Health Controller
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
      service: 'recommendation-service',
      version: '1.0.0',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 14. App Module & Main.ts
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { RecommendationsController } from './modules/recommendations/recommendations.controller';
import { RecommendationsService } from './modules/recommendations/recommendations.service';
import { RecommendationEngine } from './modules/engine/recommendation-engine.service';
import { KafkaConsumerService } from './modules/events/kafka.consumer';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';
import { RedisService } from './database/redis.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, RecommendationsController],
  providers: [
    PrismaService,
    RedisService,
    RecommendationsService,
    RecommendationEngine,
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
  const port = process.env.PORT || 3013;
  await app.listen(port);
  console.log('🎯 Recommendation Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('📊 Recommendations: http://localhost:' + port + '/api/v1/recommendations');
}
bootstrap().catch((error) => {
  console.error('Failed to start Recommendation Service:', error);
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

enum RecommendationType {
  LESSON
  GRAMMAR_TOPIC
  VOCABULARY_WORD
  SPEAKING_PRACTICE
  ASSESSMENT
  REVIEW
}

enum RecommendationStatus {
  ACTIVE
  COMPLETED
  DISMISSED
  EXPIRED
}

model UserLearningSignal {
  id                  String   @id @default(uuid())
  userId              String   @unique @map("user_id")
  englishLevel        String   @default("BEGINNER") @map("english_level")
  lessonsCompleted    Int      @default(0) @map("lessons_completed")
  grammarExercises    Int      @default(0) @map("grammar_exercises")
  vocabularyLearned   Int      @default(0) @map("vocabulary_learned")
  speakingPractices   Int      @default(0) @map("speaking_practices")
  grammarScore        Float    @default(0) @map("grammar_score")
  vocabularyScore     Float    @default(0) @map("vocabulary_score")
  speakingScore       Float    @default(0) @map("speaking_score")
  updatedAt           DateTime @updatedAt @map("updated_at")
  createdAt           DateTime @default(now()) @map("created_at")

  @@map("user_learning_signals")
  @@index([userId])
}

model Recommendation {
  id               String               @id @default(uuid())
  userId           String               @map("user_id")
  type             RecommendationType
  targetId         String               @map("target_id")
  targetTitle      String               @map("target_title")
  targetMetadata   Json?                @map("target_metadata")
  score            Float                @default(0)
  reason           String?              @db.Text
  status           RecommendationStatus @default(ACTIVE)
  expiresAt        DateTime?            @map("expires_at")
  feedbackReceived Boolean              @default(false) @map("feedback_received")
  createdAt        DateTime             @default(now()) @map("created_at")
  updatedAt        DateTime             @updatedAt @map("updated_at")

  @@map("recommendations")
  @@index([userId])
  @@index([type])
  @@index([status])
}

model RecommendationFeedback {
  id               String   @id @default(uuid())
  recommendationId String   @map("recommendation_id")
  userId           String   @map("user_id")
  action           String
  timeSpent        Int?     @map("time_spent")
  rating           Int?
  feedbackText     String?  @map("feedback_text") @db.Text
  createdAt        DateTime @default(now()) @map("created_at")

  @@map("recommendation_feedback")
  @@index([recommendationId])
  @@index([userId])
}`);

console.log('✅ setup-recommendation.js written successfully.');
