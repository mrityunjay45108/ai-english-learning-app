import { IsString, IsOptional, IsEmail, IsEnum, IsBoolean } from 'class-validator';
import { AdminRole } from '../enums/role.enum';

export class CreateAdminDto {
  @IsEmail()
  email: string;

  @IsEnum(AdminRole)
  @IsOptional()
  role?: AdminRole = AdminRole.ADMIN;

  @IsString()
  @IsOptional()
  createdBy?: string;
}

export class UpdateAdminDto {
  @IsEnum(AdminRole)
  @IsOptional()
  role?: AdminRole;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class AdminQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(AdminRole) role?: AdminRole;
  @IsOptional() @IsBoolean() isActive?: boolean;
  @IsOptional() @IsString() search?: string;
}

export class AuditQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 50;
  @IsOptional() @IsEnum(AdminRole) adminRole?: AdminRole;
  @IsOptional() action?: string;
  @IsOptional() @IsString() adminId?: string;
  @IsOptional() @IsString() targetType?: string;
  @IsOptional() @IsString() startDate?: string;
  @IsOptional() @IsString() endDate?: string;
}