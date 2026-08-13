const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'gateway'),
  path.join(src, 'modules', 'health'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: "@english-learning/realtime-service",
  version: "0.1.0",
  private: true,
  description: "Real-time Communication Service",
  main: "dist/main.js",
  scripts: {
    build: "tsc",
    dev: "ts-node-dev src/main.ts",
    start: "node dist/main.js"
  },
  dependencies: {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "@nestjs/config": "^3.0.0",
    "@nestjs/jwt": "^10.0.0",
    "@nestjs/websockets": "^10.0.0",
    "@nestjs/platform-socket.io": "^10.0.0",
    "socket.io": "^4.6.0",
    "class-validator": "^0.14.0",
    "class-transformer": "^0.5.1",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.0",
    "dotenv": "^16.0.0",
    "uuid": "^9.0.0",
    "ioredis": "^6.0.0"
  },
  devDependencies: {
    "@types/node": "^20.0.0",
    "typescript": "5.3.3",
    "ts-node-dev": "^2.0.0"
  }
}, null, 2));

// 2. tsconfig.json
fs.writeFileSync(path.join(root, 'tsconfig.json'), JSON.stringify({
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
}, null, 2));

// 3. .env
fs.writeFileSync(path.join(root, '.env'), 
`JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
PORT=3019
NODE_ENV=development
LOG_LEVEL=debug
SOCKET_PING_TIMEOUT=60000
SOCKET_PING_INTERVAL=25000
SOCKET_CORS_ORIGIN="*"`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3019', 10),
    env: process.env.NODE_ENV || 'development',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380', 10),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  socket: {
    cors: { origin: process.env.SOCKET_CORS_ORIGIN || '*' },
    pingTimeout: parseInt(process.env.SOCKET_PING_TIMEOUT || '60000', 10),
    pingInterval: parseInt(process.env.SOCKET_PING_INTERVAL || '25000', 10),
  },
};`);

// 5. Redis Service with Pub/Sub
fs.writeFileSync(path.join(src, 'database', 'redis.service.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { config } from '../config/environment.config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;
  private subscriber: Redis;

  constructor() {
    this.client = new Redis({
      host: config.redis.host,
      port: config.redis.port,
      password: config.redis.password,
      retryStrategy: (times) => Math.min(times * 50, 2000),
      lazyConnect: true,
    });
    this.subscriber = this.client.duplicate();
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      await this.subscriber.connect();
      console.log('✅ Redis connected for Real-time Service');
    } catch (err) {
      console.warn('⚠️ Redis connection deferred:', err.message);
    }
  }

  async onModuleDestroy() {
    try {
      await this.client.quit();
      await this.subscriber.quit();
    } catch (e) {}
  }

  async setJson<T>(key: string, value: T, ttl?: number): Promise<void> {
    try {
      const val = JSON.stringify(value);
      if (ttl) await this.client.setex(key, ttl, val);
      else await this.client.set(key, val);
    } catch (e) {}
  }

  async getJson<T>(key: string): Promise<T | null> {
    try {
      const data = await this.client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  async del(key: string): Promise<void> {
    try { await this.client.del(key); } catch (e) {}
  }

  async publish(channel: string, message: any): Promise<void> {
    try {
      await this.client.publish(channel, typeof message === 'string' ? message : JSON.stringify(message));
    } catch (e) {}
  }

  async subscribe(channel: string, callback: (message: any) => void): Promise<void> {
    try {
      await this.subscriber.subscribe(channel);
      this.subscriber.on('message', (ch, msg) => {
        if (ch === channel) {
          try { callback(JSON.parse(msg)); } catch { callback(msg); }
        }
      });
    } catch (e) {}
  }

  getClient(): Redis {
    return this.client;
  }
}`);

