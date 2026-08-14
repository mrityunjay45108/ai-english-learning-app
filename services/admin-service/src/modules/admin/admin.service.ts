import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { $Enums } from "../../../prisma/generated/client";
import { AdminRole } from '../../common/enums/role.enum';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async createAdmin(data: { email: string; password: string; name: string; role?: AdminRole }) {
    const existing = await this.prisma.adminUser.findUnique({
      where: { email: data.email },
    });
    if (existing) {
      throw new BadRequestException('Admin with this email already exists');
    }

    const role = data.role
      ? ($Enums.AdminRole[data.role as keyof typeof $Enums.AdminRole] as unknown as $Enums.AdminRole)
      : $Enums.AdminRole.ADMIN;

    return this.prisma.adminUser.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
        role,
      },
    });
  }

  async getAdmins() {
    return this.prisma.adminUser.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            logs: true,
          },
        },
      },
    });
  }

  async getAdminById(id: string) {
    const admin = await this.prisma.adminUser.findUnique({
      where: { id },
      include: {
        logs: true,
      },
    });

    if (!admin) {
      throw new NotFoundException('Admin user not found');
    }

    return admin;
  }

  async updateAdmin(id: string, data: { name?: string; role?: AdminRole; isActive?: boolean }) {
    await this.getAdminById(id);

    const updateData: any = { ...data };
    if (updateData.role) {
      updateData.role = $Enums.AdminRole[updateData.role as keyof typeof $Enums.AdminRole];
    }

    return this.prisma.adminUser.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteAdmin(id: string) {
    await this.getAdminById(id);

    return this.prisma.adminUser.delete({
      where: { id },
    });
  }

  async logAction(adminId: string, action: string, details?: string, ip?: string) {
    return this.prisma.auditLog.create({
      data: {
        adminId,
        action,
        details,
        ip,
      },
    });
  }

  async getAuditLogs(adminId?: string) {
    if (adminId) {
      return this.prisma.auditLog.findMany({
        where: { adminId },
        include: {
          adminUser: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
    }

    return this.prisma.auditLog.findMany({
      include: {
        adminUser: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
