import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { CreateSubscriptionDto, CancelSubscriptionDto } from '../../common/dto/subscription.dto';
import { SubscriptionStatus } from "../../../prisma/generated/client";

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async getPlans() {
    return this.prisma.plan.findMany({
      where: { status: 'ACTIVE' },
      include: { planFeatures: true },
      orderBy: { price: 'asc' },
    });
  }

  async getPlan(id: string) {
    const plan = await this.prisma.plan.findUnique({
      where: { id },
      include: { planFeatures: true },
    });
    if (!plan) throw new NotFoundException('Plan not found');
    return plan;
  }

  async createSubscription(userId: string, dto: CreateSubscriptionDto) {
    const plan = await this.getPlan(dto.planId);
    const existing = await this.prisma.subscription.findUnique({ where: { userId } });

    if (existing && existing.status !== 'EXPIRED') {
      throw new BadRequestException('User already has an active subscription');
    }

    const now = new Date();
    let trialStart: Date | null = null;
    let trialEnd: Date | null = null;
    let status: SubscriptionStatus = 'ACTIVE';

    if (plan.trialDays && plan.trialDays > 0) {
      trialStart = now;
      trialEnd = new Date(now.getTime() + plan.trialDays * 24 * 60 * 60 * 1000);
      status = 'TRIALING';
    }

    const periodEnd = this.calculatePeriodEnd(now, plan.interval);

    const subscription = await this.prisma.subscription.create({
      data: {
        userId,
        planId: plan.id,
        status,
        trialStart,
        trialEnd,
        currentPeriodStart: now,
        currentPeriodEnd: periodEnd,
        paymentProvider: dto.paymentProvider,
        providerId: dto.providerId,
      },
      include: { plan: { include: { planFeatures: true } } },
    });

    await this.prisma.subscriptionEvent.create({
      data: {
        subscriptionId: subscription.id,
        userId,
        eventType: 'created',
        newStatus: status,
      },
    });

    await this.redis.invalidateEntitlements(userId);
    return subscription;
  }

  async getSubscription(userId: string) {
    const subscription = await this.prisma.subscription.findUnique({
      where: { userId },
      include: { plan: { include: { planFeatures: true } } },
    });

    if (!subscription) {
      return {
        userId,
        status: 'FREE',
        plan: {
          name: 'Free',
          description: 'Basic plan with limited features',
          planFeatures: [
            { featureKey: 'ai_tutor', featureValue: 'false' },
            { featureKey: 'unlimited_lessons', featureValue: 'false' },
            { featureKey: 'speaking_practice', featureValue: 'false' },
            { featureKey: 'max_lessons_per_day', featureValue: '3' },
          ],
        },
      };
    }
    return subscription;
  }

  async getEntitlements(userId: string) {
    const cached = await this.redis.getJson(`entitlements:${userId}`);
    if (cached) return cached;

    const subscription = await this.getSubscription(userId);
    const entitlements = this.buildEntitlements(subscription);

    await this.redis.setJson(`entitlements:${userId}`, entitlements, 3600);
    return entitlements;
  }

  async cancelSubscription(userId: string, dto: CancelSubscriptionDto) {
    const subscription = await this.prisma.subscription.findUnique({ where: { userId } });
    if (!subscription) throw new NotFoundException('No active subscription found');

    const status = dto.immediate ? 'EXPIRED' : 'CANCELLED';

    const updated = await this.prisma.subscription.update({
      where: { userId },
      data: {
        status,
        cancelAtPeriodEnd: !dto.immediate,
        cancelledAt: new Date(),
      },
    });

    await this.prisma.subscriptionEvent.create({
      data: {
        subscriptionId: subscription.id,
        userId,
        eventType: 'cancelled',
        oldStatus: subscription.status,
        newStatus: status,
      },
    });

    await this.redis.invalidateEntitlements(userId);
    return updated;
  }

  private calculatePeriodEnd(start: Date, interval: string): Date {
    const end = new Date(start);
    if (interval === 'MONTHLY') end.setMonth(end.getMonth() + 1);
    else if (interval === 'YEARLY') end.setFullYear(end.getFullYear() + 1);
    else end.setFullYear(end.getFullYear() + 10);
    return end;
  }

  private buildEntitlements(subscription: any): any {
    const entitlements: Record<string, any> = {};
    const isActive = subscription.status === 'ACTIVE' || subscription.status === 'TRIALING';

    if (!isActive) {
      return {
        ai_tutor: false,
        unlimited_lessons: false,
        speaking_practice: false,
        interview_prep: false,
        max_lessons_per_day: 3,
        max_ai_calls_per_day: 5,
      };
    }

    const features = subscription.plan?.planFeatures || [];
    features.forEach((f: any) => {
      entitlements[f.featureKey] = f.featureValue === 'true' ? true : f.featureValue === 'false' ? false : f.featureValue;
    });
    return entitlements;
  }
}