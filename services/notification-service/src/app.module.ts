import { Module } from '@nestjs/common';
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
export class AppModule {}