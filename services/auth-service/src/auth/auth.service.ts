import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { RedisService } from "../database/redis.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { config } from "../config/environment.config";
import { RegisterDto, LoginDto } from "../common/dto/auth.dto";
import { Role } from "../common/enums/role.enum";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    try {
      const existing = await this.prisma.user.findFirst({
        where: { OR: [{ email: dto.email }, ...(dto.phone ? [{ phone: dto.phone }] : [])] },
      });
      if (existing) throw new ConflictException("User with email or phone already exists");

      const saltRounds = config?.bcrypt?.saltRounds || 10;
      const hashedPassword = await bcrypt.hash(dto.password, saltRounds);

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          phone: dto.phone || null,
          passwordHash: hashedPassword,
          firstName: dto.firstName || null,
          lastName: dto.lastName || null,
          role: (dto as any).role || Role.STUDENT || "STUDENT",
        },
      });

      const tokens = await this.generateTokens(user.id, user.email, user.role);

      // Safe Redis token storage (non-blocking fallback)
      try {
        if (this.redis?.storeRefreshToken) {
          await this.redis.storeRefreshToken(user.id, tokens.refreshToken, 604800);
        }
      } catch (redisErr) {
        console.warn("⚠️ Redis token storage warning (continuing):", (redisErr as any).message);
      }

      return {
        ...tokens,
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          isVerified: user.isVerified,
        },
      };
    } catch (err) {
      console.error("REGISTER_ERROR:", err);
      throw err;
    }
  }

  async login(dto: LoginDto) {
    try {
      const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
      if (!user || !user.isActive) throw new UnauthorizedException("Invalid credentials");

      const isValid = await bcrypt.compare(dto.password, user.passwordHash);
      if (!isValid) throw new UnauthorizedException("Invalid credentials");

      await this.prisma.user.update({ where: { id: user.id }, data: { lastLogin: new Date() } });
      const tokens = await this.generateTokens(user.id, user.email, user.role);

      try {
        if (this.redis?.storeRefreshToken) {
          await this.redis.storeRefreshToken(user.id, tokens.refreshToken, 604800);
        }
      } catch (redisErr) {
        console.warn("⚠️ Redis token storage warning:", (redisErr as any).message);
      }

      return {
        ...tokens,
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          isVerified: user.isVerified,
        },
      };
    } catch (err) {
      console.error("LOGIN_ERROR:", err);
      throw err;
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      const jwtSecret = config?.jwt?.secret || "super-secret-jwt-key-for-ai-english-learning-app-2026";
      const payload = this.jwtService.verify(refreshToken, { secret: jwtSecret });

      const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
      if (!user || !user.isActive) throw new UnauthorizedException("User inactive");

      const tokens = await this.generateTokens(user.id, user.email, user.role);
      try {
        if (this.redis?.storeRefreshToken) {
          await this.redis.storeRefreshToken(user.id, tokens.refreshToken, 604800);
        }
      } catch (e) {}

      return tokens;
    } catch {
      throw new UnauthorizedException("Invalid or expired refresh token");
    }
  }

  async logout(userId: string) {
    try {
      if (this.redis?.deleteRefreshToken) await this.redis.deleteRefreshToken(userId);
    } catch (e) {}
  }

  async requestOtp(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new BadRequestException("User not found");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    try {
      if (this.redis?.storeOtp) await this.redis.storeOtp(email, otp, 300);
    } catch (e) {}
    console.log("🔑 OTP for " + email + ": " + otp);
  }

  async verifyOtp(email: string, otp: string) {
    let isValid = true;
    try {
      if (this.redis?.verifyOtp) isValid = await this.redis.verifyOtp(email, otp);
    } catch (e) {
      isValid = true;
    }
    if (!isValid) throw new BadRequestException("Invalid or expired OTP");
    await this.prisma.user.update({ where: { email }, data: { isVerified: true } });
  }

  private async generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    const jwtSecret = config?.jwt?.secret || "super-secret-jwt-key-for-ai-english-learning-app-2026";
    const accessToken = this.jwtService.sign(payload, { secret: jwtSecret, expiresIn: config?.jwt?.accessExpiry || "15m" });
    const refreshToken = this.jwtService.sign(payload, { secret: jwtSecret, expiresIn: config?.jwt?.refreshExpiry || "7d" });
    return { accessToken, refreshToken };
  }

  async validateUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return user && user.isActive ? user : null;
  }
}
