import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { ContextService } from '../context/context.service';
import { PromptService } from '../prompts/prompt.service';
import { AIGatewayClient } from '../gateway/ai-gateway.client';
import { CreateConversationDto, SendMessageDto, ConversationMode } from '../../common/dto/ai-tutor.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ConversationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly contextService: ContextService,
    private readonly promptService: PromptService,
    private readonly aiGateway: AIGatewayClient,
  ) {}

  async createConversation(userId: string, dto: CreateConversationDto) {
    const conversation = await this.prisma.conversation.create({
      data: {
        userId,
        title: dto.title || `Conversation - ${new Date().toLocaleDateString()}`,
      },
    });

    await this.redis.setJson(`conversation:${conversation.id}`, {
      userId,
      mode: dto.mode || ConversationMode.CONVERSATION,
      context: dto.context || {},
      messages: [],
    });

    return conversation;
  }

  async sendMessage(conversationId: string, userId: string, dto: SendMessageDto) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    const messages = await this.prisma.conversationMessage.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
      take: 20,
    });

    const userMessage = await this.prisma.conversationMessage.create({
      data: {
        conversationId,
        sender: 'user',
        text: dto.content,
      },
    });

    const convoCache = await this.redis.getJson<any>(`conversation:${conversationId}`);
    const mode = convoCache?.mode || ConversationMode.CONVERSATION;
    const userContext = (convoCache?.context as any) || { level: 'BEGINNER', goals: [] };
    const context = this.contextService.buildContext(userContext, messages);
    const prompt = this.promptService.getUserPrompt(dto.content);
    const requestId = `ai-${Date.now()}-${uuidv4().substring(0, 8)}`;

    const gatewayResponse = await this.aiGateway.generate(
      prompt,
      context,
      mode,
      userId,
      requestId,
    );
    const aiResponse = gatewayResponse.data;

    const assistantMessage = await this.prisma.conversationMessage.create({
      data: {
        conversationId,
        sender: 'ai',
        text: aiResponse.content,
        metadata: {
          analysis: { corrections: [], suggestions: ["Try expanding your sentence."] },
          tokensUsed: aiResponse.usage?.totalTokens || 0,
          latency: aiResponse.latency || 0,
        },
      },
    });

    return {
      message: assistantMessage,
      analysis: (assistantMessage.metadata as any)?.analysis,
    };
  }

  async getConversation(id: string, userId: string) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id },
      include: {
        messages: { orderBy: { createdAt: 'asc' }, take: 50 },
      },
    });
    if (!conversation) throw new NotFoundException('Conversation not found');
    return conversation;
  }

  async getConversations(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;
    const [conversations, total] = await Promise.all([
      this.prisma.conversation.findMany({
        where: { userId },
        orderBy: { updatedAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.conversation.count({ where: { userId } }),
    ]);

    return {
      data: conversations,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }
}