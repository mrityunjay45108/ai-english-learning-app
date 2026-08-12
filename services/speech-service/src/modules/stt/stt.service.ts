import { Injectable } from '@nestjs/common';

@Injectable()
export class STTService {
  async transcribe(audioBuffer: Buffer, language: string = 'en-US'): Promise<any> {
    const mockTranscripts = [
      'Hello, I would like to improve my English speaking skills.',
      'Learning English grammar is very interesting and fun.',
      'I practice my vocabulary every day using this application.',
    ];
    const transcript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
    return {
      text: transcript,
      confidence: 0.92,
      language,
      provider: 'mock-whisper',
      wordTimings: transcript.split(' ').map((word, i) => ({ word, start: i * 300, end: (i + 1) * 300 })),
    };
  }
}