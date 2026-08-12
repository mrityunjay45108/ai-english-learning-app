import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './modules/auth/auth.module';
import { AdminController } from './modules/admin/admin.controller';
import { AdminService } from './modules/admin/admin.service';
import { UsersController } from './modules/users/users.controller';
import { ServiceGateway } from './modules/gateway/service-gateway.service';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';
import { RedisService } from './database/redis.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule.register({ timeout: 10000, maxRedirects: 5 }),
    AuthModule,
  ],
  controllers: [HealthController, AdminController, UsersController],
  providers: [PrismaService, RedisService, AdminService, ServiceGateway],
})
export class AppModule {}