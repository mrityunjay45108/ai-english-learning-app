import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3000'),
    env: process.env.NODE_ENV || 'development',
    corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:3001,http://localhost:3002').split(','),
  },
  services: {
    auth: { url: process.env.AUTH_SERVICE_URL || 'http://localhost:3001', timeout: 5000, retries: 2 },
    user: { url: process.env.USER_SERVICE_URL || 'http://localhost:3002', timeout: 3000, retries: 2 },
    course: { url: process.env.COURSE_SERVICE_URL || 'http://localhost:3003', timeout: 5000, retries: 2 },
    ai: { url: process.env.AI_SERVICE_URL || 'http://localhost:3004', timeout: 15000, retries: 1 },
    payment: { url: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3005', timeout: 8000, retries: 2 },
  },
  rateLimits: {
    default: { ttl: 60, limit: 100 },
    auth: { ttl: 60, limit: 10 },
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
  },
};
