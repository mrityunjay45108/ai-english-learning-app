const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'grammar'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/grammar-service',
  version: '0.1.0',
  private: true,
  description: 'Grammar Learning Service',
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
    'dotenv': '^16.0.0'
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
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/grammar_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
PORT=3007
NODE_ENV=development
LOG_LEVEL=debug
TOPIC_CACHE_TTL=3600`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3007', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/grammar_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
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

// 6. grammar.dto.ts
fs.writeFileSync(path.join(src, 'common', 'dto', 'grammar.dto.ts'),
`import { IsString, IsOptional, IsEnum, IsUUID, IsNumber, Min } from 'class-validator';

export enum DifficultyLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export enum UserProgressStatus {
  NOT_STARTED = 'NOT_STARTED',
  LEARNING = 'LEARNING',
  MASTERED = 'MASTERED',
}

export class TopicQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsString() category?: string;
  @IsOptional() @IsEnum(DifficultyLevel) difficulty?: DifficultyLevel;
  @IsOptional() @IsString() search?: string;
}

export class SubmitExerciseDto {
  @IsUUID() exerciseId: string;
  @IsOptional() answer: any;
  @IsNumber() @IsOptional() @Min(0) timeTaken?: number;
}

export class ProgressQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(UserProgressStatus) status?: UserProgressStatus;
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

// 8. Grammar Repository
fs.writeFileSync(path.join(src, 'modules', 'grammar', 'grammar.repository.ts'),
`import { Injectable } from '@nestjs/common';
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
}`);

// 9. Grammar Service
fs.writeFileSync(path.join(src, 'modules', 'grammar', 'grammar.service.ts'),
`import { Injectable, NotFoundException } from '@nestjs/common';
import { GrammarRepository } from './grammar.repository';
import { TopicQueryDto, SubmitExerciseDto, UserProgressStatus } from '../../common/dto/grammar.dto';

@Injectable()
export class GrammarService {
  constructor(private readonly repo: GrammarRepository) {}

  async getAllTopics(query: TopicQueryDto) {
    const { page = 1, limit = 20, category, difficulty, search } = query;
    const skip = (page - 1) * limit;
    const where: any = {};
    if (category) where.category = category;
    if (difficulty) where.difficulty = difficulty;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }
    const [data, total] = await Promise.all([
      this.repo.findAllTopics({ skip, take: limit, where }),
      this.repo.countTopics(where),
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getTopic(id: string) {
    const topic = await this.repo.findTopicById(id);
    if (!topic) throw new NotFoundException('Topic not found');
    return topic;
  }

  async getExercises(topicId: string) {
    const topic = await this.repo.findTopicById(topicId);
    if (!topic) throw new NotFoundException('Topic not found');
    return topic.exercises.map((ex: any) => ({
      id: ex.id,
      question: ex.question,
      options: ex.options,
      type: ex.type,
      difficulty: ex.difficulty,
      hints: ex.hints,
    }));
  }

  async submitExercise(userId: string, dto: SubmitExerciseDto) {
    const exercise = await this.repo.getExerciseById(dto.exerciseId);
    if (!exercise) throw new NotFoundException('Exercise not found');

    const isCorrect = String(dto.answer).trim().toLowerCase() === String(exercise.correctAnswer).trim().toLowerCase();
    await this.updateProgress(userId, exercise.topicId, isCorrect);

    return {
      exerciseId: dto.exerciseId,
      isCorrect,
      correctAnswer: exercise.correctAnswer,
      explanation: exercise.explanation,
      explanationHindi: exercise.explanationHindi,
      score: isCorrect ? 1 : 0,
      totalScore: 1,
    };
  }

  async getProgress(userId: string, topicId: string) {
    const progress = await this.repo.getProgress(userId, topicId);
    return progress || {
      userId,
      topicId,
      status: UserProgressStatus.NOT_STARTED,
      score: 0,
      attempts: 0,
      correctCount: 0,
      wrongCount: 0,
    };
  }

  async getAllProgress(userId: string, query: any) {
    const { page = 1, limit = 20, status } = query;
    const skip = (page - 1) * limit;
    const where: any = {};
    if (status) where.status = status;

    const [data, total] = await Promise.all([
      this.repo.getAllProgress(userId, { skip, take: limit, where }),
      this.repo.countProgress(userId, where),
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getMasteredTopics(userId: string) {
    const progress = await this.repo.getAllProgress(userId, { where: { status: 'MASTERED' } });
    return progress.map((p: any) => p.topic);
  }

  private async updateProgress(userId: string, topicId: string, isCorrect: boolean) {
    const current = await this.repo.getProgress(userId, topicId);
    const attempts = (current?.attempts || 0) + 1;
    const correctCount = (current?.correctCount || 0) + (isCorrect ? 1 : 0);
    const wrongCount = (current?.wrongCount || 0) + (isCorrect ? 0 : 1);
    const score = Math.round((correctCount / attempts) * 100);

    let status = UserProgressStatus.LEARNING;
    if (score >= 80 && attempts >= 5) status = UserProgressStatus.MASTERED;

    return this.repo.upsertProgress(userId, topicId, {
      status,
      score,
      attempts,
      correctCount,
      wrongCount,
      lastPracticed: new Date(),
      masteredAt: status === 'MASTERED' ? new Date() : undefined,
    });
  }
}`);

