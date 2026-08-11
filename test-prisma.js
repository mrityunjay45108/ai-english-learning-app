const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  const userId = 'cc781b6a-70ac-4f42-a95b-bac8e30bed94';
  
  console.log('🔍 Testing Prisma find...');
  console.log('UserId:', userId);
  
  // Check profile
  const profile = await prisma.profile.findUnique({
    where: { userId }
  });
  console.log('📊 Profile found:', profile ? 'YES' : 'NO');
  if (profile) console.log('Profile:', profile);
  
  // Check preferences
  const preferences = await prisma.preferences.findUnique({
    where: { userId }
  });
  console.log('📊 Preferences found:', preferences ? 'YES' : 'NO');
  if (preferences) console.log('Preferences:', preferences);
  
  // Try raw SQL
  const rawResult = await prisma.$queryRaw`
    SELECT * FROM preferences WHERE user_id = ${userId}
  `;
  console.log('📊 Raw SQL result:', rawResult);
}

test()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
