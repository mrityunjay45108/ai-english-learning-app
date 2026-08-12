import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsQueryDto } from '../../common/dto/analytics.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('analytics')
@UseGuards(JwtAuthGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('overview')
  async getOverview() {
    const result = await this.analyticsService.getOverview();
    return ApiResponse.success(result, 'Analytics overview retrieved successfully');
  }

  @Get('engagement')
  async getEngagement(@Query() query: AnalyticsQueryDto) {
    const result = await this.analyticsService.getEngagement(query);
    return ApiResponse.success(result, 'Engagement analytics retrieved successfully');
  }

  @Get('courses')
  async getCourseAnalytics() {
    const result = await this.analyticsService.getCourseAnalytics();
    return ApiResponse.success(result, 'Course analytics retrieved successfully');
  }

  @Get('ai-usage')
  async getAIUsage() {
    const result = await this.analyticsService.getAIUsage();
    return ApiResponse.success(result, 'AI usage analytics retrieved successfully');
  }

  @Get('subscriptions')
  async getSubscriptionAnalytics() {
    const result = await this.analyticsService.getSubscriptionAnalytics();
    return ApiResponse.success(result, 'Subscription analytics retrieved successfully');
  }
}