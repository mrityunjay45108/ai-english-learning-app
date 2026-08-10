import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { config } from '../config/environment.config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client!: Redis;

  async onModuleInit() {
    this.client = new Redis({
      host: config.redis.host,
      port: config.redis.port,
      password: config.redis.password,
      retryStrategy: (times) => Math.min(times * 50, 2000),
    });
  }

  async onModuleDestroy() { await this.client.quit(); }

  async get(key: string) { return this.client.get(key); }
  async set(key: string, value: string, ttl?: number) {
    if (ttl) await this.client.setex(key, ttl, value);
    else await this.client.set(key, value);
  }
  async del(key: string) { await this.client.del(key); }

  async getJson<T>(key: string): Promise<T | null> {
    const data = await this.get(key);
    return data ? JSON.parse(data) : null;
  }
  async setJson<T>(key: string, value: T, ttl?: number) {
    await this.set(key, JSON.stringify(value), ttl);
  }

  async storeRefreshToken(userId: string, refreshToken: string, ttl: number = 604800) {
    await this.setJson(`refresh:${userId}`, { token: refreshToken }, ttl);
  }
  async getRefreshToken(userId: string): Promise<string | null> {
    const data = await this.getJson<{ token: string }>(`refresh:${userId}`);
    return data?.token || null;
  }
  async deleteRefreshToken(userId: string) { await this.del(`refresh:${userId}`); }

  async storeOtp(email: string, otp: string, ttl: number = 300) {
    await this.setJson(`otp:${email}`, { code: otp, used: false }, ttl);
  }
  async verifyOtp(email: string, otp: string): Promise<boolean> {
    const data = await this.getJson<{ code: string; used: boolean }>(`otp:${email}`);
    if (!data || data.used || data.code !== otp) return false;
    data.used = true;
    await this.setJson(`otp:${email}`, data);
    return true;
  }

  getClient() { return this.client; }
}
