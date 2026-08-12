const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'config'),
  path.join(src, 'database'),
  path.join(src, 'modules', 'admin'),
  path.join(src, 'modules', 'auth'),
  path.join(src, 'modules', 'users'),
  path.join(src, 'modules', 'gateway'),
  path.join(src, 'modules', 'health'),
  path.join(src, 'common', 'dto'),
  path.join(src, 'common', 'enums'),
  path.join(root, 'prisma'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: '@english-learning/admin-service',
  version: '0.1.0',
  private: true,
  description: 'Admin Service',
  main: 'dist/main.js',
  scripts: {
    build: 'tsc',
    dev: 'ts-node-dev src/main.ts',
    start: 'node dist/main.js'
  },
  dependencies: {
    '@nestjs/common': '^10.0.0',
    '@nestjs/core': '^10.0.0',
    '@nestjs/platform-express': '^10.0.0',
    '@nestjs/config': '^3.0.0',
    '@nestjs/jwt': '^10.0.0',
    '@nestjs/passport': '^10.0.0',
    '@nestjs/axios': '^3.0.0',
    '@prisma/client': '^5.22.0',
    'class-validator': '^0.14.0',
    'class-transformer': '^0.5.1',
    'reflect-metadata': '^0.1.13',
    'rxjs': '^7.8.0',
    'dotenv': '^16.0.0',
    'uuid': '^9.0.0',
    'ioredis': '^6.0.0',
    'kafkajs': '^2.2.4'
  },
  devDependencies: {
    '@types/node': '^20.0.0',
    'typescript': '5.3.3',
    'ts-node-dev': '^2.0.0',
    'prisma': '^5.22.0'
  }
}, null, 2));

// 2. tsconfig.json
fs.writeFileSync(path.join(root, 'tsconfig.json'), JSON.stringify({
  compilerOptions: {
    module: "commonjs",
    declaration: true,
    removeComments: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    allowSyntheticDefaultImports: true,
    target: "ES2021",
    sourceMap: true,
    outDir: "./dist",
    baseUrl: "./",
    incremental: true,
    skipLibCheck: true
  }
}, null, 2));

// 3. .env
fs.writeFileSync(path.join(root, '.env'), 
`DATABASE_URL="postgresql://english_user:english_password@localhost:5433/admin_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
REDIS_HOST="localhost"
REDIS_PORT=6380
REDIS_PASSWORD="redis_password"
KAFKA_BROKERS="localhost:9092"
KAFKA_CLIENT_ID="admin-service"
PORT=3018
NODE_ENV=development
LOG_LEVEL=debug
AUTH_SERVICE_URL=http://localhost:3001
USER_SERVICE_URL=http://localhost:3002
COURSE_SERVICE_URL=http://localhost:3003
CONTENT_SERVICE_URL=http://localhost:3004
ASSESSMENT_SERVICE_URL=http://localhost:3005
VOCABULARY_SERVICE_URL=http://localhost:3006
GRAMMAR_SERVICE_URL=http://localhost:3007
SUBSCRIPTION_SERVICE_URL=http://localhost:3015
PAYMENT_SERVICE_URL=http://localhost:3016
ANALYTICS_SERVICE_URL=http://localhost:3017`
);

// 4. environment.config.ts
fs.writeFileSync(path.join(src, 'config', 'environment.config.ts'),
`import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3018', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/admin_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6380', 10),
    password: process.env.REDIS_PASSWORD || 'redis_password',
  },
  services: {
    auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
    user: process.env.USER_SERVICE_URL || 'http://localhost:3002',
    course: process.env.COURSE_SERVICE_URL || 'http://localhost:3003',
    content: process.env.CONTENT_SERVICE_URL || 'http://localhost:3004',
    assessment: process.env.ASSESSMENT_SERVICE_URL || 'http://localhost:3005',
    vocabulary: process.env.VOCABULARY_SERVICE_URL || 'http://localhost:3006',
    grammar: process.env.GRAMMAR_SERVICE_URL || 'http://localhost:3007',
    subscription: process.env.SUBSCRIPTION_SERVICE_URL || 'http://localhost:3015',
    payment: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3016',
    analytics: process.env.ANALYTICS_SERVICE_URL || 'http://localhost:3017',
  },
};`);

