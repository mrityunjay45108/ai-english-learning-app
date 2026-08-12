import { IsString, IsOptional, IsUUID, IsEnum, IsBoolean } from 'class-validator';

export enum NotificationChannel {
  EMAIL = 'EMAIL',
  PUSH = 'PUSH',
  IN_APP = 'IN_APP',
  SMS = 'SMS',
}

export class NotificationQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(NotificationChannel) channel?: NotificationChannel;
  @IsOptional() status?: string;
  @IsOptional() @IsBoolean() unreadOnly?: boolean;
}

export class UpdatePreferencesDto {
  @IsOptional() @IsBoolean() emailWeeklyReport?: boolean;
  @IsOptional() @IsBoolean() emailMarketing?: boolean;
  @IsOptional() @IsBoolean() pushLessonReminder?: boolean;
  @IsOptional() @IsBoolean() pushStreakAlert?: boolean;
  @IsOptional() @IsBoolean() pushAchievement?: boolean;
}