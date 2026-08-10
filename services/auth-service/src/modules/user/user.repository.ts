import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService
  ) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({ data });
    await this.redis.setJson(`user:${user.id}`, user, 3600);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const cacheKey = `user:email:${email}`;
    const cached = await this.redis.getJson<User>(cacheKey);

    if (cached) {
      return cached;
    }

    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { refreshTokens: true },
    });

    if (user) {
      await this.redis.setJson(cacheKey, user, 3600);
      await this.redis.setJson(`user:${user.id}`, user, 3600);
    }
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const cacheKey = `user:${id}`;
    const cached = await this.redis.getJson<User>(cacheKey);

    if (cached) {
      return cached;
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { refreshTokens: true },
    });

    if (user) {
      await this.redis.setJson(cacheKey, user, 3600);
    }
    return user;
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });

    await this.redis.del(`user:${id}`);
    await this.redis.del(`user:email:${user.email}`);
    await this.redis.setJson(`user:${id}`, user, 3600);
    return user;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.delete({ where: { id } });

    await this.redis.del(`user:${id}`);
    await this.redis.del(`user:email:${user.email}`);
    return user;
  }
}
