import { Controller, Get, Query, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
// import { GamificationService } from './gamification.service';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('gamification')
@UseGuards(JwtAuthGuard)
export class GamificationController {
  constructor(
    // private readonly gamificationService: GamificationService,  // Temporarily disabled
  ) {}

  @Get('xp')
  async getXP(@Request() req: any) {
    console.log('⚠️ Gamification Service temporarily disabled');
    return ApiResponse.success({ userId: req.user?.id, totalXp: 0, currentLevel: 1, levelProgress: 0, xpToNextLevel: 100 }, 'XP summary retrieved successfully');
  }

  @Get('xp/transactions')
  async getTransactions(@Request() req: any, @Query('limit') limit?: string) {
    console.log('⚠️ Gamification Service temporarily disabled');
    return ApiResponse.success([], 'Transactions retrieved successfully');
  }

  @Get('streak')
  async getStreak(@Request() req: any) {
    console.log('⚠️ Gamification Service temporarily disabled');
    return ApiResponse.success({ userId: req.user?.id, currentStreak: 0, bestStreak: 0 }, 'Streak retrieved successfully');
  }

  @Get('badges')
  async getBadges(@Request() req: any) {
    console.log('⚠️ Gamification Service temporarily disabled');
    return ApiResponse.success([], 'Badges retrieved successfully');
  }

  @Get('badges/user')
  async getUserBadges(@Request() req: any) {
    console.log('⚠️ Gamification Service temporarily disabled');
    return ApiResponse.success([], 'User badges retrieved successfully');
  }

  @Get('achievements')
  async getAchievements(@Request() req: any) {
    console.log('⚠️ Gamification Service temporarily disabled');
    return ApiResponse.success([], 'Achievements retrieved successfully');
  }
}