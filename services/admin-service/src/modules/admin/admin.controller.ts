import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto, AdminQueryDto, AuditQueryDto } from '../../common/dto/admin.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AdminRole } from '../../common/enums/role.enum';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('users')
  @Roles(AdminRole.SUPER_ADMIN)
  async createAdmin(@Request() req: any, @Body() dto: CreateAdminDto) {
    const result = await this.adminService.createAdmin(req.user.id, dto);
    return ApiResponse.success(result, 'Admin created successfully');
  }

  @Get('users')
  async getAdmins(@Query() query: AdminQueryDto) {
    const result = await this.adminService.getAdmins(query);
    return ApiResponse.success(result.data, 'Admins retrieved successfully', result.pagination);
  }

  @Get('users/:id')
  async getAdmin(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.adminService.getAdmin(id);
    return ApiResponse.success(result, 'Admin retrieved successfully');
  }

  @Patch('users/:id')
  @Roles(AdminRole.SUPER_ADMIN)
  async updateAdmin(@Request() req: any, @Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateAdminDto) {
    const result = await this.adminService.updateAdmin(req.user.id, id, dto);
    return ApiResponse.success(result, 'Admin updated successfully');
  }

  @Get('audit-logs')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  async getAuditLogs(@Query() query: AuditQueryDto) {
    const result = await this.adminService.getAuditLogs(query);
    return ApiResponse.success(result.data, 'Audit logs retrieved successfully', result.pagination);
  }

  @Get('permissions')
  async checkPermission(@Request() req: any) {
    const admin = await this.adminService.getAdminByUserId(req.user.id);
    return ApiResponse.success({
      role: admin?.role,
      permissions: this.getPermissionsForRole(admin?.role || 'ANALYST'),
    }, 'Permissions retrieved successfully');
  }

  private getPermissionsForRole(role: string): string[] {
    const permissions: Record<string, string[]> = {      [AdminRole.SUPER_ADMIN]: ['*'],
      [AdminRole.ADMIN]: ['view_users', 'suspend_user', 'view_courses', 'create_courses', 'update_courses', 'view_content', 'create_content', 'update_content', 'publish_content', 'view_subscriptions', 'view_payments', 'view_analytics', 'view_audit_logs'],
      [AdminRole.CONTENT_MANAGER]: ['view_courses', 'create_courses', 'update_courses', 'view_content', 'create_content', 'update_content', 'publish_content'],
      [AdminRole.SUPPORT]: ['view_users', 'view_courses', 'view_subscriptions', 'view_payments'],
      [AdminRole.ANALYST]: ['view_analytics'],
    };
    return permissions[role] || [];
  }
}