import { Request, Response, NextFunction } from 'express';
import { logger } from '../services/logger.service';

export function loggingMiddleware(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    logger.info(`Request: ${req.method} ${req.url} - Status: ${res.statusCode} - ${duration}ms`);
  });
  next();
}
