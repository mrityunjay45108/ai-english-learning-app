import { 
  Controller, Get, Post, Body, Param, 
  UseGuards, Request, HttpCode, HttpStatus, ParseUUIDPipe 
} from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { StartAssessmentDto, SubmitAnswerDto } from '../../common/dto/assessment.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('assessments')
@UseGuards(JwtAuthGuard)
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Post('start')
  @HttpCode(HttpStatus.CREATED)
  async start(@Request() req, @Body() dto: StartAssessmentDto) {
    const result = await this.assessmentService.startAssessment(req.user.id, dto);
    return ApiResponse.success(result, 'Assessment started successfully');
  }

  @Get(':id/questions')
  async getQuestions(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    const result = await this.assessmentService.getQuestions(id, req.user.id);
    return ApiResponse.success(result, 'Questions retrieved successfully');
  }

  @Post(':id/answer')
  @HttpCode(HttpStatus.OK)
  async submitAnswer(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req,
    @Body() dto: SubmitAnswerDto
  ) {
    const result = await this.assessmentService.submitAnswer(id, req.user.id, dto);
    return ApiResponse.success(result, 'Answer submitted successfully');
  }

  @Post(':id/complete')
  @HttpCode(HttpStatus.OK)
  async complete(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    const result = await this.assessmentService.completeAssessment(id, req.user.id);
    return ApiResponse.success(result, 'Assessment completed successfully');
  }

  @Get(':id/result')
  async getResult(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    const result = await this.assessmentService.getResult(id, req.user.id);
    return ApiResponse.success(result, 'Result retrieved successfully');
  }

  @Get('history')
  async getHistory(@Request() req) {
    const result = await this.assessmentService.getHistory(req.user.id);
    return ApiResponse.success(result, 'Assessment history retrieved successfully');
  }
}
