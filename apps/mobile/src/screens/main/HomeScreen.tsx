// apps/mobile/src/screens/main/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { useAuthStore } from '../../store/auth.store';
import { apiClient } from '../../api/client';

export default function HomeScreen({ navigation }: any) {
  const { user, logout } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [speechStatus, setSpeechStatus] = useState('Live ⚡');
  const [dashboardData, setDashboardData] = useState<any>({
    xp: user?.xp || 580,
    streak: user?.streak || 8,
    lessons: [
      {
        id: '1',
        title: 'Professional Greetings & Introductions',
        duration: '2 mins',
        isFree: true,
        completed: true,
      },
      {
        id: '2',
        title: 'Job Interview Behavioral Frameworks',
        duration: '5 mins',
        isFree: false,
        completed: false,
      },
    ],
  });

  const fetchDashboardData = async () => {
    try {
      const response = await apiClient.get('/courses/lessons');
      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      setSpeechStatus('Offline (Demo Mode)');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchDashboardData();
  };

  const handleLessonPress = (lesson: any) => {
    if (lesson.isFree || lesson.completed) {
      navigation.navigate('Courses' as never);
    } else {
      navigation.navigate('Progress' as never);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#c084fc" />
        <Text style={styles.loadingText}>Loading AI Gateway...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.welcomeText}>Hello, {user?.firstName || 'Mrityunjay'}! 👋</Text>
          <View style={styles.badgeRow}>
            <View style={styles.xpBadge}>
              <Text style={styles.xpText}>🏆 {dashboardData.xp} XP</Text>
            </View>
            <View style={styles.streakBadge}>
              <Text style={styles.streakText}>🔥 {dashboardData.streak}d Streak</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Gateway Status Banner */}
      <View style={styles.statusCard}>
        <Text style={styles.statusLabel}>Gateway Service Status:</Text>
        <View style={styles.statusLiveRow}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>{speechStatus}</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#c084fc" />
        }
      >
        <Text style={styles.sectionTitle}>AI Features & Gateway</Text>

        {/* AI Speech Coach Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={styles.cardTitle}>AI Speech Coach</Text>
              <Text style={styles.cardDesc}>
                Real-time conversational phoneme analysis & executive pronunciation correction.
              </Text>
            </View>
            <View style={styles.iconBox}>
              <Text style={{ fontSize: 20 }}>🎙️</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => navigation.navigate('Courses' as never)}
          >
            <Text style={styles.actionBtnText}>Start Voice Session</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Curriculum & Modules</Text>

        {/* Lessons List */}
        {dashboardData.lessons?.map((lesson: any, index: number) => (
          <TouchableOpacity
            key={lesson.id || index}
            activeOpacity={0.8}
            onPress={() => handleLessonPress(lesson)}
            style={styles.lessonCard}
          >
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              <Text style={styles.lessonSub}>
                ⏱️ {lesson.duration} • {lesson.isFree ? '✨ Free Preview' : '🔒 Plus Locked'}
              </Text>
            </View>
            <View
              style={[
                styles.badgeStatus,
                lesson.completed
                  ? styles.badgeGreen
                  : lesson.isFree
                    ? styles.badgePurple
                    : styles.badgeAmber,
              ]}
            >
              <Text
                style={[
                  styles.badgeStatusText,
                  lesson.completed
                    ? { color: '#34d399' }
                    : lesson.isFree
                      ? { color: '#c084fc' }
                      : { color: '#fbbf24' },
                ]}
              >
                {lesson.completed ? 'Done ✓' : lesson.isFree ? 'Start' : 'Unlock'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#030712', paddingHorizontal: 20, paddingTop: 16 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#030712' },
  loadingText: { color: '#9ca3af', marginTop: 12, fontSize: 12, fontWeight: '500' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  welcomeText: { fontSize: 22, fontWeight: '800', color: '#ffffff', letterSpacing: -0.5 },
  badgeRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 8 },
  xpBadge: { backgroundColor: 'rgba(245, 158, 11, 0.1)', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(245, 158, 11, 0.2)' },
  xpText: { color: '#fbbf24', fontSize: 11, fontWeight: 'bold' },
  streakBadge: { backgroundColor: 'rgba(244, 63, 94, 0.1)', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(244, 63, 94, 0.2)' },
  streakText: { color: '#fb7185', fontSize: 11, fontWeight: 'bold' },
  logoutBtn: { backgroundColor: 'rgba(239, 68, 68, 0.1)', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(239, 68, 68, 0.2)' },
  logoutText: { color: '#f87171', fontSize: 12, fontWeight: 'bold' },
  statusCard: { backgroundColor: 'rgba(15, 23, 42, 0.8)', borderWidth: 1, borderColor: 'rgba(30, 41, 59, 0.8)', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 16, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusLabel: { color: '#9ca3af', fontSize: 12, fontWeight: '500' },
  statusLiveRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  liveDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#34d399' },
  liveText: { color: '#34d399', fontSize: 12, fontWeight: 'bold' },
  sectionTitle: { color: '#9ca3af', fontSize: 11, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 'bold' },
  card: { backgroundColor: '#0f172a', borderWidth: 1, borderColor: '#1e293b', borderRadius: 24, padding: 20, marginBottom: 24 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardTitle: { color: '#ffffff', fontWeight: 'bold', fontSize: 18 },
  cardDesc: { color: '#9ca3af', fontSize: 12, marginTop: 6, lineHeight: 18 },
  iconBox: { backgroundColor: 'rgba(99, 102, 241, 0.2)', padding: 10, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(99, 102, 241, 0.3)' },
  actionBtn: { marginTop: 20, backgroundColor: '#4f46e5', paddingVertical: 14, borderRadius: 16, alignItems: 'center' },
  actionBtnText: { color: '#ffffff', fontSize: 12, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase' },
  lessonCard: { backgroundColor: 'rgba(15, 23, 42, 0.9)', borderWidth: 1, borderColor: 'rgba(30, 41, 59, 0.8)', borderRadius: 16, padding: 16, marginBottom: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  lessonTitle: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
  lessonSub: { color: '#9ca3af', fontSize: 12, marginTop: 4 },
  badgeStatus: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, borderWidth: 1 },
  badgeGreen: { backgroundColor: 'rgba(52, 211, 153, 0.1)', borderColor: 'rgba(52, 211, 153, 0.2)' },
  badgePurple: { backgroundColor: 'rgba(192, 132, 252, 0.1)', borderColor: 'rgba(192, 132, 252, 0.2)' },
  badgeAmber: { backgroundColor: 'rgba(251, 191, 36, 0.1)', borderColor: 'rgba(251, 191, 36, 0.2)' },
  badgeStatusText: { fontSize: 12, fontWeight: 'bold' },
});