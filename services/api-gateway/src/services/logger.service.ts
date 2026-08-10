import { Injectable } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      transports: [new winston.transports.Console({ format: winston.format.simple() })],
    });
  }

  info(message: string, meta?: any) { this.logger.info(message, meta); }
  error(message: string, meta?: any) { this.logger.error(message, meta); }
  warn(message: string, meta?: any) { this.logger.warn(message, meta); }
  debug(message: string, meta?: any) { this.logger.debug(message, meta); }
}
export const logger = new LoggerService();
