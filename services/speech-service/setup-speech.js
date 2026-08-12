const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'speech'),
  path.join(src, 'modules', 'stt'),
  path.join(src, 'modules', 'tts'),
  path.join(src, 'modules', 'storage'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/speech-service',
  version: '0.1.0',
  private: true,
  description: 'Speech Processing Service',
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
    'kafkajs': '^2.2.4',
    'multer': '^1.4.5-lts.1'
  },
  devDependencies: {
    '@types/node': '^20.0.0',
    '@types/multer': '^1.4.11',
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
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/speech_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="speech-service"
PORT=3012
NODE_ENV=development
LOG_LEVEL=debug
MAX_FILE_SIZE=10485760
ALLOWED_FORMATS=mp3,wav,ogg,webm
SAMPLE_RATE=16000
S3_BUCKET=english-learning-audio
S3_REGION=ap-south-1
CDN_URL=https://cdn.englishlearning.com
PRESIGNED_EXPIRY=3600`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3012', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/speech_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380', 10),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
};`);

// 5. Common Response DTO
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

// 6. Speech DTO
fs.writeFileSync(path.join(src, 'common', 'dto', 'speech.dto.ts'),
`import { IsString, IsOptional, IsUUID, IsNumber, Min, Max } from 'class-validator';

export class UploadAudioDto {
  @IsString()
  @IsOptional()
  language?: string = 'en-US';

  @IsString()
  @IsOptional()
  purpose?: string;

  @IsString()
  @IsOptional()
  referenceText?: string;
}

export class GenerateSpeechDto {
  @IsString()
  text: string;

  @IsString()
  @IsOptional()
  voice?: string;

  @IsString()
  @IsOptional()
  language?: string = 'en-US';

  @IsNumber()
  @IsOptional()
  @Min(0.5)
  @Max(2.0)
  speed?: number = 1.0;
}`);

// 7. Database Services
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
      console.log('✅ Redis connected for Speech Service');
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

// 8. Storage, STT & TTS Services
fs.writeFileSync(path.join(src, 'modules', 'storage', 'storage.service.ts'),
`import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StorageService {
  async uploadFile(file: any, userId: string): Promise<string> {
    const fileName = file?.originalname || 'audio.mp3';
    const key = \`audio/\${userId}/\${uuidv4()}-\${fileName}\`;
    return key;
  }

  async getPresignedUrl(key: string): Promise<string> {
    return \`https://cdn.englishlearning.com/\${key}\`;
  }

  async getFile(key: string): Promise<Buffer> {
    return Buffer.from('mock audio buffer');
  }
}`);

fs.writeFileSync(path.join(src, 'modules', 'stt', 'stt.service.ts'),
`import { Injectable } from '@nestjs/common';

@Injectable()
export class STTService {
  async transcribe(audioBuffer: Buffer, language: string = 'en-US'): Promise<any> {
    const mockTranscripts = [
      'Hello, I would like to improve my English speaking skills.',
      'Learning English grammar is very interesting and fun.',
      'I practice my vocabulary every day using this application.',
    ];
    const transcript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
    return {
      text: transcript,
      confidence: 0.92,
      language,
      provider: 'mock-whisper',
      wordTimings: transcript.split(' ').map((word, i) => ({ word, start: i * 300, end: (i + 1) * 300 })),
    };
  }
}`);

fs.writeFileSync(path.join(src, 'modules', 'tts', 'tts.service.ts'),
`import { Injectable } from '@nestjs/common';

@Injectable()
export class TTSService {
  async synthesize(text: string, voice: string = 'en-US-Female'): Promise<any> {
    return {
      audioBuffer: Buffer.from('mock synthesized speech'),
      audioFormat: 'mp3',
      duration: text.length * 0.08,
      provider: 'mock-aws-polly',
    };
  }
}`);

