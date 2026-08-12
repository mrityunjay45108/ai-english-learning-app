import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { NotificationService } from '../notifications/notification.service';
import { config } from '../../config/environment.config';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private readonly notificationService: NotificationService) {
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
        topics: ['user-events', 'lesson-events', 'achievement-events', 'subscription-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, message }) => {
          try {
            const value = JSON.parse(message.value.toString());
            console.log(`📨 Received event in Notification Service: ${topic}`, value);
          } catch (e) {}
        },
      });
      console.log('✅ Kafka Consumer started for Notification Service');
    } catch (err) {
      console.warn('⚠️ Kafka connection deferred (brokers offline):', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.consumer.disconnect(); } catch (e) {}
  }
}