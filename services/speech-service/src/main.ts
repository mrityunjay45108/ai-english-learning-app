import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, transform: true }));
  app.setGlobalPrefix('api/v1');
  const port = process.env.PORT || 3012;
  await app.listen(port);
  console.log(' Speech Service running on http://localhost:' + port);
  console.log(' Health: http://localhost:' + port + '/api/v1/health');
  console.log(' Speech: http://localhost:' + port + '/api/v1/speech');
}
bootstrap().catch((error) => {
  console.error('Failed to start Speech Service:', error);
  process.exit(1);
});