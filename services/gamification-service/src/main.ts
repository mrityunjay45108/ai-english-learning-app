import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('⚠️ Gamification Service temporarily disabled - Prisma models need fix');
  console.log('📋 Run: pnpm exec prisma generate && pnpm exec prisma migrate dev');
  console.log('✅ Other services are running normally');
  
  // Uncomment once Prisma schema is fixed
  /*
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3017;
  await app.listen(port);
  console.log(`✅ Gamification Service running on http://localhost:${port}`);
  */
}

bootstrap();
