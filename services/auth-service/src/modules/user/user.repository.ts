import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ 
      where: { email },
      include: { refreshTokens: true }
    });
  }

  async findByPhone(phone: string): Promise<User | null> {
    return this.prisma.user.findUnique({ 
      where: { phone }
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ 
      where: { id },
      include: { refreshTokens: true }
    });
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data
    });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async findVerifiedUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { isVerified: true },
      orderBy: { createdAt: 'desc' }
    });
  }
}
