const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding gamification data...');
  const badges = [
    { name: 'First Lesson', description: 'Complete your first lesson', icon: '🌟', category: 'LEARNING', xpRequired: 10 },
    { name: 'Lesson Master', description: 'Complete 10 lessons', icon: '📚', category: 'LEARNING', xpRequired: 100 },
    { name: 'Vocabulary Star', description: 'Learn 50 words', icon: '📝', category: 'VOCABULARY', xpRequired: 150 },
    { name: 'Grammar Guru', description: 'Complete 20 grammar exercises', icon: '✍️', category: 'GRAMMAR', xpRequired: 100 },
    { name: 'Speaking Star', description: 'Complete 10 speaking practices', icon: '🎤', category: 'SPEAKING', xpRequired: 80 },
    { name: 'Assessment Ace', description: 'Score 90%+ on an assessment', icon: '🏅', category: 'ASSESSMENT', xpRequired: 200 },
    { name: 'Streak Warrior', description: 'Maintain a 7-day streak', icon: '🔥', category: 'STREAK', xpRequired: 70 },
    { name: 'Streak Legend', description: 'Maintain a 30-day streak', icon: '⚡', category: 'STREAK', xpRequired: 300 }
  ];

  for (const badgeData of badges) {
    const existing = await prisma.badge.findUnique({ where: { name: badgeData.name } });
    if (!existing) {
      await prisma.badge.create({ data: badgeData });
      console.log('✅ Added badge: ' + badgeData.name);
    } else {
      console.log('ℹ️ Badge already exists: ' + badgeData.name);
    }
  }

  const achievements = [
    { name: 'First Steps', description: 'Complete your first lesson', type: 'ACTION_BASED', criteria: { action: 'lesson_completed', count: 1 }, rewardXp: 10 },
    { name: 'Dedicated Learner', description: 'Complete 50 lessons', type: 'ACTION_BASED', criteria: { action: 'lesson_completed', count: 50 }, rewardXp: 50 },
    { name: 'Vocabulary Builder', description: 'Learn 100 words', type: 'ACTION_BASED', criteria: { action: 'vocabulary_learned', count: 100 }, rewardXp: 30 },
    { name: 'Grammar Master', description: 'Complete 100 grammar exercises', type: 'ACTION_BASED', criteria: { action: 'grammar_exercise', count: 100 }, rewardXp: 40 }
  ];

  for (const achievementData of achievements) {
    const existing = await prisma.achievement.findUnique({ where: { name: achievementData.name } });
    if (!existing) {
      await prisma.achievement.create({ data: achievementData });
      console.log('✅ Added achievement: ' + achievementData.name);
    } else {
      console.log('ℹ️ Achievement already exists: ' + achievementData.name);
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());