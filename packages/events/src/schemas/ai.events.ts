export interface AIMessageGeneratedEvent {
  userId: string;
  conversationId: string;
  messageId: string;
  provider: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  latency: number;
  costEstimate?: number;
}