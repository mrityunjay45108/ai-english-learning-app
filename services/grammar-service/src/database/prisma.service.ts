import { Injectable, OnModuleInit, OnModuleDestroy, Logger, Inject } from '@nestjs/common';
import { PrismaClient } from "../../prisma/generated/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: [
        {
          emit: 'stdout',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Prisma connected successfully to PostgreSQL');

      // Verify database connection
      const dbHealthCheck = await this.$queryRaw`SELECT NOW()`;
      this.logger.log(`📊 Database health check passed: ${dbHealthCheck}`);
    } catch (error) {
      this.logger.error('❌ Failed to connect to Prisma:', error.message);
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      this.logger.log('✅ Prisma disconnected successfully');
    } catch (error) {
      this.logger.error('❌ Error disconnecting Prisma:', error.message);
    }
  }

  /**
   * Execute a raw SQL query
   * @param query Raw SQL query string
   * @returns Query result
   */
  async executeRawQuery(query: string) {
    try {
      return await this.$queryRawUnsafe(query);
    } catch (error) {
      this.logger.error(`❌ Raw query failed: ${query}`, error);
      throw error;
    }
  }

  /**
   * Health check for database connection
   * @returns true if database is accessible, false otherwise
   */
  async healthCheck(): Promise<boolean> {
    try {
      await this.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      this.logger.error('Database health check failed:', error.message);
      return false;
    }
  }
}
