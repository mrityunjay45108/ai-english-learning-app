import { IsString, IsOptional, IsNumber, IsArray, IsBoolean } from 'class-validator';

export class UpdateProfileDto {
  @IsOptional() @IsString() firstName?: string;
  @IsOptional() @IsString() lastName?: string;
  @IsOptional() @IsString() avatarUrl?: string;
  @IsOptional() @IsString() bio?: string;
  @IsOptional() @IsString() dateOfBirth?: string;
}

export class UpdatePreferencesDto {
  @IsOptional() @IsString() locale?: string;
  @IsOptional() @IsString() timezone?: string;
  @IsOptional() @IsNumber() dailyGoalMinutes?: number;
  @IsOptional() @IsArray() @IsString({ each: true }) learningGoals?: string[];
  @IsOptional() @IsBoolean() notificationEnabled?: boolean;
  @IsOptional() @IsBoolean() emailNotifications?: boolean;
}
