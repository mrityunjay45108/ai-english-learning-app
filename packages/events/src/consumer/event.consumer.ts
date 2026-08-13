import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { EventUtils } from '../utils/event.utils';

export interface EventConsumerConfig {
  clientId: string;
  groupId: string;
  brokers: string[];
}

export type EventHandler = (envelope: any, metadata: any) => Promise<void>;

export class EventConsumer {
  private kafka: Kafka;
  private consumer: Consumer;
  private handlers: Map<string, EventHandler[]> = new Map();
  private processedEvents: Set<string> = new Set();

  constructor(config: EventConsumerConfig) {
    this.kafka = new Kafka({ clientId: config.clientId, brokers: config.brokers });
    this.consumer = this.kafka.consumer({ groupId: config.groupId });
  }

  async connect(): Promise<void> {
    await this.consumer.connect();
  }

  async disconnect(): Promise<void> {
    await this.consumer.disconnect();
  }

  async subscribe(topics: string[]): Promise<void> {
    await this.consumer.subscribe({ topics, fromBeginning: false });
  }

  registerHandler(eventType: string, handler: EventHandler): void {
    if (!this.handlers.has(eventType)) this.handlers.set(eventType, []);
    this.handlers.get(eventType)!.push(handler);
  }

  async start(): Promise<void> {
    await this.consumer.run({
      eachMessage: async (payload: EachMessagePayload) => {
        const { topic, partition, message } = payload;
        const eventId = message.headers?.['event-id']?.toString() || `${topic}-${message.offset}`;

        if (this.processedEvents.has(eventId)) return;

        try {
          const value = JSON.parse(message.value.toString());
          if (!EventUtils.validateEnvelope(value)) return;

          const handlers = this.handlers.get(value.eventType);
          if (handlers) {
            for (const handler of handlers) {
              await handler(value, { topic, partition, offset: message.offset });
            }
          }
          this.processedEvents.add(eventId);
        } catch (e) {}
      },
    });
  }
}