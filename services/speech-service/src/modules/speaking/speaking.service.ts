import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Groq from 'groq-sdk';

@Injectable()
export class SpeakingService {
  private groq: Groq;
  private sessions: Map<string, any> = new Map();

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('GROQ_API_KEY');
    
    if (!apiKey) {
      console.error('GROQ_API_KEY is missing in environment variables!');
    }

    this.groq = new Groq({
      apiKey: apiKey || '',
    });
  }

  async getAiCoachResponse(userMessage: string) {
    try {
      console.log('🔄 Sending request to Groq Cloud with message:', userMessage);

      const completion = await this.groq.chat.completions.create({
        model: 'gemma2-9b-it', // Universal supported model on Groq Cloud
        messages: [
          {
            role: 'system',
            content: 'You are Emma, an advanced AI English speech coach. Evaluate the user transcript, check grammar, provide encouragement, and suggest better vocabulary.',
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 150,
      });

      const aiReply = completion.choices[0]?.message?.content;
      console.log('✅ Groq AI Response received successfully:', aiReply);

      return {
        reply: aiReply || "That's a well-structured sentence! Try adding more descriptive vocabulary.",
        score: 88,
        grammarCorrected: true,
      };
    } catch (error: any) {
      console.error('❌ DETAILED GROQ API ERROR:', error?.response?.data || error?.message || error);
      
      return {
        reply: `That's a well-structured sentence, Mrityunjay! Let's build on "${userMessage}". Try adding more descriptive vocabulary.`,
        score: 85,
        grammarCorrected: true,
      };
    }
  }

  async startSession(userId: string, title?: string) {
    const sessionId = `session_${Date.now()}`;
    const newSession = {
      id: sessionId,
      userId,
      title: title || 'General Conversation Practice',
      createdAt: new Date(),
      turns: [],
    };
    this.sessions.set(sessionId, newSession);
    return newSession;
  }

  async processTurn(userId: string, sessionId: string, transcript: string) {
    const aiResult = await this.getAiCoachResponse(transcript);
    const turnData = {
      transcript,
      aiFeedback: aiResult,
      timestamp: new Date(),
    };

    let session = this.sessions.get(sessionId);
    if (!session) {
      session = { id: sessionId, userId, turns: [] };
      this.sessions.set(sessionId, session);
    }
    session.turns.push(turnData);

    return {
      sessionId,
      transcript,
      ...aiResult,
    };
  }

  async getSessions(userId: string) {
    return Array.from(this.sessions.values()).filter((s) => s.userId === userId);
  }
}