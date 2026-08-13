import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class StorageService {
  private storagePath: string;

  constructor() {
    this.storagePath = path.join(process.cwd(), 'storage');
    this.ensureStoragePath();
    console.log('✅ Storage Service initialized (Local)');
  }

  private ensureStoragePath(): void {
    if (!fs.existsSync(this.storagePath)) {
      fs.mkdirSync(this.storagePath, { recursive: true });
    }
  }

  private getFullPath(key: string): string {
    const fullPath = path.join(this.storagePath, key);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    return fullPath;
  }

  async uploadFile(file: any, userId: string): Promise<string> {
    const key = `audio/${userId}/${uuidv4()}-${file.originalname || 'recording.mp3'}`;
    const fullPath = this.getFullPath(key);
    const buffer = file.buffer || file;
    fs.writeFileSync(fullPath, buffer);
    return key;
  }

  async getFile(key: string): Promise<Buffer> {
    const fullPath = this.getFullPath(key);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`File not found: ${key}`);
    }
    return fs.readFileSync(fullPath);
  }

  async getPresignedUrl(key: string, expiresIn: number = 3600): Promise<string> {
    return `/storage/${key}`;
  }

  async deleteFile(key: string): Promise<void> {
    const fullPath = this.getFullPath(key);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }

  async getUrl(key: string): Promise<string> {
    return `/storage/${key}`;
  }

  async getCdnUrl(key: string): Promise<string> {
    return `/storage/${key}`;
  }

  async fileExists(key: string): Promise<boolean> {
    const fullPath = this.getFullPath(key);
    return fs.existsSync(fullPath);
  }
}
