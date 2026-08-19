// import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
// import { SpeakingService } from './speaking.service';
// import { ApiResponse } from '../../common/dto/response.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// @Controller()
// export class SpeakingController {
//   constructor(private readonly speakingService: SpeakingService) {}

//   // 1. Lessons Route: http://localhost:3012/api/v1/courses/lessons
//   @Get('courses/lessons')
//   async getLessons() {
//     return ApiResponse.success({
//       xp: 620,
//       streak: 8,
//       lessons: [
//         { id: 1, title: 'Professional Greetings & Corporate Pitch', duration: '2 mins', isFree: true, completed: true, desc: 'Master executive introductions.' },
//         { id: 2, title: 'Advanced Job Interview Frameworks', duration: '5 mins', isFree: false, completed: false, desc: 'High-impact technical interview responses.' }
//       ]
//     }, 'Lessons retrieved successfully');
//   }

//   // 2. Chat / AI Coach Route: http://localhost:3012/api/v1/speech/chat
//   @Post('speech/chat')
//   async speechChat(@Request() req: any, @Body() body: { transcript?: string; message?: string }) {
//     const userMessage = body.transcript || body.message || 'Hello';
    
//     return ApiResponse.success({
//       reply: `That's a well-structured sentence, Mrityunjay! Let's build on "${userMessage}". Try adding more descriptive vocabulary.`,
//       score: 88,
//       grammarCorrected: true
//     }, 'AI response generated successfully');
//   }

//   // 3. Protected Speaking Sessions Routes
//   @UseGuards(JwtAuthGuard)
//   @Post('speaking/sessions')
//   async startSession(@Request() req: any, @Body() body: { title?: string }) {
//     const result = await this.speakingService.startSession(req.user.id, body?.title);
//     return ApiResponse.success(result, 'Speaking session started');
//   }

//   @UseGuards(JwtAuthGuard)
//   @Post('speaking/sessions/:sessionId/turns')
//   async processTurn(@Request() req: any, @Param('sessionId') sessionId: string, @Body() body: { transcript: string }) {
//     const result = await this.speakingService.processTurn(req.user.id, sessionId, body.transcript || 'I go to office yesterday');
//     return ApiResponse.success(result, 'Speaking turn processed');
//   }

//   @UseGuards(JwtAuthGuard)
//   @Get('speaking/sessions')
//   async getSessions(@Request() req: any) {
//     const result = await this.speakingService.getSessions(req.user.id);
//     return ApiResponse.success(result, 'Sessions retrieved');
//   }
// }


import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { SpeakingService } from './speaking.service';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class SpeakingController {
  constructor(private readonly speakingService: SpeakingService) {}

  // 1. Lessons Route
  @Get('courses/lessons')
  async getLessons() {
    return ApiResponse.success({
      xp: 620,
      streak: 8,
      lessons: [
        { id: 1, title: 'Professional Greetings & Corporate Pitch', duration: '2 mins', isFree: true, completed: true, desc: 'Master executive introductions.' },
        { id: 2, title: 'Advanced Job Interview Frameworks', duration: '5 mins', isFree: false, completed: false, desc: 'High-impact technical interview responses.' }
      ]
    }, 'Lessons retrieved successfully');
  }

  // 2. Chat / AI Coach Route (POST)
  @Post('speech/chat')
  async speechChatPost(@Request() req: any, @Body() body: { prompt?: string; transcript?: string; message?: string }) {
    const userMessage = body?.prompt || body?.transcript || body?.message || 'Hello';
    
    // Call real Groq AI service from SpeakingService
    const aiResult = await this.speakingService.getAiCoachResponse(userMessage);

    return ApiResponse.success(aiResult, 'AI response generated successfully from Groq Cloud');
  }

  // Chat Health Check Route (GET) - Prevents 404 on browser testing
  @Get('speech/chat')
  async speechChatGet() {
    return {
      status: 'active',
      message: 'Speech Chat endpoint is running. Please send a POST request with prompt/message payload.'
    };
  }

  // 3. Protected Speaking Sessions Routes
  @UseGuards(JwtAuthGuard)
  @Post('speaking/sessions')
  async startSession(@Request() req: any, @Body() body: { title?: string }) {
    const result = await this.speakingService.startSession(req.user.id, body?.title);
    return ApiResponse.success(result, 'Speaking session started');
  }

  @UseGuards(JwtAuthGuard)
  @Post('speaking/sessions/:sessionId/turns')
  async processTurn(@Request() req: any, @Param('sessionId') sessionId: string, @Body() body: { transcript?: string; prompt?: string }) {
    const message = body?.transcript || body?.prompt || 'Hello';
    const result = await this.speakingService.processTurn(req.user.id, sessionId, message);
    return ApiResponse.success(result, 'Speaking turn processed');
  }

  @UseGuards(JwtAuthGuard)
  @Get('speaking/sessions')
  async getSessions(@Request() req: any) {
    const result = await this.speakingService.getSessions(req.user.id);
    return ApiResponse.success(result, 'Sessions retrieved');
  }
}