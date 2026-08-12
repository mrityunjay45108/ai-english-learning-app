import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { config } from '../../config/environment.config';

@Injectable()
export class ServiceGateway {
  constructor(private readonly httpService: HttpService) {}

  async callService(service: string, endpoint: string, method: string = 'GET', data?: any, token?: string) {
    const baseUrl = (config.services as any)[service];
    if (!baseUrl) throw new Error(`Service ${service} not configured`);

    const url = `${baseUrl}${endpoint}`;
    const headers: any = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    try {
      const response = await firstValueFrom(
        this.httpService.request({ method: method as any, url, headers, data, timeout: 10000 })
      );
      return response.data;
    } catch (error: any) {
      console.error(`Error calling ${service}:`, error.message);
      return { data: [] };
    }
  }

  async getUserService(token: string) {
    return this.callService('user', '/api/v1/users', 'GET', undefined, token);
  }
}