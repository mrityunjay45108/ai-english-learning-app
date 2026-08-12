const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'llm', 'providers'),
  path.join(src, 'modules', 'ratelimit'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'common', 'dto'),
  path.join(src, 'common', 'enums'),
  path.join(src, 'common', 'interfaces'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/ai-gateway',
  version: '0.1.0',
  private: true,
  description: 'AI Gateway Service',
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
    'class-validator': '^0.14.0',
    'class-transformer': '^0.5.1',
    'reflect-metadata': '^0.1.13',
    'rxjs': '^7.8.0',
    'dotenv': '^16.0.0',
    'ioredis': '^6.0.0'
  },
  devDependencies: {
    '@types/node': '^20.0.0',
    'typescript': '5.3.3',
    'ts-node-dev': '^2.0.0'
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
`JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
PORT=3010
NODE_ENV=development
LOG_LEVEL=debug
OPENAI_API_KEY="your-openai-api-key"
OPENAI_MODEL="gpt-3.5-turbo"
OPENAI_TIMEOUT=30000
ANTHROPIC_API_KEY="your-anthropic-api-key"
ANTHROPIC_MODEL="claude-3-sonnet-20240229"
ANTHROPIC_TIMEOUT=30000`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3010', 10),
    env: process.env.NODE_ENV || 'development',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380', 10),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
  llm: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY || 'demo_key',
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      baseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
      timeout: parseInt(process.env.OPENAI_TIMEOUT || '30000', 10),
    },
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY || 'demo_key',
      model: process.env.ANTHROPIC_MODEL || 'claude-3-sonnet-20240229',
      baseUrl: process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com/v1',
      timeout: parseInt(process.env.ANTHROPIC_TIMEOUT || '30000', 10),
    },
  },
};`);

// 5. Enums & Interfaces
fs.writeFileSync(path.join(src, 'common', 'enums', 'plan.enum.ts'),
`export enum Plan {
  FREE = 'FREE',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE',
}`);

fs.writeFileSync(path.join(src, 'common', 'dto', 'response.dto.ts'),
`export class ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
  requestId?: string;
  constructor(partial: Partial<ApiResponse<T>>) {
    this.success = partial.success ?? true;
    this.data = partial.data;
    this.error = partial.error;
    this.message = partial.message;
    this.timestamp = new Date().toISOString();
    this.requestId = partial.requestId;
  }
  static success<T>(data: T, message?: string, requestId?: string): ApiResponse<T> {
    return new ApiResponse<T>({ success: true, data, message, requestId });
  }
  static error(error: string, message?: string, requestId?: string): ApiResponse<null> {
    return new ApiResponse<null>({ success: false, error, message, requestId });
  }
}`);

fs.writeFileSync(path.join(src, 'common', 'interfaces', 'llm-provider.interface.ts'),
`export interface LLMRequest {
  userId: string;
  feature: string;
  model?: string;
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
  temperature?: number;
  maxTokens?: number;
  metadata?: Record<string, any>;
  requestId: string;
}

export interface LLMResponse {
  content: string;
  model: string;
  provider: string;
  usage: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
  latency: number;
  requestId: string;
  costEstimate?: number;
}

export interface LLMProvider {
  name: string;
  models: string[];
  generate(request: LLMRequest): Promise<LLMResponse>;
  isAvailable(): Promise<boolean>;
}`);

// 6. Redis Service
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
      console.log('✅ Redis connected for AI Gateway');
    } catch (err) {
      console.warn('⚠️ Redis connection deferred:', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.client.quit(); } catch (e) {}
  }

  async incr(key: string): Promise<number> {
    try { return await this.client.incr(key); } catch (e) { return 1; }
  }

  async expire(key: string, ttl: number): Promise<void> {
    try { await this.client.expire(key, ttl); } catch (e) {}
  }

  async ttl(key: string): Promise<number> {
    try { return await this.client.ttl(key); } catch (e) { return 60; }
  }

  getClient(): Redis {
    return this.client;
  }
}`);

