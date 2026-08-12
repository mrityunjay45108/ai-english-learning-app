import { Controller, Get, Post, Body, Param, Query, UseGuards, Request, HttpCode, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { CreateConversationDto, SendMessageDto } from '../../common/dto/ai-tutor.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ai')
@UseGuards(JwtAuthGuard)
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Post('conversations')
  @HttpCode(HttpStatus.CREATED)
  async createConversation(@Request() req: any, @Body() dto: CreateConversationDto) {
    const result = await this.conversationsService.createConversation(req.user.id, dto);
    return ApiResponse.success(result, 'Conversation created successfully');
  }

  @Post('conversations/:id/messages')
  @HttpCode(HttpStatus.OK)
  async sendMessage(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: any,
    @Body() dto: SendMessageDto,
  ) {
    const result = await this.conversationsService.sendMessage(id, req.user.id, dto);
    return ApiResponse.success(result, 'Message sent successfully');
  }

  @Get('conversations')
  async getConversations(
    @Request() req: any,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const result = await this.conversationsService.getConversations(
      req.user.id,
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
    );
    return ApiResponse.success(result.data, 'Conversations retrieved successfully', result.pagination);
  }

  @Get('conversations/:id')
  async getConversation(@Param('id', ParseUUIDPipe) id: string, @Request() req: any) {
    const result = await this.conversationsService.getConversation(id, req.user.id);
    return ApiResponse.success(result, 'Conversation retrieved successfully');
  }
}