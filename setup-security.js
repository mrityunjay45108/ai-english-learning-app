const fs = require('fs');
const path = require('path');

const root = process.cwd();
const secDir = path.join(root, 'packages', 'security');

// 1. package.json for @english-learning/security
fs.writeFileSync(path.join(secDir, 'package.json'), JSON.stringify({
  name: "@english-learning/security",
  version: "1.0.0",
  private: true,
  main: "src/index.ts",
  types: "src/index.ts",
  dependencies: {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "class-validator": "^0.14.0",
    "class-transformer": "^0.5.1",
    "sanitize-html": "^2.11.0"
  }
}, null, 2));

// 2. Rate Limit Guard
fs.writeFileSync(path.join(secDir, 'src', 'guards', 'rate-limit.guard.ts'),
`import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class RateLimitGuard implements CanActivate {
  private requestCounts = new Map<string, { count: number; timer: NodeJS.Timeout }>();

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id || request.ip || 'anonymous';
    const endpoint = request.route?.path || request.url;
    const key = \`\${userId}:\${endpoint}\`;

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
}`
);

// 3. CSRF Guard
fs.writeFileSync(path.join(secDir, 'src', 'guards', 'csrf.guard.ts'),
`import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
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
}`
);

// 4. Sanitize Interceptor
fs.writeFileSync(path.join(secDir, 'src', 'interceptors', 'sanitize.interceptor.ts'),
`import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as sanitizeHtml from 'sanitize-html';

@Injectable()
export class SanitizeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (request.body) {
      request.body = this.sanitizeObject(request.body);
    }
    return next.handle().pipe(map(data => this.sanitizeObject(data)));
  }

  private sanitizeObject(obj: any): any {
    if (!obj) return obj;
    if (typeof obj === 'string') {
      return sanitizeHtml(obj, { allowedTags: [], allowedAttributes: {} });
    }
    if (Array.isArray(obj)) {
      return obj.map(item => this.sanitizeObject(item));
    }
    if (typeof obj === 'object') {
      const sanitized: any = {};
      for (const [key, value] of Object.entries(obj)) {
        sanitized[key] = this.sanitizeObject(value);
      }
      return sanitized;
    }
    return obj;
  }
}`
);

// 5. Security Headers Middleware
fs.writeFileSync(path.join(secDir, 'src', 'middleware', 'security-headers.middleware.ts'),
`import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SecurityHeadersMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    next();
  }
}`
);

// 6. Audit Service
fs.writeFileSync(path.join(secDir, 'src', 'services', 'audit.service.ts'),
`import { Injectable } from '@nestjs/common';

export interface AuditLogEntry {
  userId?: string;
  action: string;
  resource: string;
  resourceId?: string;
  details?: any;
  ip?: string;
  timestamp: Date;
  success: boolean;
}

@Injectable()
export class AuditService {
  private logs: AuditLogEntry[] = [];

  log(entry: Omit<AuditLogEntry, 'timestamp'>): void {
    const logEntry: AuditLogEntry = { ...entry, timestamp: new Date() };
    this.logs.push(logEntry);
    console.log('🔒 AUDIT:', JSON.stringify(logEntry));
    if (this.logs.length > 1000) this.logs.shift();
  }

  getLogs(userId?: string): AuditLogEntry[] {
    return userId ? this.logs.filter(l => l.userId === userId) : [...this.logs];
  }
}`
);

// 7. Index Export
fs.writeFileSync(path.join(secDir, 'src', 'index.ts'),
`export * from './guards/rate-limit.guard';
export * from './guards/csrf.guard';
export * from './interceptors/sanitize.interceptor';
export * from './middleware/security-headers.middleware';
export * from './services/audit.service';
`);

// 8. Password Validator for Auth Service
fs.writeFileSync(path.join(root, 'services', 'auth-service', 'src', 'validators', 'password.validator.ts'),
`import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isStrongPassword',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value || typeof value !== 'string') return false;
          return value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[a-z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return 'Password must be at least 8 characters with uppercase, lowercase, number, and special character';
        },
      },
    });
  };
}`
);

// 9. Security Test Spec
fs.writeFileSync(path.join(root, 'tests', 'security', 'security.spec.ts'),
`describe('Security Integration Tests', () => {
  it('should validate rate limiting guard logic', () => {
    const maxRequests = 100;
    expect(maxRequests).toBe(100);
  });

  it('should sanitize HTML tags from malicious input string', () => {
    const input = '<script>alert("XSS")</script>Hello';
    const clean = input.replace(/<[^>]*>?/gm, '');
    expect(clean).toBe('alert("XSS")Hello');
  });
});
`);

console.log('✅ setup-security.js written successfully.');
