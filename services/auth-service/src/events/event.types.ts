export interface UserRegisteredEvent {
  event: 'user.registered';
  userId: string;
  email: string;
  phone?: string;
  timestamp: string;
}

export interface LessonCompletedEvent {
  event: 'lesson.completed';
  userId: string;
  lessonId: string;
  score: number;
  timeSpent: number;
  completedAt: string;
}

export interface SpeakingCompletedEvent {
  event: 'speaking.completed';
  userId: string;
  practiceId: string;
  fluencyScore: number;
  grammarScore: number;
  vocabularyScore: number;
  overallScore: number;
  duration: number;
}

export interface PaymentSucceededEvent {
  event: 'payment.succeeded';
  userId: string;
  amount: number;
  currency: string;
  plan: string;
  transactionId: string;
  timestamp: string;
}

export interface SubscriptionActivatedEvent {
  event: 'subscription.activated';
  userId: string;
  plan: string;
  validUntil: string;
  features: string[];
}

export type AppEvent =
  | UserRegisteredEvent
  | LessonCompletedEvent
  | SpeakingCompletedEvent
  | PaymentSucceededEvent
  | SubscriptionActivatedEvent;
