const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'subscriptions'),
  path.join(src, 'modules', 'plans'),
  path.join(src, 'modules', 'entitlements'),
  path.join(src, 'modules', 'events'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/subscription-service',
  version: '0.1.0',
  private: true,
  description: 'Subscription Service',
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
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/subscription_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="subscription-service"
KAFKA_GROUP_ID="subscription-service-group"
PORT=3015
NODE_ENV=development
LOG_LEVEL=debug
GRACE_PERIOD_DAYS=3`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3015', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/subscription_db',
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
    clientId: process.env.KAFKA_CLIENT_ID || 'subscription-service',
    groupId: process.env.KAFKA_GROUP_ID || 'subscription-service-group',
  },
  subscription: {
    gracePeriodDays: parseInt(process.env.GRACE_PERIOD_DAYS || '3', 10),
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

// 6. Subscription DTO
fs.writeFileSync(path.join(src, 'common', 'dto', 'subscription.dto.ts'),
`import { IsString, IsOptional, IsUUID, IsBoolean } from 'class-validator';

export class CreateSubscriptionDto {
  @IsUUID()
  planId: string;

  @IsOptional()
  @IsString()
  paymentProvider?: string;

  @IsOptional()
  @IsString()
  providerId?: string;
}

export class CancelSubscriptionDto {
  @IsBoolean()
  @IsOptional()
  immediate?: boolean = false;
}`);

// 7. Prisma & Redis Services
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
      console.log('✅ Redis connected for Subscription Service');
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

  async invalidateEntitlements(userId: string): Promise<void> {
    await this.del(\`entitlements:\${userId}\`);
  }

  getClient(): Redis {
    return this.client;
  }
}`);

