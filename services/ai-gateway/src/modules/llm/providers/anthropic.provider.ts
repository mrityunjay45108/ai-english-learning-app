import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { config } from '../../../config/environment.config';
import { LLMProvider, LLMRequest, LLMResponse } from '../../../common/interfaces/llm-provider.interface';

@Injectable()
export class AnthropicProvider implements LLMProvider {
  name = 'anthropic';
  models = ['claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307'];

  constructor(private readonly httpService: HttpService) {}

  async generate(request: LLMRequest): Promise<LLMResponse> {
    const startTime = Date.now();
    return {
      content: 'Hello! This is a fallback simulated AI response from AI Gateway (Anthropic Provider).',
      model: request.model || 'claude-3-sonnet-20240229',
      provider: this.name,
      usage: { inputTokens: 12, outputTokens: 18, totalTokens: 30 },
      latency: Date.now() - startTime,
      requestId: request.requestId,
      costEstimate: 0.00008,
    };
  }

  async isAvailable(): Promise<boolean> {
    return true;
  }
}