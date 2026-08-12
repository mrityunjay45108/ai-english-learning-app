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
  const port = process.env.PORT || 3006;
  await app.listen(port);
  console.log('📖 Vocabulary Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('📚 Words: http://localhost:' + port + '/api/v1/vocabulary');
}
bootstrap().catch((error) => {
  console.error('Failed to start Vocabulary Service:', error);
  process.exit(1);
});