// 5. Enums & DTOs
fs.writeFileSync(path.join(src, 'common', 'enums', 'role.enum.ts'),
`export enum AdminRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  CONTENT_MANAGER = 'CONTENT_MANAGER',
  SUPPORT = 'SUPPORT',
  ANALYST = 'ANALYST',
}`);

fs.writeFileSync(path.join(src, 'common', 'dto', 'response.dto.ts'),
`export class ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  constructor(partial: Partial<ApiResponse<T>>) {
    this.success = partial.success ?? true;
    this.data = partial.data;
    this.error = partial.error;
    this.message = partial.message;
    this.timestamp = new Date().toISOString();
    this.pagination = partial.pagination;
  }
  static success<T>(data: T, message?: string, pagination?: any): ApiResponse<T> {
    return new ApiResponse<T>({ success: true, data, message, pagination });
  }
  static error(error: string, message?: string): ApiResponse<null> {
    return new ApiResponse<null>({ success: false, error, message });
  }
}`);

fs.writeFileSync(path.join(src, 'common', 'dto', 'admin.dto.ts'),
`import { IsString, IsOptional, IsEmail, IsEnum, IsBoolean } from 'class-validator';
import { AdminRole } from '../enums/role.enum';

export class CreateAdminDto {
  @IsEmail()
  email: string;

  @IsEnum(AdminRole)
  @IsOptional()
  role?: AdminRole = AdminRole.ADMIN;

  @IsString()
  @IsOptional()
  createdBy?: string;
}

export class UpdateAdminDto {
  @IsEnum(AdminRole)
  @IsOptional()
  role?: AdminRole;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class AdminQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 20;
  @IsOptional() @IsEnum(AdminRole) role?: AdminRole;
  @IsOptional() @IsBoolean() isActive?: boolean;
  @IsOptional() @IsString() search?: string;
}

export class AuditQueryDto {
  @IsOptional() page?: number = 1;
  @IsOptional() limit?: number = 50;
  @IsOptional() @IsEnum(AdminRole) adminRole?: AdminRole;
  @IsOptional() action?: string;
  @IsOptional() @IsString() adminId?: string;
  @IsOptional() @IsString() targetType?: string;
  @IsOptional() @IsString() startDate?: string;
  @IsOptional() @IsString() endDate?: string;
}`);

