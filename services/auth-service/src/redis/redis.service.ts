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
      },
    });

    this.client.on("error", (err) => console.error("❌ Redis Client Error:", err));
    this.client.on("connect", () => console.log("✅ Connected to Redis Cloud Successfully!"));
  }

  async onModuleInit() {
    if (!this.client.isOpen) {
      await this.client.connect();
    }
  }

  async onModuleDestroy() {
    if (this.client.isOpen) {
      await this.client.disconnect();
    }
  }

  async set(key: string, value: any) {
    await this.client.set(key, typeof value === "string" ? value : JSON.stringify(value));
  }

  async get(key: string) {
    const data = await this.client.get(key);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }

  async delete(key: string) {
    await this.client.del(key);
  }

  async flushAll() {
    await this.client.flushAll();
  }
}
