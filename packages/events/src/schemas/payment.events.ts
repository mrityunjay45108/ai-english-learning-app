export interface PaymentSucceededEvent {
  userId: string;
  orderId: string;
  transactionId: string;
  amount: number;
  currency: string;
  plan: string;
  paymentMethod: string;
  provider: string;
}

export interface PaymentFailedEvent {
  userId: string;
  orderId: string;
  transactionId: string;
  amount: number;
  currency: string;
  errorCode: string;
  errorMessage: string;
}