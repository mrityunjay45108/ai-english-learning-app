import { Module } from '@nestjs/common';
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
export class AppModule {}