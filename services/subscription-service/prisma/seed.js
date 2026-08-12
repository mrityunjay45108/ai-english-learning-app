const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding subscription plans...');
  const plans = [
    {
      name: 'Free',
      description: 'Basic plan to get started',
      price: 0,
      currency: 'INR',
      interval: 'ONE_TIME',
      trialDays: 0,
      features: [
        { featureKey: 'ai_tutor', featureValue: 'false' },
        { featureKey: 'unlimited_lessons', featureValue: 'false' },
        { featureKey: 'speaking_practice', featureValue: 'false' },
        { featureKey: 'interview_prep', featureValue: 'false' },
        { featureKey: 'max_lessons_per_day', featureValue: '3' },
        { featureKey: 'max_ai_calls_per_day', featureValue: '5' },
      ],
    },
    {
      name: 'Premium',
      description: 'Full access to all features',
      price: 29900,
      currency: 'INR',
      interval: 'MONTHLY',
      trialDays: 7,
      features: [
        { featureKey: 'ai_tutor', featureValue: 'true' },
        { featureKey: 'unlimited_lessons', featureValue: 'true' },
        { featureKey: 'speaking_practice', featureValue: 'true' },
        { featureKey: 'interview_prep', featureValue: 'true' },
        { featureKey: 'max_lessons_per_day', featureValue: 'unlimited' },
        { featureKey: 'max_ai_calls_per_day', featureValue: 'unlimited' },
      ],
    },
    {
      name: 'Enterprise',
      description: 'For teams and organizations',
      price: 99900,
      currency: 'INR',
      interval: 'MONTHLY',
      trialDays: 14,
      features: [
        { featureKey: 'ai_tutor', featureValue: 'true' },
        { featureKey: 'unlimited_lessons', featureValue: 'true' },
        { featureKey: 'speaking_practice', featureValue: 'true' },
        { featureKey: 'interview_prep', featureValue: 'true' },
        { featureKey: 'max_lessons_per_day', featureValue: 'unlimited' },
        { featureKey: 'max_ai_calls_per_day', featureValue: 'unlimited' },
        { featureKey: 'team_management', featureValue: 'true' },
        { featureKey: 'custom_modules', featureValue: 'true' },
      ],
    },
  ];

  for (const planData of plans) {
    const { features, ...planInfo } = planData;
    let plan = await prisma.plan.findUnique({ where: { name: planInfo.name } });

    if (!plan) {
      plan = await prisma.plan.create({ data: planInfo });
      console.log('✅ Created plan: ' + planInfo.name);
    } else {
      console.log('ℹ️ Plan already exists: ' + planInfo.name);
    }

    for (const feature of features) {
      const existingFeature = await prisma.planFeature.findUnique({
        where: { planId_featureKey: { planId: plan.id, featureKey: feature.featureKey } },
      });
      if (!existingFeature) {
        await prisma.planFeature.create({
          data: { planId: plan.id, ...feature },
        });
        console.log('  ✅ Added feature: ' + feature.featureKey);
      }
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());