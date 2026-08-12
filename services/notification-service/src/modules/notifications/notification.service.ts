import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { EmailProvider } from '../delivery/email-provider.service';
import { PushProvider } from '../delivery/push-provider.service';
import { NotificationChannel } from '../../common/dto/notification.dto';

@Injectable()
export class NotificationService {
  private readonly processedEvents = new Set<string>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly emailProvider: EmailProvider,
    private readonly pushProvider: PushProvider,
  ) {}

  async sendNotification(data: {
    userId: string;
    channel: NotificationChannel;
    type: string;
    title: string;
    body: string;
    data?: any;
    priority?: any;
  }) {
    const preferences = await this.getUserPreferences(data.userId);
    if (!this.isChannelAllowed(data.userId, data.channel, data.type, preferences)) {
      console.log(`⏭️ User ${data.userId} opted out of ${data.channel} notifications`);
      return null;
    }

    const notification = await this.prisma.notification.create({
      data: {
        userId: data.userId,
        channel: data.channel,
        type: data.type,
        title: data.title,
        body: data.body,
        data: data.data,
        priority: data.priority || 'MEDIUM',
        status: 'PENDING',
      },
    });

    try {
      let result;
      switch (data.channel) {
        case 'EMAIL':
          result = await this.emailProvider.send(data.userId, data.title, data.body);
          break;
        case 'PUSH':
          result = await this.pushProvider.send(data.userId, data.title, data.body);
          break;
        case 'IN_APP':
          result = { success: true, messageId: `inapp-${notification.id}` };
          break;
        default:
          result = { success: true };
      }

      await this.prisma.notification.update({
        where: { id: notification.id },
        data: {
          status: 'SENT',
          sentAt: new Date(),
          providerId: result?.messageId,
          providerResponse: result,
        },
      });
      return notification;
    } catch (error) {
      await this.prisma.notification.update({
        where: { id: notification.id },
        data: { status: 'FAILED', errorMessage: error.message },
      });
      throw error;
    }
  }

  async getUserNotifications(userId: string, query: any) {
    const { page = 1, limit = 20, channel, status, unreadOnly } = query;
    const skip = (page - 1) * limit;
    const where: any = { userId };
    if (channel) where.channel = channel;
    if (status) where.status = status;
    if (unreadOnly) where.status = { not: 'READ' };

    const [data, total] = await Promise.all([
      this.prisma.notification.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take: limit }),
      this.prisma.notification.count({ where }),
    ]);

    return {
      data,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async markAsRead(userId: string, notificationId: string) {
    const notification = await this.prisma.notification.findUnique({ where: { id: notificationId } });
    if (!notification) throw new NotFoundException('Notification not found');

    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { status: 'READ', readAt: new Date() },
    });
  }

  async markAllAsRead(userId: string, channel?: string) {
    const where: any = { userId, status: { not: 'READ' } };
    if (channel) where.channel = channel;
    return this.prisma.notification.updateMany({
      where,
      data: { status: 'READ', readAt: new Date() },
    });
  }

  async getUnreadCount(userId: string) {
    return this.prisma.notification.count({
      where: { userId, status: { not: 'READ' } },
    });
  }

  async getUserPreferences(userId: string) {
    let preferences = await this.prisma.notificationPreference.findUnique({ where: { userId } });
    if (!preferences) {
      preferences = await this.prisma.notificationPreference.create({ data: { userId } });
    }
    return preferences;
  }

  async updatePreferences(userId: string, data: any) {
    return this.prisma.notificationPreference.update({ where: { userId }, data });
  }

  private isChannelAllowed(userId: string, channel: string, type: string, preferences: any): boolean {
    if (channel === 'EMAIL') {
      if (type === 'weekly_report') return preferences.emailWeeklyReport;
      if (type === 'marketing') return preferences.emailMarketing;
      if (type === 'lesson_reminder') return preferences.emailLessonReminder;
      return true;
    }
    if (channel === 'PUSH') {
      if (type === 'lesson_reminder') return preferences.pushLessonReminder;
      if (type === 'streak_alert') return preferences.pushStreakAlert;
      if (type === 'achievement') return preferences.pushAchievement;
      return true;
    }
    if (channel === 'IN_APP') return preferences.inAppAll;
    return true;
  }

  async handleUserRegistered(event: any) {
    const { userId, firstName } = event;
    await this.sendNotification({
      userId,
      channel: NotificationChannel.EMAIL,
      type: 'welcome',
      title: 'Welcome to English Learning Platform! 🎉',
      body: `Hi ${firstName || 'Learner'}, start your first lesson today.`,
    });
  }

  async handleLessonCompleted(event: any) {
    const { userId, lessonId } = event;
    await this.sendNotification({
      userId,
      channel: NotificationChannel.IN_APP,
      type: 'lesson_complete',
      title: 'Great Job! 🎓',
      body: 'You completed a lesson! Keep going!',
      data: { lessonId },
    });
  }

  async handleAchievementUnlocked(event: any) {
    const { userId, achievementName } = event;
    await this.sendNotification({
      userId,
      channel: NotificationChannel.PUSH,
      type: 'achievement',
      title: '🏆 Achievement Unlocked!',
      body: `You earned: ${achievementName}`,
    });
  }
}