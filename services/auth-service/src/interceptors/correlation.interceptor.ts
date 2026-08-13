import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CorrelationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const correlationId = request.headers['x-correlation-id'] || uuidv4();
    const requestId = request.headers['x-request-id'] || uuidv4();

    request.correlationId = correlationId;
    request.requestId = requestId;

    return next.handle().pipe(
      map((data) => {
        if (data && typeof data === 'object') {
          data.requestId = requestId;
          data.correlationId = correlationId;
        }
        return data;
      })
    );
  }
}