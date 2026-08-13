import { v4 as uuidv4 } from 'uuid';

export const generateTestId = () => uuidv4();
export const generateTestEmail = () => `test-${Date.now()}@englishlearning.com`;
export const generateTestUser = () => ({
  id: generateTestId(),
  email: generateTestEmail(),
  password: 'Test@123',
  firstName: 'Test',
  lastName: 'User',
  role: 'STUDENT',
});
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
