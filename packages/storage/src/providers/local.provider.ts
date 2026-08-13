import * as fs from 'fs';
import * as path from 'path';
import { StorageProvider, StorageConfig, UploadOptions, UploadResult, PresignedUrlOptions } from '../interfaces/storage.interface';
import { v4 as uuidv4 } from 'uuid';

export class LocalProvider implements StorageProvider {
  private config: StorageConfig;
  private basePath: string;

  constructor(config: StorageConfig) {
    this.config = config;
    this.basePath = path.join(process.cwd(), 'storage', config.bucket);
    this.ensureBasePath();
  }

  private ensureBasePath(): void {
    if (!fs.existsSync(this.basePath)) {
      fs.mkdirSync(this.basePath, { recursive: true });
    }
  }

  private getFullPath(key: string): string {
    const fullPath = path.join(this.basePath, key);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    return fullPath;
  }

  async upload(options: UploadOptions): Promise<UploadResult> {
    const fullPath = this.getFullPath(options.key);
    const body = typeof options.body === 'string' 
      ? Buffer.from(options.body) 
      : options.body;
    
    fs.writeFileSync(fullPath, body);

    return {
      key: options.key,
      bucket: this.config.bucket,
      etag: uuidv4(),
      location: `/storage/${this.config.bucket}/${options.key}`,
      url: `/storage/${this.config.bucket}/${options.key}`,
    };
  }

  async download(key: string): Promise<Buffer> {
    const fullPath = this.getFullPath(key);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`File not found: ${key}`);
    }
    return fs.readFileSync(fullPath);
  }

  async delete(key: string): Promise<void> {
    const fullPath = this.getFullPath(key);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }

  async getPresignedUrl(options: PresignedUrlOptions): Promise<string> {
    return `/storage/${this.config.bucket}/${options.key}`;
  }

  getUrl(key: string): string {
    return `/storage/${this.config.bucket}/${key}`;
  }

  getCdnUrl(key: string): string {
    return this.getUrl(key);
  }

  async head(key: string): Promise<any> {
    const fullPath = this.getFullPath(key);
    if (!fs.existsSync(fullPath)) {
      throw new Error('File not found');
    }
    const stats = fs.statSync(fullPath);
    return {
      size: stats.size,
      modified: stats.mtime,
    };
  }

  async exists(key: string): Promise<boolean> {
    try {
      await this.head(key);
      return true;
    } catch {
      return false;
    }
  }

  async copy(sourceKey: string, destinationKey: string): Promise<void> {
    const sourcePath = this.getFullPath(sourceKey);
    const destPath = this.getFullPath(destinationKey);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Source file not found: ${sourceKey}`);
    }
    fs.copyFileSync(sourcePath, destPath);
  }

  async list(prefix: string, maxKeys: number = 1000): Promise<string[]> {
    const fullPath = this.getFullPath(prefix);
    if (!fs.existsSync(fullPath)) {
      return [];
    }
    const files = fs.readdirSync(fullPath);
    return files.slice(0, maxKeys);
  }
}
