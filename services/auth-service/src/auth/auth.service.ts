import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { RedisService } from '../database/redis.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { config } from '../config/environment.config';
import { RegisterDto, LoginDto } from '../common/dto/auth.dto';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findFirst({
      where: { OR: [{ email: dto.email }, { phone: dto.phone || undefined }] },
    });
    if (existing) throw new ConflictException('User with email or phone already exists');

    const hashedPassword = await bcrypt.hash(dto.password, config.bcrypt.saltRounds);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        phone: dto.phone,
        passwordHash: hashedPassword,
        firstName: dto.firstName,
        lastName: dto.lastName,
        role: Role.STUDENT as any,
      },
    });

    const tokens = await this.generateTokens(user.id, user.email, user.role);
    await this.redis.storeRefreshToken(user.id, tokens.refreshToken, 604800);

    return { ...tokens, user: { id: user.id, email: user.email, role: user.role, isVerified: user.isVerified } };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user || !user.isActive) throw new UnauthorizedException('Invalid credentials');

    const isValid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    await this.prisma.user.update({ where: { id: user.id }, data: { lastLogin: new Date() } });
    const tokens = await this.generateTokens(user.id, user.email, user.role);
    await this.redis.storeRefreshToken(user.id, tokens.refreshToken, 604800);

    return { ...tokens, user: { id: user.id, email: user.email, role: user.role, isVerified: user.isVerified } };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, { secret: config.jwt.secret });
      const storedToken = await this.redis.getRefreshToken(payload.sub);
      if (!storedToken || storedToken !== refreshToken) throw new UnauthorizedException('Invalid refresh token');

      const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
      if (!user || !user.isActive) throw new UnauthorizedException('User inactive');

      const tokens = await this.generateTokens(user.id, user.email, user.role);
      await this.redis.storeRefreshToken(user.id, tokens.refreshToken, 604800);
      return tokens;
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async logout(userId: string) { await this.redis.deleteRefreshToken(userId); }

  async requestOtp(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new BadRequestException('User not found');

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await this.redis.storeOtp(email, otp, 300);
    console.log(`📧 OTP for ${email}: ${otp}`);
  }

  async verifyOtp(email: string, otp: string) {
    const isValid = await this.redis.verifyOtp(email, otp);
    if (!isValid) throw new BadRequestException('Invalid or expired OTP');
    await this.prisma.user.update({ where: { email }, data: { isVerified: true } });
  }

  private async generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    const accessToken = this.jwtService.sign(payload, { secret: config.jwt.secret, expiresIn: config.jwt.accessExpiry });
    const refreshToken = this.jwtService.sign(payload, { secret: config.jwt.secret, expiresIn: config.jwt.refreshExpiry });
    return { accessToken, refreshToken };
  }

  async validateUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return user && user.isActive ? user : null;
  }
}
