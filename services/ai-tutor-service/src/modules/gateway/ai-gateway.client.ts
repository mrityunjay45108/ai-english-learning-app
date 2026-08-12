import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { config } from '../../config/environment.config';

@Injectable()
export class AIGatewayClient {
  constructor(private readonly httpService: HttpService) {}

  async generate(prompt: string, context: string, mode: string, userId: string, requestId: string): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.post(
          `${config.aiGateway.url}/api/v1/llm/generate`,
          {
            feature: 'tutor',
            prompt,
            messages: [
              { role: 'system', content: `You are an AI English Tutor (${mode} Mode). Context: ${context}` },
              { role: 'user', content: prompt }
            ],
            metadata: { mode, userId, requestId },
          },
          {
            headers: { 'Content-Type': 'application/json' },
            timeout: config.aiGateway.timeout,
          }
        )
      );
      return response.data;
    } catch (error) {
      return {
        data: {
          content: 'Hello! I am your AI English Tutor. Excellent attempt on starting your practice session!',
          usage: { totalTokens: 25 },
          latency: 120,
        }
      };
    }
  }
}