// 9. Speech Processing Engine
fs.writeFileSync(path.join(src, 'modules', 'speech', 'speech.service.ts'),
`import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { StorageService } from '../storage/storage.service';
import { STTService } from '../stt/stt.service';
import { TTSService } from '../tts/tts.service';
import { UploadAudioDto, GenerateSpeechDto } from '../../common/dto/speech.dto';

@Injectable()
export class SpeechService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly storage: StorageService,
    private readonly stt: STTService,
    private readonly tts: TTSService,
  ) {}

  async uploadAudio(userId: string, file: any, dto: UploadAudioDto) {
    const fileKey = await this.storage.uploadFile(file, userId);

    const job = await this.prisma.speechJob.create({
      data: {
        userId,
        type: 'STT',
        status: 'PENDING',
        fileKey,
        fileSize: file?.size || 1024,
        fileFormat: file?.mimetype || 'audio/mp3',
        language: dto.language || 'en-US',
      },
    });

    await this.prisma.audioMetadata.create({
      data: {
        userId,
        speechJobId: job.id,
        fileKey,
        fileName: file?.originalname || 'audio.mp3',
        fileSize: file?.size || 1024,
        fileFormat: file?.mimetype || 'audio/mp3',
        sampleRate: 16000,
        audioDuration: 3.5,
        metadata: { purpose: dto.purpose, referenceText: dto.referenceText },
      },
    });

    this.processSTTJob(job.id);
    return job;
  }

  async processSTTJob(jobId: string) {
    try {
      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: { status: 'PROCESSING' },
      });

      const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
      if (!job) return;

      const audioBuffer = await this.storage.getFile(job.fileKey || '');
      const result = await this.stt.transcribe(audioBuffer, job.language);

      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: {
          status: 'COMPLETED',
          transcript: result.text,
          confidence: result.confidence,
          wordTimings: result.wordTimings,
          provider: result.provider,
          completedAt: new Date(),
        },
      });

      await this.redis.setJson(\`speech:stt:\${jobId}\`, {
        transcript: result.text,
        confidence: result.confidence,
      }, 3600);
    } catch (error) {
      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: { status: 'FAILED', errorMessage: error.message },
      });
    }
  }

  async getTranscription(jobId: string, userId: string) {
    const cached = await this.redis.getJson(\`speech:stt:\${jobId}\`);
    if (cached) return cached;

    const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
    if (!job) throw new NotFoundException('Job not found');
    if (job.userId !== userId) throw new BadRequestException('Unauthorized');

    return {
      jobId: job.id,
      status: job.status,
      transcript: job.transcript,
      confidence: job.confidence,
      errorMessage: job.errorMessage,
      completedAt: job.completedAt,
    };
  }

  async generateSpeech(userId: string, dto: GenerateSpeechDto) {
    const job = await this.prisma.speechJob.create({
      data: {
        userId,
        type: 'TTS',
        status: 'PENDING',
        text: dto.text,
        voice: dto.voice || 'en-US-Female',
        language: dto.language || 'en-US',
      },
    });

    this.processTTSJob(job.id, userId);
    return job;
  }

  async processTTSJob(jobId: string, userId: string) {
    try {
      await this.prisma.speechJob.update({ where: { id: jobId }, data: { status: 'PROCESSING' } });
      const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
      if (!job) return;

      const result = await this.tts.synthesize(job.text || '');
      const outputKey = \`speech/\${userId}/\${jobId}.mp3\`;

      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: {
          status: 'COMPLETED',
          outputKey,
          provider: result.provider,
          audioDuration: result.duration,
          completedAt: new Date(),
        },
      });
    } catch (error) {
      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: { status: 'FAILED', errorMessage: error.message },
      });
    }
  }

  async getSpeechAudio(jobId: string, userId: string) {
    const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
    if (!job) throw new NotFoundException('Job not found');
    if (job.userId !== userId) throw new BadRequestException('Unauthorized');

    const audioUrl = await this.storage.getPresignedUrl(job.outputKey || 'demo.mp3');
    return { audioUrl, job };
  }

  async getUserJobs(userId: string, type?: string, status?: string) {
    const where: any = { userId };
    if (type) where.type = type;
    if (status) where.status = status;
    return this.prisma.speechJob.findMany({ where, orderBy: { createdAt: 'desc' }, take: 50 });
  }

  async getJobStatus(jobId: string, userId: string) {
    const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
    if (!job) throw new NotFoundException('Job not found');
    if (job.userId !== userId) throw new BadRequestException('Unauthorized');
    return {
      id: job.id,
      type: job.type,
      status: job.status,
      errorMessage: job.errorMessage,
      createdAt: job.createdAt,
      completedAt: job.completedAt,
    };
  }
}`);

