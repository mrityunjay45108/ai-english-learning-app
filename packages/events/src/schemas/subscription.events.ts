export interface SubscriptionCreatedEvent {
  userId: string;
  subscriptionId: string;
  planId: string;
  planName: string;
  amount: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  trialDays?: number;
  startDate: string;
  endDate: string;
}