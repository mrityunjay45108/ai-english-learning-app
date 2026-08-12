const fs = require('fs');
const path = require('path');

const src = path.join(process.cwd(), 'src');

fs.mkdirSync(path.join(src, 'database'), { recursive: true });
fs.mkdirSync(path.join(src, 'modules', 'words'), { recursive: true });
fs.mkdirSync(path.join(src, 'common', 'dto'), { recursive: true });

// 1. Prisma Service
fs.writeFileSync(path.join(src, 'database', 'prisma.service.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}`
);

// 2. DTOs
fs.writeFileSync(path.join(src, 'common', 'dto', 'response.dto.ts'),
`export class ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  pagination?: any;
  static success<T>(data: T, message?: string, pagination?: any) {
    return { success: true, data, message, pagination, timestamp: new Date().toISOString() };
  }
}`
);

fs.writeFileSync(path.join(src, 'common', 'dto', 'vocabulary.dto.ts'),
`import { IsString, IsOptional, IsNumber, IsBoolean, IsUUID } from 'class-validator';

export class WordQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() search?: string;
}

export class CreateWordDto {
  @IsString() word: string;
  @IsOptional() @IsString() pronunciation?: string;
  @IsOptional() @IsString() category?: string;
}

export class MarkWordDto {
  @IsUUID() wordId: string;
}

export class UpdateUserWordDto {
  @IsUUID() wordId: string;
  @IsOptional() @IsNumber() confidence?: number;
}

export class ReviewWordDto {
  @IsUUID() wordId: string;
  @IsBoolean() isCorrect: boolean;
}

export class UserWordQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
}`
);

// 3. Vocabulary Repository
fs.writeFileSync(path.join(src, 'modules', 'words', 'vocabulary.repository.ts'),
`import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class VocabularyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findWordById(id: string) {
    return this.prisma.vocabularyWord.findUnique({ where: { id }, include: { meanings: true } });
  }

  async findAllWords(params: { skip?: number; take?: number; where?: any }) {
    return this.prisma.vocabularyWord.findMany({ ...params, include: { meanings: true } });
  }

  async countWords(where?: any) {
    return this.prisma.vocabularyWord.count({ where });
  }

  async searchWords(query: string) {
    return this.prisma.vocabularyWord.findMany({
      where: { word: { contains: query, mode: 'insensitive' } },
      include: { meanings: true },
      take: 20
    });
  }

  async createWord(data: any) {
    return this.prisma.vocabularyWord.create({ data });
  }

  async getUserWord(userId: string, wordId: string) {
    return this.prisma.userVocabulary.findUnique({
      where: { userId_wordId: { userId, wordId } },
      include: { word: { include: { meanings: true } } }
    });
  }

  async getUserWords(userId: string, params: any) {
    return this.prisma.userVocabulary.findMany({
      where: { userId, ...params.where },
      include: { word: { include: { meanings: true } } },
      skip: params.skip,
      take: params.take
    });
  }

  async countUserWords(userId: string, where?: any) {
    return this.prisma.userVocabulary.count({ where: { userId, ...where } });
  }

  async createUserWord(userId: string, wordId: string, data: any) {
    return this.prisma.userVocabulary.create({
      data: { userId, wordId, ...data },
      include: { word: { include: { meanings: true } } }
    });
  }

  async updateUserWord(userId: string, wordId: string, data: any) {
    return this.prisma.userVocabulary.update({
      where: { userId_wordId: { userId, wordId } },
      data,
      include: { word: { include: { meanings: true } } }
    });
  }

  async deleteUserWord(userId: string, wordId: string) {
    return this.prisma.userVocabulary.delete({ where: { userId_wordId: { userId, wordId } } });
  }

  async getDueForReview(userId: string) {
    return this.prisma.userVocabulary.findMany({
      where: { userId, nextReview: { lte: new Date() } },
      include: { word: { include: { meanings: true } } }
    });
  }
}`
);

// 4. Vocabulary Service
fs.writeFileSync(path.join(src, 'modules', 'words', 'vocabulary.service.ts'),
`import { Injectable, NotFoundException } from '@nestjs/common';
import { VocabularyRepository } from './vocabulary.repository';

@Injectable()
export class VocabularyService {
  constructor(private readonly repo: VocabularyRepository) {}

  async searchWords(query: string) {
    return this.repo.searchWords(query || '');
  }

  async findAllWords(query: any) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.repo.findAllWords({ skip, take: limit }),
      this.repo.countWords()
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getWord(id: string) {
    const word = await this.repo.findWordById(id);
    if (!word) throw new NotFoundException('Word not found');
    return word;
  }

  async createWord(dto: any) {
    return this.repo.createWord(dto);
  }

  async addWordToUser(userId: string, dto: any) {
    return this.repo.createUserWord(userId, dto.wordId, { status: 'LEARNING', confidence: 10 });
  }

  async getUserWords(userId: string, query: any) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.repo.getUserWords(userId, { skip, take: limit }),
      this.repo.countUserWords(userId)
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getDueReviews(userId: string) {
    return this.repo.getDueForReview(userId);
  }

  async getRecommendedWords(userId: string) {
    return this.repo.findAllWords({ take: 10 });
  }

  async updateUserWord(userId: string, dto: any) {
    return this.repo.updateUserWord(userId, dto.wordId, dto);
  }

  async reviewWord(userId: string, dto: any) {
    return this.repo.updateUserWord(userId, dto.wordId, { lastReviewed: new Date() });
  }

  async removeUserWord(userId: string, wordId: string) {
    return this.repo.deleteUserWord(userId, wordId);
  }
}`
);

// 5. Vocabulary Controller
fs.writeFileSync(path.join(src, 'modules', 'words', 'vocabulary.controller.ts'),
`import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
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
}`
);

console.log('✅ Local files generated cleanly inside services/vocabulary-service!');
