import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  constructor(private prisma: PrismaService) {}

  // 1. Create Order (Mock or Razorpay integration)
  async createOrder(userId: string, planType: string) {
    try {
      this.logger.log(`🟡 Creating subscription order for user: ${userId}`);

      // Aap yahan database mein order record save kar sakte hain agar zaroorat ho
      const orderId = `order_mock_${Date.now()}`;

      return {
        success: true,
        orderId,
        amount: 100, // ₹1 in paise (3-day trial)
        currency: 'INR',
        message: 'Order created successfully',
      };
    } catch (error: any) {
      this.logger.error(`❌ Failed to create order: ${error.message}`);
      throw new Error(error.message || 'Order creation failed');
    }
  }

  // 2. Verify Payment & Activate Subscription
  async verifyPayment(data: { orderId: string; paymentId: string; userId: string }) {
    try {
      this.logger.log(`🟢 Verifying payment for user: ${data.userId}, Order: ${data.orderId}`);

      // Yahan aap database mein user ki subscription status ko 'ACTIVE' update karenge
      // Jaise Prisma ke zariye:
      /*
      await this.prisma.user.update({
        where: { id: data.userId },
        data: { isSubscribed: true, subscriptionExpiry: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) }
      });
      */

      return {
        success: true,
        message: 'Subscription activated successfully for 3 days!',
        isSubscribed: true,
      };
    } catch (error: any) {
      this.logger.error(`❌ Payment verification failed: ${error.message}`);
      throw new Error(error.message || 'Payment verification failed');
    }
  }
}