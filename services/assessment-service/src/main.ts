import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { config } from './config/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.setGlobalPrefix('api/v1');

  const port = config.app.port;
  await app.listen(port);
  console.log(`📝 Assessment Service running on http://localhost:${port}`);
  console.log(`📋 Health: http://localhost:${port}/api/v1/health`);
  console.log(`📊 Assessments: http://localhost:${port}/api/v1/assessments`);
}
bootstrap().catch((error) => {
  console.error('Failed to start Assessment Service:', error);
  process.exit(1);
});
