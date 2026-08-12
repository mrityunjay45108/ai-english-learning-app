import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3018', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/admin_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380', 10),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
  services: {
    auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
    user: process.env.USER_SERVICE_URL || 'http://localhost:3002',
    course: process.env.COURSE_SERVICE_URL || 'http://localhost:3003',
    content: process.env.CONTENT_SERVICE_URL || 'http://localhost:3004',
    assessment: process.env.ASSESSMENT_SERVICE_URL || 'http://localhost:3005',
    vocabulary: process.env.VOCABULARY_SERVICE_URL || 'http://localhost:3006',
    grammar: process.env.GRAMMAR_SERVICE_URL || 'http://localhost:3007',
    subscription: process.env.SUBSCRIPTION_SERVICE_URL || 'http://localhost:3015',
    payment: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3016',
    analytics: process.env.ANALYTICS_SERVICE_URL || 'http://localhost:3017',
  },
};