// 8. Subscription Service
fs.writeFileSync(path.join(src, 'modules', 'subscriptions', 'subscription.service.ts'),
`import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { CreateSubscriptionDto, CancelSubscriptionDto } from '../../common/dto/subscription.dto';
import { SubscriptionStatus } from '@prisma/client';

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async getPlans() {
    return this.prisma.plan.findMany({
      where: { status: 'ACTIVE' },
      include: { planFeatures: true },
      orderBy: { price: 'asc' },
    });
  }

  async getPlan(id: string) {
    const plan = await this.prisma.plan.findUnique({
      where: { id },
      include: { planFeatures: true },
    });
    if (!plan) throw new NotFoundException('Plan not found');
    return plan;
  }

  async createSubscription(userId: string, dto: CreateSubscriptionDto) {
    const plan = await this.getPlan(dto.planId);
    const existing = await this.prisma.subscription.findUnique({ where: { userId } });

    if (existing && existing.status !== 'EXPIRED') {
      throw new BadRequestException('User already has an active subscription');
    }

    const now = new Date();
    let trialStart: Date | null = null;
    let trialEnd: Date | null = null;
    let status: SubscriptionStatus = 'ACTIVE';

    if (plan.trialDays && plan.trialDays > 0) {
      trialStart = now;
      trialEnd = new Date(now.getTime() + plan.trialDays * 24 * 60 * 60 * 1000);
      status = 'TRIALING';
    }

    const periodEnd = this.calculatePeriodEnd(now, plan.interval);

    const subscription = await this.prisma.subscription.create({
      data: {
        userId,
        planId: plan.id,
        status,
        trialStart,
        trialEnd,
        currentPeriodStart: now,
        currentPeriodEnd: periodEnd,
        paymentProvider: dto.paymentProvider,
        providerId: dto.providerId,
      },
      include: { plan: { include: { planFeatures: true } } },
    });

    await this.prisma.subscriptionEvent.create({
      data: {
        subscriptionId: subscription.id,
        userId,
        eventType: 'created',
        newStatus: status,
      },
    });

    await this.redis.invalidateEntitlements(userId);
    return subscription;
  }

  async getSubscription(userId: string) {
    const subscription = await this.prisma.subscription.findUnique({
      where: { userId },
      include: { plan: { include: { planFeatures: true } } },
    });

    if (!subscription) {
      return {
        userId,
        status: 'FREE',
        plan: {
          name: 'Free',
          description: 'Basic plan with limited features',
          planFeatures: [
            { featureKey: 'ai_tutor', featureValue: 'false' },
            { featureKey: 'unlimited_lessons', featureValue: 'false' },
            { featureKey: 'speaking_practice', featureValue: 'false' },
            { featureKey: 'max_lessons_per_day', featureValue: '3' },
          ],
        },
      };
    }
    return subscription;
  }

  async getEntitlements(userId: string) {
    const cached = await this.redis.getJson(\`entitlements:\${userId}\`);
    if (cached) return cached;

    const subscription = await this.getSubscription(userId);
    const entitlements = this.buildEntitlements(subscription);

    await this.redis.setJson(\`entitlements:\${userId}\`, entitlements, 3600);
    return entitlements;
  }

  async cancelSubscription(userId: string, dto: CancelSubscriptionDto) {
    const subscription = await this.prisma.subscription.findUnique({ where: { userId } });
    if (!subscription) throw new NotFoundException('No active subscription found');

    const status = dto.immediate ? 'EXPIRED' : 'CANCELLED';

    const updated = await this.prisma.subscription.update({
      where: { userId },
      data: {
        status,
        cancelAtPeriodEnd: !dto.immediate,
        cancelledAt: new Date(),
      },
    });

    await this.prisma.subscriptionEvent.create({
      data: {
        subscriptionId: subscription.id,
        userId,
        eventType: 'cancelled',
        oldStatus: subscription.status,
        newStatus: status,
      },
    });

    await this.redis.invalidateEntitlements(userId);
    return updated;
  }

  private calculatePeriodEnd(start: Date, interval: string): Date {
    const end = new Date(start);
    if (interval === 'MONTHLY') end.setMonth(end.getMonth() + 1);
    else if (interval === 'YEARLY') end.setFullYear(end.getFullYear() + 1);
    else end.setFullYear(end.getFullYear() + 10);
    return end;
  }

  private buildEntitlements(subscription: any): any {
    const entitlements: Record<string, any> = {};
    const isActive = subscription.status === 'ACTIVE' || subscription.status === 'TRIALING';

    if (!isActive) {
      return {
        ai_tutor: false,
        unlimited_lessons: false,
        speaking_practice: false,
        interview_prep: false,
        max_lessons_per_day: 3,
        max_ai_calls_per_day: 5,
      };
    }

    const features = subscription.plan?.planFeatures || [];
    features.forEach((f: any) => {
      entitlements[f.featureKey] = f.featureValue === 'true' ? true : f.featureValue === 'false' ? false : f.featureValue;
    });
    return entitlements;
  }
}`);

// 9. Subscription Controller
fs.writeFileSync(path.join(src, 'modules', 'subscriptions', 'subscription.controller.ts'),
`import { Controller, Get, Post, Patch, Body, Param, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto, CancelSubscriptionDto } from '../../common/dto/subscription.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('subscriptions')
@UseGuards(JwtAuthGuard)
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get('plans')
  async getPlans() {
    const result = await this.subscriptionService.getPlans();
    return ApiResponse.success(result, 'Plans retrieved successfully');
  }

  @Get('plans/:id')
  async getPlan(@Param('id') id: string) {
    const result = await this.subscriptionService.getPlan(id);
    return ApiResponse.success(result, 'Plan retrieved successfully');
  }

  @Get('me')
  async getMySubscription(@Request() req: any) {
    const result = await this.subscriptionService.getSubscription(req.user.id);
    return ApiResponse.success(result, 'Subscription retrieved successfully');
  }

  @Get('me/entitlements')
  async getMyEntitlements(@Request() req: any) {
    const result = await this.subscriptionService.getEntitlements(req.user.id);
    return ApiResponse.success(result, 'Entitlements retrieved successfully');
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createSubscription(@Request() req: any, @Body() dto: CreateSubscriptionDto) {
    const result = await this.subscriptionService.createSubscription(req.user.id, dto);
    return ApiResponse.success(result, 'Subscription created successfully');
  }

  @Patch('cancel')
  async cancelSubscription(@Request() req: any, @Body() dto: CancelSubscriptionDto) {
    const result = await this.subscriptionService.cancelSubscription(req.user.id, dto);
    return ApiResponse.success(result, 'Subscription cancelled successfully');
  }
}`);

