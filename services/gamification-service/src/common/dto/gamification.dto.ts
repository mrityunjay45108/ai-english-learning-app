export class XPResponseDto {
  userId: string;
  totalXp: number;
  currentLevel: number;
  levelProgress: number;
  xpToNextLevel: number;
}

export class StreakResponseDto {
  userId: string;
  currentStreak: number;
  bestStreak: number;
  lastActivityDate: Date;
}