import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { LessonContent, Prisma } from "../../../prisma/generated/client";

@Injectable()
export class ContentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.LessonContentCreateInput): Promise<LessonContent> {
    return this.prisma.lessonContent.create({ data });
  }

  async findById(id: string): Promise<LessonContent | null> {
    return this.prisma.lessonContent.findUnique({
      where: { id },
      include: {
        sections: { orderBy: { orderIndex: 'asc' } },
        assets: true,
      },
    });
  }

  async findByLessonId(lessonId: string): Promise<LessonContent | null> {
    return this.prisma.lessonContent.findUnique({
      where: { lessonId },
      include: {
        sections: { orderBy: { orderIndex: 'asc' } },
        assets: true,
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.LessonContentWhereInput;
    orderBy?: Prisma.LessonContentOrderByWithRelationInput;
  }): Promise<LessonContent[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.lessonContent.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        sections: { take: 5 },
        assets: { take: 5 },
        _count: {
          select: { sections: true, assets: true },
        },
      },
    });
  }

  async count(where?: Prisma.LessonContentWhereInput): Promise<number> {
    return this.prisma.lessonContent.count({ where });
  }

  async update(id: string, data: Prisma.LessonContentUpdateInput): Promise<LessonContent> {
    return this.prisma.lessonContent.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<LessonContent> {
    return this.prisma.lessonContent.delete({ where: { id } });
  }

  async publish(id: string, reviewerId: string): Promise<LessonContent> {
    return this.prisma.lessonContent.update({
      where: { id },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date(),
        reviewedBy: reviewerId,
        reviewedAt: new Date(),
      },
    });
  }

  async findPublished(): Promise<LessonContent[]> {
    return this.prisma.lessonContent.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        sections: { orderBy: { orderIndex: 'asc' } },
        assets: true,
      },
      orderBy: { publishedAt: 'desc' },
    });
  }
}
