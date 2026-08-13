import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from '../database/redis.service';
import { config } from '../config/environment.config';

interface AuthenticatedSocket extends Socket {
  userId?: string;
  userEmail?: string;
}

@Injectable()
@WebSocketGateway({
  cors: { origin: '*', credentials: true },
  pingTimeout: 60000,
  pingInterval: 25000,
})
export class RealtimeGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly jwtService: JwtService,
    private readonly redis: RedisService,
  ) {}

  afterInit(server: Server) {
    console.log('🔌 WebSocket Gateway initialized');
    this.redis.subscribe('realtime:message', (data) => {
      const { room, event, payload } = data;
      if (room) this.server.to(room).emit(event, payload);
      else this.server.emit(event, payload);
    });
  }

  async handleConnection(client: AuthenticatedSocket) {
    try {
      const token = client.handshake.auth.token || client.handshake.headers.authorization;
      if (!token) {
        client.emit('connected', { socketId: client.id, status: 'guest' });
        return;
      }
      const rawToken = token.replace('Bearer ', '');
      const payload = await this.jwtService.verifyAsync(rawToken, { secret: config.jwt.secret });
      client.userId = payload.sub || payload.userId;
      client.userEmail = payload.email;

      await this.redis.setJson(`socket:${client.id}`, {
        userId: client.userId,
        email: client.userEmail,
        connectedAt: new Date().toISOString(),
      }, 3600);

      console.log(`🔌 Client connected: ${client.id} (User: ${client.userId})`);
      client.emit('connected', { socketId: client.id, userId: client.userId, status: 'authenticated' });
    } catch (error) {
      client.emit('connected', { socketId: client.id, status: 'guest' });
    }
  }

  async handleDisconnect(client: AuthenticatedSocket) {
    if (client.userId) {
      await this.redis.del(`socket:${client.id}`);
      console.log(`🔌 Client disconnected: ${client.id}`);
    }
  }

  @SubscribeMessage('join')
  async handleJoin(client: AuthenticatedSocket, payload: { room: string }) {
    if (!payload.room) throw new WsException('Room name required');
    client.join(payload.room);
    this.server.to(payload.room).emit('user-joined', { userId: client.userId, socketId: client.id });
    return { success: true, room: payload.room };
  }

  @SubscribeMessage('leave')
  async handleLeave(client: AuthenticatedSocket, payload: { room: string }) {
    if (!payload.room) throw new WsException('Room name required');
    client.leave(payload.room);
    this.server.to(payload.room).emit('user-left', { userId: client.userId, socketId: client.id });
    return { success: true, room: payload.room };
  }

  @SubscribeMessage('ping')
  handlePing(): { pong: boolean; timestamp: string } {
    return { pong: true, timestamp: new Date().toISOString() };
  }
}