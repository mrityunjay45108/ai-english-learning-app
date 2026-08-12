import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { GamificationService } from '../gamification/gamification.service';
import { config } from '../../config/environment.config';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private readonly gamificationService: GamificationService) {
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
        topics: ['lesson-events', 'grammar-events', 'vocabulary-events', 'speaking-events', 'assessment-events'],
        fromBeginning: false,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, message }) => {
          try {
            const value = JSON.parse(message.value.toString());
            console.log(`📨 Received event: ${topic}`, value);
            await this.handleEvent(topic, value);
          } catch (error) {
            console.error('❌ Error processing event:', error);
          }
        },
      });
      console.log('✅ Kafka Consumer started for Gamification Service');
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
        if (event.event === 'lesson.completed') await this.gamificationService.handleLessonCompleted(event);
        break;
      case 'grammar-events':
        if (event.event === 'grammar.exercise.completed') await this.gamificationService.handleGrammarExerciseCompleted(event);
        break;
      case 'vocabulary-events':
        if (event.event === 'vocabulary.learned') await this.gamificationService.handleVocabularyLearned(event);
        break;
      case 'speaking-events':
        if (event.event === 'speaking.practice') await this.gamificationService.handleSpeakingPractice(event);
        break;
      case 'assessment-events':
        if (event.event === 'assessment.completed') await this.gamificationService.handleAssessmentCompleted(event);
        break;
    }
  }
}