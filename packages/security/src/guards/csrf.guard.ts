import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { createHmac, randomBytes } from 'crypto';

@Injectable()
export class CsrfGuard implements CanActivate {
  private readonly secret = process.env.CSRF_SECRET || 'default-csrf-secret';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) return true;

    const publicPaths = ['/auth/login', '/auth/register', '/auth/refresh', '/webhooks'];
    if (publicPaths.some(path => request.path.includes(path))) return true;

    const token = request.headers['x-csrf-token'];
    const cookieToken = request.cookies?.['csrf-token'];

    if (!token || !cookieToken || token !== cookieToken) {
      throw new HttpException('CSRF token validation failed', HttpStatus.FORBIDDEN);
    }
    return true;
  }

  generateToken(): string {
    const salt = randomBytes(16).toString('hex');
    return createHmac('sha256', this.secret).update(salt).digest('hex');
  }
}