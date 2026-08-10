import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './controllers/health.controller';
import { GatewayController } from './controllers/gateway.controller';
import { ProxyService } from './services/proxy.service';
import { LoggerService } from './services/logger.service';
import { RequestContextService } from './services/request-context.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { requestIdMiddleware } from './middleware/request-id.middleware';
import { loggingMiddleware } from './middleware/logging.middleware';

@Module({
  imports: [HttpModule.register({ timeout: 10000 }), ConfigModule.forRoot()],
  controllers: [HealthController, GatewayController],
  providers: [ProxyService, LoggerService, RequestContextService, JwtAuthGuard, AuthGuard],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(requestIdMiddleware, loggingMiddleware).forRoutes('*');
  }
}
