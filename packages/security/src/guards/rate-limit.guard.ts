import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class RateLimitGuard implements CanActivate {
  private requestCounts = new Map<string, { count: number; timer: NodeJS.Timeout }>();

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id || request.ip || 'anonymous';
    const endpoint = request.route?.path || request.url;
    const key = `${userId}:${endpoint}`;

    const limit = 100;
    const windowMs = 60000; // 1 minute

    if (!this.requestCounts.has(key)) {
      const timer = setTimeout(() => this.requestCounts.delete(key), windowMs);
      this.requestCounts.set(key, { count: 1, timer });
    } else {
      const current = this.requestCounts.get(key)!;
      current.count += 1;
      if (current.count > limit) {
        throw new HttpException({
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          message: 'Too many requests. Please try again later.',
        }, HttpStatus.TOO_MANY_REQUESTS);
      }
    }
    return true;
  }
}