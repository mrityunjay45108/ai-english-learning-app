import { Controller, Get, Patch, Req, Res, UseGuards, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

function extractUserId(req: any): string {
  if (req.user) {
    const id = req.user.userId || req.user.sub || req.user.id;
    if (id) return id;
  }
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf-8'));
      return payload.userId || payload.sub || payload.id;
    }
  } catch (e) {}
  return '';
}

@Controller('api/v1/users')
@UseGuards(JwtAuthGuard)
export class UserController {
  private userServiceUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.userServiceUrl = this.configService.get<string>('USER_SERVICE_URL', 'http://127.0.0.1:3002');
  }

  @Get('me')
  async getProfile(@Req() req: any, @Res() res: Response) {
    try {
      const userId = extractUserId(req);
      const response = await firstValueFrom(
        this.httpService.get(`${this.userServiceUrl}/api/v1/users/me`, {
          headers: { 
            'x-user-id': userId,
            'authorization': req.headers.authorization 
          },
        })
      );
      return res.status(response.status).json(response.data);
    } catch (error: any) {
      const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      return res.status(status).json(error.response?.data || { message: error.message });
    }
  }

  @Patch('me/preferences')
  async updatePreferences(@Req() req: any, @Body() body: any, @Res() res: Response) {
    try {
      const userId = extractUserId(req);
      const response = await firstValueFrom(
        this.httpService.patch(`${this.userServiceUrl}/api/v1/users/me/preferences`, body, {
          headers: { 
            'x-user-id': userId,
            'authorization': req.headers.authorization,
            'content-type': 'application/json'
          },
        })
      );
      return res.status(response.status).json(response.data);
    } catch (error: any) {
      const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      return res.status(status).json(error.response?.data || { message: error.message });
    }
  }
}
