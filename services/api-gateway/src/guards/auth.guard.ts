import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class AuthGuard implements CanActivate {
  private publicPaths = ['/api/v1/auth/login', '/api/v1/auth/register', '/health', '/'];

  constructor(private readonly jwtGuard: JwtAuthGuard) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (this.publicPaths.includes(request.path)) return true;
    return this.jwtGuard.canActivate(context);
  }
}
