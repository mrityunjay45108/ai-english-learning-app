import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { config } from '../config/environment.config';
import { logger } from './logger.service';
import { RequestContextService } from './request-context.service';

@Injectable()
export class ProxyService {
  constructor(
    private readonly httpService: HttpService,
    private readonly requestContext: RequestContextService,
  ) {}

  async forwardRequest(
    service: string,
    method: string,
    path: string,
    headers: any,
    body?: any,
  ): Promise<any> {
    const serviceConfig = config.services[service as keyof typeof config.services];
    if (!serviceConfig) throw new Error(`Service ${service} not configured`);

    const url = `${serviceConfig.url}${path}`;
    const requestId = this.requestContext.requestId || 'no-request-id';

    const forwardHeaders: Record<string, any> = {
      'content-type': 'application/json',
      'x-request-id': requestId,
      'x-user-id': this.requestContext.userId || '',
    };

    if (headers && headers.authorization) {
      forwardHeaders['authorization'] = headers.authorization;
    }

    try {
      const response = await firstValueFrom(
        this.httpService.request({
          method,
          url,
          headers: forwardHeaders,
          data: body || {},
          timeout: serviceConfig.timeout,
        }),
      );
      return { status: response.status, data: response.data };
    } catch (error: any) {
      if (error.response) {
        return { status: error.response.status, data: error.response.data };
      }
      logger.error(`Proxy error forwarding to ${url}: ${error.message}`);
      throw error;
    }
  }
}
