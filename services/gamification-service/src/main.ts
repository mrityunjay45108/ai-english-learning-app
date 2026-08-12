import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', credentials: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.setGlobalPrefix('api/v1');
  const port = process.env.PORT || 3009;
  await app.listen(port);
  console.log('🏆 Gamification Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('🎮 Gamification: http://localhost:' + port + '/api/v1/gamification');
}
bootstrap().catch((error) => {
  console.error('Failed to start Gamification Service:', error);
  process.exit(1);
});