// 6. Database Services
fs.writeFileSync(path.join(src, 'database', 'prisma.service.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}`);

fs.writeFileSync(path.join(src, 'database', 'redis.service.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { config } from '../config/environment.config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: config.redis.host,
      port: config.redis.port,
      password: config.redis.password,
      retryStrategy: (times) => Math.min(times * 50, 2000),
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      console.log('✅ Redis connected for Admin Service');
    } catch (err) {
      console.warn('⚠️ Redis connection deferred:', err.message);
    }
  }

  async onModuleDestroy() {
    try { await this.client.quit(); } catch (e) {}
  }

  async get(key: string): Promise<string | null> {
    try { return await this.client.get(key); } catch (e) { return null; }
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    try {
      if (ttl) await this.client.setex(key, ttl, value);
      else await this.client.set(key, value);
    } catch (e) {}
  }

  getClient(): Redis {
    return this.client;
  }
}`);

// 7. Admin Service Logic
fs.writeFileSync(path.join(src, 'modules', 'admin', 'admin.service.ts'),
`import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { AdminRole } from '../../common/enums/role.enum';
import { CreateAdminDto, UpdateAdminDto, AdminQueryDto } from '../../common/dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async createAdmin(currentAdminId: string, dto: CreateAdminDto) {
    const existing = await this.prisma.adminUser.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('Admin with this email already exists');
    }

    const currentAdmin = await this.prisma.adminUser.findUnique({
      where: { id: currentAdminId },
    });
    if (currentAdmin?.role !== 'SUPER_ADMIN') {
      throw new Error('Only SUPER_ADMIN can create admins');
    }

    const admin = await this.prisma.adminUser.create({
      data: {
        email: dto.email,
        role: dto.role || AdminRole.ADMIN,
        createdBy: currentAdminId,
        userId: dto.email,
      },
    });

    await this.logAudit(currentAdminId, 'MANAGE_ADMIN', 'admin', admin.id, admin.email);
    return admin;
  }

  async getAdmins(query: AdminQueryDto) {
    const { page = 1, limit = 20, role, isActive, search } = query;
    const skip = (page - 1) * limit;
    const where: any = {};
    if (role) where.role = role;
    if (isActive !== undefined) where.isActive = isActive;
    if (search) {
      where.OR = [{ email: { contains: search, mode: 'insensitive' } }];
    }

    const [data, total] = await Promise.all([
      this.prisma.adminUser.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.adminUser.count({ where }),
    ]);

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getAdmin(id: string) {
    const admin = await this.prisma.adminUser.findUnique({
      where: { id },
      include: {
        _count: { select: { auditLogs: true } },
      },
    });
    if (!admin) throw new NotFoundException('Admin not found');
    return admin;
  }

  async updateAdmin(currentAdminId: string, id: string, dto: UpdateAdminDto) {
    const currentAdmin = await this.prisma.adminUser.findUnique({
      where: { id: currentAdminId },
    });
    if (currentAdmin?.role !== 'SUPER_ADMIN') {
      throw new Error('Only SUPER_ADMIN can update admin roles');
    }

    const admin = await this.prisma.adminUser.findUnique({ where: { id } });
    if (!admin) throw new NotFoundException('Admin not found');

    const updated = await this.prisma.adminUser.update({
      where: { id },
      data: {
        role: dto.role,
        isActive: dto.isActive,
      },
    });

    await this.logAudit(currentAdminId, 'MANAGE_ADMIN', 'admin', id, admin.email);
    return updated;
  }

  async getAdminByUserId(userId: string) {
    return this.prisma.adminUser.findUnique({ where: { userId } });
  }

  async logAudit(
    adminId: string,
    action: string,
    targetType: string,
    targetId: string,
    targetName?: string,
    details?: any,
    result: string = 'success',
    errorMessage?: string,
  ) {
    const admin = await this.prisma.adminUser.findUnique({ where: { id: adminId } });
    if (!admin) return;

    return this.prisma.auditLog.create({
      data: {
        adminId,
        adminEmail: admin.email,
        adminRole: admin.role,
        action: action as any,
        targetType,
        targetId,
        targetName,
        details,
        result,
        errorMessage,
      },
    });
  }

  async getAuditLogs(query: any) {
    const { page = 1, limit = 50, adminRole, action, adminId, targetType, startDate, endDate } = query;
    const skip = (page - 1) * limit;
    const where: any = {};
    if (adminRole) where.adminRole = adminRole;
    if (action) where.action = action;
    if (adminId) where.adminId = adminId;
    if (targetType) where.targetType = targetType;
    if (startDate) where.createdAt = { gte: new Date(startDate) };
    if (endDate) where.createdAt = { ...where.createdAt, lte: new Date(endDate) };

    const [data, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.auditLog.count({ where }),
    ]);

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}`);

// 8. Admin Controller
fs.writeFileSync(path.join(src, 'modules', 'admin', 'admin.controller.ts'),
`import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto, AdminQueryDto, AuditQueryDto } from '../../common/dto/admin.dto';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AdminRole } from '../../common/enums/role.enum';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('users')
  @Roles(AdminRole.SUPER_ADMIN)
  async createAdmin(@Request() req: any, @Body() dto: CreateAdminDto) {
    const result = await this.adminService.createAdmin(req.user.id, dto);
    return ApiResponse.success(result, 'Admin created successfully');
  }

  @Get('users')
  async getAdmins(@Query() query: AdminQueryDto) {
    const result = await this.adminService.getAdmins(query);
    return ApiResponse.success(result.data, 'Admins retrieved successfully', result.pagination);
  }

  @Get('users/:id')
  async getAdmin(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.adminService.getAdmin(id);
    return ApiResponse.success(result, 'Admin retrieved successfully');
  }

  @Patch('users/:id')
  @Roles(AdminRole.SUPER_ADMIN)
  async updateAdmin(@Request() req: any, @Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateAdminDto) {
    const result = await this.adminService.updateAdmin(req.user.id, id, dto);
    return ApiResponse.success(result, 'Admin updated successfully');
  }

  @Get('audit-logs')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  async getAuditLogs(@Query() query: AuditQueryDto) {
    const result = await this.adminService.getAuditLogs(query);
    return ApiResponse.success(result.data, 'Audit logs retrieved successfully', result.pagination);
  }

  @Get('permissions')
  async checkPermission(@Request() req: any) {
    const admin = await this.adminService.getAdminByUserId(req.user.id);
    return ApiResponse.success({
      role: admin?.role,
      permissions: this.getPermissionsForRole(admin?.role || 'ANALYST'),
    }, 'Permissions retrieved successfully');
  }

  private getPermissionsForRole(role: string): string[] {
    const permissions: Record<string, string[]> = {      [AdminRole.SUPER_ADMIN]: ['*'],
      [AdminRole.ADMIN]: ['view_users', 'suspend_user', 'view_courses', 'create_courses', 'update_courses', 'view_content', 'create_content', 'update_content', 'publish_content', 'view_subscriptions', 'view_payments', 'view_analytics', 'view_audit_logs'],
      [AdminRole.CONTENT_MANAGER]: ['view_courses', 'create_courses', 'update_courses', 'view_content', 'create_content', 'update_content', 'publish_content'],
      [AdminRole.SUPPORT]: ['view_users', 'view_courses', 'view_subscriptions', 'view_payments'],
      [AdminRole.ANALYST]: ['view_analytics'],
    };
    return permissions[role] || [];
  }
}`);

// 9. Service Gateway
fs.writeFileSync(path.join(src, 'modules', 'gateway', 'service-gateway.service.ts'),
`import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { config } from '../../config/environment.config';

