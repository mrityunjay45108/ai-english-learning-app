import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UpdateProfileDto, UpdatePreferencesDto } from '../../common/dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getProfile(userId: string) {
    const profile = await this.userRepository.findProfileByUserId(userId);
    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const profile = await this.userRepository.findProfileByUserId(userId);
    if (!profile) throw new NotFoundException('Profile not found');
    
    return this.userRepository.updateProfile(userId, {
      firstName: dto.firstName,
      lastName: dto.lastName,
      avatarUrl: dto.avatarUrl,
      bio: dto.bio,
      dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
    });
  }

  async getPreferences(userId: string) {
    const preferences = await this.userRepository.findPreferencesByUserId(userId);
    if (!preferences) throw new NotFoundException('Preferences not found');
    return preferences;
  }

  async updatePreferences(userId: string, dto: UpdatePreferencesDto) {
    console.log('🔄 Updating preferences for user:', userId);
    
    // Check if preferences exist
    let preferences = await this.userRepository.findPreferencesByUserId(userId);
    
    if (!preferences) {
      console.log('📝 Creating preferences for user:', userId);
      // Create preferences (repository will handle profile creation)
      preferences = await this.userRepository.createPreferences(userId, {
        locale: dto.locale || 'hi-IN',
        timezone: dto.timezone || 'Asia/Kolkata',
        learningGoals: dto.learningGoals || [],
        dailyGoalMinutes: dto.dailyGoalMinutes || 15,
        notificationEnabled: dto.notificationEnabled ?? true,
        emailNotifications: dto.emailNotifications ?? true,
      });
      return preferences;
    }

    // Update existing preferences
    return this.userRepository.updatePreferences(userId, {
      locale: dto.locale,
      timezone: dto.timezone,
      learningGoals: dto.learningGoals ? dto.learningGoals : undefined,
      dailyGoalMinutes: dto.dailyGoalMinutes,
      notificationEnabled: dto.notificationEnabled,
      emailNotifications: dto.emailNotifications,
    });
  }

  async getFullProfile(userId: string) {
    const [profile, preferences] = await Promise.all([
      this.userRepository.findProfileByUserId(userId),
      this.userRepository.findPreferencesByUserId(userId),
    ]);
    
    if (!profile) throw new NotFoundException('Profile not found');
    if (!preferences) throw new NotFoundException('Preferences not found');
    
    return { profile, preferences };
  }

  async createUserProfile(userId: string, email: string): Promise<void> {
    const existing = await this.userRepository.findProfileByUserId(userId);
    if (existing) return;
    
    // Use createPreferences which handles profile creation
    await this.userRepository.createPreferences(userId, {});
    console.log(`✅ User profile created for user: ${userId}`);
  }
}
