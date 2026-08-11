import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3004'),
    env: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'info',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/content_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  storage: {
    s3Bucket: process.env.S3_BUCKET || 'english-learning-content',
    s3Region: process.env.S3_REGION || 'ap-south-1',
    cdnUrl: process.env.CDN_URL || 'https://cdn.englishlearning.com',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380'),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
};
