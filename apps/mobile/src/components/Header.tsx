import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Trophy, Flame } from 'lucide-react-native';

interface HeaderProps {
  userXp: number;
  userStreak: number;
}

export default function Header({ userXp, userStreak }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerBrand}>AI English Master</Text>
        <Text style={styles.headerSub}>Hub • Pro Edition</Text>
      </View>
      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Trophy size={14} color="#fbbf24" />
          <Text style={styles.badgeText}>{userXp} XP</Text>
        </View>
        <View style={styles.badge}>
          <Flame size={14} color="#f43f5e" />
          <Text style={styles.badgeText}>{userStreak}d Streak</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#030712',
    borderBottomWidth: 1,
    borderBottomColor: '#1f2937',
  },
  headerBrand: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
  headerSub: { color: '#9ca3af', fontSize: 11 },
  badgeRow: { flexDirection: 'row', gap: 8 },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#374151',
    gap: 4,
  },
  badgeText: { color: '#ffffff', fontSize: 11, fontWeight: 'bold' },
});