import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { CourseController } from './modules/courses/course.controller';
import { CourseService } from './modules/courses/course.service';
import { CourseRepository } from './modules/courses/course.repository';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [HealthController, CourseController],
  providers: [PrismaService, CourseService, CourseRepository],
})
export class AppModule {}
