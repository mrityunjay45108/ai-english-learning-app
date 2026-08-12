import { 
  Controller, Get, Post, Body, Query, 
  UseGuards, Request, HttpCode, HttpStatus 
} from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { RecommendationQueryDto, RecommendationFeedbackDto } from '../../common/dto/recommendation.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('recommendations')
@UseGuards(JwtAuthGuard)
export class RecommendationsController {
  constructor(private readonly recommendationsService: RecommendationsService) {}

  @Get()
  async getRecommendations(@Request() req, @Query() query: RecommendationQueryDto) {
    const result = await this.recommendationsService.getRecommendations(req.user.id, query);
    
    // Handle the result properly
    if (result && typeof result === 'object') {
      const data = (result as any).data || [];
      const pagination = (result as any).pagination || null;
      return ApiResponse.success(data, 'Recommendations retrieved successfully', pagination);
    }
    
    return ApiResponse.success(result, 'Recommendations retrieved successfully');
  }

  @Post('feedback')
  @HttpCode(HttpStatus.OK)
  async submitFeedback(@Request() req, @Body() dto: RecommendationFeedbackDto) {
    const result = await this.recommendationsService.submitFeedback(req.user.id, dto);
    return ApiResponse.success(result, 'Feedback submitted successfully');
  }

  @Get('signal')
  async getUserSignal(@Request() req) {
    const result = await this.recommendationsService.getUserSignal(req.user.id);
    return ApiResponse.success(result, 'User signal retrieved successfully');
  }
}
