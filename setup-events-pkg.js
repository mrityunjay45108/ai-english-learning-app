const fs = require('fs');
const path = require('path');

const root = process.cwd();
const eventsDir = path.join(root, 'packages', 'events');

// 1. package.json
fs.writeFileSync(path.join(eventsDir, 'package.json'), JSON.stringify({
  name: "@english-learning/events",
  version: "1.0.0",
  private: true,
  main: "src/index.ts",
  types: "src/index.ts",
  dependencies: {
    "kafkajs": "^2.2.4",
    "uuid": "^9.0.0"
  }
}, null, 2));

// 2. Event Envelope
fs.writeFileSync(path.join(eventsDir, 'src', 'envelopes', 'event.envelope.ts'),
`export interface EventEnvelope<T = any> {
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
}`);

// 3. User Schemas
fs.writeFileSync(path.join(eventsDir, 'src', 'schemas', 'user.events.ts'),
`export interface UserRegisteredEvent {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role: string;
  isVerified: boolean;
}

export interface UserUpdatedEvent {
  userId: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}`);

// 4. Lesson Schemas
fs.writeFileSync(path.join(eventsDir, 'src', 'schemas', 'lesson.events.ts'),
`export interface LessonStartedEvent {
  userId: string;
  lessonId: string;
  courseId: string;
  startedAt: string;
}

export interface LessonCompletedEvent {
  userId: string;
  lessonId: string;
  courseId: string;
  score: number;
  maxScore: number;
  timeSpent: number;
  attempts: number;
  completedAt: string;
}`);

// 5. Payment Schemas
fs.writeFileSync(path.join(eventsDir, 'src', 'schemas', 'payment.events.ts'),
`export interface PaymentSucceededEvent {
  userId: string;
  orderId: string;
  transactionId: string;
  amount: number;
  currency: string;
  plan: string;
  paymentMethod: string;
  provider: string;
}

export interface PaymentFailedEvent {
  userId: string;
  orderId: string;
  transactionId: string;
  amount: number;
  currency: string;
  errorCode: string;
  errorMessage: string;
}`);

// 6. AI Schemas
fs.writeFileSync(path.join(eventsDir, 'src', 'schemas', 'ai.events.ts'),
`export interface AIMessageGeneratedEvent {
  userId: string;
  conversationId: string;
  messageId: string;
  provider: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  latency: number;
  costEstimate?: number;
}`);

// 7. Subscription Schemas
fs.writeFileSync(path.join(eventsDir, 'src', 'schemas', 'subscription.events.ts'),
`export interface SubscriptionCreatedEvent {
  userId: string;
  subscriptionId: string;
  planId: string;
  planName: string;
  amount: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  trialDays?: number;
  startDate: string;
  endDate: string;
}`);

// 8. Event Utils
fs.writeFileSync(path.join(eventsDir, 'src', 'utils', 'event.utils.ts'),
`import { v4 as uuidv4 } from 'uuid';

export class EventUtils {
  static generateEventId(): string {
    return \`evt_\${uuidv4().replace(/-/g, '')}\`;
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
}`);

// 9. Publisher
fs.writeFileSync(path.join(eventsDir, 'src', 'publisher', 'event.publisher.ts'),
`import { Kafka, Producer, Partitioners } from 'kafkajs';
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
}`);

// 10. Consumer
fs.writeFileSync(path.join(eventsDir, 'src', 'consumer', 'event.consumer.ts'),
`import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
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
        const eventId = message.headers?.['event-id']?.toString() || \`\${topic}-\${message.offset}\`;

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
}`);

// 11. Index File
fs.writeFileSync(path.join(eventsDir, 'src', 'index.ts'),
`export * from './envelopes/event.envelope';
export * from './schemas/user.events';
export * from './schemas/lesson.events';
export * from './schemas/payment.events';
export * from './schemas/ai.events';
export * from './schemas/subscription.events';
export * from './utils/event.utils';
export * from './publisher/event.publisher';
export * from './consumer/event.consumer';
`);

console.log('✅ setup-events-pkg.js written successfully.');
