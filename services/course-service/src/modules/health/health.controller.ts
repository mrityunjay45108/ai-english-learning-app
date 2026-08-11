import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { config } from '../../config/environment.config';

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
      service: 'course-service',
      version: '1.0.0',
      environment: config.app.env,
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}
