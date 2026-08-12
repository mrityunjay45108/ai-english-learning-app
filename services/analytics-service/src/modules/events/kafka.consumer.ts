import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { AnalyticsService } from '../analytics/analytics.service';
import { config } from '../../config/environment.config';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private readonly analyticsService: AnalyticsService) {
    this.kafka = new Kafka({
      clientId: config.kafka.clientId,
      brokers: config.kafka.brokers,
      retry: { initialRetryTime: 300, retries: 10 },
    });
    this.consumer = this.kafka.consumer({ groupId: config.kafka.groupId });
  }

  async onModuleInit() {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({
        topics: ['user-events', 'lesson-events', 'speaking-events', 'ai-events', 'grammar-events', 'vocabulary-events', 'subscription-events', 'payment-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          try {
            const value = JSON.parse(message.value.toString());
            console.log(`📨 Received event in Analytics Service: ${topic}`, value);
            await this.processEvent(topic, value, partition, String(message.offset));
          } catch (e) {}
        },
      });
      console.log('✅ Kafka Consumer started for Analytics Service');
    } catch (err) {
      console.warn('⚠️ Kafka connection deferred (brokers offline):', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.consumer.disconnect(); } catch (e) {}
  }

  private async processEvent(topic: string, event: any, partition: number, offset: string) {
    const envelope = {
      eventId: event.eventId || `evt_${uuidv4()}`,
      eventType: event.event || event.eventType || topic.replace('-events', '.'),
      eventVersion: event.version || '1.0',
      occurredAt: event.timestamp || event.occurredAt || new Date().toISOString(),
      producer: topic.replace('-events', ''),
      userId: event.userId,
      payload: event,
      kafkaTopic: topic,
      kafkaPartition: partition,
      kafkaOffset: offset,
    };
    await this.analyticsService.storeRawEvent(envelope);
  }
}