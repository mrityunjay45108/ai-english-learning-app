import { Injectable } from '@nestjs/common';

@Injectable()
export class TTSService {
  async synthesize(text: string, voice: string = 'en-US-Female'): Promise<any> {
    return {
      audioBuffer: Buffer.from('mock synthesized speech'),
      audioFormat: 'mp3',
      duration: text.length * 0.08,
      provider: 'mock-aws-polly',
    };
  }
}