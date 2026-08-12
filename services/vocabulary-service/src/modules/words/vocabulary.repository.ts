import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class VocabularyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findWordById(id: string) {
    return this.prisma.vocabularyWord.findUnique({ where: { id }, include: { meanings: true } });
  }

  async findAllWords(params: { skip?: number; take?: number; where?: any }) {
    return this.prisma.vocabularyWord.findMany({ ...params, include: { meanings: true } });
  }

  async countWords(where?: any) {
    return this.prisma.vocabularyWord.count({ where });
  }

  async searchWords(query: string) {
    return this.prisma.vocabularyWord.findMany({
      where: { word: { contains: query, mode: 'insensitive' } },
      include: { meanings: true },
      take: 20
    });
  }

  async createWord(data: any) {
    return this.prisma.vocabularyWord.create({ data });
  }

  async getUserWord(userId: string, wordId: string) {
    return this.prisma.userVocabulary.findUnique({
      where: { userId_wordId: { userId, wordId } },
      include: { word: { include: { meanings: true } } }
    });
  }

  async getUserWords(userId: string, params: any) {
    return this.prisma.userVocabulary.findMany({
      where: { userId, ...params.where },
      include: { word: { include: { meanings: true } } },
      skip: params.skip,
      take: params.take
    });
  }

  async countUserWords(userId: string, where?: any) {
    return this.prisma.userVocabulary.count({ where: { userId, ...where } });
  }

  async createUserWord(userId: string, wordId: string, data: any) {
    return this.prisma.userVocabulary.create({
      data: { userId, wordId, ...data },
      include: { word: { include: { meanings: true } } }
    });
  }

  async updateUserWord(userId: string, wordId: string, data: any) {
    return this.prisma.userVocabulary.update({
      where: { userId_wordId: { userId, wordId } },
      data,
      include: { word: { include: { meanings: true } } }
    });
  }

  async deleteUserWord(userId: string, wordId: string) {
    return this.prisma.userVocabulary.delete({ where: { userId_wordId: { userId, wordId } } });
  }

  async getDueForReview(userId: string) {
    return this.prisma.userVocabulary.findMany({
      where: { userId, nextReview: { lte: new Date() } },
      include: { word: { include: { meanings: true } } }
    });
  }
}