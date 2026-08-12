import { Module } from '@nestjs/common';
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
export class AppModule {}