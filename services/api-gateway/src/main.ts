import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/environment.config';
import { AllExceptionFilter } from './filters/all-exception.filter';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Production mein specific domain se replace kar lena
    credentials: true,
  });

  // Global Exception Filter
  app.useGlobalFilters(new AllExceptionFilter());

  // Global Timeout Interceptor
  app.useGlobalInterceptors(new TimeoutInterceptor());

  const port = config.app.port || 3000;
  await app.listen(port);
  console.log(`🚀 API Gateway running on http://localhost:${port}`);
}
bootstrap();