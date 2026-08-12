import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { config } from '../config/environment.config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: config.redis.host,
      port: config.redis.port,
      password: config.redis.password,
      retryStrategy: (times) => Math.min(times * 50, 2000),
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      console.log('✅ Redis connected for AI Gateway');
    } catch (err) {
      console.warn('⚠️ Redis connection deferred:', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.client.quit(); } catch (e) {}
  }

  async incr(key: string): Promise<number> {
    try { return await this.client.incr(key); } catch (e) { return 1; }
  }

  async expire(key: string, ttl: number): Promise<void> {
    try { await this.client.expire(key, ttl); } catch (e) {}
  }

  async ttl(key: string): Promise<number> {
    try { return await this.client.ttl(key); } catch (e) { return 60; }
  }

  getClient(): Redis {
    return this.client;
  }
}