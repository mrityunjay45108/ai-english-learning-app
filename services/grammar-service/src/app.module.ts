import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { GrammarController } from './modules/grammar/grammar.controller';
import { GrammarService } from './modules/grammar/grammar.service';
import { GrammarRepository } from './modules/grammar/grammar.repository';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, GrammarController],
  providers: [PrismaService, GrammarService, GrammarRepository],
})
export class AppModule {}