// 6. WebSocket Gateway
fs.writeFileSync(path.join(src, 'gateway', 'realtime.gateway.ts'),
`import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from '../database/redis.service';
import { config } from '../config/environment.config';

interface AuthenticatedSocket extends Socket {
  userId?: string;
  userEmail?: string;
}

@Injectable()
@WebSocketGateway({
  cors: { origin: '*', credentials: true },
  pingTimeout: 60000,
  pingInterval: 25000,
})
export class RealtimeGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly jwtService: JwtService,
    private readonly redis: RedisService,
  ) {}

  afterInit(server: Server) {
    console.log('🔌 WebSocket Gateway initialized');
    this.redis.subscribe('realtime:message', (data) => {
      const { room, event, payload } = data;
      if (room) this.server.to(room).emit(event, payload);
      else this.server.emit(event, payload);
    });
  }

  async handleConnection(client: AuthenticatedSocket) {
    try {
      const token = client.handshake.auth.token || client.handshake.headers.authorization;
      if (!token) {
        client.emit('connected', { socketId: client.id, status: 'guest' });
        return;
      }
      const rawToken = token.replace('Bearer ', '');
      const payload = await this.jwtService.verifyAsync(rawToken, { secret: config.jwt.secret });
      client.userId = payload.sub || payload.userId;
      client.userEmail = payload.email;

      await this.redis.setJson(\`socket:\${client.id}\`, {
        userId: client.userId,
        email: client.userEmail,
        connectedAt: new Date().toISOString(),
      }, 3600);

      console.log(\`🔌 Client connected: \${client.id} (User: \${client.userId})\`);
      client.emit('connected', { socketId: client.id, userId: client.userId, status: 'authenticated' });
    } catch (error) {
      client.emit('connected', { socketId: client.id, status: 'guest' });
    }
  }

  async handleDisconnect(client: AuthenticatedSocket) {
    if (client.userId) {
      await this.redis.del(\`socket:\${client.id}\`);
      console.log(\`🔌 Client disconnected: \${client.id}\`);
    }
  }

  @SubscribeMessage('join')
  async handleJoin(client: AuthenticatedSocket, payload: { room: string }) {
    if (!payload.room) throw new WsException('Room name required');
    client.join(payload.room);
    this.server.to(payload.room).emit('user-joined', { userId: client.userId, socketId: client.id });
    return { success: true, room: payload.room };
  }

  @SubscribeMessage('leave')
  async handleLeave(client: AuthenticatedSocket, payload: { room: string }) {
    if (!payload.room) throw new WsException('Room name required');
    client.leave(payload.room);
    this.server.to(payload.room).emit('user-left', { userId: client.userId, socketId: client.id });
    return { success: true, room: payload.room };
  }

  @SubscribeMessage('ping')
  handlePing(): { pong: boolean; timestamp: string } {
    return { pong: true, timestamp: new Date().toISOString() };
  }
}`);

// 7. Health Controller
fs.writeFileSync(path.join(src, 'modules', 'health', 'health.controller.ts'),
`import { Controller, Get } from '@nestjs/common';
import { RedisService } from '../../database/redis.service';

@Controller('health')
export class HealthController {
  constructor(private readonly redis: RedisService) {}

  @Get()
  async health() {
    let redis = false;
    try {
      await this.redis.getClient().ping();
      redis = true;
    } catch {
      redis = false;
    }
    return {
      status: 'healthy',
      service: 'realtime-service',
      version: '1.0.0',
      checks: { redis },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 8. App Module & Main Entry Point
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { RealtimeGateway } from './gateway/realtime.gateway';
import { HealthController } from './modules/health/health.controller';
import { RedisService } from './database/redis.service';
import { config } from './config/environment.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({ secret: config.jwt.secret }),
  ],
  controllers: [HealthController],
  providers: [RealtimeGateway, RedisService],
})
export class AppModule {}`);

fs.writeFileSync(path.join(src, 'main.ts'),
`import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix('api/v1');
  const port = process.env.PORT || 3019;
  await app.listen(port);
  console.log('🔌 Real-time Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('🔄 WebSocket: ws://localhost:' + port);
}
bootstrap().catch((error) => {
  console.error('Failed to start Real-time Service:', error);
  process.exit(1);
});`);

console.log('✅ setup-realtime.js written successfully.');
