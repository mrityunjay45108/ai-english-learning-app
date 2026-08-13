import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminRole } from '../../common/enums/role.enum';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(
    @Body() body: { email: string; password: string; name: string; role?: AdminRole },
  ) {
    return this.adminService.createAdmin(body);
  }

  @Get()
  async getAdmins() {
    return this.adminService.getAdmins();
  }

  @Get(':id')
  async getAdminById(@Param('id') id: string) {
    return this.adminService.getAdminById(id);
  }

  @Put(':id')
  async updateAdmin(
    @Param('id') id: string,
    @Body() body: { name?: string; role?: AdminRole; isActive?: boolean },
  ) {
    return this.adminService.updateAdmin(id, body);
  }

  @Delete(':id')
  async deleteAdmin(@Param('id') id: string) {
    return this.adminService.deleteAdmin(id);
  }

  @Get('audit/logs')
  async getAuditLogs(@Query('adminId') adminId?: string) {
    return this.adminService.getAuditLogs(adminId);
  }

  @Post('audit/log')
  async logAction(
    @Body() body: { adminId: string; action: string; details?: string; ip?: string },
  ) {
    return this.adminService.logAction(body.adminId, body.action, body.details, body.ip);
  }
}
