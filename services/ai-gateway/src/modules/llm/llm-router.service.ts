import { Injectable } from '@nestjs/common';
import { OpenAIProvider } from './providers/openai.provider';
import { AnthropicProvider } from './providers/anthropic.provider';
import { LLMProvider, LLMRequest, LLMResponse } from '../../common/interfaces/llm-provider.interface';

@Injectable()
export class LLMRouterService {
  private providers: LLMProvider[];

  constructor(
    private readonly openAIProvider: OpenAIProvider,
    private readonly anthropicProvider: AnthropicProvider,
  ) {
    this.providers = [this.openAIProvider, this.anthropicProvider];
  }

  async route(request: LLMRequest): Promise<LLMResponse> {
    const providerName = request.model ? this.getProviderForModel(request.model) : 'openai';
    const provider = this.providers.find(p => p.name === providerName) || this.openAIProvider;

    try {
      return await provider.generate(request);
    } catch (error) {
      console.warn(`⚠️ ${provider.name} failed, switching to fallback provider...`);
      const fallback = providerName === 'openai' ? this.anthropicProvider : this.openAIProvider;
      return await fallback.generate(request);
    }
  }

  private getProviderForModel(model: string): string {
    if (model.startsWith('claude')) return 'anthropic';
    return 'openai';
  }
}