const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding content service...');

  const sampleLessonId = 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d';

  const lessonContent = await prisma.lessonContent.upsert({
    where: { lessonId: sampleLessonId },
    update: {},
    create: {
      lessonId: sampleLessonId,
      title: 'Introduction to English Speaking',
      description: 'Learn the basics of English speaking',
      contentType: 'TEXT',
      difficulty: 'BEGINNER',
      content: {
        text: 'Welcome to English Speaking! This lesson covers basic greetings...',
        keyPoints: ['Greetings', 'Introductions', 'Basic phrases']
      },
      metadata: {
        tags: ['beginner', 'speaking', 'introduction'],
        estimatedDuration: 15
      },
      status: 'PUBLISHED',
      publishedAt: new Date(),
    },
  });

  await prisma.lessonSection.upsert({
    where: { id: 'sample-section-1' },
    update: {},
    create: {
      id: 'sample-section-1',
      lessonId: lessonContent.id,
      title: 'Greetings',
      description: 'Learn how to greet people in different situations',
      orderIndex: 1,
      type: 'introduction',
      content: {
        examples: ['Hello', 'Hi', 'Good morning', 'Good afternoon']
      },
    },
  });

  console.log('✅ Sample lesson content created!');
  console.log('📝 Lesson Content ID:', lessonContent.id);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
