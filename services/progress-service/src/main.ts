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
  const port = process.env.PORT || 3008;
  await app.listen(port);
  console.log('📊 Progress Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('📈 Progress: http://localhost:' + port + '/api/v1/progress');
}
bootstrap().catch((error) => {
  console.error('Failed to start Progress Service:', error);
  process.exit(1);
});