// 10. Kafka Consumer Service
fs.writeFileSync(path.join(src, 'modules', 'events', 'kafka.consumer.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { config } from '../../config/environment.config';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor() {
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
        topics: ['payment-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, message }) => {
          try {
            const value = JSON.parse(message.value.toString());
            console.log(\`📨 Received event in Subscription Service: \${topic}\`, value);
          } catch (e) {}
        },
      });
      console.log('✅ Kafka Consumer started for Subscription Service');
    } catch (err) {
      console.warn('⚠️ Kafka connection deferred (brokers offline):', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.consumer.disconnect(); } catch (e) {}
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
      service: 'subscription-service',
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
import { SubscriptionController } from './modules/subscriptions/subscription.controller';
import { SubscriptionService } from './modules/subscriptions/subscription.service';
import { KafkaConsumerService } from './modules/events/kafka.consumer';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';
import { RedisService } from './database/redis.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, SubscriptionController],
  providers: [
    PrismaService,
    RedisService,
    SubscriptionService,
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
  const port = process.env.PORT || 3015;
  await app.listen(port);
  console.log('💳 Subscription Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('📊 Subscriptions: http://localhost:' + port + '/api/v1/subscriptions');
}
bootstrap().catch((error) => {
  console.error('Failed to start Subscription Service:', error);
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

enum SubscriptionStatus {
  TRIALING
  ACTIVE
  PAST_DUE
  CANCELLED
  EXPIRED
  PENDING
}

enum BillingCycle {
  MONTHLY
  YEARLY
  ONE_TIME
}

enum PlanStatus {
  ACTIVE
  INACTIVE
  ARCHIVED
}

model Plan {
  id            String         @id @default(uuid())
  name          String         @unique
  description   String?        @db.Text
  price         Int
  currency      String         @default("INR")
  interval      BillingCycle
  trialDays     Int?           @map("trial_days")
  status        PlanStatus     @default(ACTIVE)
  features      Json           @default("[]")
  createdAt     DateTime       @default(now()) @map("created_at")
  updatedAt     DateTime       @updatedAt @map("updated_at")
  subscriptions Subscription[]
  planFeatures  PlanFeature[]

  @@map("plans")
  @@index([name])
  @@index([status])
}

model PlanFeature {
  id           String   @id @default(uuid())
  planId       String   @map("plan_id")
  featureKey   String   @map("feature_key")
  featureValue String   @map("feature_value")
  description  String?  @db.Text
  createdAt    DateTime @default(now()) @map("created_at")
  plan         Plan     @relation(fields: [planId], references: [id], onDelete: Cascade)

  @@map("plan_features")
  @@index([planId])
  @@index([featureKey])
  @@unique([planId, featureKey])
}

model Subscription {
  id                 String             @id @default(uuid())
  userId             String             @unique @map("user_id")
  planId             String             @map("plan_id")
  status             SubscriptionStatus @default(PENDING)
  trialStart         DateTime?          @map("trial_start")
  trialEnd           DateTime?          @map("trial_end")
  currentPeriodStart DateTime           @default(now()) @map("current_period_start")
  currentPeriodEnd   DateTime           @map("current_period_end")
  cancelAtPeriodEnd  Boolean            @default(false) @map("cancel_at_period_end")
  cancelledAt        DateTime?          @map("cancelled_at")
  gracePeriodEnd     DateTime?          @map("grace_period_end")
  paymentProvider    String?            @map("payment_provider")
  providerId         String?            @map("provider_id")
  metadata           Json?
  createdAt          DateTime           @default(now()) @map("created_at")
  updatedAt          DateTime           @updatedAt @map("updated_at")
  plan               Plan               @relation(fields: [planId], references: [id])
  events             SubscriptionEvent[]

  @@map("subscriptions")
  @@index([userId])
  @@index([planId])
  @@index([status])
}

model SubscriptionEvent {
  id             String       @id @default(uuid())
  subscriptionId String       @map("subscription_id")
  userId         String       @map("user_id")
  eventType      String       @map("event_type")
  oldStatus      String?      @map("old_status")
  newStatus      String?      @map("new_status")
  metadata       Json?
  createdAt      DateTime     @default(now()) @map("created_at")
  subscription   Subscription @relation(fields: [subscriptionId], references: [id], onDelete: Cascade)

  @@map("subscription_events")
  @@index([subscriptionId])
  @@index([userId])
}`);

// 14. Prisma Seed
fs.writeFileSync(path.join(root, 'prisma', 'seed.js'),
`const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding subscription plans...');
  const plans = [
    {
      name: 'Free',
      description: 'Basic plan to get started',
      price: 0,
      currency: 'INR',
      interval: 'ONE_TIME',
      trialDays: 0,
      features: [
        { featureKey: 'ai_tutor', featureValue: 'false' },
        { featureKey: 'unlimited_lessons', featureValue: 'false' },
        { featureKey: 'speaking_practice', featureValue: 'false' },
        { featureKey: 'interview_prep', featureValue: 'false' },
        { featureKey: 'max_lessons_per_day', featureValue: '3' },
        { featureKey: 'max_ai_calls_per_day', featureValue: '5' },
      ],
    },
    {
      name: 'Premium',
      description: 'Full access to all features',
      price: 29900,
      currency: 'INR',
      interval: 'MONTHLY',
      trialDays: 7,
      features: [
        { featureKey: 'ai_tutor', featureValue: 'true' },
        { featureKey: 'unlimited_lessons', featureValue: 'true' },
        { featureKey: 'speaking_practice', featureValue: 'true' },
        { featureKey: 'interview_prep', featureValue: 'true' },
        { featureKey: 'max_lessons_per_day', featureValue: 'unlimited' },
        { featureKey: 'max_ai_calls_per_day', featureValue: 'unlimited' },
      ],
    },
    {
      name: 'Enterprise',
      description: 'For teams and organizations',
      price: 99900,
      currency: 'INR',
      interval: 'MONTHLY',
      trialDays: 14,
      features: [
        { featureKey: 'ai_tutor', featureValue: 'true' },
        { featureKey: 'unlimited_lessons', featureValue: 'true' },
        { featureKey: 'speaking_practice', featureValue: 'true' },
        { featureKey: 'interview_prep', featureValue: 'true' },
        { featureKey: 'max_lessons_per_day', featureValue: 'unlimited' },
        { featureKey: 'max_ai_calls_per_day', featureValue: 'unlimited' },
        { featureKey: 'team_management', featureValue: 'true' },
        { featureKey: 'custom_modules', featureValue: 'true' },
      ],
    },
  ];

  for (const planData of plans) {
    const { features, ...planInfo } = planData;
    let plan = await prisma.plan.findUnique({ where: { name: planInfo.name } });

    if (!plan) {
      plan = await prisma.plan.create({ data: planInfo });
      console.log('✅ Created plan: ' + planInfo.name);
    } else {
      console.log('ℹ️ Plan already exists: ' + planInfo.name);
    }

    for (const feature of features) {
      const existingFeature = await prisma.planFeature.findUnique({
        where: { planId_featureKey: { planId: plan.id, featureKey: feature.featureKey } },
      });
      if (!existingFeature) {
        await prisma.planFeature.create({
          data: { planId: plan.id, ...feature },
        });
        console.log('  ✅ Added feature: ' + feature.featureKey);
      }
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());`);

console.log('✅ setup-subscription.js written successfully.');
