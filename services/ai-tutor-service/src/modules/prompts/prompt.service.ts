import { Injectable } from '@nestjs/common';

@Injectable()
export class PromptService {
  getUserPrompt(content: string): string {
    return content;
  }
}