import { IsString, IsOptional, IsEnum, IsObject } from 'class-validator';

export enum ConversationMode {
  CONVERSATION = 'CONVERSATION',
  GRAMMAR = 'GRAMMAR',
  VOCABULARY = 'VOCABULARY',
  INTERVIEW = 'INTERVIEW',
  FREE_SPEAKING = 'FREE_SPEAKING',
}

export class CreateConversationDto {
  @IsEnum(ConversationMode)
  @IsOptional()
  mode?: ConversationMode = ConversationMode.CONVERSATION;

  @IsString()
  @IsOptional()
  title?: string;

  @IsObject()
  @IsOptional()
  context?: {
    level?: string;
    goals?: string[];
    currentLesson?: string;
  };
}

export class SendMessageDto {
  @IsString()
  content: string;

  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;
}