import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BookOpen, Sparkles, Zap, User } from 'lucide-react-native';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => setActiveTab('lessons')} style={styles.navItem}>
        <BookOpen size={22} color={activeTab === 'lessons' ? '#c084fc' : '#64748b'} />
        <Text style={[styles.navText, activeTab === 'lessons' && styles.navTextActive]}>Lessons</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('ai-coach')} style={styles.navItem}>
        <Sparkles size={22} color={activeTab === 'ai-coach' ? '#f43f5e' : '#64748b'} />
        <Text style={[styles.navText, activeTab === 'ai-coach' && styles.navTextActive]}>AI Coach</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('plus')} style={styles.navItem}>
        <Zap size={22} color={activeTab === 'plus' ? '#fbbf24' : '#64748b'} />
        <Text style={[styles.navText, activeTab === 'plus' && styles.navTextActive]}>Plus</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('profile')} style={styles.navItem}>
        <User size={22} color={activeTab === 'profile' ? '#c084fc' : '#64748b'} />
        <Text style={[styles.navText, activeTab === 'profile' && styles.navTextActive]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', backgroundColor: '#030712', borderTopWidth: 1, borderTopColor: '#1f2937', paddingVertical: 10, paddingHorizontal: 10 },
  navItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  navText: { color: '#6b7280', fontSize: 10, marginTop: 4 },
  navTextActive: { color: '#c084fc', fontWeight: 'bold' },
});