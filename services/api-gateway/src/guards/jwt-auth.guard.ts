import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { config } from '../config/environment.config';
import { RequestContextService } from '../services/request-context.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly requestContext: RequestContextService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader) throw new UnauthorizedException('No token provided');

    const token = authHeader.split(' ')[1];
    if (!token) throw new UnauthorizedException('Invalid token format');

    try {
      const decoded: any = jwt.verify(token, config.jwt.secret);
      this.requestContext.userId = decoded.sub || decoded.userId;
      this.requestContext.userEmail = decoded.email;
      this.requestContext.userRole = decoded.role || 'STUDENT';
      request.user = decoded;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
