import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3000'),
    env: process.env.NODE_ENV || 'development',
    corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:3000,http://localhost:3001,http://localhost:5173').split(','),
  },
  services: {
    auth: {
      url: process.env.AUTH_SERVICE_URL || 'http://127.0.0.1:3001',
      timeout: 5000,
    },
    user: {
      url: process.env.USER_SERVICE_URL || 'http://127.0.0.1:3002',
      timeout: 5000,
    },
    course: {
      url: process.env.COURSE_SERVICE_URL || 'http://127.0.0.1:3003',
      timeout: 5000,
    },
    ai: {
      url: process.env.AI_SERVICE_URL || 'http://127.0.0.1:3004',
      timeout: 10000,
    },
    payment: {
      url: process.env.PAYMENT_SERVICE_URL || 'http://127.0.0.1:3005',
      timeout: 5000,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
};
