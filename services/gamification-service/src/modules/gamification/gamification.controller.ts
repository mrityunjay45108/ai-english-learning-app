import { Controller, Get, Query, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { GamificationService } from './gamification.service';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('gamification')
@UseGuards(JwtAuthGuard)
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) {}

  @Get('xp')
  async getXP(@Request() req: any) {
    const result = await this.gamificationService.getXPSummary(req.user.id);
    return ApiResponse.success(result, 'XP summary retrieved successfully');
  }

  @Get('xp/transactions')
  async getTransactions(@Request() req: any, @Query('limit') limit?: string) {
    const result = await this.gamificationService.getTransactions(req.user.id, limit ? parseInt(limit, 10) : 50);
    return ApiResponse.success(result, 'Transactions retrieved successfully');
  }

  @Get('streak')
  async getStreak(@Request() req: any) {
    const result = await this.gamificationService.getStreak(req.user.id);
    return ApiResponse.success(result, 'Streak retrieved successfully');
  }

  @Get('badges')
  async getBadges(@Request() req: any) {
    const result = await this.gamificationService.getAllBadges(req.user.id);
    return ApiResponse.success(result, 'Badges retrieved successfully');
  }

  @Get('badges/user')
  async getUserBadges(@Request() req: any) {
    const result = await this.gamificationService.getUserBadges(req.user.id);
    return ApiResponse.success(result, 'User badges retrieved successfully');
  }

  @Get('achievements')
  async getAchievements(@Request() req: any) {
    const result = await this.gamificationService.getUserAchievements(req.user.id);
    return ApiResponse.success(result, 'Achievements retrieved successfully');
  }
}