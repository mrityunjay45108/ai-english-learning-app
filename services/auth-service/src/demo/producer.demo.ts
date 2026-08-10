import { KafkaService } from '../database/kafka.service';

export async function demoProduce(kafkaService: KafkaService) {
  await kafkaService.createTopic('demo-events', 1);

  await kafkaService.produceEvent('demo-events', {
    event: 'user.registered',
    userId: 'demo-user-123',
    email: 'demo@englishlearning.com',
    timestamp: new Date().toISOString(),
  });

  console.log('✅ Demo event produced!');

  const events = [
    {
      event: 'lesson.completed',
      userId: 'user-1',
      lessonId: 'lesson-1',
      score: 85,
      timeSpent: 300,
      completedAt: new Date().toISOString(),
    },
    {
      event: 'speaking.completed',
      userId: 'user-1',
      practiceId: 'practice-1',
      fluencyScore: 72,
      grammarScore: 80,
      vocabularyScore: 65,
      overallScore: 72,
      duration: 120,
    },
    {
      event: 'payment.succeeded',
      userId: 'user-1',
      amount: 299,
      currency: 'INR',
      plan: 'premium',
      transactionId: 'txn-123',
      timestamp: new Date().toISOString(),
    },
  ];

  for (const event of events) {
    await kafkaService.produceEvent('demo-events', event);
    console.log(`✅ Produced: ${event.event}`);
  }
}
