export class Logger {
  private context: string;
  constructor(context: string) {
    this.context = context;
  }
  info(message: string, meta?: Record<string, any>) {
    console.log(JSON.stringify({
      level: 'info',
      timestamp: new Date().toISOString(),
      context: this.context,
      message,
      ...meta,
    }));
  }
  error(message: string, meta?: Record<string, any>) {
    console.error(JSON.stringify({
      level: 'error',
      timestamp: new Date().toISOString(),
      context: this.context,
      message,
      ...meta,
    }));
  }
  warn(message: string, meta?: Record<string, any>) {
    console.warn(JSON.stringify({
      level: 'warn',
      timestamp: new Date().toISOString(),
      context: this.context,
      message,
      ...meta,
    }));
  }
}
export const createLogger = (context: string) => new Logger(context);