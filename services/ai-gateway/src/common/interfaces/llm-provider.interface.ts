export interface LLMRequest {
  userId: string;
  feature: string;
  model?: string;
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
  temperature?: number;
  maxTokens?: number;
  metadata?: Record<string, any>;
  requestId: string;
}

export interface LLMResponse {
  content: string;
  model: string;
  provider: string;
  usage: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
  latency: number;
  requestId: string;
  costEstimate?: number;
}

export interface LLMProvider {
  name: string;
  models: string[];
  generate(request: LLMRequest): Promise<LLMResponse>;
  isAvailable(): Promise<boolean>;
}