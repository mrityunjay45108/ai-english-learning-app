import { Controller, Post, Body, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { LLMRouterService } from './llm-router.service';
import { RateLimiterService } from '../ratelimit/rate-limiter.service';
import { LLMRequest } from '../../common/interfaces/llm-provider.interface';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Plan } from '../../common/enums/plan.enum';

@Controller('llm')
@UseGuards(JwtAuthGuard)
export class LLMController {
  constructor(
    private readonly llmRouter: LLMRouterService,
    private readonly rateLimiter: RateLimiterService,
  ) {}

  @Post('generate')
  @HttpCode(HttpStatus.OK)
  async generate(@Request() req: any, @Body() body: any) {
    const userId = req.user.id;
    const userPlan = req.user.plan || Plan.FREE;
    const feature = body.feature || 'chat';
    const requestId = `req-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    const rateLimit = await this.rateLimiter.checkLimit(userId, feature, userPlan);
    if (!rateLimit.allowed) {
      return ApiResponse.error(
        'RATE_LIMIT_EXCEEDED',
        `Rate limit exceeded. Please wait ${rateLimit.retryAfter} seconds.`,
        requestId
      );
    }

    try {
      const llmRequest: LLMRequest = {
        userId,
        feature,
        model: body.model,
        messages: body.messages || [{ role: 'user', content: body.prompt || 'Hello' }],
        temperature: body.temperature,
        maxTokens: body.maxTokens,
        metadata: body.metadata,
        requestId,
      };

      const response = await this.llmRouter.route(llmRequest);
      return ApiResponse.success({
        ...response,
        rateLimit: {
          remaining: rateLimit.limit - rateLimit.current,
          limit: rateLimit.limit,
          reset: rateLimit.ttl,
        },
      }, 'AI response generated successfully', requestId);
    } catch (error) {
      return ApiResponse.error(
        error.message || 'AI_GENERATION_FAILED',
        'Failed to generate AI response',
        requestId
      );
    }
  }
}