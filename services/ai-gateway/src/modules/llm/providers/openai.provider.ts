import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { config } from '../../../config/environment.config';
import { LLMProvider, LLMRequest, LLMResponse } from '../../../common/interfaces/llm-provider.interface';

@Injectable()
export class OpenAIProvider implements LLMProvider {
  name = 'openai';
  models = ['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo'];

  constructor(private readonly httpService: HttpService) {}

  async generate(request: LLMRequest): Promise<LLMResponse> {
    const startTime = Date.now();
    try {
      if (config.llm.openai.apiKey === 'your-openai-api-key' || config.llm.openai.apiKey === 'demo_key') {
        return {
          content: 'Hello! This is a simulated AI response from AI Gateway (OpenAI Provider).',
          model: request.model || 'gpt-3.5-turbo',
          provider: this.name,
          usage: { inputTokens: 15, outputTokens: 20, totalTokens: 35 },
          latency: Date.now() - startTime,
          requestId: request.requestId,
          costEstimate: 0.0001,
        };
      }

      const response = await firstValueFrom(
        this.httpService.post(
          `${config.llm.openai.baseUrl}/chat/completions`,
          {
            model: request.model || config.llm.openai.model,
            messages: request.messages,
            temperature: request.temperature || 0.7,
            max_tokens: request.maxTokens || 1000,
          },
          {
            headers: {
              Authorization: `Bearer ${config.llm.openai.apiKey}`,
              'Content-Type': 'application/json',
            },
            timeout: config.llm.openai.timeout,
          }
        )
      );
      const data = response.data;
      return {
        content: data.choices[0].message.content,
        model: data.model,
        provider: this.name,
        usage: {
          inputTokens: data.usage.prompt_tokens,
          outputTokens: data.usage.completion_tokens,
          totalTokens: data.usage.total_tokens,
        },
        latency: Date.now() - startTime,
        requestId: request.requestId,
        costEstimate: (data.usage.total_tokens * 0.0015) / 1000,
      };
    } catch (error) {
      throw new Error('OPENAI_PROVIDER_ERROR: ' + error.message);
    }
  }

  async isAvailable(): Promise<boolean> {
    return true;
  }
}