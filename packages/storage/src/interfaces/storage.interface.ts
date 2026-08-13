export interface StorageConfig {
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
  head(key: string): Promise<any>;
  exists(key: string): Promise<boolean>;
  copy(sourceKey: string, destinationKey: string): Promise<void>;
  list(prefix: string, maxKeys?: number): Promise<string[]>;
}
