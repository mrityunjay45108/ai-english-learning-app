import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('vocabulary')
export class VocabularyController {
  constructor(private readonly service: VocabularyService) {}

  @Get('search')
  async search(@Query('q') query: string) {
    return ApiResponse.success(await this.service.searchWords(query));
  }

  @Get()
  async findAll(@Query() query: any) {
    const res = await this.service.findAllWords(query);
    return ApiResponse.success(res.data, 'Words fetched', res.pagination);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return ApiResponse.success(await this.service.getWord(id));
  }

  @Post()
  async create(@Body() dto: any) {
    return ApiResponse.success(await this.service.createWord(dto));
  }

  @Post('user/words')
  @UseGuards(JwtAuthGuard)
  async addWord(@Request() req, @Body() dto: any) {
    return ApiResponse.success(await this.service.addWordToUser(req.user.id, dto));
  }

  @Get('user/words')
  @UseGuards(JwtAuthGuard)
  async getUserWords(@Request() req, @Query() query: any) {
    const res = await this.service.getUserWords(req.user.id, query);
    return ApiResponse.success(res.data, 'User vocabulary', res.pagination);
  }

  @Get('user/due')
  @UseGuards(JwtAuthGuard)
  async getDueReviews(@Request() req) {
    return ApiResponse.success(await this.service.getDueReviews(req.user.id));
  }

  @Get('user/recommended')
  @UseGuards(JwtAuthGuard)
  async getRecommended(@Request() req) {
    return ApiResponse.success(await this.service.getRecommendedWords(req.user.id));
  }

  @Patch('user/words')
  @UseGuards(JwtAuthGuard)
  async updateUserWord(@Request() req, @Body() dto: any) {
    return ApiResponse.success(await this.service.updateUserWord(req.user.id, dto));
  }

  @Post('user/review')
  @UseGuards(JwtAuthGuard)
  async reviewWord(@Request() req, @Body() dto: any) {
    return ApiResponse.success(await this.service.reviewWord(req.user.id, dto));
  }

  @Delete('user/words/:wordId')
  @UseGuards(JwtAuthGuard)
  async removeUserWord(@Request() req, @Param('wordId') wordId: string) {
    await this.service.removeUserWord(req.user.id, wordId);
    return ApiResponse.success(null, 'Word removed');
  }
}