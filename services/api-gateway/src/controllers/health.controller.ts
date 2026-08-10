import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('/health')
  health() {
    return { status: 'healthy', service: 'api-gateway', timestamp: new Date().toISOString() };
  }

  @Get('/')
  root() {
    return { service: 'English Learning API Gateway', status: 'running' };
  }
}
