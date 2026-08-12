import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './modules/health/health.controller';
import { VocabularyController } from './modules/words/vocabulary.controller';
import { VocabularyService } from './modules/words/vocabulary.service';
import { VocabularyRepository } from './modules/words/vocabulary.repository';
import { PrismaService } from './database/prisma.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, VocabularyController],
  providers: [PrismaService, VocabularyService, VocabularyRepository],
})
export class AppModule {}