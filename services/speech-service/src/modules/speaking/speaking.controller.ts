import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { SpeakingService } from './speaking.service';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('speaking')
@UseGuards(JwtAuthGuard)
export class SpeakingController {
  constructor(private readonly speakingService: SpeakingService) {}

  @Post('sessions')
  async startSession(@Request() req: any, @Body() body: { title?: string }) {
    const result = await this.speakingService.startSession(req.user.id, body?.title);
    return ApiResponse.success(result, 'Speaking session started');
  }

  @Post('sessions/:sessionId/turns')
  async processTurn(@Request() req: any, @Param('sessionId') sessionId: string, @Body() body: { transcript: string }) {
    const result = await this.speakingService.processTurn(req.user.id, sessionId, body.transcript || 'I go to office yesterday');
    return ApiResponse.success(result, 'Speaking turn processed');
  }

  @Get('sessions')
  async getSessions(@Request() req: any) {
    const result = await this.speakingService.getSessions(req.user.id);
    return ApiResponse.success(result, 'Sessions retrieved');
  }
}