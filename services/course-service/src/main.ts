import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { config } from './config/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*',
    credentials: true,
  });

  // Validation
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

  // Global prefix
  app.setGlobalPrefix('api/v1');

  const port = config.app.port;
  await app.listen(port);

  console.log(`📚 Course Service running on http://localhost:${port}`);
  console.log(`📋 Health: http://localhost:${port}/api/v1/health`);
  console.log(`📖 Courses: http://localhost:${port}/api/v1/courses`);
}

bootstrap().catch((error) => {
  console.error('Failed to start Course Service:', error);
  process.exit(1);
});
