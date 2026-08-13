import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';

@Controller('admin/users')
export class UsersController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async getUsers() {
    return { message: 'Get users list endpoint' };
  }

  @Post(':id/block')
  async blockUser(@Param('id') id: string, @Body('adminId') adminId: string) {
    if (adminId) {
      await this.adminService.logAction(adminId, 'BLOCK_USER', `User ${id} blocked`);
    }
    return { message: `User ${id} blocked successfully` };
  }

  @Post(':id/unblock')
  async unblockUser(@Param('id') id: string, @Body('adminId') adminId: string) {
    if (adminId) {
      await this.adminService.logAction(adminId, 'UNBLOCK_USER', `User ${id} unblocked`);
    }
    return { message: `User ${id} unblocked successfully` };
  }
}
