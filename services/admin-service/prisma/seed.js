const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding admin users...');
  const admins = [
    { email: 'superadmin@englishlearning.com', role: 'SUPER_ADMIN', userId: 'superadmin-001' },
    { email: 'admin@englishlearning.com', role: 'ADMIN', userId: 'admin-001' },
    { email: 'content@englishlearning.com', role: 'CONTENT_MANAGER', userId: 'content-001' },
    { email: 'student_gateway@englishlearning.com', role: 'SUPER_ADMIN', userId: 'student_gateway@englishlearning.com' },
  ];

  for (const adminData of admins) {
    const existing = await prisma.adminUser.findUnique({ where: { email: adminData.email } });
    if (!existing) {
      await prisma.adminUser.create({ data: adminData });
      console.log('✅ Created admin: ' + adminData.email);
    } else {
      console.log('ℹ️ Admin already exists: ' + adminData.email);
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());