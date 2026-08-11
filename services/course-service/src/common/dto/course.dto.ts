import { IsString, IsOptional, IsEnum, IsNumber, IsUUID, Min, Max, IsBoolean } from 'class-validator';

export enum CourseLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export enum CourseStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export enum LessonType {
  VIDEO = 'VIDEO',
  TEXT = 'TEXT',
  QUIZ = 'QUIZ',
  SPEAKING = 'SPEAKING',
  LISTENING = 'LISTENING',
}

// ============ Course DTOs ============
export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(CourseLevel)
  @IsOptional()
  level?: CourseLevel;

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(5)
  difficulty?: number;

  @IsNumber()
  @IsOptional()
  duration?: number;
}

export class UpdateCourseDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(CourseLevel)
  @IsOptional()
  level?: CourseLevel;

  @IsEnum(CourseStatus)
  @IsOptional()
  status?: CourseStatus;

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(5)
  difficulty?: number;

  @IsNumber()
  @IsOptional()
  duration?: number;
}

export class CourseQueryDto {
  @IsOptional()
  page?: number = 1;

  @IsOptional()
  limit?: number = 10;

  @IsOptional()
  search?: string;

  @IsOptional()
  @IsEnum(CourseLevel)
  level?: CourseLevel;

  @IsOptional()
  @IsEnum(CourseStatus)
  status?: CourseStatus;

  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @IsOptional()
  sortBy?: string = 'createdAt';

  @IsOptional()
  sortOrder?: 'asc' | 'desc' = 'desc';
}

// ============ Module DTOs ============
export class CreateModuleDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  orderIndex?: number;
}

export class UpdateModuleDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  orderIndex?: number;
}

// ============ Lesson DTOs ============
export class CreateLessonDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(LessonType)
  type: LessonType;

  @IsNumber()
  @IsOptional()
  @Min(0)
  duration?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  orderIndex?: number;

  @IsBoolean()
  @IsOptional()
  isFree?: boolean;
}

export class UpdateLessonDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(LessonType)
  @IsOptional()
  type?: LessonType;

  @IsNumber()
  @IsOptional()
  @Min(0)
  duration?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  orderIndex?: number;

  @IsBoolean()
  @IsOptional()
  isFree?: boolean;
}
