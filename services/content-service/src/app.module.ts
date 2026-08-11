import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ContentController } from './modules/content/content.controller';
import { ContentService } from './modules/content/content.service';
import { ContentRepository } from './modules/content/content.repository';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [HealthController, ContentController],
  providers: [PrismaService, ContentService, ContentRepository],
})
export class AppModule {}
