import { Injectable, NotFoundException } from '@nestjs/common';
import { VocabularyRepository } from './vocabulary.repository';

@Injectable()
export class VocabularyService {
  constructor(private readonly repo: VocabularyRepository) {}

  async searchWords(query: string) {
    return this.repo.searchWords(query || '');
  }

  async findAllWords(query: any) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.repo.findAllWords({ skip, take: limit }),
      this.repo.countWords()
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getWord(id: string) {
    const word = await this.repo.findWordById(id);
    if (!word) throw new NotFoundException('Word not found');
    return word;
  }

  async createWord(dto: any) {
    return this.repo.createWord(dto);
  }

  async addWordToUser(userId: string, dto: any) {
    return this.repo.createUserWord(userId, dto.wordId, { status: 'LEARNING', confidence: 10 });
  }

  async getUserWords(userId: string, query: any) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.repo.getUserWords(userId, { skip, take: limit }),
      this.repo.countUserWords(userId)
    ]);
    return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getDueReviews(userId: string) {
    return this.repo.getDueForReview(userId);
  }

  async getRecommendedWords(userId: string) {
    return this.repo.findAllWords({ take: 10 });
  }

  async updateUserWord(userId: string, dto: any) {
    return this.repo.updateUserWord(userId, dto.wordId, dto);
  }

  async reviewWord(userId: string, dto: any) {
    return this.repo.updateUserWord(userId, dto.wordId, { lastReviewed: new Date() });
  }

  async removeUserWord(userId: string, wordId: string) {
    return this.repo.deleteUserWord(userId, wordId);
  }
}