import { v4 as uuidv4 } from 'uuid';

export class EventUtils {
  static generateEventId(): string {
    return `evt_${uuidv4().replace(/-/g, '')}`;
  }

  static getVersion(): string {
    return '1.0';
  }

  static createEnvelope<T>(
    eventType: string,
    payload: T,
    options?: {
      userId?: string;
      requestId?: string;
      correlationId?: string;
      traceId?: string;
      producer?: string;
    }
  ): any {
    return {
      eventId: this.generateEventId(),
      eventType,
      eventVersion: this.getVersion(),
      occurredAt: new Date().toISOString(),
      producer: options?.producer || 'unknown',
      requestId: options?.requestId,
      correlationId: options?.correlationId || options?.requestId,
      traceId: options?.traceId,
      userId: options?.userId,
      payload,
    };
  }

  static validateEnvelope(envelope: any): boolean {
    if (!envelope || !envelope.eventId || !envelope.eventType || !envelope.eventVersion || !envelope.occurredAt || !envelope.producer) {
      return false;
    }
    return envelope.payload !== undefined;
  }
}