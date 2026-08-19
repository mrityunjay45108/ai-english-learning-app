// apps/mobile/src/services/course.service.ts
import { apiClient } from '../api/client';

export const fetchCoursesList = async (query?: { page?: number; limit?: number }) => {
  try {
    const response = await apiClient.get('/courses', { params: query });
    return response.data; // Yeh aapko { success, message, data, pagination } return karega
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    return null;
  }
};