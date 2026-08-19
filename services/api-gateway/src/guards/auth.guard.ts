import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtGuard: JwtAuthGuard) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return this.jwtGuard.canActivate(context);
  }
}
