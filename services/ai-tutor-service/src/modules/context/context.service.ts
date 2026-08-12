import { Injectable } from '@nestjs/common';

@Injectable()
export class ContextService {
  buildContext(userContext: any, conversationHistory: any[]): string {
    const parts = [];
    parts.push(`User English Level: ${userContext.level || 'BEGINNER'}`);

    if (userContext.goals && userContext.goals.length > 0) {
      parts.push(`Learning Goals: ${userContext.goals.join(', ')}`);
    }

    if (conversationHistory && conversationHistory.length > 0) {
      parts.push('\nRecent Conversation:');
      const recent = conversationHistory.slice(-5);
      recent.forEach((msg: any) => {
        parts.push(`${msg.role === 'USER' ? 'User' : 'Tutor'}: ${msg.content.substring(0, 200)}`);
      });
    }
    return parts.join('\n');
  }
}