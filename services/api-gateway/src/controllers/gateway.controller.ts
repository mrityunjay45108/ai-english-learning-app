// import { Controller, All, Req, Res, Body, HttpStatus } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { ProxyService } from '../services/proxy.service';
// import { RequestContextService } from '../services/request-context.service';

// @Controller()
// export class GatewayController {
//   private serviceMap: Record<string, string> = {
//     '/api/v1/auth': 'auth',
//     '/api/v1/users': 'user',
//     '/api/v1/courses': 'course',
//     '/api/v1/ai': 'ai',
//     '/api/v1/payments': 'payment',
//   };

//   constructor(
//     private readonly proxyService: ProxyService,
//     private readonly requestContext: RequestContextService,
//   ) {}

//   @All('*')
//   async handleRequest(@Req() req: Request, @Res() res: Response, @Body() body: any) {
//     this.requestContext.requestId = (req.headers['x-request-id'] as string) || '';
//     const service = this.getServiceForPath(req.path);

//     if (!service) {
//       return res.status(HttpStatus.NOT_FOUND).json({ statusCode: 404, message: `Service not found for ${req.path}` });
//     }

//     try {
//       const payload = Object.keys(body || {}).length > 0 ? body : req.body;
//       const response = await this.proxyService.forwardRequest(service, req.method, req.path, req.headers, payload);
//       return res.status(response.status).json(response.data);
//     } catch (error: any) {
//       console.error('❌ GATEWAY PROXY ERROR:', error?.message || error);
//       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
//         statusCode: 500,
//         message: error?.message || 'Gateway Internal Error',
//         details: error?.response?.data || null,
//       });
//     }
//   }

//   private getServiceForPath(path: string): string | null {
//     for (const [route, service] of Object.entries(this.serviceMap)) {
//       if (path.startsWith(route)) return service;
//     }
//     return null;
//   }
// }

import { Controller, All, Req, Res, Body, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from '../services/proxy.service';
import { RequestContextService } from '../services/request-context.service';

@Controller()
export class GatewayController {
  // 🔥 Saari 21 Microservices yahan map karein:
  private serviceMap: Record<string, string> = {
    // Existing 5
    '/api/v1/auth': 'auth',
    '/api/v1/users': 'user',
    '/api/v1/courses': 'course',
    '/api/v1/ai': 'ai',
    '/api/v1/payments': 'payment',

    // 🚀 Add all remaining services (based on your backend output):
    '/api/v1/speech': 'speech',       // ✅ Speech service (Sirf ek baar)
    '/api/v1/learning': 'learning',
    '/api/v1/notification': 'notification',
    '/api/v1/analytics': 'analytics',
    '/api/v1/media': 'media',
    '/api/v1/vocabulary': 'vocab',
    '/api/v1/grammar': 'grammar',
    '/api/v1/gamification': 'gamification',
    '/api/v1/admin': 'admin',
    '/api/v1/realtime': 'realtime',
    '/api/v1/search': 'search',
    '/api/v1/feedback': 'feedback',
    '/api/v1/translation': 'translation',
    '/api/v1/assessments': 'assessment',
    '/api/v1/progress': 'progress',
    '/api/v1/recommendation': 'recommendation',
  };

  constructor(
    private readonly proxyService: ProxyService,
    private readonly requestContext: RequestContextService,
  ) {}

  @All('*')
  async handleRequest(@Req() req: Request, @Res() res: Response, @Body() body: any) {
    this.requestContext.requestId = (req.headers['x-request-id'] as string) || '';
    const { service, strippedPath } = this.getServiceAndPath(req.path);

    if (!service) {
      return res.status(HttpStatus.NOT_FOUND).json({ 
        statusCode: 404, 
        message: `Service not found for ${req.path}` 
      });
    }

    try {
      const payload = Object.keys(body || {}).length > 0 ? body : req.body;
      // ✅ Forward request with stripped path (without /api/v1/users)
      const response = await this.proxyService.forwardRequest(
        service, 
        req.method, 
        strippedPath, // 🛑 यहाँ sirf relevant path jaayega (jaise /me/profile)
        req.headers, 
        payload
      );
      return res.status(response.status).json(response.data);
    } catch (error: any) {
      console.error('❌ GATEWAY PROXY ERROR:', error?.message || error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: 500,
        message: error?.message || 'Gateway Internal Error',
        details: error?.response?.data || null,
      });
    }
  }

  private getServiceAndPath(path: string): { service: string | null, strippedPath: string } {
    for (const [route, service] of Object.entries(this.serviceMap)) {
      if (path.startsWith(route)) {
        // ✅ Gateway prefix (like /api/v1/users) ko hata kar sirf remaining path bhejna
        const strippedPath = path.replace(route, '') || '/';
        return { service, strippedPath };
      }
    }
    return { service: null, strippedPath: path };
  }
}