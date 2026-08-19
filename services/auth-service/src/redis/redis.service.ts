import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { createClient, RedisClientType } from "redis";

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      username: process.env.REDIS_USERNAME || process.env.REDIS_USER || "default",
      password: process.env.REDIS_PASSWORD,
      socket: {
        host: process.env.REDIS_HOST || "library-metal-space-48644.db.redis.io",
        port: parseInt(process.env.REDIS_PORT || "16483", 10),
        connectTimeout: 10000,
        reconnectStrategy: (retries) => Math.min(retries * 100, 3000),
      },
    });

    this.client.on("error", (err: unknown) => 
      console.warn("⚠️ Redis Cloud Warning (Non-blocking):", (err as Error).message)
    );
    this.client.on("connect", () => console.log("✅ Connected to Redis Cloud Successfully!"));
  }

  async onModuleInit() {
    try {
      if (!this.client.isOpen) {
        await this.client.connect();
      }
    } catch (error: unknown) {
      console.warn("⚠️ Redis initial connection deferred, running app in fallback mode.");
    }
  }

  async onModuleDestroy() {
    if (this.client && this.client.isOpen) {
      await this.client.disconnect();
    }
  }

  async set(key: string, value: any) {
    try {
      if (!this.client.isOpen) return;
      await this.client.set(key, typeof value === "string" ? value : JSON.stringify(value));
    } catch (error: unknown) {
      console.error("Redis set error:", (error as Error).message);
    }
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      if (!this.client.isOpen) return null;
      const data = await this.client.get(key as any);
      if (!data) return null;
      if (typeof data === "string") {
        try {
          return JSON.parse(data) as T;
        } catch {
          return data as unknown as T;
        }
      }
      return data as unknown as T;
    } catch (error: unknown) {
      console.error("Redis get error:", (error as Error).message);
      return null;
    }
  }

  async delete(key: string) {
    try {
      if (!this.client.isOpen) return;
      await this.client.del(key);
    } catch (error: unknown) {
      console.error("Redis delete error:", (error as Error).message);
    }
  }

  async flushAll() {
    try {
      if (!this.client.isOpen) return;
      await this.client.flushAll();
    } catch (error: unknown) {
      console.error("Redis flushAll error:", (error as Error).message);
    }
  }
}