export class ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  pagination?: any;
  static success<T>(data: T, message?: string, pagination?: any) {
    return { success: true, data, message, pagination, timestamp: new Date().toISOString() };
  }
}