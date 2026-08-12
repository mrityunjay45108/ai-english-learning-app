import { IsString, IsOptional, IsNumber, IsBoolean, IsUUID } from 'class-validator';

export class WordQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() search?: string;
}

export class CreateWordDto {
  @IsString() word: string;
  @IsOptional() @IsString() pronunciation?: string;
  @IsOptional() @IsString() category?: string;
}

export class MarkWordDto {
  @IsUUID() wordId: string;
}

export class UpdateUserWordDto {
  @IsUUID() wordId: string;
  @IsOptional() @IsNumber() confidence?: number;
}

export class ReviewWordDto {
  @IsUUID() wordId: string;
  @IsBoolean() isCorrect: boolean;
}

export class UserWordQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
}