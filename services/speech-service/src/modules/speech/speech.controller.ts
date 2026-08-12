import { Controller, Get, Post, Body, Param, Query, UseGuards, Request, UploadedFile, UseInterceptors, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SpeechService } from './speech.service';
import { UploadAudioDto, GenerateSpeechDto } from '../../common/dto/speech.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('speech')
@UseGuards(JwtAuthGuard)
export class SpeechController {
  constructor(private readonly speechService: SpeechService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('audio'))
  @HttpCode(HttpStatus.ACCEPTED)
  async uploadAudio(
    @Request() req: any,
    @UploadedFile() file: any,
    @Body() dto: UploadAudioDto,
  ) {
    const result = await this.speechService.uploadAudio(req.user.id, file, dto);
    return ApiResponse.success(result, 'Audio uploaded and processing started');
  }

  @Get('transcription/:jobId')
  async getTranscription(@Param('jobId', ParseUUIDPipe) jobId: string, @Request() req: any) {
    const result = await this.speechService.getTranscription(jobId, req.user.id);
    return ApiResponse.success(result, 'Transcription retrieved successfully');
  }

  @Post('tts')
  @HttpCode(HttpStatus.ACCEPTED)
  async generateSpeech(@Request() req: any, @Body() dto: GenerateSpeechDto) {
    const result = await this.speechService.generateSpeech(req.user.id, dto);
    return ApiResponse.success(result, 'Speech generation started');
  }

  @Get('tts/:jobId')
  async getSpeechAudio(@Param('jobId', ParseUUIDPipe) jobId: string, @Request() req: any) {
    const result = await this.speechService.getSpeechAudio(jobId, req.user.id);
    return ApiResponse.success(result, 'Speech audio retrieved successfully');
  }

  @Get('jobs')
  async getJobs(@Request() req: any, @Query('type') type?: string, @Query('status') status?: string) {
    const result = await this.speechService.getUserJobs(req.user.id, type, status);
    return ApiResponse.success(result, 'Jobs retrieved successfully');
  }

  @Get('jobs/:jobId/status')
  async getJobStatus(@Param('jobId', ParseUUIDPipe) jobId: string, @Request() req: any) {
    const result = await this.speechService.getJobStatus(jobId, req.user.id);
    return ApiResponse.success(result, 'Job status retrieved successfully');
  }
}