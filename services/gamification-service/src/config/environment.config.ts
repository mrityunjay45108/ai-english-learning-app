import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  app: {
    port: parseInt(process.env.PORT || '3009', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://english_user:english_password@localhost:5433/gamification_db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  kafka: {
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
    clientId: process.env.KAFKA_CLIENT_ID || 'gamification-service',
    groupId: process.env.KAFKA_GROUP_ID || 'gamification-service-group',
  },
  gamification: {
    xpPerLesson: parseInt(process.env.XP_PER_LESSON || '10', 10),
    xpPerExercise: parseInt(process.env.XP_PER_EXERCISE || '5', 10),
    xpPerVocabulary: parseInt(process.env.XP_PER_VOCABULARY || '3', 10),
    xpPerSpeaking: parseInt(process.env.XP_PER_SPEAKING || '8', 10),
    xpPerAssessment: parseInt(process.env.XP_PER_ASSESSMENT || '20', 10),
    streakBonusXp: parseInt(process.env.STREAK_BONUS_XP || '5', 10),
  },
};