// 7. Rate Limiter Service
fs.writeFileSync(path.join(src, 'modules', 'ratelimit', 'rate-limiter.service.ts'),
`import { Injectable } from '@nestjs/common';
import { RedisService } from '../../database/redis.service';
import { Plan } from '../../common/enums/plan.enum';

@Injectable()
export class RateLimiterService {
  constructor(private readonly redis: RedisService) {}

  async checkLimit(userId: string, feature: string, plan: Plan = Plan.FREE) {
    const key = \`ai:ratelimit:\${userId}:\${feature}\`;
    const limits = this.getLimits(plan, feature);
    const current = await this.redis.incr(key);

    if (current === 1) {
      await this.redis.expire(key, limits.ttl);
    }
    const ttl = await this.redis.ttl(key);

    if (current > limits.limit) {
      return { allowed: false, current, limit: limits.limit, ttl, retryAfter: ttl };
    }
    return { allowed: true, current, limit: limits.limit, ttl };
  }

  private getLimits(plan: Plan, feature: string) {
    const featureLimits: Record<string, { free: number; premium: number; enterprise: number }> = {
      chat: { free: 10, premium: 50, enterprise: 200 },
      grammar: { free: 20, premium: 100, enterprise: 500 },
      tutor: { free: 5, premium: 30, enterprise: 100 },
    };
    const limits = featureLimits[feature] || featureLimits.chat;
    const limitMap = { [Plan.FREE]: limits.free, [Plan.PREMIUM]: limits.premium, [Plan.ENTERPRISE]: limits.enterprise };
    return { limit: limitMap[plan] || limits.free, ttl: 60 };
  }
}`);

// 8. Providers (OpenAI + Anthropic)
fs.writeFileSync(path.join(src, 'modules', 'llm', 'providers', 'openai.provider.ts'),
`import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { config } from '../../../config/environment.config';
import { LLMProvider, LLMRequest, LLMResponse } from '../../../common/interfaces/llm-provider.interface';

@Injectable()
export class OpenAIProvider implements LLMProvider {
  name = 'openai';
  models = ['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo'];

  constructor(private readonly httpService: HttpService) {}

  async generate(request: LLMRequest): Promise<LLMResponse> {
    const startTime = Date.now();
    try {
      if (config.llm.openai.apiKey === 'your-openai-api-key' || config.llm.openai.apiKey === 'demo_key') {
        return {
          content: 'Hello! This is a simulated AI response from AI Gateway (OpenAI Provider).',
          model: request.model || 'gpt-3.5-turbo',
          provider: this.name,
          usage: { inputTokens: 15, outputTokens: 20, totalTokens: 35 },
          latency: Date.now() - startTime,
          requestId: request.requestId,
          costEstimate: 0.0001,
        };
      }

      const response = await firstValueFrom(
        this.httpService.post(
          \`\${config.llm.openai.baseUrl}/chat/completions\`,
          {
            model: request.model || config.llm.openai.model,
            messages: request.messages,
            temperature: request.temperature || 0.7,
            max_tokens: request.maxTokens || 1000,
          },
          {
            headers: {
              Authorization: \`Bearer \${config.llm.openai.apiKey}\`,
              'Content-Type': 'application/json',
            },
            timeout: config.llm.openai.timeout,
          }
        )
      );
      const data = response.data;
      return {
        content: data.choices[0].message.content,
        model: data.model,
        provider: this.name,
        usage: {
          inputTokens: data.usage.prompt_tokens,
          outputTokens: data.usage.completion_tokens,
          totalTokens: data.usage.total_tokens,
        },
        latency: Date.now() - startTime,
        requestId: request.requestId,
        costEstimate: (data.usage.total_tokens * 0.0015) / 1000,
      };
    } catch (error) {
      throw new Error('OPENAI_PROVIDER_ERROR: ' + error.message);
    }
  }

  async isAvailable(): Promise<boolean> {
    return true;
  }
}`);

fs.writeFileSync(path.join(src, 'modules', 'llm', 'providers', 'anthropic.provider.ts'),
`import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { config } from '../../../config/environment.config';
import { LLMProvider, LLMRequest, LLMResponse } from '../../../common/interfaces/llm-provider.interface';

@Injectable()
export class AnthropicProvider implements LLMProvider {
  name = 'anthropic';
  models = ['claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307'];

  constructor(private readonly httpService: HttpService) {}

  async generate(request: LLMRequest): Promise<LLMResponse> {
    const startTime = Date.now();
    return {
      content: 'Hello! This is a fallback simulated AI response from AI Gateway (Anthropic Provider).',
      model: request.model || 'claude-3-sonnet-20240229',
      provider: this.name,
      usage: { inputTokens: 12, outputTokens: 18, totalTokens: 30 },
      latency: Date.now() - startTime,
      requestId: request.requestId,
      costEstimate: 0.00008,
    };
  }

  async isAvailable(): Promise<boolean> {
    return true;
  }
}`);

