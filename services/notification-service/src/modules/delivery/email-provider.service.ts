import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailProvider {
  async send(to: string, subject: string, body: string): Promise<any> {
    console.log(`📧 Sending Email to ${to}: [${subject}] ${body.substring(0, 50)}...`);
    return { success: true, messageId: `email-${Date.now()}`, provider: 'mock-sendgrid' };
  }
}