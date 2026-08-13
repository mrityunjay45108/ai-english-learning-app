export interface EventEnvelope<T = any> {
  eventId: string;
  eventType: string;
  eventVersion: string;
  occurredAt: string;
  producer: string;
  requestId?: string;
  correlationId?: string;
  traceId?: string;
  userId?: string;
  payload: T;
}

export interface EventMetadata {
  topic: string;
  partition?: number;
  offset?: number;
  timestamp: string;
  headers?: Record<string, string>;
}