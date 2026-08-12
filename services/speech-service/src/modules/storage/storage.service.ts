import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StorageService {
  async uploadFile(file: any, userId: string): Promise<string> {
    const fileName = file?.originalname || 'audio.mp3';
    const key = `audio/${userId}/${uuidv4()}-${fileName}`;
    return key;
  }

  async getPresignedUrl(key: string): Promise<string> {
    return `https://cdn.englishlearning.com/${key}`;
  }

  async getFile(key: string): Promise<Buffer> {
    return Buffer.from('mock audio buffer');
  }
}