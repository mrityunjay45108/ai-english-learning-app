export interface LessonStartedEvent {
  userId: string;
  lessonId: string;
  courseId: string;
  startedAt: string;
}

export interface LessonCompletedEvent {
  userId: string;
  lessonId: string;
  courseId: string;
  score: number;
  maxScore: number;
  timeSpent: number;
  attempts: number;
  completedAt: string;
}