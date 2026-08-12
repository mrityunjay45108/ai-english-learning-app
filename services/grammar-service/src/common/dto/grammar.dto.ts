import { IsString, IsOptional, IsEnum, IsUUID, IsNumber, Min } from 'class-validator';

export enum DifficultyLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export enum UserProgressStatus {
  NOT_STARTED = 'NOT_STARTED',
  LEARNING = 'LEARNING',
  MASTERED = 'MASTERED',
}

export class TopicQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsString() category?: string;
  @IsOptional() @IsEnum(DifficultyLevel) difficulty?: DifficultyLevel;
  @IsOptional() @IsString() search?: string;
}

export class SubmitExerciseDto {
  @IsUUID() exerciseId: string;
  @IsOptional() answer: any;
  @IsNumber() @IsOptional() @Min(0) timeTaken?: number;
}

export class ProgressQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(UserProgressStatus) status?: UserProgressStatus;
}