// 9. LLM Router
fs.writeFileSync(path.join(src, 'modules', 'llm', 'llm-router.service.ts'),
`import { Injectable } from '@nestjs/common';
import { OpenAIProvider } from './providers/openai.provider';
import { AnthropicProvider } from './providers/anthropic.provider';
import { LLMProvider, LLMRequest, LLMResponse } from '../../common/interfaces/llm-provider.interface';

@Injectable()
export class LLMRouterService {
  private providers: LLMProvider[];

  constructor(
    private readonly openAIProvider: OpenAIProvider,
    private readonly anthropicProvider: AnthropicProvider,
  ) {
    this.providers = [this.openAIProvider, this.anthropicProvider];
  }

  async route(request: LLMRequest): Promise<LLMResponse> {
    const providerName = request.model ? this.getProviderForModel(request.model) : 'openai';
    const provider = this.providers.find(p => p.name === providerName) || this.openAIProvider;

    try {
      return await provider.generate(request);
    } catch (error) {
      console.warn(\`⚠️ \${provider.name} failed, switching to fallback provider...\`);
      const fallback = providerName === 'openai' ? this.anthropicProvider : this.openAIProvider;
      return await fallback.generate(request);
    }
  }

  private getProviderForModel(model: string): string {
    if (model.startsWith('claude')) return 'anthropic';
    return 'openai';
  }
}`);

// 10. LLM Controller
fs.writeFileSync(path.join(src, 'modules', 'llm', 'llm.controller.ts'),
`import { Controller, Post, Body, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { LLMRouterService } from './llm-router.service';
import { RateLimiterService } from '../ratelimit/rate-limiter.service';
import { LLMRequest } from '../../common/interfaces/llm-provider.interface';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Plan } from '../../common/enums/plan.enum';

@Controller('llm')
@UseGuards(JwtAuthGuard)
export class LLMController {
  constructor(
    private readonly llmRouter: LLMRouterService,
    private readonly rateLimiter: RateLimiterService,
  ) {}

  @Post('generate')
  @HttpCode(HttpStatus.OK)
  async generate(@Request() req: any, @Body() body: any) {
    const userId = req.user.id;
    const userPlan = req.user.plan || Plan.FREE;
    const feature = body.feature || 'chat';
    const requestId = \`req-\${Date.now()}-\${Math.random().toString(36).substring(2, 8)}\`;

    const rateLimit = await this.rateLimiter.checkLimit(userId, feature, userPlan);
    if (!rateLimit.allowed) {
      return ApiResponse.error(
        'RATE_LIMIT_EXCEEDED',
        \`Rate limit exceeded. Please wait \${rateLimit.retryAfter} seconds.\`,
        requestId
      );
    }

    try {
      const llmRequest: LLMRequest = {
        userId,
        feature,
        model: body.model,
        messages: body.messages || [{ role: 'user', content: body.prompt || 'Hello' }],
        temperature: body.temperature,
        maxTokens: body.maxTokens,
        metadata: body.metadata,
        requestId,
      };

      const response = await this.llmRouter.route(llmRequest);
      return ApiResponse.success({
        ...response,
        rateLimit: {
          remaining: rateLimit.limit - rateLimit.current,
          limit: rateLimit.limit,
          reset: rateLimit.ttl,
        },
      }, 'AI response generated successfully', requestId);
    } catch (error) {
      return ApiResponse.error(
        error.message || 'AI_GENERATION_FAILED',
        'Failed to generate AI response',
        requestId
      );
    }
  }
}`);

// 11. Health Controller
fs.writeFileSync(path.join(src, 'modules', 'health', 'health.controller.ts'),
`import { Controller, Get } from '@nestjs/common';
import { RedisService } from '../../database/redis.service';

@Controller('health')
export class HealthController {
  constructor(private readonly redis: RedisService) {}

  @Get()
  async health() {
    let redis = false;
    try {
      await this.redis.getClient().ping();
      redis = true;
    } catch {
      redis = false;
    }
    return {
      status: 'healthy',
      service: 'ai-gateway',
      version: '1.0.0',
      checks: { redis },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 12. App Module & Main.ts
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './modules/auth/auth.module';
import { LLMController } from './modules/llm/llm.controller';
import { LLMRouterService } from './modules/llm/llm-router.service';
import { OpenAIProvider } from './modules/llm/providers/openai.provider';
import { AnthropicProvider } from './modules/llm/providers/anthropic.provider';
import { RateLimiterService } from './modules/ratelimit/rate-limiter.service';
import { HealthController } from './modules/health/health.controller';
import { RedisService } from './database/redis.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule.register({ timeout: 30000, maxRedirects: 5 }),
    AuthModule,
  ],
  controllers: [HealthController, LLMController],
  providers: [
    RedisService,
    RateLimiterService,
    LLMRouterService,
    OpenAIProvider,
    AnthropicProvider,
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
  const port = process.env.PORT || 3010;
  await app.listen(port);
  console.log('🤖 AI Gateway running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('🧠 LLM: http://localhost:' + port + '/api/v1/llm');
}
bootstrap().catch((error) => {
  console.error('Failed to start AI Gateway:', error);
  process.exit(1);
});`);

console.log('✅ setup-ai-gateway.js written successfully.');
