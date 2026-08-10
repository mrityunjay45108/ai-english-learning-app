import { KafkaService } from '../database/kafka.service';

export async function demoConsume(kafkaService: KafkaService) {
  console.log('🔄 Starting demo consumer...');

  await kafkaService.consume(
    'demo-events',
    'demo-consumer-group',
    async (message) => {
      console.log(`📨 Received event:`, message);

      switch (message.event) {
        case 'user.registered':
          console.log(`👋 Welcome email would be sent to: ${message.email}`);
          break;
        case 'lesson.completed':
          console.log(`🎓 Lesson ${message.lessonId} completed with score ${message.score}`);
          break;
        case 'speaking.completed':
          console.log(`🎤 Speaking practice ${message.practiceId} scored ${message.overallScore}`);
          break;
        case 'payment.succeeded':
          console.log(`💰 Payment of ${message.amount} ${message.currency} succeeded`);
          break;
        default:
          console.log(`❓ Unknown event: ${message.event}`);
      }
    }
  );

  console.log('✅ Demo consumer started!');
}
