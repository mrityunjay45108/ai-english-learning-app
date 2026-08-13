const fs = require('fs');
const path = require('path');

const root = process.cwd();

// 1. Root Workspace Configuration
fs.writeFileSync(path.join(root, 'pnpm-workspace.yaml'), 
`packages:
  - 'apps/*'
  - 'services/*'
  - 'packages/*'
`);

// 2. Package: @english-learning/types
const typesDir = path.join(root, 'packages', 'types');
fs.writeFileSync(path.join(typesDir, 'package.json'), JSON.stringify({
  name: "@english-learning/types",
  version: "1.0.0",
  private: true,
  main: "src/index.ts",
  types: "src/index.ts"
}, null, 2));

fs.writeFileSync(path.join(typesDir, 'src', 'index.ts'),
`export interface RequestContext {
  requestId: string;
  correlationId: string;
  userId?: string;
  traceId?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
  requestId?: string;
  correlationId?: string;
}

export interface EventEnvelope<T = any> {
  eventId: string;
  eventType: string;
  eventVersion: string;
  occurredAt: string;
  producer: string;
  correlationId: string;
  userId?: string;
  requestId?: string;
  payload: T;
}`
);

// 3. Package: @english-learning/logger
const loggerDir = path.join(root, 'packages', 'logger');
fs.writeFileSync(path.join(loggerDir, 'package.json'), JSON.stringify({
  name: "@english-learning/logger",
  version: "1.0.0",
  private: true,
  main: "src/index.ts",
  types: "src/index.ts"
}, null, 2));

fs.writeFileSync(path.join(loggerDir, 'src', 'index.ts'),
`export class Logger {
  private context: string;
  constructor(context: string) {
    this.context = context;
  }
  info(message: string, meta?: Record<string, any>) {
    console.log(JSON.stringify({
      level: 'info',
      timestamp: new Date().toISOString(),
      context: this.context,
      message,
      ...meta,
    }));
  }
  error(message: string, meta?: Record<string, any>) {
    console.error(JSON.stringify({
      level: 'error',
      timestamp: new Date().toISOString(),
      context: this.context,
      message,
      ...meta,
    }));
  }
  warn(message: string, meta?: Record<string, any>) {
    console.warn(JSON.stringify({
      level: 'warn',
      timestamp: new Date().toISOString(),
      context: this.context,
      message,
      ...meta,
    }));
  }
}
export const createLogger = (context: string) => new Logger(context);`
);

// 4. Package: @english-learning/http-client (Circuit Breaker + Retry)
const httpDir = path.join(root, 'packages', 'http-client');
fs.writeFileSync(path.join(httpDir, 'package.json'), JSON.stringify({
  name: "@english-learning/http-client",
  version: "1.0.0",
  private: true,
  main: "src/index.ts",
  types: "src/index.ts",
  dependencies: {
    "axios": "^1.6.0"
  }
}, null, 2));

fs.writeFileSync(path.join(httpDir, 'src', 'index.ts'),
`import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export interface CircuitBreakerConfig {
  failureThreshold: number;
  timeout: number;
}

export class HttpClient {
  private client: AxiosInstance;
  private failures: number = 0;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private nextAttempt: number = Date.now();
  private cbConfig: CircuitBreakerConfig;

  constructor(baseURL: string, cbConfig?: Partial<CircuitBreakerConfig>) {
    this.client = axios.create({ baseURL, timeout: 30000 });
    this.cbConfig = { failureThreshold: 5, timeout: 60000, ...cbConfig };

    this.client.interceptors.request.use((config) => {
      if (this.state === 'OPEN') {
        if (Date.now() > this.nextAttempt) {
          this.state = 'HALF_OPEN';
        } else {
          throw new Error('CIRCUIT_BREAKER_OPEN');
        }
      }
      return config;
    });

    this.client.interceptors.response.use(
      (res) => {
        if (this.state === 'HALF_OPEN') {
          this.failures = 0;
          this.state = 'CLOSED';
        }
        return res;
      },
      (err: AxiosError) => {
        this.failures++;
        if (this.failures >= this.cbConfig.failureThreshold) {
          this.state = 'OPEN';
          this.nextAttempt = Date.now() + this.cbConfig.timeout;
        }
        return Promise.reject(err);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await this.client.get<T>(url, config);
    return res.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const res = await this.client.post<T>(url, data, config);
    return res.data;
  }
}
export default HttpClient;`
);

// 5. Auth Service Correlation Interceptor
const authInterceptorDir = path.join(root, 'services', 'auth-service', 'src', 'interceptors');
fs.mkdirSync(authInterceptorDir, { recursive: true });

fs.writeFileSync(path.join(authInterceptorDir, 'correlation.interceptor.ts'),
`import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
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
}`
);

console.log('✅ setup-phase31-hardening.js written successfully.');
