import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3005'),
    env: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'info',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/assessment_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380'),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
  assessment: {
    defaultQuestions: parseInt(process.env.DEFAULT_QUESTIONS || '20'),
    passingScore: parseInt(process.env.PASSING_SCORE || '60'),
    timeLimit: parseInt(process.env.TIME_LIMIT || '30'),
  },
};
