import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
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
}