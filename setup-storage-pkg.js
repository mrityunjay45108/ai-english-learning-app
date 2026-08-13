const fs = require('fs');
const path = require('path');

const root = process.cwd();
const storageDir = path.join(root, 'packages', 'storage');

// 1. package.json
fs.writeFileSync(path.join(storageDir, 'package.json'), JSON.stringify({
  name: "@english-learning/storage",
  version: "1.0.0",
  private: true,
  main: "src/index.ts",
  types: "src/index.ts",
  dependencies: {
    "@aws-sdk/client-s3": "^3.500.0",
    "@aws-sdk/s3-request-presigner": "^3.500.0",
    "uuid": "^9.0.0"
  }
}, null, 2));

// 2. Storage Interfaces
fs.writeFileSync(path.join(storageDir, 'src', 'interfaces', 'storage.interface.ts'),
`export interface StorageConfig {
  bucket: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  endpoint?: string;
  forcePathStyle?: boolean;
  cdnUrl?: string;
}

export interface UploadOptions {
  key: string;
  body: Buffer | string;
  contentType?: string;
  metadata?: Record<string, string>;
  cacheControl?: string;
}

export interface UploadResult {
  key: string;
  bucket: string;
  etag: string;
  location: string;
  url?: string;
  cdnUrl?: string;
}

export interface PresignedUrlOptions {
  key: string;
  method: 'GET' | 'PUT' | 'DELETE';
  expiresIn?: number;
  contentType?: string;
}

export interface StorageProvider {
  upload(options: UploadOptions): Promise<UploadResult>;
  download(key: string): Promise<Buffer>;
  delete(key: string): Promise<void>;
  getUrl(key: string): string;
  getCdnUrl(key: string): string;
  getPresignedUrl(options: PresignedUrlOptions): Promise<string>;
  exists(key: string): Promise<boolean>;
}`
);

// 3. S3 Provider
fs.writeFileSync(path.join(storageDir, 'src', 'providers', 's3.provider.ts'),
`import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { StorageProvider, StorageConfig, UploadOptions, UploadResult, PresignedUrlOptions } from '../interfaces/storage.interface';

export class S3Provider implements StorageProvider {
  private client: S3Client;
  private config: StorageConfig;

  constructor(config: StorageConfig) {
    this.config = config;
    this.client = new S3Client({
      region: config.region,
      endpoint: config.endpoint,
      forcePathStyle: config.forcePathStyle || false,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
  }

  async upload(options: UploadOptions): Promise<UploadResult> {
    const command = new PutObjectCommand({
      Bucket: this.config.bucket,
      Key: options.key,
      Body: options.body,
      ContentType: options.contentType,
      Metadata: options.metadata,
      CacheControl: options.cacheControl,
    });
    const response = await this.client.send(command);
    const location = \`https://\${this.config.bucket}.s3.\${this.config.region}.amazonaws.com/\${options.key}\`;
    return {
      key: options.key,
      bucket: this.config.bucket,
      etag: response.ETag || '',
      location,
      url: location,
      cdnUrl: this.getCdnUrl(options.key),
    };
  }

  async download(key: string): Promise<Buffer> {
    const command = new GetObjectCommand({ Bucket: this.config.bucket, Key: key });
    const response = await this.client.send(command);
    const stream = response.Body as NodeJS.ReadableStream;
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      stream.on('data', (chunk) => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });
  }

  async delete(key: string): Promise<void> {
    await this.client.send(new DeleteObjectCommand({ Bucket: this.config.bucket, Key: key }));
  }

  async getPresignedUrl(options: PresignedUrlOptions): Promise<string> {
    const expiresIn = options.expiresIn || 3600;
    const command = new GetObjectCommand({ Bucket: this.config.bucket, Key: options.key });
    return getSignedUrl(this.client, command, { expiresIn });
  }

  getUrl(key: string): string {
    return \`https://\${this.config.bucket}.s3.\${this.config.region}.amazonaws.com/\${key}\`;
  }

  getCdnUrl(key: string): string {
    return this.config.cdnUrl ? \`\${this.config.cdnUrl}/\${key}\` : this.getUrl(key);
  }

  async exists(key: string): Promise<boolean> {
    try {
      await this.client.send(new HeadObjectCommand({ Bucket: this.config.bucket, Key: key }));
      return true;
    } catch {
      return false;
    }
  }
}`
);

// 4. Local File Provider
fs.writeFileSync(path.join(storageDir, 'src', 'providers', 'local.provider.ts'),
`import * as fs from 'fs';
import * as path from 'path';
import { StorageProvider, StorageConfig, UploadOptions, UploadResult, PresignedUrlOptions } from '../interfaces/storage.interface';
import { v4 as uuidv4 } from 'uuid';

export class LocalProvider implements StorageProvider {
  private basePath: string;

  constructor(private config: StorageConfig) {
    this.basePath = path.join(process.cwd(), 'storage', config.bucket);
    if (!fs.existsSync(this.basePath)) {
      fs.mkdirSync(this.basePath, { recursive: true });
    }
  }

  async upload(options: UploadOptions): Promise<UploadResult> {
    const fullPath = path.join(this.basePath, options.key);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, options.body);

    const location = \`/storage/\${this.config.bucket}/\${options.key}\`;
    return { key: options.key, bucket: this.config.bucket, etag: uuidv4(), location, url: location };
  }

  async download(key: string): Promise<Buffer> {
    const fullPath = path.join(this.basePath, key);
    return fs.readFileSync(fullPath);
  }

  async delete(key: string): Promise<void> {
    const fullPath = path.join(this.basePath, key);
    if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
  }

  async getPresignedUrl(options: PresignedUrlOptions): Promise<string> {
    return \`/storage/\${this.config.bucket}/\${options.key}\`;
  }

  getUrl(key: string): string {
    return \`/storage/\${this.config.bucket}/\${key}\`;
  }

  getCdnUrl(key: string): string {
    return this.getUrl(key);
  }

  async exists(key: string): Promise<boolean> {
    return fs.existsSync(path.join(this.basePath, key));
  }
}`
);

// 5. Storage Factory
fs.writeFileSync(path.join(storageDir, 'src', 'storage.factory.ts'),
`import { StorageProvider, StorageConfig } from './interfaces/storage.interface';
import { S3Provider } from './providers/s3.provider';
import { LocalProvider } from './providers/local.provider';

export class StorageFactory {
  static createFromEnv(): StorageProvider {
    const config: StorageConfig = {
      bucket: process.env.STORAGE_BUCKET || 'english-learning-storage',
      region: process.env.STORAGE_REGION || 'ap-south-1',
      accessKeyId: process.env.STORAGE_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY || '',
      cdnUrl: process.env.STORAGE_CDN_URL,
    };

    if (!config.accessKeyId || process.env.NODE_ENV === 'development') {
      return new LocalProvider(config);
    }
    return new S3Provider(config);
  }
}`
);

// 6. Index File
fs.writeFileSync(path.join(storageDir, 'src', 'index.ts'),
`export * from './interfaces/storage.interface';
export * from './providers/s3.provider';
export * from './providers/local.provider';
export * from './storage.factory';
`);

console.log('✅ setup-storage-pkg.js written successfully.');
