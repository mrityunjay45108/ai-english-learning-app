import { IsString, IsOptional, IsDateString, IsUUID } from 'class-validator';

export class AnalyticsQueryDto {
  @IsOptional() @IsDateString() startDate?: string;
  @IsOptional() @IsDateString() endDate?: string;
  @IsOptional() @IsString() period?: 'daily' | 'weekly' | 'monthly';
  @IsOptional() @IsUUID() userId?: string;
}