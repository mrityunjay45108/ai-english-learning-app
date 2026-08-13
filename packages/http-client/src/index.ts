import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export interface CircuitBreakerConfig {
  failureThreshold: number;
  timeout: number;
}

export class HttpClient {
  private client: AxiosInstance;
  private failures: number = 0;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private nextAttempt: number = Date.now();
  private cbConfig: CircuitBreakerConfig;

  constructor(baseURL: string, cbConfig?: Partial<CircuitBreakerConfig>) {
    this.client = axios.create({ baseURL, timeout: 30000 });
    this.cbConfig = { failureThreshold: 5, timeout: 60000, ...cbConfig };

    this.client.interceptors.request.use((config) => {
      if (this.state === 'OPEN') {
        if (Date.now() > this.nextAttempt) {
          this.state = 'HALF_OPEN';
        } else {
          throw new Error('CIRCUIT_BREAKER_OPEN');
        }
      }
      return config;
    });

    this.client.interceptors.response.use(
      (res) => {
        if (this.state === 'HALF_OPEN') {
          this.failures = 0;
          this.state = 'CLOSED';
        }
        return res;
      },
      (err: AxiosError) => {
        this.failures++;
        if (this.failures >= this.cbConfig.failureThreshold) {
          this.state = 'OPEN';
          this.nextAttempt = Date.now() + this.cbConfig.timeout;
        }
        return Promise.reject(err);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await this.client.get<T>(url, config);
    return res.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const res = await this.client.post<T>(url, data, config);
    return res.data;
  }
}
export default HttpClient;