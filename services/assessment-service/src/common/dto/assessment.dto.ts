import { IsString, IsOptional, IsEnum, IsUUID, IsNumber, Min, Max } from 'class-validator';

export enum AssessmentType {
  INITIAL = 'INITIAL',
  GRAMMAR = 'GRAMMAR',
  VOCABULARY = 'VOCABULARY',
  LISTENING = 'LISTENING',
  READING = 'READING',
  SPEAKING = 'SPEAKING',
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_BLANK = 'FILL_BLANK',
  TRUE_FALSE = 'TRUE_FALSE',
  MATCHING = 'MATCHING',
  SPEAKING = 'SPEAKING',
}

export enum DifficultyLevel {
  BEGINNER = 'BEGINNER',
  ELEMENTARY = 'ELEMENTARY',
  INTERMEDIATE = 'INTERMEDIATE',
  UPPER_INTERMEDIATE = 'UPPER_INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export enum QuestionCategory {
  GRAMMAR = 'GRAMMAR',
  VOCABULARY = 'VOCABULARY',
  LISTENING = 'LISTENING',
  READING = 'READING',
  SPEAKING = 'SPEAKING',
}

export class StartAssessmentDto {
  @IsEnum(AssessmentType)
  @IsOptional()
  type?: AssessmentType = AssessmentType.INITIAL;

  @IsNumber()
  @IsOptional()
  @Min(5)
  @Max(50)
  questionCount?: number = 20;

  @IsNumber()
  @IsOptional()
  @Min(5)
  @Max(60)
  timeLimit?: number = 30;
}

export class SubmitAnswerDto {
  @IsUUID()
  questionId: string;

  @IsOptional()
  answer: any;

  @IsNumber()
  @IsOptional()
  timeTaken?: number;
}

export class SubmitAssessmentDto {
  @IsUUID()
  assessmentId: string;
}

export class AssessmentResultDto {
  id: string;
  assessmentId: string;
  userId: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  grammarScore?: number;
  vocabularyScore?: number;
  listeningScore?: number;
  readingScore?: number;
  recommendedLevel: string;
  feedback?: string;
  completedAt: Date;
}
