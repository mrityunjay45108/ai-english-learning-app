import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { ProgressService } from '../progress/progress.service';
import { config } from '../../config/environment.config';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;
  private readonly processedEvents = new Set<string>();

  constructor(private readonly progressService: ProgressService) {
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
        topics: ['lesson-events', 'grammar-events', 'vocabulary-events', 'assessment-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, message }) => {
          try {
            const eventId = message.headers?.['event-id']?.toString() || `${topic}-${message.offset}`;
            if (this.processedEvents.has(eventId)) return;

            const value = JSON.parse(message.value.toString());
            console.log(`📨 Received event: ${topic}`, value);
            await this.handleEvent(topic, value);
            this.processedEvents.add(eventId);

            if (this.processedEvents.size > 10000) {
              const toDelete = Array.from(this.processedEvents).slice(0, 5000);
              toDelete.forEach(id => this.processedEvents.delete(id));
            }
          } catch (error) {
            console.error('❌ Error processing event:', error);
          }
        },
      });
      console.log('✅ Kafka Consumer started for Progress Service');
    } catch (err) {
      console.warn('⚠️ Kafka connection deferred (brokers offline):', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.consumer.disconnect(); } catch (e) {}
  }

  private async handleEvent(topic: string, event: any) {
    switch (topic) {
      case 'lesson-events':
        if (event.event === 'lesson.completed') await this.progressService.handleLessonCompleted(event);
        break;
      case 'grammar-events':
        if (event.event === 'grammar.exercise.completed') await this.progressService.handleGrammarExerciseCompleted(event);
        break;
      case 'vocabulary-events':
        if (event.event === 'vocabulary.learned') await this.progressService.handleVocabularyLearned(event);
        break;
      case 'assessment-events':
        if (event.event === 'assessment.completed') await this.progressService.handleAssessmentCompleted(event);
        break;
    }
  }
}