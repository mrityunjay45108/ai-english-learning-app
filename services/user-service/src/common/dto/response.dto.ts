export class ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;

  constructor(partial: Partial<ApiResponse<T>>) {
    this.success = partial.success ?? true;
    this.data = partial.data;
    this.error = partial.error;
    this.message = partial.message;
    this.timestamp = new Date().toISOString();
  }

  static success<T>(data: T, message?: string): ApiResponse<T> {
    return new ApiResponse<T>({ success: true, data, message: message || 'Operation successful' });
  }
}