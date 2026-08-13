import { Injectable } from '@nestjs/common';

export interface AuditLogEntry {
  userId?: string;
  action: string;
  resource: string;
  resourceId?: string;
  details?: any;
  ip?: string;
  timestamp: Date;
  success: boolean;
}

@Injectable()
export class AuditService {
  private logs: AuditLogEntry[] = [];

  log(entry: Omit<AuditLogEntry, 'timestamp'>): void {
    const logEntry: AuditLogEntry = { ...entry, timestamp: new Date() };
    this.logs.push(logEntry);
    console.log('🔒 AUDIT:', JSON.stringify(logEntry));
    if (this.logs.length > 1000) this.logs.shift();
  }

  getLogs(userId?: string): AuditLogEntry[] {
    return userId ? this.logs.filter(l => l.userId === userId) : [...this.logs];
  }
}