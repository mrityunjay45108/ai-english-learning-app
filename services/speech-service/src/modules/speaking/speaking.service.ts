import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SpeakingService {
  constructor(private readonly prisma: PrismaService) {}

  async startSession(userId: string, title?: string) {
    return this.prisma.speakingSession.create({
      data: {
        userId,
        title: title || `Speaking Session ${new Date().toLocaleDateString()}`,
        status: 'active',
      },
    });
  }

  async processTurn(userId: string, sessionId: string, transcript: string) {
    const session = await this.prisma.speakingSession.findUnique({ where: { id: sessionId } });
    if (!session) throw new NotFoundException('Session not found');

    const grammarIssues = this.analyzeGrammar(transcript);
    const overallScore = grammarIssues.length === 0 ? 90 : 65;
    const correctedText = this.correctText(transcript);
    const hindiExplanation = grammarIssues.length > 0 ? 'Grammar me past tense use karein.' : 'Aapka sentence sahi hai!';

    const turn = await this.prisma.speakingTurn.create({
      data: {
        sessionId,
        userId,
        transcript,
        grammarIssues,
        fluencyScore: 80,
        pronunciationScore: 85,
        overallScore,
        correctedText,
        hindiExplanation,
      },
    });

    await this.prisma.speakingSession.update({
      where: { id: sessionId },
      data: { totalTurns: { increment: 1 } },
    });

    return { turn, transcript, correctedText, hindiExplanation, overallScore };
  }

  private analyzeGrammar(text: string) {
    const lower = text.toLowerCase();
    const issues = [];
    if (lower.includes('yesterday') && !lower.includes('went')) {
      issues.push({ type: 'TENSE', description: 'Use past tense for yesterday' });
    }
    return issues;
  }

  private correctText(text: string) {
    return text.replace(/go to office/g, 'went to the office');
  }

  async getSessions(userId: string) {
    return this.prisma.speakingSession.findMany({
      where: { userId },
      include: { turns: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}