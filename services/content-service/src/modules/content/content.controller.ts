import { 
  Controller, Get, Post, Patch, Delete, Body, Param, Query, 
  UseGuards, Request, HttpCode, HttpStatus, ParseUUIDPipe 
} from '@nestjs/common';
import { ContentService } from './content.service';
import { 
  CreateLessonContentDto, UpdateLessonContentDto, ContentQueryDto
} from '../../common/dto/content.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async findAll(@Query() query: ContentQueryDto, @Request() req) {
    const userRole = req.user?.role;
    const result = await this.contentService.findAll(query, userRole);
    return ApiResponse.success(result.data, 'Content retrieved successfully', result.pagination);
  }

  @Get('lesson/:lessonId')
  async findByLessonId(@Param('lessonId', ParseUUIDPipe) lessonId: string, @Request() req) {
    const content = await this.contentService.findByLessonId(lessonId, req.user?.role);
    return ApiResponse.success(content, 'Lesson content retrieved successfully');
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    const content = await this.contentService.findById(id, req.user?.role);
    return ApiResponse.success(content, 'Content retrieved successfully');
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'CONTENT_MANAGER')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateLessonContentDto, @Request() req) {
    const content = await this.contentService.create(req.user.id, dto);
    return ApiResponse.success(content, 'Content created successfully');
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'CONTENT_MANAGER')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateLessonContentDto,
    @Request() req
  ) {
    const content = await this.contentService.update(id, req.user.id, dto);
    return ApiResponse.success(content, 'Content updated successfully');
  }

  @Post(':id/publish')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'CONTENT_MANAGER')
  async publish(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    const content = await this.contentService.publish(id, req.user.id);
    return ApiResponse.success(content, 'Content published successfully');
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.contentService.delete(id);
    return ApiResponse.success(null, 'Content deleted successfully');
  }
}