// 10. Grammar Controller
fs.writeFileSync(path.join(src, 'modules', 'grammar', 'grammar.controller.ts'),
`import { Controller, Get, Post, Body, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { GrammarService } from './grammar.service';
import { TopicQueryDto, SubmitExerciseDto, ProgressQueryDto } from '../../common/dto/grammar.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('grammar')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Get('topics')
  async getTopics(@Query() query: TopicQueryDto) {
    const result = await this.grammarService.getAllTopics(query);
    return ApiResponse.success(result.data, 'Topics retrieved successfully', result.pagination);
  }

  @Get('topics/:id')
  async getTopic(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.grammarService.getTopic(id);
    return ApiResponse.success(result, 'Topic retrieved successfully');
  }

  @Get('topics/:id/exercises')
  async getExercises(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.grammarService.getExercises(id);
    return ApiResponse.success(result, 'Exercises retrieved successfully');
  }

  @Post('exercise/submit')
  @UseGuards(JwtAuthGuard)
  async submitExercise(@Request() req: any, @Body() dto: SubmitExerciseDto) {
    const result = await this.grammarService.submitExercise(req.user.id, dto);
    return ApiResponse.success(result, 'Exercise submitted successfully');
  }

  @Get('progress')
  @UseGuards(JwtAuthGuard)
  async getProgress(@Request() req: any, @Query() query: ProgressQueryDto) {
    const result = await this.grammarService.getAllProgress(req.user.id, query);
    return ApiResponse.success(result.data, 'Progress retrieved successfully', result.pagination);
  }

  @Get('progress/topic/:topicId')
  @UseGuards(JwtAuthGuard)
  async getTopicProgress(@Request() req: any, @Param('topicId', ParseUUIDPipe) topicId: string) {
    const result = await this.grammarService.getProgress(req.user.id, topicId);
    return ApiResponse.success(result, 'Topic progress retrieved successfully');
  }

  @Get('progress/mastered')
  @UseGuards(JwtAuthGuard)
  async getMasteredTopics(@Request() req: any) {
    const result = await this.grammarService.getMasteredTopics(req.user.id);
    return ApiResponse.success(result, 'Mastered topics retrieved successfully');
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
    } catch (error) {
      database = false;
    }
    return {
      status: database ? 'healthy' : 'unhealthy',
      service: 'grammar-service',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 12. App Module
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { GrammarController } from './modules/grammar/grammar.controller';
import { GrammarService } from './modules/grammar/grammar.service';
import { GrammarRepository } from './modules/grammar/grammar.repository';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, GrammarController],
  providers: [PrismaService, GrammarService, GrammarRepository],
})
export class AppModule {}`);

