import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Producer, Consumer } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private producer: Producer;
  private consumers: Consumer[] = [];

  constructor() {
    this.kafka = new Kafka({
      clientId: 'auth-service',
      brokers: [process.env.KAFKA_BROKERS || 'localhost:9092'],
      retry: {
        initialRetryTime: 300,
        retries: 10,
      },
    });
    this.producer = this.kafka.producer({
      allowAutoTopicCreation: true,
    });
  }

  async onModuleInit() {
    await this.producer.connect();
    console.log('✅ Kafka Producer connected!');
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
    console.log('❌ Kafka disconnected');
  }

  async produce(topic: string, messages: any[]): Promise<void> {
    await this.producer.send({
      topic,
      messages: messages.map((msg) => ({
        key: msg.key || msg.userId || msg.id,
        value: JSON.stringify(msg.value || msg),
      })),
    });
  }

  async produceEvent(topic: string, event: any): Promise<void> {
    await this.produce(topic, [
      {
        key: event.userId || event.id,
        value: {
          ...event,
          timestamp: new Date().toISOString(),
        },
      },
    ]);
  }

  async consume(
    topic: string,
    groupId: string,
    callback: (message: any) => Promise<void>
  ): Promise<void> {
    const consumer = this.kafka.consumer({
      groupId,
      retry: { retries: 3 },
    });
    await consumer.connect();
    await consumer.subscribe({
      topic,
      fromBeginning: false,
    });
    await consumer.run({
      eachMessage: async ({ message }) => {
        try {
          if (message.value) {
            const value = JSON.parse(message.value.toString());
            await callback(value);
          }
        } catch (error) {
          console.error(`Error processing message from ${topic}:`, error);
        }
      },
    });
    this.consumers.push(consumer);
    console.log(`✅ Kafka Consumer started for ${topic} (${groupId})`);
  }

  async createTopic(topic: string, partitions: number = 1): Promise<void> {
    const admin = this.kafka.admin();
    await admin.connect();

    const topics = await admin.listTopics();
    if (!topics.includes(topic)) {
      await admin.createTopics({
        topics: [
          {
            topic,
            numPartitions: partitions,
            replicationFactor: 1,
          },
        ],
      });
      console.log(`✅ Topic created: ${topic}`);
    }

    await admin.disconnect();
  }
}
