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
    } catch (error) {
      database = false;
    }
    return {
      status: database ? 'healthy' : 'unhealthy',
      service: 'progress-service',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}