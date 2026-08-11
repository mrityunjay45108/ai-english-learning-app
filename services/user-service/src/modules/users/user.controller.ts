import { Controller, Get, Patch, Body, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateProfileDto, UpdatePreferencesDto } from '../../common/dto/user.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async getFullProfile(@Request() req) {
    const userId = req.user.id;
    const result = await this.userService.getFullProfile(userId);
    return ApiResponse.success(result, 'Profile retrieved successfully');
  }

  @Patch('me')
  @HttpCode(HttpStatus.OK)
  async updateProfile(@Request() req, @Body() dto: UpdateProfileDto) {
    const userId = req.user.id;
    const result = await this.userService.updateProfile(userId, dto);
    return ApiResponse.success(result, 'Profile updated successfully');
  }

  @Get('me/profile')
  async getProfile(@Request() req) {
    const userId = req.user.id;
    const result = await this.userService.getProfile(userId);
    return ApiResponse.success(result, 'Profile retrieved successfully');
  }

  @Patch('me/profile')
  @HttpCode(HttpStatus.OK)
  async updateProfileOnly(@Request() req, @Body() dto: UpdateProfileDto) {
    const userId = req.user.id;
    const result = await this.userService.updateProfile(userId, dto);
    return ApiResponse.success(result, 'Profile updated successfully');
  }

  @Get('me/preferences')
  async getPreferences(@Request() req) {
    const userId = req.user.id;
    const result = await this.userService.getPreferences(userId);
    return ApiResponse.success(result, 'Preferences retrieved successfully');
  }

  @Patch('me/preferences')
  @HttpCode(HttpStatus.OK)
  async updatePreferences(@Request() req, @Body() dto: UpdatePreferencesDto) {
    const userId = req.user.id;
    const result = await this.userService.updatePreferences(userId, dto);
    return ApiResponse.success(result, 'Preferences updated successfully');
  }
}
