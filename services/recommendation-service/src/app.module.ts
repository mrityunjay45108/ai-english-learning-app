import { Module } from '@nestjs/common';
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
export class AppModule {}