export interface UserRegisteredEvent {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role: string;
  isVerified: boolean;
}

export interface UserUpdatedEvent {
  userId: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}