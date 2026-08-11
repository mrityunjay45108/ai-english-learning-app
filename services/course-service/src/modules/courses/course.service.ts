import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { CreateCourseDto, UpdateCourseDto, CourseQueryDto } from '../../common/dto/course.dto';
import { Course } from '@prisma/client';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async create(userId: string, dto: CreateCourseDto): Promise<Course> {
    return this.courseRepository.create({
      title: dto.title,
      description: dto.description,
      level: dto.level || 'BEGINNER',
      category: dto.categoryId ? { connect: { id: dto.categoryId } } : undefined,
      difficulty: dto.difficulty,
      duration: dto.duration,
      createdBy: userId,
      updatedBy: userId,
    });
  }

  async findById(id: string, userRole?: string): Promise<Course> {
    const course = await this.courseRepository.findById(id);
    
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    if (course.status === 'DRAFT' && userRole !== 'ADMIN' && userRole !== 'CONTENT_MANAGER') {
      throw new ForbiddenException('This course is not published yet');
    }
    return course;
  }

  async findAll(query: CourseQueryDto, userRole?: string) {
    const { page = 1, limit = 10, search, level, status, categoryId, sortBy = 'createdAt', sortOrder = 'desc' } = query;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const where: any = {};
    if (userRole !== 'ADMIN' && userRole !== 'CONTENT_MANAGER') {
      where.status = 'PUBLISHED';
    } else if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (level) {
      where.level = level;
    }

    if (categoryId) {
      where.categoryId = categoryId;
    }

    const orderBy: any = {};
    orderBy[sortBy] = sortOrder;

    const [courses, total] = await Promise.all([
      this.courseRepository.findAll({ skip, take, where, orderBy }),
      this.courseRepository.count(where),
    ]);

    return {
      data: courses,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit)),
      },
    };
  }

  async update(id: string, userId: string, dto: UpdateCourseDto): Promise<Course> {
    const course = await this.courseRepository.findById(id);
    
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return this.courseRepository.update(id, {
      ...dto,
      category: dto.categoryId ? { connect: { id: dto.categoryId } } : undefined,
      updatedBy: userId,
    });
  }

  async delete(id: string): Promise<Course> {
    const course = await this.courseRepository.findById(id);
    
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return this.courseRepository.delete(id);
  }

  async publish(id: string, userId: string): Promise<Course> {
    const course = await this.courseRepository.findById(id);
    
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return this.courseRepository.update(id, {
      status: 'PUBLISHED',
      publishedAt: new Date(),
      updatedBy: userId,
    });
  }

  async unpublish(id: string, userId: string): Promise<Course> {
    const course = await this.courseRepository.findById(id);
    
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return this.courseRepository.update(id, {
      status: 'DRAFT',
      updatedBy: userId,
    });
  }
}
