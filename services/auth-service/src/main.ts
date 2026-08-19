import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { config } from './config/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true, credentials: true, methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS" });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix('api/v1');
  const port = config.app.port;
  await app.listen(process.env.PORT || 3001, "0.0.0.0");
  console.log(`🚀 Auth Service running on http://127.0.0.1:${port}`);
}
bootstrap();
