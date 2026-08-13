import { StorageProvider, StorageConfig } from './interfaces/storage.interface';
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
}