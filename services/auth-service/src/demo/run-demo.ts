import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { KafkaService } from '../database/kafka.service';
import { demoProduce } from './producer.demo';
import { demoConsume } from './consumer.demo';

async function runDemo() {
  console.log('🚀 Starting Kafka Demo...');

  // Set environment variable to silence partitioner warning
  process.env.KAFKAJS_NO_PARTITIONER_WARNING = '1';

  const app = await NestFactory.create(AppModule, { logger: ['error', 'warn'] });
  await app.init(); // Ensures onModuleInit triggers and producer connects!

  const kafkaService = app.get(KafkaService);

  // Wait 2 seconds for group coordinator to settle
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log('📥 Starting consumer...');
  await demoConsume(kafkaService);

  // Wait 3 seconds for consumer group assignment
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('📤 Producing events...');
  await demoProduce(kafkaService);

  // Allow time to see consumed output
  await new Promise((resolve) => setTimeout(resolve, 4000));

  console.log('✅ Demo complete!');
  await app.close();
}

runDemo().catch(console.error);
