import { Controller, Get, Patch, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { ServiceGateway } from '../gateway/service-gateway.service';
import { AdminService } from '../admin/admin.service';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AdminRole } from '../../common/enums/role.enum';

@Controller('admin/users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.SUPPORT)
export class UsersController {
  constructor(
    private readonly gateway: ServiceGateway,
    private readonly adminService: AdminService,
  ) {}

  @Get('platform')
  async getUsers(@Request() req: any) {
    const result = await this.gateway.getUserService(req.headers.authorization?.split(' ')[1]);
    await this.adminService.logAudit(req.user.id, 'VIEW_USER', 'user', 'bulk', 'Users list viewed');
    return ApiResponse.success(result.data || [], 'Users retrieved successfully');
  }

  @Patch('platform/:id/suspend')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  async suspendUser(@Request() req: any, @Param('id', ParseUUIDPipe) id: string) {
    const result = await this.gateway.callService(
      'user',
      `/api/v1/users/${id}/suspend`,
      'PATCH',
      { suspended: true },
      req.headers.authorization?.split(' ')[1]
    );
    await this.adminService.logAudit(req.user.id, 'SUSPEND_USER', 'user', id, 'User suspended');
    return ApiResponse.success(result, 'User suspended successfully');
  }
}