import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { RealtimeGateway } from './gateway/realtime.gateway';
import { HealthController } from './modules/health/health.controller';
import { RedisService } from './database/redis.service';
import { config } from './config/environment.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({ secret: config.jwt.secret }),
  ],
  controllers: [HealthController],
  providers: [RealtimeGateway, RedisService],
})
export class AppModule {}