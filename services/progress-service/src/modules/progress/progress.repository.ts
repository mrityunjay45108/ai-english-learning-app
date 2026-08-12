import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ProgressRepository {
  constructor(public readonly prisma: PrismaService) {}

  async getOrCreateUserStats(userId: string) {
    let stats = await this.prisma.userStats.findUnique({ where: { userId } });
    if (!stats) {
      stats = await this.prisma.userStats.create({
        data: { userId, lastActive: new Date() },
      });
    }
    return stats;
  }

  async updateUserStats(userId: string, data: any) {
    return this.prisma.userStats.update({ where: { userId }, data });
  }

  async getCourseProgress(userId: string, courseId: string) {
    return this.prisma.courseProgress.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });
  }

  async getAllCourseProgress(userId: string, params: { skip?: number; take?: number; where?: any }) {
    const { skip, take, where } = params;
    return this.prisma.courseProgress.findMany({
      skip,
      take,
      where: { ...where, userId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async countCourseProgress(userId: string, where?: any) {
    return this.prisma.courseProgress.count({ where: { ...where, userId } });
  }

  async upsertCourseProgress(userId: string, courseId: string, data: any) {
    return this.prisma.courseProgress.upsert({
      where: { userId_courseId: { userId, courseId } },
      update: data,
      create: { userId, courseId, ...data },
    });
  }

  async getLessonProgress(userId: string, lessonId: string) {
    return this.prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    });
  }

  async upsertLessonProgress(userId: string, lessonId: string, courseId: string, data: any) {
    return this.prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: data,
      create: { userId, lessonId, courseId, ...data },
    });
  }

  async createActivity(data: any) {
    return this.prisma.learningActivity.create({ data });
  }

  async getActivities(userId: string, params: { skip?: number; take?: number; where?: any }) {
    const { skip, take, where } = params;
    return this.prisma.learningActivity.findMany({
      skip,
      take,
      where: { ...where, userId },
      orderBy: { timestamp: 'desc' },
    });
  }

  async getSummary(userId: string) {
    const stats = await this.getOrCreateUserStats(userId);
    const [courseCount, lessonCount] = await Promise.all([
      this.prisma.courseProgress.count({ where: { userId, status: 'COMPLETED' } }),
      this.prisma.lessonProgress.count({ where: { userId, status: 'COMPLETED' } }),
    ]);
    return { ...stats, coursesCompleted: courseCount, lessonsCompleted: lessonCount };
  }
}