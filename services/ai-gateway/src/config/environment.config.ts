import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3010', 10),
    env: process.env.NODE_ENV || 'development',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380', 10),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
  llm: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY || 'demo_key',
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      baseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
      timeout: parseInt(process.env.OPENAI_TIMEOUT || '30000', 10),
    },
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY || 'demo_key',
      model: process.env.ANTHROPIC_MODEL || 'claude-3-sonnet-20240229',
      baseUrl: process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com/v1',
      timeout: parseInt(process.env.ANTHROPIC_TIMEOUT || '30000', 10),
    },
  },
};