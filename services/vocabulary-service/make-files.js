const fs = require('fs');
const path = require('path');

const src = path.join(process.cwd(), 'src');
fs.mkdirSync(path.join(src, 'modules', 'health'), { recursive: true });
fs.mkdirSync(path.join(src, 'modules', 'words'), { recursive: true });
fs.mkdirSync(path.join(src, 'database'), { recursive: true });
fs.mkdirSync(path.join(src, 'config'), { recursive: true });

// 1. main.ts
fs.writeFileSync(path.join(src, 'main.ts'), 
`import 'reflect-metadata';
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
});`
);

// 2. health.controller.ts
fs.writeFileSync(path.join(src, 'modules', 'health', 'health.controller.ts'), 
`import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async health() {
    let database = false;
    try {
      await this.prisma.$queryRaw\`SELECT 1\`;
      database = true;
    } catch (error) {
      database = false;
    }
    return {
      status: database ? 'healthy' : 'unhealthy',
      service: 'vocabulary-service',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}`
);

// 3. app.module.ts
fs.writeFileSync(path.join(src, 'app.module.ts'), 
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './modules/health/health.controller';
import { VocabularyController } from './modules/words/vocabulary.controller';
import { VocabularyService } from './modules/words/vocabulary.service';
import { VocabularyRepository } from './modules/words/vocabulary.repository';
import { PrismaService } from './database/prisma.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  controllers: [HealthController, VocabularyController],
  providers: [PrismaService, VocabularyService, VocabularyRepository],
})
export class AppModule {}`
);

// 4. tsconfig.json
fs.writeFileSync(path.join(process.cwd(), 'tsconfig.json'), 
JSON.stringify({
  compilerOptions: {
    module: "commonjs",
    declaration: true,
    removeComments: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    allowSyntheticDefaultImports: true,
    target: "ES2021",
    sourceMap: true,
    outDir: "./dist",
    baseUrl: "./",
    incremental: true,
    skipLibCheck: true
  }
}, null, 2)
);

console.log('✅ All files generated cleanly!');
