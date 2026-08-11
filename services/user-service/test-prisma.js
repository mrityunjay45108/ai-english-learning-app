const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  const userId = 'cc781b6a-70ac-4f42-a95b-bac8e30bed94';
  
  console.log('🔍 Testing with userId:', userId);
  
  try {
    // 1. Profile check
    const profile = await prisma.profile.findUnique({
      where: { userId }
    });
    console.log('📊 Profile:', profile ? 'EXISTS' : 'NOT FOUND');
    if (profile) console.log('   Profile ID:', profile.id);
    
    // 2. Preferences check
    const prefs = await prisma.preferences.findUnique({
      where: { userId }
    });
    console.log('📊 Preferences:', prefs ? 'EXISTS' : 'NOT FOUND');
    if (prefs) console.log('   Preferences ID:', prefs.id);
    
    // 3. If preferences NOT exists, create
    if (!prefs) {
      console.log('📝 Creating preferences...');
      const newPrefs = await prisma.preferences.create({
        data: {
          userId: userId,
          locale: 'hi-IN',
          timezone: 'Asia/Kolkata',
          learningGoals: [],
          dailyGoalMinutes: 15,
          notificationEnabled: true,
          emailNotifications: true,
        },
      });
      console.log('✅ Preferences created:', newPrefs.id);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.meta) console.error('Meta:', error.meta);
  }
}

test()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