// 10. Speech Controller
fs.writeFileSync(path.join(src, 'modules', 'speech', 'speech.controller.ts'),
`import { Controller, Get, Post, Body, Param, Query, UseGuards, Request, UploadedFile, UseInterceptors, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SpeechService } from './speech.service';
import { UploadAudioDto, GenerateSpeechDto } from '../../common/dto/speech.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('speech')
@UseGuards(JwtAuthGuard)
export class SpeechController {
  constructor(private readonly speechService: SpeechService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('audio'))
  @HttpCode(HttpStatus.ACCEPTED)
  async uploadAudio(
    @Request() req: any,
    @UploadedFile() file: any,
    @Body() dto: UploadAudioDto,
  ) {
    const result = await this.speechService.uploadAudio(req.user.id, file, dto);
    return ApiResponse.success(result, 'Audio uploaded and processing started');
  }

  @Get('transcription/:jobId')
  async getTranscription(@Param('jobId', ParseUUIDPipe) jobId: string, @Request() req: any) {
    const result = await this.speechService.getTranscription(jobId, req.user.id);
    return ApiResponse.success(result, 'Transcription retrieved successfully');
  }

  @Post('tts')
  @HttpCode(HttpStatus.ACCEPTED)
  async generateSpeech(@Request() req: any, @Body() dto: GenerateSpeechDto) {
    const result = await this.speechService.generateSpeech(req.user.id, dto);
    return ApiResponse.success(result, 'Speech generation started');
  }

  @Get('tts/:jobId')
  async getSpeechAudio(@Param('jobId', ParseUUIDPipe) jobId: string, @Request() req: any) {
    const result = await this.speechService.getSpeechAudio(jobId, req.user.id);
    return ApiResponse.success(result, 'Speech audio retrieved successfully');
  }

  @Get('jobs')
  async getJobs(@Request() req: any, @Query('type') type?: string, @Query('status') status?: string) {
    const result = await this.speechService.getUserJobs(req.user.id, type, status);
    return ApiResponse.success(result, 'Jobs retrieved successfully');
  }

  @Get('jobs/:jobId/status')
  async getJobStatus(@Param('jobId', ParseUUIDPipe) jobId: string, @Request() req: any) {
    const result = await this.speechService.getJobStatus(jobId, req.user.id);
    return ApiResponse.success(result, 'Job status retrieved successfully');
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
      service: 'speech-service',
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
import { SpeechController } from './modules/speech/speech.controller';
import { SpeechService } from './modules/speech/speech.service';
import { STTService } from './modules/stt/stt.service';
import { TTSService } from './modules/tts/tts.service';
import { StorageService } from './modules/storage/storage.service';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';
import { RedisService } from './database/redis.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, SpeechController],
  providers: [
    PrismaService,
    RedisService,
    SpeechService,
    STTService,
    TTSService,
    StorageService,
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
  const port = process.env.PORT || 3012;
  await app.listen(port);
  console.log('🎤 Speech Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('🗣️ Speech: http://localhost:' + port + '/api/v1/speech');
}
bootstrap().catch((error) => {
  console.error('Failed to start Speech Service:', error);
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

enum SpeechJobStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
  CANCELLED
}

enum SpeechJobType {
  STT
  TTS
  PRONUNCIATION
}

model SpeechJob {
  id                 String          @id @default(uuid())
  userId             String          @map("user_id")
  type               SpeechJobType
  status             SpeechJobStatus @default(PENDING)
  fileKey            String?         @map("file_key")
  fileSize           Int?            @map("file_size")
  fileFormat         String?         @map("file_format")
  audioDuration      Float?          @map("audio_duration")
  sampleRate         Int?            @map("sample_rate")
  language           String          @default("en-US")
  provider           String?
  transcript         String?         @db.Text
  confidence         Float?
  wordTimings        Json?           @map("word_timings")
  text               String?         @db.Text
  voice              String?
  outputKey          String?         @map("output_key")
  pronunciationScore Float?          @map("pronunciation_score")
  errorMessage       String?         @map("error_message")
  createdAt          DateTime        @default(now()) @map("created_at")
  updatedAt          DateTime        @updatedAt @map("updated_at")
  completedAt        DateTime?       @map("completed_at")
  metadata           AudioMetadata[]

  @@map("speech_jobs")
  @@index([userId])
  @@index([type])
  @@index([status])
}

model AudioMetadata {
  id            String    @id @default(uuid())
  userId        String    @map("user_id")
  speechJobId   String?   @map("speech_job_id")
  fileKey       String    @map("file_key")
  fileName      String    @map("file_name")
  fileSize      Int       @map("file_size")
  fileFormat    String    @map("file_format")
  sampleRate    Int       @map("sample_rate")
  audioDuration Float     @map("audio_duration")
  metadata      Json?
  createdAt     DateTime  @default(now()) @map("created_at")
  speechJob     SpeechJob? @relation(fields: [speechJobId], references: [id])

  @@map("audio_metadata")
  @@index([userId])
  @@index([fileKey])
}`);

console.log('✅ setup-speech.js written successfully.');
