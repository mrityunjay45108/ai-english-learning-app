import { Controller, Get, Post, Body, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { GrammarService } from './grammar.service';
import { TopicQueryDto, SubmitExerciseDto, ProgressQueryDto } from '../../common/dto/grammar.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('grammar')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Get('topics')
  async getTopics(@Query() query: TopicQueryDto) {
    const result = await this.grammarService.getAllTopics(query);
    return ApiResponse.success(result.data, 'Topics retrieved successfully', result.pagination);
  }

  @Get('topics/:id')
  async getTopic(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.grammarService.getTopic(id);
    return ApiResponse.success(result, 'Topic retrieved successfully');
  }

  @Get('topics/:id/exercises')
  async getExercises(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.grammarService.getExercises(id);
    return ApiResponse.success(result, 'Exercises retrieved successfully');
  }

  @Post('exercise/submit')
  @UseGuards(JwtAuthGuard)
  async submitExercise(@Request() req: any, @Body() dto: SubmitExerciseDto) {
    const result = await this.grammarService.submitExercise(req.user.id, dto);
    return ApiResponse.success(result, 'Exercise submitted successfully');
  }

  @Get('progress')
  @UseGuards(JwtAuthGuard)
  async getProgress(@Request() req: any, @Query() query: ProgressQueryDto) {
    const result = await this.grammarService.getAllProgress(req.user.id, query);
    return ApiResponse.success(result.data, 'Progress retrieved successfully', result.pagination);
  }

  @Get('progress/topic/:topicId')
  @UseGuards(JwtAuthGuard)
  async getTopicProgress(@Request() req: any, @Param('topicId', ParseUUIDPipe) topicId: string) {
    const result = await this.grammarService.getProgress(req.user.id, topicId);
    return ApiResponse.success(result, 'Topic progress retrieved successfully');
  }

  @Get('progress/mastered')
  @UseGuards(JwtAuthGuard)
  async getMasteredTopics(@Request() req: any) {
    const result = await this.grammarService.getMasteredTopics(req.user.id);
    return ApiResponse.success(result, 'Mastered topics retrieved successfully');
  }
}