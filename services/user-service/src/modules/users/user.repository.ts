import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findProfileByUserId(userId: string) {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  }

  async updateProfile(userId: string, data: any) {
    return this.prisma.profile.update({
      where: { userId },
      data,
    });
  }

  // ✅ Create preferences with profile check
  async createPreferences(userId: string, data: any) {
    // First check if profile exists
    let profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      // Create profile first
      profile = await this.prisma.profile.create({
        data: {
          id: userId,
          userId,
          firstName: '',
          lastName: '',
        },
      });
    }

    return this.prisma.preferences.create({
      data: {
        userId: profile.id,
        locale: data.locale || 'hi-IN',
        timezone: data.timezone || 'Asia/Kolkata',
        learningGoals: data.learningGoals || [],
        dailyGoalMinutes: data.dailyGoalMinutes || 15,
        notificationEnabled: data.notificationEnabled ?? true,
        emailNotifications: data.emailNotifications ?? true,
      },
    });
  }

  async findPreferencesByUserId(userId: string) {
    const profile = await this.findProfileByUserId(userId);
    if (!profile) return null;

    return this.prisma.preferences.findUnique({
      where: { userId: profile.id },
    });
  }

  async updatePreferences(userId: string, data: any) {
    const profile = await this.findProfileByUserId(userId);
    if (!profile) return null;

    return this.prisma.preferences.update({
      where: { userId: profile.id },
      data,
    });
  }

  async findFullProfileByUserId(userId: string) {
    const [profile, preferences] = await Promise.all([
      this.findProfileByUserId(userId),
      this.findPreferencesByUserId(userId),
    ]);
    return { profile, preferences };
  }
}
