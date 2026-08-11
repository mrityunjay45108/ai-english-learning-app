import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { AssessmentController } from './modules/assessment/assessment.controller';
import { AssessmentService } from './modules/assessment/assessment.service';
import { AssessmentRepository } from './modules/assessment/assessment.repository';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [HealthController, AssessmentController],
  providers: [PrismaService, AssessmentService, AssessmentRepository],
})
export class AppModule {}
