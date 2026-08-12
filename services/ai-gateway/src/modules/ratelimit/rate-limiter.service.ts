import { Injectable } from '@nestjs/common';
import { RedisService } from '../../database/redis.service';
import { Plan } from '../../common/enums/plan.enum';

@Injectable()
export class RateLimiterService {
  constructor(private readonly redis: RedisService) {}

  async checkLimit(userId: string, feature: string, plan: Plan = Plan.FREE) {
    const key = `ai:ratelimit:${userId}:${feature}`;
    const limits = this.getLimits(plan, feature);
    const current = await this.redis.incr(key);

    if (current === 1) {
      await this.redis.expire(key, limits.ttl);
    }
    const ttl = await this.redis.ttl(key);

    if (current > limits.limit) {
      return { allowed: false, current, limit: limits.limit, ttl, retryAfter: ttl };
    }
    return { allowed: true, current, limit: limits.limit, ttl };
  }

  private getLimits(plan: Plan, feature: string) {
    const featureLimits: Record<string, { free: number; premium: number; enterprise: number }> = {
      chat: { free: 10, premium: 50, enterprise: 200 },
      grammar: { free: 20, premium: 100, enterprise: 500 },
      tutor: { free: 5, premium: 30, enterprise: 100 },
    };
    const limits = featureLimits[feature] || featureLimits.chat;
    const limitMap = { [Plan.FREE]: limits.free, [Plan.PREMIUM]: limits.premium, [Plan.ENTERPRISE]: limits.enterprise };
    return { limit: limitMap[plan] || limits.free, ttl: 60 };
  }
}