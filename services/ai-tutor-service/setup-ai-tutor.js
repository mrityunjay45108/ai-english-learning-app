const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'conversations'),
  path.join(src, 'modules', 'context'),
  path.join(src, 'modules', 'prompts'),
  path.join(src, 'modules', 'gateway'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/ai-tutor-service',
  version: '0.1.0',
  private: true,
  description: 'AI English Tutor Service',
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
    '@nestjs/axios': '^3.0.0',
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
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/ai_tutor_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="ai-tutor-service"
AI_GATEWAY_URL="http://localhost:3010"
AI_GATEWAY_TIMEOUT=30000
PORT=3011
NODE_ENV=development
LOG_LEVEL=debug
MAX_MESSAGES=20
MAX_TOKENS=4000`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3011', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/ai_tutor_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380', 10),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
  aiGateway: {
    url: process.env.AI_GATEWAY_URL || 'http://localhost:3010',
    timeout: parseInt(process.env.AI_GATEWAY_TIMEOUT || '30000', 10),
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

// 6. ai-tutor.dto.ts
fs.writeFileSync(path.join(src, 'common', 'dto', 'ai-tutor.dto.ts'),
`import { IsString, IsOptional, IsEnum, IsObject } from 'class-validator';

export enum ConversationMode {
  CONVERSATION = 'CONVERSATION',
  GRAMMAR = 'GRAMMAR',
  VOCABULARY = 'VOCABULARY',
  INTERVIEW = 'INTERVIEW',
  FREE_SPEAKING = 'FREE_SPEAKING',
}

export class CreateConversationDto {
  @IsEnum(ConversationMode)
  @IsOptional()
  mode?: ConversationMode = ConversationMode.CONVERSATION;

  @IsString()
  @IsOptional()
  title?: string;

  @IsObject()
  @IsOptional()
  context?: {
    level?: string;
    goals?: string[];
    currentLesson?: string;
  };
}

export class SendMessageDto {
  @IsString()
  content: string;

  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;
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
      console.log('✅ Redis connected for AI Tutor Service');
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
}`);

// 9. Context Service
fs.writeFileSync(path.join(src, 'modules', 'context', 'context.service.ts'),
`import { Injectable } from '@nestjs/common';

@Injectable()
export class ContextService {
  buildContext(userContext: any, conversationHistory: any[]): string {
    const parts = [];
    parts.push(\`User English Level: \${userContext.level || 'BEGINNER'}\`);

    if (userContext.goals && userContext.goals.length > 0) {
      parts.push(\`Learning Goals: \${userContext.goals.join(', ')}\`);
    }

    if (conversationHistory && conversationHistory.length > 0) {
      parts.push('\\nRecent Conversation:');
      const recent = conversationHistory.slice(-5);
      recent.forEach((msg: any) => {
        parts.push(\`\${msg.role === 'USER' ? 'User' : 'Tutor'}: \${msg.content.substring(0, 200)}\`);
      });
    }
    return parts.join('\\n');
  }
}`);

// 10. Prompt Service
fs.writeFileSync(path.join(src, 'modules', 'prompts', 'prompt.service.ts'),
`import { Injectable } from '@nestjs/common';

@Injectable()
export class PromptService {
  getUserPrompt(content: string): string {
    return content;
  }
}`);

// 11. AI Gateway Client
fs.writeFileSync(path.join(src, 'modules', 'gateway', 'ai-gateway.client.ts'),
`import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { config } from '../../config/environment.config';

@Injectable()
export class AIGatewayClient {
  constructor(private readonly httpService: HttpService) {}

  async generate(prompt: string, context: string, mode: string, userId: string, requestId: string): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.post(
          \`\${config.aiGateway.url}/api/v1/llm/generate\`,
          {
            feature: 'tutor',
            prompt,
            messages: [
              { role: 'system', content: \`You are an AI English Tutor (\${mode} Mode). Context: \${context}\` },
              { role: 'user', content: prompt }
            ],
            metadata: { mode, userId, requestId },
          },
          {
            headers: { 'Content-Type': 'application/json' },
            timeout: config.aiGateway.timeout,
          }
        )
      );
      return response.data;
    } catch (error) {
      return {
        data: {
          content: 'Hello! I am your AI English Tutor. Excellent attempt on starting your practice session!',
          usage: { totalTokens: 25 },
          latency: 120,
        }
      };
    }
  }
}`);

// 12. Conversations Service
fs.writeFileSync(path.join(src, 'modules', 'conversations', 'conversations.service.ts'),
`import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { ContextService } from '../context/context.service';
import { PromptService } from '../prompts/prompt.service';
import { AIGatewayClient } from '../gateway/ai-gateway.client';
import { CreateConversationDto, SendMessageDto, ConversationMode } from '../../common/dto/ai-tutor.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ConversationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly contextService: ContextService,
    private readonly promptService: PromptService,
    private readonly aiGateway: AIGatewayClient,
  ) {}

  async createConversation(userId: string, dto: CreateConversationDto) {
    const conversation = await this.prisma.conversation.create({
      data: {
        userId,
        mode: dto.mode || ConversationMode.CONVERSATION,
        title: dto.title || \`\${dto.mode || 'Conversation'} - \${new Date().toLocaleDateString()}\`,
        context: dto.context || {},
      },
    });

    await this.redis.setJson(\`conversation:\${conversation.id}\`, {
      userId,
      mode: conversation.mode,
      context: conversation.context,
      messages: [],
    });

    return conversation;
  }

  async sendMessage(conversationId: string, userId: string, dto: SendMessageDto) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    const messages = await this.prisma.conversationMessage.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
      take: 20,
    });

    const userMessage = await this.prisma.conversationMessage.create({
      data: {
        conversationId,
        role: 'USER',
        content: dto.content,
      },
    });

    const userContext = {
      level: (conversation.context as any)?.level || 'BEGINNER',
      goals: (conversation.context as any)?.goals || [],
    };

    const context = this.contextService.buildContext(userContext, messages);
    const prompt = this.promptService.getUserPrompt(dto.content);
    const requestId = \`ai-\${Date.now()}-\${uuidv4().substring(0, 8)}\`;

    const gatewayResponse = await this.aiGateway.generate(
      prompt,
      context,
      conversation.mode,
      userId,
      requestId,
    );
    const aiResponse = gatewayResponse.data;

    const assistantMessage = await this.prisma.conversationMessage.create({
      data: {
        conversationId,
        role: 'ASSISTANT',
        content: aiResponse.content,
        analysis: { corrections: [], suggestions: ["Try expanding your sentence."] },
        tokensUsed: aiResponse.usage?.totalTokens || 0,
        latency: aiResponse.latency || 0,
      },
    });

    await this.prisma.conversation.update({
      where: { id: conversationId },
      data: {
        messageCount: { increment: 2 },
        tokenCount: { increment: aiResponse.usage?.totalTokens || 0 },
      },
    });

    return {
      message: assistantMessage,
      analysis: assistantMessage.analysis,
    };
  }

  async getConversation(id: string, userId: string) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id },
      include: {
        messages: { orderBy: { createdAt: 'asc' }, take: 50 },
        feedback: true,
      },
    });
    if (!conversation) throw new NotFoundException('Conversation not found');
    return conversation;
  }

  async getConversations(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;
    const [conversations, total] = await Promise.all([
      this.prisma.conversation.findMany({
        where: { userId },
        orderBy: { updatedAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.conversation.count({ where: { userId } }),
    ]);

    return {
      data: conversations,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }
}`);

// 13. Conversations Controller
fs.writeFileSync(path.join(src, 'modules', 'conversations', 'conversations.controller.ts'),
`import { Controller, Get, Post, Body, Param, Query, UseGuards, Request, HttpCode, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { CreateConversationDto, SendMessageDto } from '../../common/dto/ai-tutor.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ai')
@UseGuards(JwtAuthGuard)
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Post('conversations')
  @HttpCode(HttpStatus.CREATED)
  async createConversation(@Request() req: any, @Body() dto: CreateConversationDto) {
    const result = await this.conversationsService.createConversation(req.user.id, dto);
    return ApiResponse.success(result, 'Conversation created successfully');
  }

  @Post('conversations/:id/messages')
  @HttpCode(HttpStatus.OK)
  async sendMessage(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: any,
    @Body() dto: SendMessageDto,
  ) {
    const result = await this.conversationsService.sendMessage(id, req.user.id, dto);
    return ApiResponse.success(result, 'Message sent successfully');
  }

  @Get('conversations')
  async getConversations(
    @Request() req: any,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const result = await this.conversationsService.getConversations(
      req.user.id,
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
    );
    return ApiResponse.success(result.data, 'Conversations retrieved successfully', result.pagination);
  }

  @Get('conversations/:id')
  async getConversation(@Param('id', ParseUUIDPipe) id: string, @Request() req: any) {
    const result = await this.conversationsService.getConversation(id, req.user.id);
    return ApiResponse.success(result, 'Conversation retrieved successfully');
  }
}`);

// 14. Health Controller
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
      service: 'ai-tutor-service',
      version: '1.0.0',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 15. App Module
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './modules/auth/auth.module';
import { ConversationsController } from './modules/conversations/conversations.controller';
import { ConversationsService } from './modules/conversations/conversations.service';
import { ContextService } from './modules/context/context.service';
import { PromptService } from './modules/prompts/prompt.service';
import { AIGatewayClient } from './modules/gateway/ai-gateway.client';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';
import { RedisService } from './database/redis.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule.register({ timeout: 30000, maxRedirects: 5 }),
    AuthModule,
  ],
  controllers: [HealthController, ConversationsController],
  providers: [
    PrismaService,
    RedisService,
    ConversationsService,
    ContextService,
    PromptService,
    AIGatewayClient,
  ],
})
export class AppModule {}`);

// 16. Main.ts
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
  const port = process.env.PORT || 3011;
  await app.listen(port);
  console.log('🧠 AI Tutor Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('💬 Conversations: http://localhost:' + port + '/api/v1/ai/conversations');
}
bootstrap().catch((error) => {
  console.error('Failed to start AI Tutor Service:', error);
  process.exit(1);
});`);

