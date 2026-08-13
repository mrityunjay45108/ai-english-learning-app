import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
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
}