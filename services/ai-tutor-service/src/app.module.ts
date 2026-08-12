import { Module } from '@nestjs/common';
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
export class AppModule {}