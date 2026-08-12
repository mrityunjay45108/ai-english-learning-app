import { Controller, Get, Patch, Body, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationQueryDto, UpdatePreferencesDto } from '../../common/dto/notification.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async getNotifications(@Request() req: any, @Query() query: NotificationQueryDto) {
    const result = await this.notificationService.getUserNotifications(req.user.id, query);
    return ApiResponse.success(result.data, 'Notifications retrieved successfully', result.pagination);
  }

  @Get('unread/count')
  async getUnreadCount(@Request() req: any) {
    const result = await this.notificationService.getUnreadCount(req.user.id);
    return ApiResponse.success({ count: result }, 'Unread count retrieved successfully');
  }

  @Patch('read/:id')
  async markAsRead(@Param('id', ParseUUIDPipe) id: string, @Request() req: any) {
    const result = await this.notificationService.markAsRead(req.user.id, id);
    return ApiResponse.success(result, 'Notification marked as read');
  }

  @Patch('read/all')
  async markAllAsRead(@Request() req: any, @Body() dto: any) {
    const result = await this.notificationService.markAllAsRead(req.user.id, dto?.channel);
    return ApiResponse.success(result, 'All notifications marked as read');
  }

  @Get('preferences')
  async getPreferences(@Request() req: any) {
    const result = await this.notificationService.getUserPreferences(req.user.id);
    return ApiResponse.success(result, 'Preferences retrieved successfully');
  }

  @Patch('preferences')
  async updatePreferences(@Request() req: any, @Body() dto: UpdatePreferencesDto) {
    const result = await this.notificationService.updatePreferences(req.user.id, dto);
    return ApiResponse.success(result, 'Preferences updated successfully');
  }
}