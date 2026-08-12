import { Controller, Get, Post, Patch, Body, Param, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto, CancelSubscriptionDto } from '../../common/dto/subscription.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('subscriptions')
@UseGuards(JwtAuthGuard)
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get('plans')
  async getPlans() {
    const result = await this.subscriptionService.getPlans();
    return ApiResponse.success(result, 'Plans retrieved successfully');
  }

  @Get('plans/:id')
  async getPlan(@Param('id') id: string) {
    const result = await this.subscriptionService.getPlan(id);
    return ApiResponse.success(result, 'Plan retrieved successfully');
  }

  @Get('me')
  async getMySubscription(@Request() req: any) {
    const result = await this.subscriptionService.getSubscription(req.user.id);
    return ApiResponse.success(result, 'Subscription retrieved successfully');
  }

  @Get('me/entitlements')
  async getMyEntitlements(@Request() req: any) {
    const result = await this.subscriptionService.getEntitlements(req.user.id);
    return ApiResponse.success(result, 'Entitlements retrieved successfully');
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createSubscription(@Request() req: any, @Body() dto: CreateSubscriptionDto) {
    const result = await this.subscriptionService.createSubscription(req.user.id, dto);
    return ApiResponse.success(result, 'Subscription created successfully');
  }

  @Patch('cancel')
  async cancelSubscription(@Request() req: any, @Body() dto: CancelSubscriptionDto) {
    const result = await this.subscriptionService.cancelSubscription(req.user.id, dto);
    return ApiResponse.success(result, 'Subscription cancelled successfully');
  }
}