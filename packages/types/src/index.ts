export interface RequestContext {
  requestId: string;
  correlationId: string;
  userId?: string;
  traceId?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
  requestId?: string;
  correlationId?: string;
}

export interface EventEnvelope<T = any> {
  eventId: string;
  eventType: string;
  eventVersion: string;
  occurredAt: string;
  producer: string;
  correlationId: string;
  userId?: string;
  requestId?: string;
  payload: T;
}