const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding grammar data...');
  const topics = [
    {
      name: 'Present Simple Tense',
      description: 'Learn how to use present simple tense for habits and facts.',
      category: 'TENSES',
      difficulty: 'BEGINNER',
      orderIndex: 1,
      icon: '📝',
      rules: [
        {
          title: 'Forming Present Simple',
          ruleText: 'Use base form of verb for I/You/We/They, add -s/-es for He/She/It.',
          explanation: 'For third person singular (he, she, it), add -s to the verb.',
          explanationHindi: 'तीसरे व्यक्ति एकवचन (he, she, it) के लिए क्रिया में -s जोड़ें।',
          examples: ['I eat breakfast at 8am.', 'She eats breakfast at 8am.']
        }
      ],
      exercises: [
        {
          question: 'She ___ to school every day.',
          options: ['go', 'goes', 'going', 'went'],
          correctAnswer: 'goes',
          type: 'MULTIPLE_CHOICE',
          difficulty: 'BEGINNER',
          explanation: 'For he/she/it, add -s to the verb.',
          explanationHindi: 'he/she/it के लिए क्रिया में -s जोड़ें।'
        },
        {
          question: 'They ___ coffee in the morning.',
          options: ['drink', 'drinks', 'drinking', 'drank'],
          correctAnswer: 'drink',
          type: 'MULTIPLE_CHOICE',
          difficulty: 'BEGINNER',
          explanation: 'For I/You/We/They, use base form.',
          explanationHindi: 'I/You/We/They के लिए क्रिया का मूल रूप use करें।'
        }
      ]
    },
    {
      name: 'Past Simple Tense',
      description: 'Learn how to talk about completed actions in the past.',
      category: 'TENSES',
      difficulty: 'INTERMEDIATE',
      orderIndex: 2,
      icon: '📚',
      rules: [
        {
          title: 'Forming Past Simple',
          ruleText: 'Add -ed to regular verbs. Use irregular forms for irregular verbs.',
          explanation: 'Regular verbs: add -ed. Irregular verbs have special forms.',
          explanationHindi: 'Regular verbs: -ed जोड़ें। Irregular verbs के special forms होते हैं।',
          examples: ['I walked to school.', 'She went to market.']
        }
      ],
      exercises: [
        {
          question: 'She ___ to the store yesterday.',
          options: ['walk', 'walks', 'walked', 'walking'],
          correctAnswer: 'walked',
          type: 'MULTIPLE_CHOICE',
          difficulty: 'INTERMEDIATE',
          explanation: 'For past actions, use past tense.',
          explanationHindi: 'पिछली क्रियाओं के लिए past tense use करें।'
        }
      ]
    }
  ];

  for (const topicData of topics) {
    const existing = await prisma.grammarTopic.findUnique({ where: { name: topicData.name } });
    if (!existing) {
      const topic = await prisma.grammarTopic.create({
        data: {
          name: topicData.name,
          description: topicData.description,
          category: topicData.category,
          difficulty: topicData.difficulty,
          orderIndex: topicData.orderIndex,
          icon: topicData.icon,
        },
      });

      for (const ruleData of topicData.rules) {
        await prisma.grammarRule.create({
          data: {
            topicId: topic.id,
            title: ruleData.title,
            ruleText: ruleData.ruleText,
            explanation: ruleData.explanation,
            explanationHindi: ruleData.explanationHindi,
            examples: ruleData.examples,
          },
        });
      }

      for (const exerciseData of topicData.exercises) {
        await prisma.grammarExercise.create({
          data: {
            topicId: topic.id,
            ...exerciseData,
          },
        });
      }
      console.log('✅ Added topic: ' + topicData.name);
    } else {
      console.log('ℹ️ Topic already exists: ' + topicData.name);
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());