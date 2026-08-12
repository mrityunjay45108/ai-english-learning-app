import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ProgressController } from './modules/progress/progress.controller';
import { ProgressService } from './modules/progress/progress.service';
import { ProgressRepository } from './modules/progress/progress.repository';
import { KafkaConsumerService } from './modules/events/kafka.consumer';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, ProgressController],
  providers: [
    PrismaService,
    ProgressService,
    ProgressRepository,
    KafkaConsumerService,
  ],
})
export class AppModule {}