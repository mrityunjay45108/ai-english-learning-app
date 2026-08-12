import { Injectable } from '@nestjs/common';

@Injectable()
export class PushProvider {
  async send(deviceToken: string, title: string, body: string): Promise<any> {
    console.log(`📱 Sending Push Notification: [${title}] ${body}`);
    return { success: true, messageId: `push-${Date.now()}`, provider: 'mock-fcm' };
  }
}