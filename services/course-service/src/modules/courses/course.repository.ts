import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Course, Prisma } from '@prisma/client-course';

@Injectable()
export class CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CourseCreateInput): Promise<Course> {
    return this.prisma.course.create({ data });
  }

  async findById(id: string): Promise<Course | null> {
    return this.prisma.course.findUnique({
      where: { id },
      include: {
        modules: {
          include: {
            lessons: true,
          },
          orderBy: { orderIndex: 'asc' },
        },
        category: true,
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput;
  }): Promise<Course[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.course.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        category: true,
        _count: {
          select: { modules: true },
        },
      },
    });
  }

  async count(where?: Prisma.CourseWhereInput): Promise<number> {
    return this.prisma.course.count({ where });
  }

  async update(id: string, data: Prisma.CourseUpdateInput): Promise<Course> {
    return this.prisma.course.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Course> {
    return this.prisma.course.delete({ where: { id } });
  }

  async findPublished(): Promise<Course[]> {
    return this.prisma.course.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        category: true,
        _count: {
          select: { modules: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByCategory(categoryId: string): Promise<Course[]> {
    return this.prisma.course.findMany({
      where: { categoryId },
      include: { category: true },
    });
  }
}
