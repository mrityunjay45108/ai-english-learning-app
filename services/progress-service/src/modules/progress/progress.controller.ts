import { Controller, Get, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CourseProgressQueryDto } from '../../common/dto/progress.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('progress')
@UseGuards(JwtAuthGuard)
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get('summary')
  async getSummary(@Request() req: any) {
    const result = await this.progressService.getSummary(req.user.id);
    return ApiResponse.success(result, 'Progress summary retrieved successfully');
  }

  @Get('courses')
  async getCourseProgress(@Request() req: any, @Query() query: CourseProgressQueryDto) {
    const result = await this.progressService.getAllCourseProgress(req.user.id, query);
    return ApiResponse.success(result.data, 'Course progress retrieved successfully', result.pagination);
  }

  @Get('courses/:courseId')
  async getSpecificCourseProgress(@Request() req: any, @Param('courseId', ParseUUIDPipe) courseId: string) {
    const result = await this.progressService.getCourseProgress(req.user.id, courseId);
    return ApiResponse.success(result, 'Course progress retrieved successfully');
  }

  @Get('lessons/:lessonId')
  async getLessonProgress(@Request() req: any, @Param('lessonId', ParseUUIDPipe) lessonId: string) {
    const result = await this.progressService.getLessonProgress(req.user.id, lessonId);
    return ApiResponse.success(result, 'Lesson progress retrieved successfully');
  }

  @Get('activities')
  async getActivities(@Request() req: any, @Query('limit') limit?: string) {
    const result = await this.progressService.getActivities(
      req.user.id,
      limit ? parseInt(limit, 10) : 50,
    );
    return ApiResponse.success(result, 'Activities retrieved successfully');
  }
}