@Injectable()
export class ServiceGateway {
  constructor(private readonly httpService: HttpService) {}

  async callService(service: string, endpoint: string, method: string = 'GET', data?: any, token?: string) {
    const baseUrl = (config.services as any)[service];
    if (!baseUrl) throw new Error(\`Service \${service} not configured\`);

    const url = \`\${baseUrl}\${endpoint}\`;
    const headers: any = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = \`Bearer \${token}\`;

    try {
      const response = await firstValueFrom(
        this.httpService.request({ method: method as any, url, headers, data, timeout: 10000 })
      );
      return response.data;
    } catch (error: any) {
      console.error(\`Error calling \${service}:\`, error.message);
      return { data: [] };
    }
  }

  async getUserService(token: string) {
    return this.callService('user', '/api/v1/users', 'GET', undefined, token);
  }
}`);

// 10. Admin Users Controller
fs.writeFileSync(path.join(src, 'modules', 'users', 'users.controller.ts'),
`import { Controller, Get, Patch, Param, Query, UseGuards, Request, ParseUUIDPipe } from '@nestjs/common';
import { ServiceGateway } from '../gateway/service-gateway.service';
import { AdminService } from '../admin/admin.service';
import { ApiResponse } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AdminRole } from '../../common/enums/role.enum';

@Controller('admin/users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.SUPPORT)
export class UsersController {
  constructor(
    private readonly gateway: ServiceGateway,
    private readonly adminService: AdminService,
  ) {}

  @Get('platform')
  async getUsers(@Request() req: any) {
    const result = await this.gateway.getUserService(req.headers.authorization?.split(' ')[1]);
    await this.adminService.logAudit(req.user.id, 'VIEW_USER', 'user', 'bulk', 'Users list viewed');
    return ApiResponse.success(result.data || [], 'Users retrieved successfully');
  }

  @Patch('platform/:id/suspend')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  async suspendUser(@Request() req: any, @Param('id', ParseUUIDPipe) id: string) {
    const result = await this.gateway.callService(
      'user',
      \`/api/v1/users/\${id}/suspend\`,
      'PATCH',
      { suspended: true },
      req.headers.authorization?.split(' ')[1]
    );
    await this.adminService.logAudit(req.user.id, 'SUSPEND_USER', 'user', id, 'User suspended');
    return ApiResponse.success(result, 'User suspended successfully');
  }
}`);

// 11. Auth Guards & Decorators
fs.writeFileSync(path.join(src, 'modules', 'auth', 'roles.decorator.ts'),
`import { SetMetadata } from '@nestjs/common';
import { AdminRole } from '../../common/enums/role.enum';
export const Roles = (...roles: AdminRole[]) => SetMetadata('roles', roles);`);

fs.writeFileSync(path.join(src, 'modules', 'auth', 'jwt-auth.guard.ts'),
`import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { config } from '../../config/environment.config';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException('No token provided');

    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: config.jwt.secret });
      let admin = await this.adminService.getAdminByUserId(payload.sub || payload.userId || payload.email);

      if (!admin) {
        admin = await this.adminService.getAdminByUserId(payload.email);
      }

      if (!admin || !admin.isActive) {
        throw new UnauthorizedException('Not an active admin user');
      }

      request.user = {
        id: admin.id,
        userId: admin.userId,
        email: admin.email,
        role: admin.role,
      };
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token or not authorized as admin');
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}`);

fs.writeFileSync(path.join(src, 'modules', 'auth', 'roles.guard.ts'),
`import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AdminRole } from '../../common/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<AdminRole[]>('roles', context.getHandler());
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) throw new ForbiddenException('User not authenticated');

    const hasRole = requiredRoles.some(role => role === user.role);
    if (!hasRole) {
      throw new ForbiddenException(\`Insufficient permissions. Required roles: \${requiredRoles.join(', ')}\`);
    }
    return true;
  }
}`);

fs.writeFileSync(path.join(src, 'modules', 'auth', 'auth.module.ts'),
`import { Module, Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { AdminService } from '../admin/admin.service';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { config } from '../../config/environment.config';

@Global()
@Module({
  imports: [
    JwtModule.register({ secret: config.jwt.secret, signOptions: { expiresIn: '1h' } }),
  ],
  providers: [JwtAuthGuard, RolesGuard, AdminService, PrismaService, RedisService],
  exports: [JwtAuthGuard, RolesGuard, AdminService],
})
export class AuthModule {}`);

// 12. Health Controller
fs.writeFileSync(path.join(src, 'modules', 'health', 'health.controller.ts'),
`import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async health() {
    let database = false;
    try {
      await this.prisma.$queryRaw\`SELECT 1\`;
      database = true;
    } catch {
      database = false;
    }
    return {
      status: database ? 'healthy' : 'unhealthy',
      service: 'admin-service',
      version: '1.0.0',
      checks: { database },
      timestamp: new Date().toISOString(),
    };
  }
}`);

// 13. App Module & Main.ts
fs.writeFileSync(path.join(src, 'app.module.ts'),
`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './modules/auth/auth.module';
import { AdminController } from './modules/admin/admin.controller';
import { AdminService } from './modules/admin/admin.service';
import { UsersController } from './modules/users/users.controller';
import { ServiceGateway } from './modules/gateway/service-gateway.service';
import { HealthController } from './modules/health/health.controller';
import { PrismaService } from './database/prisma.service';
import { RedisService } from './database/redis.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule.register({ timeout: 10000, maxRedirects: 5 }),
    AuthModule,
  ],
  controllers: [HealthController, AdminController, UsersController],
  providers: [PrismaService, RedisService, AdminService, ServiceGateway],
})
export class AppModule {}`);

fs.writeFileSync(path.join(src, 'main.ts'),
`import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, transform: true }));
  app.setGlobalPrefix('api/v1');
  const port = process.env.PORT || 3018;
  await app.listen(port);
  console.log('🔐 Admin Service running on http://localhost:' + port);
  console.log('📋 Health: http://localhost:' + port + '/api/v1/health');
  console.log('⚙️ Admin: http://localhost:' + port + '/api/v1/admin');
}
bootstrap().catch((error) => {
  console.error('Failed to start Admin Service:', error);
  process.exit(1);
});`);

// 14. Prisma Schema
fs.writeFileSync(path.join(root, 'prisma', 'schema.prisma'),
`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum AdminRole {
  SUPER_ADMIN
  ADMIN
  CONTENT_MANAGER
  SUPPORT
  ANALYST
}

enum AuditAction {
  LOGIN
  LOGOUT
  VIEW_USER
  SUSPEND_USER
  UNSUSPEND_USER
  VIEW_COURSE
  CREATE_COURSE
  UPDATE_COURSE
  DELETE_COURSE
  VIEW_CONTENT
  CREATE_CONTENT
  UPDATE_CONTENT
  DELETE_CONTENT
  PUBLISH_CONTENT
  VIEW_ANALYTICS
  VIEW_SUBSCRIPTION
  VIEW_PAYMENT
  MANAGE_ADMIN
  SYSTEM_SETTING
  VIEW_AUDIT_LOG
  BULK_ACTION
}

model AdminUser {
  id          String     @id @default(uuid())
  userId      String     @unique @map("user_id")
  email       String     @unique
  role        AdminRole  @default(ADMIN)
  isActive    Boolean    @default(true) @map("is_active")
  lastLoginAt DateTime?  @map("last_login_at")
  createdBy   String?    @map("created_by")
  createdAt   DateTime   @default(now()) @map("created_at")
  updatedAt   DateTime   @updatedAt @map("updated_at")
  auditLogs   AuditLog[]

  @@map("admin_users")
  @@index([userId])
  @@index([email])
  @@index([role])
}

model AuditLog {
  id           String      @id @default(uuid())
  adminId      String      @map("admin_id")
  adminEmail   String      @map("admin_email")
  adminRole    AdminRole   @map("admin_role")
  action       AuditAction
  targetType   String?     @map("target_type")
  targetId     String?     @map("target_id")
  targetName   String?     @map("target_name")
  details      Json?
  ipAddress    String?     @map("ip_address")
  userAgent    String?     @map("user_agent")
  requestId    String?     @map("request_id")
  result       String      @default("success")
  errorMessage String?     @map("error_message")
  createdAt    DateTime    @default(now()) @map("created_at")
  admin        AdminUser   @relation(fields: [adminId], references: [id], onDelete: Cascade)

  @@map("audit_logs")
  @@index([adminId])
  @@index([action])
  @@index([targetType])
}

model SystemSetting {
  id          String   @id @default(uuid())
  key         String   @unique
  value       Json
  description String?  @db.Text
  category    String   @default("general")
  isSensitive Boolean  @default(false) @map("is_sensitive")
  updatedBy   String?  @map("updated_by")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@map("system_settings")
  @@index([key])
  @@index([category])
}`);

// 15. Prisma Seed
fs.writeFileSync(path.join(root, 'prisma', 'seed.js'),
`const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding admin users...');
  const admins = [
    { email: 'superadmin@englishlearning.com', role: 'SUPER_ADMIN', userId: 'superadmin-001' },
    { email: 'admin@englishlearning.com', role: 'ADMIN', userId: 'admin-001' },
    { email: 'content@englishlearning.com', role: 'CONTENT_MANAGER', userId: 'content-001' },
    { email: 'student_gateway@englishlearning.com', role: 'SUPER_ADMIN', userId: 'student_gateway@englishlearning.com' },
  ];

  for (const adminData of admins) {
    const existing = await prisma.adminUser.findUnique({ where: { email: adminData.email } });
    if (!existing) {
      await prisma.adminUser.create({ data: adminData });
      console.log('✅ Created admin: ' + adminData.email);
    } else {
      console.log('ℹ️ Admin already exists: ' + adminData.email);
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());`);

console.log('✅ setup-admin.js written successfully.');
