import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: [
        { emit: 'stdout', level: 'query' },
        { emit: 'stdout', level: 'error' },
        { emit: 'stdout', level: 'warn' },
      ],
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Prisma connected successfully to PostgreSQL');

      const dbHealthCheck = await this.$queryRaw`SELECT NOW()`;
      this.logger.log(`📊 Database health check passed: ${JSON.stringify(dbHealthCheck)}`);
    } catch (error: any) { // <-- yahan ': any' add kiya gaya hai
      this.logger.error('❌ Failed to connect to Prisma:', error?.message || error);
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      this.logger.log('✅ Prisma disconnected successfully');
    } catch (error: any) { // <-- yahan ': any' add kiya gaya hai
      this.logger.error('❌ Error disconnecting Prisma:', error?.message || error);
    }
  }

  async healthCheck(): Promise<boolean> {
    try {
      await this.$queryRaw`SELECT 1`;
      return true;
    } catch (error: any) { // <-- yahan ': any' add kiya gaya hai
      this.logger.error('Database health check failed:', error?.message || error);
      return false;
    }
  }
}