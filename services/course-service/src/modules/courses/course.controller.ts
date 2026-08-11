import { 
  Controller, Get, Post, Patch, Delete, Body, Param, Query, 
  UseGuards, Request, HttpCode, HttpStatus, ParseUUIDPipe 
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto, CourseQueryDto } from '../../common/dto/course.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // ============ PUBLIC ENDPOINTS ============
  @Get()
  async findAll(@Query() query: CourseQueryDto, @Request() req) {
    const userRole = req.user?.role;
    const result = await this.courseService.findAll(query, userRole);
    return ApiResponse.success(result.data, 'Courses retrieved successfully', result.pagination);
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    const userRole = req.user?.role;
    const course = await this.courseService.findById(id, userRole);
    return ApiResponse.success(course, 'Course retrieved successfully');
  }

  // ============ ADMIN/CONTENT_MANAGER ENDPOINTS ============
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'CONTENT_MANAGER')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateCourseDto, @Request() req) {
    const course = await this.courseService.create(req.user.id, dto);
    return ApiResponse.success(course, 'Course created successfully');
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'CONTENT_MANAGER')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCourseDto,
    @Request() req
  ) {
    const course = await this.courseService.update(id, req.user.id, dto);
    return ApiResponse.success(course, 'Course updated successfully');
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.courseService.delete(id);
    return ApiResponse.success(null, 'Course deleted successfully');
  }

  @Post(':id/publish')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'CONTENT_MANAGER')
  async publish(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    const course = await this.courseService.publish(id, req.user.id);
    return ApiResponse.success(course, 'Course published successfully');
  }

  @Post(':id/unpublish')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'CONTENT_MANAGER')
  async unpublish(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    const course = await this.courseService.unpublish(id, req.user.id);
    return ApiResponse.success(course, 'Course unpublished successfully');
  }
}