// 13. Main.ts
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
  const port = process.env.PORT || 3007;
  await app.listen(port);
  console.log('📚 Grammar Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('📖 Grammar: http://localhost:' + port + '/api/v1/grammar');
}
bootstrap().catch((error) => {
  console.error('Failed to start Grammar Service:', error);
  process.exit(1);
});`);

// 14. Prisma Schema
fs.writeFileSync(path.join(root, 'prisma', 'schema.prisma'),
`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum DifficultyLevel {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

enum ExerciseType {
  MULTIPLE_CHOICE
  FILL_BLANK
  TRUE_FALSE
  MATCHING
}

enum TopicStatus {
  ACTIVE
  ARCHIVED
}

enum UserProgressStatus {
  NOT_STARTED
  LEARNING
  MASTERED
}

model GrammarTopic {
  id          String        @id @default(uuid())
  name        String        @unique
  description String?       @db.Text
  category    String
  difficulty  DifficultyLevel @default(BEGINNER)
  orderIndex  Int           @default(0) @map("order_index")
  status      TopicStatus   @default(ACTIVE)
  icon        String?
  color       String?       @default("#6366f1")
  createdAt   DateTime      @default(now()) @map("created_at")
  updatedAt   DateTime      @updatedAt @map("updated_at")
  rules       GrammarRule[]
  exercises   GrammarExercise[]
  progress    UserGrammarProgress[]

  @@map("grammar_topics")
  @@index([name])
  @@index([category])
  @@index([difficulty])
  @@index([status])
}

model GrammarRule {
  id               String    @id @default(uuid())
  topicId          String    @map("topic_id")
  title            String
  ruleText         String    @db.Text @map("rule_text")
  explanation      String?   @db.Text
  explanationHindi String?   @map("explanation_hindi") @db.Text
  examples         Json?
  orderIndex       Int       @default(0) @map("order_index")
  createdAt        DateTime  @default(now()) @map("created_at")
  updatedAt        DateTime  @updatedAt @map("updated_at")
  topic            GrammarTopic @relation(fields: [topicId], references: [id], onDelete: Cascade)
  exercises        GrammarExercise[]

  @@map("grammar_rules")
  @@index([topicId])
  @@index([orderIndex])
}

model GrammarExercise {
  id               String         @id @default(uuid())
  topicId          String         @map("topic_id")
  ruleId           String?        @map("rule_id")
  question         String         @db.Text
  options          Json?
  correctAnswer    String         @map("correct_answer")
  type             ExerciseType   @default(MULTIPLE_CHOICE)
  difficulty       DifficultyLevel @default(BEGINNER)
  explanation      String?        @db.Text
  explanationHindi String?        @map("explanation_hindi") @db.Text
  hints            Json?
  orderIndex       Int            @default(0) @map("order_index")
  createdAt        DateTime       @default(now()) @map("created_at")
  updatedAt        DateTime       @updatedAt @map("updated_at")
  topic            GrammarTopic   @relation(fields: [topicId], references: [id], onDelete: Cascade)
  rule             GrammarRule?   @relation(fields: [ruleId], references: [id], onDelete: SetNull)

  @@map("grammar_exercises")
  @@index([topicId])
  @@index([ruleId])
  @@index([difficulty])
  @@index([type])
}

model UserGrammarProgress {
  id            String            @id @default(uuid())
  userId        String            @map("user_id")
  topicId       String            @map("topic_id")
  status        UserProgressStatus @default(NOT_STARTED)
  score         Int               @default(0)
  maxScore      Int?              @map("max_score")
  attempts      Int               @default(0)
  correctCount  Int               @default(0) @map("correct_count")
  wrongCount    Int               @default(0) @map("wrong_count")
  lastPracticed DateTime?         @map("last_practiced")
  masteredAt    DateTime?         @map("mastered_at")
  createdAt     DateTime          @default(now()) @map("created_at")
  updatedAt     DateTime          @updatedAt @map("updated_at")
  topic         GrammarTopic      @relation(fields: [topicId], references: [id], onDelete: Cascade)

  @@map("user_grammar_progress")
  @@index([userId])
  @@index([topicId])
  @@index([status])
  @@unique([userId, topicId])
}`);

// 15. Prisma Seed
fs.writeFileSync(path.join(root, 'prisma', 'seed.js'),
`const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding grammar data...');
  const topics = [
    {
      name: 'Present Simple Tense',
      description: 'Learn how to use present simple tense for habits and facts.',
      category: 'TENSES',
      difficulty: 'BEGINNER',
      orderIndex: 1,
      icon: '📝',
      rules: [
        {
          title: 'Forming Present Simple',
          ruleText: 'Use base form of verb for I/You/We/They, add -s/-es for He/She/It.',
          explanation: 'For third person singular (he, she, it), add -s to the verb.',
          explanationHindi: 'तीसरे व्यक्ति एकवचन (he, she, it) के लिए क्रिया में -s जोड़ें।',
          examples: ['I eat breakfast at 8am.', 'She eats breakfast at 8am.']
        }
      ],
      exercises: [
        {
          question: 'She ___ to school every day.',
          options: ['go', 'goes', 'going', 'went'],
          correctAnswer: 'goes',
          type: 'MULTIPLE_CHOICE',
          difficulty: 'BEGINNER',
          explanation: 'For he/she/it, add -s to the verb.',
          explanationHindi: 'he/she/it के लिए क्रिया में -s जोड़ें।'
        },
        {
          question: 'They ___ coffee in the morning.',
          options: ['drink', 'drinks', 'drinking', 'drank'],
          correctAnswer: 'drink',
          type: 'MULTIPLE_CHOICE',
          difficulty: 'BEGINNER',
          explanation: 'For I/You/We/They, use base form.',
          explanationHindi: 'I/You/We/They के लिए क्रिया का मूल रूप use करें।'
        }
      ]
    },
    {
      name: 'Past Simple Tense',
      description: 'Learn how to talk about completed actions in the past.',
      category: 'TENSES',
      difficulty: 'INTERMEDIATE',
      orderIndex: 2,
      icon: '📚',
      rules: [
        {
          title: 'Forming Past Simple',
          ruleText: 'Add -ed to regular verbs. Use irregular forms for irregular verbs.',
          explanation: 'Regular verbs: add -ed. Irregular verbs have special forms.',
          explanationHindi: 'Regular verbs: -ed जोड़ें। Irregular verbs के special forms होते हैं।',
          examples: ['I walked to school.', 'She went to market.']
        }
      ],
      exercises: [
        {
          question: 'She ___ to the store yesterday.',
          options: ['walk', 'walks', 'walked', 'walking'],
          correctAnswer: 'walked',
          type: 'MULTIPLE_CHOICE',
          difficulty: 'INTERMEDIATE',
          explanation: 'For past actions, use past tense.',
          explanationHindi: 'पिछली क्रियाओं के लिए past tense use करें।'
        }
      ]
    }
  ];

  for (const topicData of topics) {
    const existing = await prisma.grammarTopic.findUnique({ where: { name: topicData.name } });
    if (!existing) {
      const topic = await prisma.grammarTopic.create({
        data: {
          name: topicData.name,
          description: topicData.description,
          category: topicData.category,
          difficulty: topicData.difficulty,
          orderIndex: topicData.orderIndex,
          icon: topicData.icon,
        },
      });

      for (const ruleData of topicData.rules) {
        await prisma.grammarRule.create({
          data: {
            topicId: topic.id,
            title: ruleData.title,
            ruleText: ruleData.ruleText,
            explanation: ruleData.explanation,
            explanationHindi: ruleData.explanationHindi,
            examples: ruleData.examples,
          },
        });
      }

      for (const exerciseData of topicData.exercises) {
        await prisma.grammarExercise.create({
          data: {
            topicId: topic.id,
            ...exerciseData,
          },
        });
      }
      console.log('✅ Added topic: ' + topicData.name);
    } else {
      console.log('ℹ️ Topic already exists: ' + topicData.name);
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());`);

console.log('✅ setup-grammar.js written successfully.');
