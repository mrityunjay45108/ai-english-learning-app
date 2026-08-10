import { config } from 'dotenv';
import * as path from 'path';

// Load environment variables from .env file
config({ path: path.join(__dirname, '../../.env') });

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  url: string;
}

export interface JwtConfig {
  secret: string;
  expiry: string;
  refreshExpiry: string;
}

export interface AppConfig {
  port: number;
  env: string;
  logLevel: string;
}

export const databaseConfig: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5433'),
  database: process.env.DB_NAME || 'auth_db',
  user: process.env.DB_USER || 'english_user',
  password: process.env.DB_PASSWORD || 'english_password',
  url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/auth_db'
};

export const jwtConfig: JwtConfig = {
  secret: process.env.JWT_SECRET || 'default-secret-key',
  expiry: process.env.JWT_EXPIRY || '7d',
  refreshExpiry: process.env.REFRESH_TOKEN_EXPIRY || '30d'
};

export const appConfig: AppConfig = {
  port: parseInt(process.env.PORT || '3001'),
  env: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info'
};
