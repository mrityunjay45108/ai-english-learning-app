const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'notifications'),
  path.join(src, 'modules', 'templates'),
  path.join(src, 'modules', 'preferences'),
  path.join(src, 'modules', 'delivery'),
  path.join(src, 'modules', 'events'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/notification-service',
  version: '0.1.0',
  private: true,
  description: 'Notification Service',
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
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/notification_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="notification-service"
KAFKA_GROUP_ID="notification-service-group"
PORT=3014
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
    port: parseInt(process.env.PORT || '3014', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/notification_db',
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
    clientId: process.env.KAFKA_CLIENT_ID || 'notification-service',
    groupId: process.env.KAFKA_GROUP_ID || 'notification-service-group',
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

// 6. Notification DTO
fs.writeFileSync(path.join(src, 'common', 'dto', 'notification.dto.ts'),
`import { IsString, IsOptional, IsUUID, IsEnum, IsBoolean } from 'class-validator';

export enum NotificationChannel {
  EMAIL = 'EMAIL',
  PUSH = 'PUSH',
  IN_APP = 'IN_APP',
  SMS = 'SMS',
}

export class NotificationQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(NotificationChannel) channel?: NotificationChannel;
  @IsOptional() status?: string;
  @IsOptional() @IsBoolean() unreadOnly?: boolean;
}

export class UpdatePreferencesDto {
  @IsOptional() @IsBoolean() emailWeeklyReport?: boolean;
  @IsOptional() @IsBoolean() emailMarketing?: boolean;
  @IsOptional() @IsBoolean() pushLessonReminder?: boolean;
  @IsOptional() @IsBoolean() pushStreakAlert?: boolean;
  @IsOptional() @IsBoolean() pushAchievement?: boolean;
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
      console.log('✅ Redis connected for Notification Service');
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

  getClient(): Redis {
    return this.client;
  }
}`);

// 8. Delivery Providers (Mock)
fs.writeFileSync(path.join(src, 'modules', 'delivery', 'email-provider.service.ts'),
`import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailProvider {
  async send(to: string, subject: string, body: string): Promise<any> {
    console.log(\`📧 Sending Email to \${to}: [\${subject}] \${body.substring(0, 50)}...\`);
    return { success: true, messageId: \`email-\${Date.now()}\`, provider: 'mock-sendgrid' };
  }
}`);

fs.writeFileSync(path.join(src, 'modules', 'delivery', 'push-provider.service.ts'),
`import { Injectable } from '@nestjs/common';

@Injectable()
export class PushProvider {
  async send(deviceToken: string, title: string, body: string): Promise<any> {
    console.log(\`📱 Sending Push Notification: [\${title}] \${body}\`);
    return { success: true, messageId: \`push-\${Date.now()}\`, provider: 'mock-fcm' };
  }
}`);

// 9. Notification Service
fs.writeFileSync(path.join(src, 'modules', 'notifications', 'notification.service.ts'),
`import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { EmailProvider } from '../delivery/email-provider.service';
import { PushProvider } from '../delivery/push-provider.service';
import { NotificationChannel } from '../../common/dto/notification.dto';

@Injectable()
export class NotificationService {
  private readonly processedEvents = new Set<string>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly emailProvider: EmailProvider,
    private readonly pushProvider: PushProvider,
  ) {}

  async sendNotification(data: {
    userId: string;
    channel: NotificationChannel;
    type: string;
    title: string;
    body: string;
    data?: any;
    priority?: any;
  }) {
    const preferences = await this.getUserPreferences(data.userId);
    if (!this.isChannelAllowed(data.userId, data.channel, data.type, preferences)) {
      console.log(\`⏭️ User \${data.userId} opted out of \${data.channel} notifications\`);
      return null;
    }

    const notification = await this.prisma.notification.create({
      data: {
        userId: data.userId,
        channel: data.channel,
        type: data.type,
        title: data.title,
        body: data.body,
        data: data.data,
        priority: data.priority || 'MEDIUM',
        status: 'PENDING',
      },
    });

    try {
      let result;
      switch (data.channel) {
        case 'EMAIL':
          result = await this.emailProvider.send(data.userId, data.title, data.body);
          break;
        case 'PUSH':
          result = await this.pushProvider.send(data.userId, data.title, data.body);
          break;
        case 'IN_APP':
          result = { success: true, messageId: \`inapp-\${notification.id}\` };
          break;
        default:
          result = { success: true };
      }

      await this.prisma.notification.update({
        where: { id: notification.id },
        data: {
          status: 'SENT',
          sentAt: new Date(),
          providerId: result?.messageId,
          providerResponse: result,
        },
      });
      return notification;
    } catch (error) {
      await this.prisma.notification.update({
        where: { id: notification.id },
        data: { status: 'FAILED', errorMessage: error.message },
      });
      throw error;
    }
  }

  async getUserNotifications(userId: string, query: any) {
    const { page = 1, limit = 20, channel, status, unreadOnly } = query;
    const skip = (page - 1) * limit;
    const where: any = { userId };
    if (channel) where.channel = channel;
    if (status) where.status = status;
    if (unreadOnly) where.status = { not: 'READ' };

    const [data, total] = await Promise.all([
      this.prisma.notification.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take: limit }),
      this.prisma.notification.count({ where }),
    ]);

    return {
      data,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async markAsRead(userId: string, notificationId: string) {
    const notification = await this.prisma.notification.findUnique({ where: { id: notificationId } });
    if (!notification) throw new NotFoundException('Notification not found');

    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { status: 'READ', readAt: new Date() },
    });
  }

  async markAllAsRead(userId: string, channel?: string) {
    const where: any = { userId, status: { not: 'READ' } };
    if (channel) where.channel = channel;
    return this.prisma.notification.updateMany({
      where,
      data: { status: 'READ', readAt: new Date() },
    });
  }

  async getUnreadCount(userId: string) {
    return this.prisma.notification.count({
      where: { userId, status: { not: 'READ' } },
    });
  }

  async getUserPreferences(userId: string) {
    let preferences = await this.prisma.notificationPreference.findUnique({ where: { userId } });
    if (!preferences) {
      preferences = await this.prisma.notificationPreference.create({ data: { userId } });
    }
    return preferences;
  }

  async updatePreferences(userId: string, data: any) {
    return this.prisma.notificationPreference.update({ where: { userId }, data });
  }

  private isChannelAllowed(userId: string, channel: string, type: string, preferences: any): boolean {
    if (channel === 'EMAIL') {
      if (type === 'weekly_report') return preferences.emailWeeklyReport;
      if (type === 'marketing') return preferences.emailMarketing;
      if (type === 'lesson_reminder') return preferences.emailLessonReminder;
      return true;
    }
    if (channel === 'PUSH') {
      if (type === 'lesson_reminder') return preferences.pushLessonReminder;
      if (type === 'streak_alert') return preferences.pushStreakAlert;
      if (type === 'achievement') return preferences.pushAchievement;
      return true;
    }
    if (channel === 'IN_APP') return preferences.inAppAll;
    return true;
  }

  async handleUserRegistered(event: any) {
    const { userId, firstName } = event;
    await this.sendNotification({
      userId,
      channel: NotificationChannel.EMAIL,
      type: 'welcome',
      title: 'Welcome to English Learning Platform! 🎉',
      body: \`Hi \${firstName || 'Learner'}, start your first lesson today.\`,
    });
  }

  async handleLessonCompleted(event: any) {
    const { userId, lessonId } = event;
    await this.sendNotification({
      userId,
      channel: NotificationChannel.IN_APP,
      type: 'lesson_complete',
      title: 'Great Job! 🎓',
      body: 'You completed a lesson! Keep going!',
      data: { lessonId },
    });
  }

  async handleAchievementUnlocked(event: any) {
    const { userId, achievementName } = event;
    await this.sendNotification({
      userId,
      channel: NotificationChannel.PUSH,
      type: 'achievement',
      title: '🏆 Achievement Unlocked!',
      body: \`You earned: \${achievementName}\`,
    });
  }
}`);

// 10. Notification Controller
fs.writeFileSync(path.join(src, 'modules', 'notifications', 'notification.controller.ts'),
`import { Controller, Get, Patch, Body, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationQueryDto, UpdatePreferencesDto } from '../../common/dto/notification.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async getNotifications(@Request() req: any, @Query() query: NotificationQueryDto) {
    const result = await this.notificationService.getUserNotifications(req.user.id, query);
    return ApiResponse.success(result.data, 'Notifications retrieved successfully', result.pagination);
  }

  @Get('unread/count')
  async getUnreadCount(@Request() req: any) {
    const result = await this.notificationService.getUnreadCount(req.user.id);
    return ApiResponse.success({ count: result }, 'Unread count retrieved successfully');
  }

  @Patch('read/:id')
  async markAsRead(@Param('id', ParseUUIDPipe) id: string, @Request() req: any) {
    const result = await this.notificationService.markAsRead(req.user.id, id);
    return ApiResponse.success(result, 'Notification marked as read');
  }

  @Patch('read/all')
  async markAllAsRead(@Request() req: any, @Body() dto: any) {
    const result = await this.notificationService.markAllAsRead(req.user.id, dto?.channel);
    return ApiResponse.success(result, 'All notifications marked as read');
  }

  @Get('preferences')
  async getPreferences(@Request() req: any) {
    const result = await this.notificationService.getUserPreferences(req.user.id);
    return ApiResponse.success(result, 'Preferences retrieved successfully');
  }

  @Patch('preferences')
  async updatePreferences(@Request() req: any, @Body() dto: UpdatePreferencesDto) {
    const result = await this.notificationService.updatePreferences(req.user.id, dto);
    return ApiResponse.success(result, 'Preferences updated successfully');
  }
}`);

// 11. Kafka Consumer Service
fs.writeFileSync(path.join(src, 'modules', 'events', 'kafka.consumer.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { NotificationService } from '../notifications/notification.service';
import { config } from '../../config/environment.config';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private readonly notificationService: NotificationService) {
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
        topics: ['user-events', 'lesson-events', 'achievement-events', 'subscription-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, message }) => {
          try {
            const value = JSON.parse(message.value.toString());
            console.log(\`📨 Received event in Notification Service: \${topic}\`, value);
          } catch (e) {}
        },
      });
      console.log('✅ Kafka Consumer started for Notification Service');
    } catch (err) {
      console.warn('⚠️ Kafka connection deferred (brokers offline):', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.consumer.disconnect(); } catch (e) {}
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
    } catch {
      database = false;
    }
    return {
      status: database ? 'healthy' : 'unhealthy',
      service: 'notification-service',
      version: '1.0.0',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 13. App Module & Main.ts
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { NotificationController } from './modules/notifications/notification.controller';
import { NotificationService } from './modules/notifications/notification.service';
import { EmailProvider } from './modules/delivery/email-provider.service';
import { PushProvider } from './modules/delivery/push-provider.service';
import { KafkaConsumerService } from './modules/events/kafka.consumer';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';
import { RedisService } from './database/redis.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, NotificationController],
  providers: [
    PrismaService,
    RedisService,
    NotificationService,
    EmailProvider,
    PushProvider,
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
  const port = process.env.PORT || 3014;
  await app.listen(port);
  console.log('🔔 Notification Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('📬 Notifications: http://localhost:' + port + '/api/v1/notifications');
}
bootstrap().catch((error) => {
  console.error('Failed to start Notification Service:', error);
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

enum NotificationChannel {
  EMAIL
  PUSH
  IN_APP
  SMS
}

enum NotificationStatus {
  PENDING
  SENT
  DELIVERED
  READ
  FAILED
  CANCELLED
}

enum NotificationPriority {
  LOW
  MEDIUM
  HIGH
  URGENT
}

model Notification {
  id               String               @id @default(uuid())
  userId           String               @map("user_id")
  channel          NotificationChannel
  type             String
  title            String
  body             String               @db.Text
  data             Json?
  priority         NotificationPriority @default(MEDIUM)
  status           NotificationStatus   @default(PENDING)
  sentAt           DateTime?            @map("sent_at")
  deliveredAt      DateTime?            @map("delivered_at")
  readAt           DateTime?            @map("read_at")
  providerId       String?              @map("provider_id")
  providerResponse Json?                @map("provider_response")
  errorMessage     String?              @map("error_message")
  createdAt        DateTime             @default(now()) @map("created_at")
  updatedAt        DateTime             @updatedAt @map("updated_at")

  @@map("notifications")
  @@index([userId])
  @@index([channel])
  @@index([status])
}

model NotificationTemplate {
  id        String              @id @default(uuid())
  type      String              @unique
  channel   NotificationChannel
  title     String
  body      String              @db.Text
  priority  NotificationPriority @default(MEDIUM)
  isActive  Boolean             @default(true) @map("is_active")
  createdAt DateTime            @default(now()) @map("created_at")
  updatedAt DateTime            @updatedAt @map("updated_at")

  @@map("notification_templates")
  @@index([type])
}

model NotificationPreference {
  id                  String   @id @default(uuid())
  userId              String   @unique @map("user_id")
  emailWeeklyReport   Boolean  @default(true) @map("email_weekly_report")
  emailMarketing      Boolean  @default(true) @map("email_marketing")
  emailLessonReminder Boolean  @default(true) @map("email_lesson_reminder")
  pushLessonReminder  Boolean  @default(true) @map("push_lesson_reminder")
  pushStreakAlert     Boolean  @default(true) @map("push_streak_alert")
  pushAchievement    Boolean  @default(true) @map("push_achievement")
  inAppAll            Boolean  @default(true) @map("in_app_all")
  createdAt           DateTime @default(now()) @map("created_at")
  updatedAt           DateTime @updatedAt @map("updated_at")

  @@map("notification_preferences")
  @@index([userId])
}`);

console.log('✅ setup-notification.js written successfully.');
