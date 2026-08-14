import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { ContentRepository } from './content.repository';
import { CreateLessonContentDto, UpdateLessonContentDto, ContentQueryDto } from '../../common/dto/content.dto';
import { LessonContent } from "../../../prisma/generated/client";

@Injectable()
export class ContentService {
  constructor(private readonly contentRepository: ContentRepository) {}

  async create(userId: string, dto: CreateLessonContentDto): Promise<LessonContent> {
    // Check if lesson content already exists for this lesson
    const existing = await this.contentRepository.findByLessonId(dto.lessonId);
    if (existing) {
      throw new ForbiddenException('Content already exists for this lesson');
    }

    return this.contentRepository.create({
      lessonId: dto.lessonId,
      title: dto.title,
      description: dto.description,
      contentType: dto.contentType,
      difficulty: dto.difficulty || 'BEGINNER',
      content: dto.content,
      metadata: dto.metadata,
      createdBy: userId,
      updatedBy: userId,
    });
  }

  async findById(id: string, userRole?: string): Promise<LessonContent> {
    const content = await this.contentRepository.findById(id);
    
    if (!content) {
      throw new NotFoundException('Content not found');
    }

    // Only show draft content to admins/content managers
    if (content.status === 'DRAFT' && userRole !== 'ADMIN' && userRole !== 'CONTENT_MANAGER') {
      throw new ForbiddenException('This content is not published yet');
    }

    return content;
  }

  async findByLessonId(lessonId: string, userRole?: string): Promise<LessonContent> {
    const content = await this.contentRepository.findByLessonId(lessonId);
    
    if (!content) {
      throw new NotFoundException('Content not found for this lesson');
    }

    // Only show draft content to admins/content managers
    if (content.status === 'DRAFT' && userRole !== 'ADMIN' && userRole !== 'CONTENT_MANAGER') {
      throw new ForbiddenException('This content is not published yet');
    }

    return content;
  }

  async findAll(query: ContentQueryDto, userRole?: string) {
    const { page = 1, limit = 10, lessonId, status, contentType } = query;

    const skip = (page - 1) * limit;
    const take = limit;

    const where: any = {};

    // Non-admin users only see published content
    if (userRole !== 'ADMIN' && userRole !== 'CONTENT_MANAGER') {
      where.status = 'PUBLISHED';
    } else if (status) {
      where.status = status;
    }

    if (lessonId) {
      where.lessonId = lessonId;
    }

    if (contentType) {
      where.contentType = contentType;
    }

    const [data, total] = await Promise.all([
      this.contentRepository.findAll({ skip, take, where, orderBy: { createdAt: 'desc' } }),
      this.contentRepository.count(where),
    ]);

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async update(id: string, userId: string, dto: UpdateLessonContentDto): Promise<LessonContent> {
    const content = await this.contentRepository.findById(id);
    
    if (!content) {
      throw new NotFoundException('Content not found');
    }

    // Cannot update published content directly
    if (content.status === 'PUBLISHED') {
      throw new ForbiddenException('Cannot update published content. Create a new version instead.');
    }

    return this.contentRepository.update(id, {
      ...dto,
      updatedBy: userId,
    });
  }

  async delete(id: string): Promise<LessonContent> {
    const content = await this.contentRepository.findById(id);
    
    if (!content) {
      throw new NotFoundException('Content not found');
    }

    return this.contentRepository.delete(id);
  }

  async publish(id: string, reviewerId: string): Promise<LessonContent> {
    const content = await this.contentRepository.findById(id);
    
    if (!content) {
      throw new NotFoundException('Content not found');
    }

    return this.contentRepository.publish(id, reviewerId);
  }
}
