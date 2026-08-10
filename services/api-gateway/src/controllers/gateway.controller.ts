import { Controller, All, Req, Res, Body, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from '../services/proxy.service';
import { RequestContextService } from '../services/request-context.service';

@Controller()
export class GatewayController {
  private serviceMap: Record<string, string> = {
    '/api/v1/auth': 'auth',
    '/api/v1/users': 'user',
    '/api/v1/courses': 'course',
    '/api/v1/ai': 'ai',
    '/api/v1/payments': 'payment',
  };

  constructor(
    private readonly proxyService: ProxyService,
    private readonly requestContext: RequestContextService,
  ) {}

  @All('*')
  async handleRequest(@Req() req: Request, @Res() res: Response, @Body() body: any) {
    this.requestContext.requestId = req.headers['x-request-id'] as string;
    const service = this.getServiceForPath(req.path);

    if (!service) {
      return res.status(HttpStatus.NOT_FOUND).json({ statusCode: 404, message: `Service not found for ${req.path}` });
    }

    try {
      const response = await this.proxyService.forwardRequest(service, req.method, req.path, req.headers, body);
      return res.status(response.status).json(response.data);
    } catch (error: any) {
      return res.status(HttpStatus.BAD_GATEWAY).json({ statusCode: 502, message: 'Bad Gateway / Target Service Unavailable' });
    }
  }

  private getServiceForPath(path: string): string | null {
    for (const [route, service] of Object.entries(this.serviceMap)) {
      if (path.startsWith(route)) return service;
    }
    return null;
  }
}
