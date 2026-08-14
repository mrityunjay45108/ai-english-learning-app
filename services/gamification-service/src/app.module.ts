import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { GamificationController } from './modules/gamification/gamification.controller';
// import { GamificationService } from './modules/gamification/gamification.service';
// import { GamificationRepository } from './modules/gamification/gamification.repository';
import { KafkaConsumerService } from './modules/events/kafka.consumer';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, GamificationController],
  providers: [
    PrismaService,
    // GamificationService,  // Temporarily disabled
    // GamificationRepository,
    KafkaConsumerService,
  ],
})
export class AppModule {}