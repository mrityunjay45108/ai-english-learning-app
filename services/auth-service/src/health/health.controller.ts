import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { RedisService } from '../database/redis.service';

@Controller('health')
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  @Get()
  async health() {
    let dbStatus = false;
    let redisStatus = false;

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      dbStatus = true;
    } catch {}

    try {
      const ping = await this.redis.getClient().ping();
      redisStatus = ping === 'PONG';
    } catch {}

    return {
      status: dbStatus && redisStatus ? 'healthy' : 'unhealthy',
      service: 'auth-service',
      checks: { database: dbStatus, redis: redisStatus },
      timestamp: new Date().toISOString(),
    };
  }
}
