import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  HeadObjectCommand,
  CopyObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
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

    return {
      key: options.key,
      bucket: this.config.bucket,
      etag: response.ETag || '',
      location: `https://${this.config.bucket}.s3.${this.config.region}.amazonaws.com/${options.key}`,
      url: `https://${this.config.bucket}.s3.${this.config.region}.amazonaws.com/${options.key}`,
      cdnUrl: this.getCdnUrl(options.key),
    };
  }

  async download(key: string): Promise<Buffer> {
    const command = new GetObjectCommand({
      Bucket: this.config.bucket,
      Key: key,
    });

    const response = await this.client.send(command);
    const chunks: any[] = [];
    const stream = response.Body as any;

    return new Promise((resolve, reject) => {
      stream.on('data', (chunk: any) => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });
  }

  async delete(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.config.bucket,
      Key: key,
    });

    await this.client.send(command);
  }

  async getPresignedUrl(options: PresignedUrlOptions): Promise<string> {
    const expiresIn = options.expiresIn || 3600;

    let command;
    switch (options.method) {
      case 'GET':
        command = new GetObjectCommand({
          Bucket: this.config.bucket,
          Key: options.key,
        });
        break;
      case 'PUT':
        command = new PutObjectCommand({
          Bucket: this.config.bucket,
          Key: options.key,
          ContentType: options.contentType,
        });
        break;
      case 'DELETE':
        command = new DeleteObjectCommand({
          Bucket: this.config.bucket,
          Key: options.key,
        });
        break;
      default:
        throw new Error(`Unsupported method: ${options.method}`);
    }

    return getSignedUrl(this.client, command, { expiresIn });
  }

  getUrl(key: string): string {
    return `https://${this.config.bucket}.s3.${this.config.region}.amazonaws.com/${key}`;
  }

  getCdnUrl(key: string): string {
    if (this.config.cdnUrl) {
      return `${this.config.cdnUrl}/${key}`;
    }
    return this.getUrl(key);
  }

  async head(key: string): Promise<any> {
    const command = new HeadObjectCommand({
      Bucket: this.config.bucket,
      Key: key,
    });

    return this.client.send(command);
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
    const command = new CopyObjectCommand({
      Bucket: this.config.bucket,
      CopySource: `${this.config.bucket}/${sourceKey}`,
      Key: destinationKey,
    });

    await this.client.send(command);
  }

  async list(prefix: string, maxKeys: number = 1000): Promise<string[]> {
    const command = new ListObjectsV2Command({
      Bucket: this.config.bucket,
      Prefix: prefix,
      MaxKeys: maxKeys,
    });

    const response = await this.client.send(command);
    return response.Contents?.map((obj) => obj.Key || '') || [];
  }
}
