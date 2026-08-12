import { IsString, IsOptional, IsUUID, IsEnum, IsNumber, Min, Max } from 'class-validator';

export enum RecommendationType {
  LESSON = 'LESSON',
  GRAMMAR_TOPIC = 'GRAMMAR_TOPIC',
  VOCABULARY_WORD = 'VOCABULARY_WORD',
  SPEAKING_PRACTICE = 'SPEAKING_PRACTICE',
  ASSESSMENT = 'ASSESSMENT',
  REVIEW = 'REVIEW',
}

export class RecommendationQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(RecommendationType) type?: RecommendationType;
  @IsOptional() @IsString() status?: string = 'ACTIVE';
}

export class RecommendationFeedbackDto {
  @IsUUID() recommendationId: string;
  @IsString() action: 'clicked' | 'completed' | 'dismissed' | 'ignored';
  @IsNumber() @IsOptional() @Min(0) timeSpent?: number;
  @IsNumber() @IsOptional() @Min(1) @Max(5) rating?: number;
  @IsString() @IsOptional() feedbackText?: string;
}