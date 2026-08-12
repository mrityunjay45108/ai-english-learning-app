import { Controller, Get } from '@nestjs/common';
import { RedisService } from '../../database/redis.service';

@Controller('health')
export class HealthController {
  constructor(private readonly redis: RedisService) {}

  @Get()
  async health() {
    let redis = false;
    try {
      await this.redis.getClient().ping();
      redis = true;
    } catch {
      redis = false;
    }
    return {
      status: 'healthy',
      service: 'ai-gateway',
      version: '1.0.0',
      checks: { redis },
      timestamp: new Date().toISOString(),
    };
  }
}