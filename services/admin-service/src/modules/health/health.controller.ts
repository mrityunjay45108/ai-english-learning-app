import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async health() {
    let database = false;
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      database = true;
    } catch {
      database = false;
    }
    return {
      status: database ? 'healthy' : 'unhealthy',
      service: 'admin-service',
      version: '1.0.0',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}