import { Module } from '@nestjs/common';
import { SpeakingController } from './speaking.controller';
import { SpeakingService } from './speaking.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [SpeakingController],
  providers: [SpeakingService, PrismaService],
  exports: [SpeakingService],
})
export class SpeakingModule {}