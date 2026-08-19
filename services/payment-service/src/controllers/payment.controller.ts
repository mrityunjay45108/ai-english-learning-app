// import { Controller, Post, Get, Body, Param } from '@nestjs/common';

// @Controller('payments')  // ✅ Sirf 'payments' rakho
// export class PaymentController {
  
//   @Get('health')
//   health() {
//     return { status: 'healthy', service: 'payment-service' };
//   }

//   @Post('create-order')
//   createOrder(@Body() body: any) {
//     return {
//       id: 'mock_' + Date.now(),
//       amount: body.amount,
//       currency: 'INR',
//       status: 'succeeded',
//       clientSecret: 'mock_secret_' + Date.now()
//     };
//   }

//   @Post('confirm')
//   confirmPayment(@Body() body: any) {
//     return {
//       id: body.paymentId,
//       status: 'confirmed',
//       message: 'Payment confirmed successfully'
//     };
//   }

//   @Get('status/:id')
//   getStatus(@Param('id') id: string) {
//     return {
//       id: id,
//       status: 'succeeded',
//       amount: 100,
//       currency: 'INR'
//     };
//   }
// }


// payment.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
// ya fir exact relative path match karein

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-order')
  async createOrder(@Body() body: { userId: string; planType: string }) {
    return this.paymentService.createOrder(body.userId, body.planType);
  }

  @Post('verify')
  async verifyPayment(@Body() body: { orderId: string; paymentId: string; userId: string }) {
    return this.paymentService.verifyPayment(body);
  }
}