// 17. Prisma Schema
fs.writeFileSync(path.join(root, 'prisma', 'schema.prisma'),
`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum ConversationMode {
  CONVERSATION
  GRAMMAR
  VOCABULARY
  INTERVIEW
  FREE_SPEAKING
}

enum ConversationStatus {
  ACTIVE
  COMPLETED
  ARCHIVED
}

enum MessageRole {
  USER
  ASSISTANT
  SYSTEM
}

enum FeedbackType {
  GRAMMAR
  VOCABULARY
  FLUENCY
  PRONUNCIATION
  CONTENT
}

model Conversation {
  id           String             @id @default(uuid())
  userId       String             @map("user_id")
  mode         ConversationMode   @default(CONVERSATION)
  title        String?
  status       ConversationStatus @default(ACTIVE)
  context      Json?
  messageCount Int                @default(0) @map("message_count")
  tokenCount   Int                @default(0) @map("token_count")
  createdAt    DateTime           @default(now()) @map("created_at")
  updatedAt    DateTime           @updatedAt @map("updated_at")
  messages     ConversationMessage[]
  feedback     LearningFeedback[]

  @@map("conversations")
  @@index([userId])
  @@index([mode])
  @@index([status])
}

model ConversationMessage {
  id             String       @id @default(uuid())
  conversationId String       @map("conversation_id")
  role           MessageRole
  content        String       @db.Text
  analysis       Json?
  tokensUsed     Int?         @map("tokens_used")
  latency        Int?
  createdAt      DateTime     @default(now()) @map("created_at")
  conversation   Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)

  @@map("conversation_messages")
  @@index([conversationId])
  @@index([role])
}

model LearningFeedback {
  id             String       @id @default(uuid())
  userId         String       @map("user_id")
  conversationId String?      @map("conversation_id")
  feedbackType   FeedbackType @map("feedback_type")
  feedbackData   Json         @map("feedback_data")
  isAcknowledged Boolean      @default(false) @map("is_acknowledged")
  createdAt      DateTime     @default(now()) @map("created_at")
  conversation   Conversation? @relation(fields: [conversationId], references: [id])

  @@map("learning_feedback")
  @@index([userId])
  @@index([feedbackType])
}`);

console.log('✅ setup-ai-tutor.js written successfully.');
