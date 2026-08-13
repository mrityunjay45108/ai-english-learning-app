import { Kafka, Producer, Partitioners } from 'kafkajs';
import { EventUtils } from '../utils/event.utils';

export interface EventPublisherConfig {
  clientId: string;
  brokers: string[];
}

export class EventPublisher {
  private kafka: Kafka;
  private producer: Producer;

  constructor(config: EventPublisherConfig) {
    this.kafka = new Kafka({ clientId: config.clientId, brokers: config.brokers });
    this.producer = this.kafka.producer({
      allowAutoTopicCreation: true,
      createPartitioner: Partitioners.DefaultPartitioner,
    });
  }

  async connect(): Promise<void> {
    await this.producer.connect();
  }

  async disconnect(): Promise<void> {
    await this.producer.disconnect();
  }

  async publish<T>(
    topic: string,
    eventType: string,
    payload: T,
    options?: { userId?: string; requestId?: string; correlationId?: string; key?: string }
  ): Promise<void> {
    const envelope = EventUtils.createEnvelope(eventType, payload, options);
    const key = options?.key || options?.userId || options?.requestId;

    await this.producer.send({
      topic,
      messages: [{ key, value: JSON.stringify(envelope) }],
    });
  }
}