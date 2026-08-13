import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuthStore } from '../../store/auth.store';

export const HomeScreen = () => {
  const { user, logout } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Namaste, {user?.firstName || 'Student'}! 👋</Text>
      <Text style={styles.cardTitle}>Daily Practice Streak: 7 Days 🔥</Text>
      
      <View style={styles.grid}>
        <View style={styles.card}><Text style={styles.cardText}>💬 AI Tutor</Text></View>
        <View style={styles.card}><Text style={styles.cardText}>🎤 Speaking</Text></View>
        <View style={styles.card}><Text style={styles.cardText}>📚 Vocabulary</Text></View>
        <View style={styles.card}><Text style={styles.cardText}>✍️ Grammar</Text></View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9FAFB' },
  welcome: { fontSize: 22, fontWeight: 'bold', color: '#1F2937', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#4F46E5', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: { width: '48%', backgroundColor: '#FFFFFF', padding: 20, borderRadius: 12, elevation: 2, alignItems: 'center' },
  cardText: { fontSize: 16, fontWeight: 'bold', color: '#374151' },
  logoutBtn: { marginTop: 40, backgroundColor: '#EF4444', padding: 14, borderRadius: 10, alignItems: 'center' },
  logoutText: { color: '#FFFFFF', fontWeight: 'bold' },
});