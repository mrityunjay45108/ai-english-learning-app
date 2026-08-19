// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ActivityIndicator,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import { CheckCircle2, Lock } from 'lucide-react-native';
// import { apiClient } from '../api/client';

// export default function LessonsScreen({ navigation }: any) {
//   const [lessons, setLessons] = useState([
//     {
//       id: 1,
//       title: 'Professional Greetings & Corporate Pitch',
//       duration: '2 mins',
//       isFree: true,
//       completed: true,
//       desc: 'Master executive introductions.',
//     },
//     {
//       id: 2,
//       title: 'Advanced Job Interview Frameworks',
//       duration: '5 mins',
//       isFree: false,
//       completed: false,
//       desc: 'High-impact technical interview responses.',
//     },
//   ]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchLessons = async () => {
//       try {
//         setLoading(true);
//         const response = await apiClient.get('/courses/lessons');
//         const resData = response.data?.data || response.data;
//         if (resData && Array.isArray(resData)) {
//           setLessons(resData);
//         } else if (resData && resData.lessons) {
//           setLessons(resData.lessons);
//         }
//       } catch (error) {
//         console.log('Backend offline, using fallback curriculum data.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLessons();
//   }, []);

//   const handleLessonPress = (lesson: any) => {
//     if (lesson.isFree || lesson.completed) {
//       // Navigate to AI Speech Coach or Active Lesson Player
//       navigation.navigate('Home' as never);
//     } else {
//       // Redirect to PLUS Pass Paywall
//       navigation.navigate('Progress' as never);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Unit 1 • Core Corporate Modules</Text>
//         <Text style={styles.progressText}>Live Sync ⚡</Text>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="small" color="#c084fc" style={{ marginTop: 30 }} />
//       ) : (
//         lessons.map((lesson: any, index: number) => (
//           <TouchableOpacity
//             key={lesson.id || index}
//             style={[styles.lessonCard, lesson.completed && styles.completedCard]}
//             onPress={() => handleLessonPress(lesson)}
//             activeOpacity={0.85}
//           >
//             <View style={[styles.lessonNumBox, lesson.completed && styles.completedNumBox]}>
//               {lesson.completed ? (
//                 <CheckCircle2 size={18} color="#22c55e" />
//               ) : !lesson.isFree ? (
//                 <Lock size={16} color="#fbbf24" />
//               ) : (
//                 <Text style={styles.lessonNumText}>{index + 1}</Text>
//               )}
//             </View>
//             <View style={{ flex: 1, marginLeft: 12 }}>
//               <Text style={styles.lessonTitle}>{lesson.title}</Text>
//               <Text style={styles.lessonDesc} numberOfLines={1}>
//                 {lesson.desc}
//               </Text>
//               <View style={styles.lessonMetaRow}>
//                 <Text style={styles.lessonDuration}>⏱️ {lesson.duration}</Text>
//                 <Text
//                   style={[
//                     styles.lessonBadgeText,
//                     lesson.isFree ? styles.freeText : styles.lockedText,
//                   ]}
//                 >
//                   {lesson.isFree ? 'Free Preview' : '🔒 Plus Locked'}
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         ))
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20, paddingBottom: 100, backgroundColor: '#030712', flexGrow: 1 },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//     alignItems: 'center',
//   },
//   sectionTitle: {
//     color: '#9ca3af',
//     fontSize: 12,
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     letterSpacing: 1,
//   },
//   progressText: { color: '#c084fc', fontSize: 12, fontWeight: 'bold' },
//   lessonCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#111827',
//     padding: 14,
//     borderRadius: 16,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#1f2937',
//   },
//   completedCard: { borderColor: '#14532d' },
//   lessonNumBox: {
//     width: 38,
//     height: 38,
//     backgroundColor: '#1e1b4b',
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   completedNumBox: { backgroundColor: '#064e3b' },
//   lessonNumText: { color: '#c084fc', fontWeight: 'bold', fontSize: 14 },
//   lessonTitle: { color: '#ffffff', fontSize: 14, fontWeight: 'bold' },
//   lessonDesc: { color: '#9ca3af', fontSize: 11, marginVertical: 2 },
//   lessonMetaRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
//   lessonDuration: { color: '#6b7280', fontSize: 10 },
//   lessonBadgeText: { fontSize: 10, fontWeight: 'bold' },
//   freeText: { color: '#34d399' },
//   lockedText: { color: '#fbbf24' },
// });

// // apps/mobile/src/screens/LessonsScreen.tsx
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { CheckCircle2, Lock, Play, Sparkles } from 'lucide-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3012';

// export default function LessonsScreen({ navigation }: any) {
//   const [lessons, setLessons] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [userXp, setUserXp] = useState(820);
//   const [userStreak, setUserStreak] = useState(8);

//   useEffect(() => {
//     const fetchLessons = async () => {
//       try {
//         const token = await AsyncStorage.getItem('user_token');
//         const res = await axios.get(`${API_URL}/courses/lessons`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const resData = res.data?.data || res.data;
//         if (resData && Array.isArray(resData)) {
//           setLessons(resData);
//         } else if (resData && resData.lessons) {
//           setLessons(resData.lessons);
//         }
//       } catch (e) {
//         // Fallback default curriculum
//         setLessons([
//           { id: 1, title: 'Professional Greetings & Corporate Pitch', duration: '2 mins', isFree: true, completed: true, desc: 'Master executive introductions.' },
//           { id: 2, title: 'Advanced Job Interview Frameworks', duration: '5 mins', isFree: false, completed: false, desc: 'High-impact technical interview responses.' },
//           { id: 3, title: 'Client Negotiation & Stakeholder Calls', duration: '4 mins', isFree: false, completed: false, desc: 'Handle tough client objections smoothly.' },
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLessons();
//   }, []);

//   const handleLessonPress = (lesson: any) => {
//     if (lesson.isFree || lesson.completed) {
//       // Navigate to AI Speech Coach or practice flow
//       navigation.navigate('AI Coach' as never);
//     } else {
//       // Redirect to PLUS Pass Paywall
//       navigation.navigate('Progress' as never);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//       {/* Header Banner */}
//       <View style={styles.header}>
//         <View>
//           <Text style={styles.greeting}>Hello, Mrityunjay! 👋</Text>
//           <Text style={styles.subtext}>Ready to elevate your English fluency?</Text>
//         </View>
//         <View style={styles.statsBadge}>
//           <Text style={styles.xpText}>🏆 {userXp} XP</Text>
//           <Text style={styles.streakText}>🔥 {userStreak}d Streak</Text>
//         </View>
//       </View>

//       {/* AI Speech Coach Banner */}
//       <TouchableOpacity
//         style={styles.coachCard}
//         onPress={() => navigation.navigate('AI Coach' as never)}
//         activeOpacity={0.9}
//       >
//         <View style={{ flex: 1 }}>
//           <View style={styles.badgeRow}>
//             <Sparkles size={14} color="#C084FC" />
//             <Text style={styles.badgeText}>AI SPEECH COACH</Text>
//           </View>
//           <Text style={styles.coachTitle}>Real-time Phoneme & Accent Analysis</Text>
//           <Text style={styles.coachSub}>Practice corporate pitching with Emma AI.</Text>
//         </View>
//         <View style={styles.playButton}>
//           <Play size={20} color="#FFF" fill="#FFF" />
//         </View>
//       </TouchableOpacity>

//       {/* Curriculum Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Curriculum & Modules</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Progress' as never)}>
//           <Text style={styles.viewAll}>View All →</Text>
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="small" color="#7C3AED" style={{ marginTop: 20 }} />
//       ) : (
//         lessons.map((lesson, index) => (
//           <TouchableOpacity
//             key={lesson.id || index}
//             style={[styles.lessonCard, lesson.completed && styles.completedCard]}
//             onPress={() => handleLessonPress(lesson)}
//             activeOpacity={0.85}
//           >
//             <View style={{ flex: 1 }}>
//               <Text style={styles.lessonTitle}>{lesson.title}</Text>
//               <Text style={styles.lessonDesc}>{lesson.desc}</Text>
//               <View style={styles.metaRow}>
//                 <Text style={styles.durationText}>⏱ {lesson.duration}</Text>
//                 <Text style={[styles.statusText, lesson.isFree ? { color: '#34D399' } : { color: '#FACC15' }]}>
//                   {lesson.isFree ? '✨ Free Preview' : '🔒 Plus Locked'}
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.actionIcon}>
//               {lesson.completed ? (
//                 <CheckCircle2 size={22} color="#34D399" />
//               ) : lesson.isFree ? (
//                 <Play size={18} color="#FFF" />
//               ) : (
//                 <Lock size={18} color="#9CA3AF" />
//               )}
//             </View>
//           </TouchableOpacity>
//         ))
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20, backgroundColor: '#030712', flexGrow: 1, paddingBottom: 110 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
//   greeting: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
//   subtext: { color: '#9CA3AF', fontSize: 12, marginTop: 2 },
//   statsBadge: { backgroundColor: '#111827', padding: 10, borderRadius: 12, borderWidth: 1, borderColor: '#1F2937', alignItems: 'flex-end' },
//   xpText: { color: '#FACC15', fontWeight: 'bold', fontSize: 12 },
//   streakText: { color: '#FB923C', fontWeight: 'bold', fontSize: 11, marginTop: 2 },
//   coachCard: { backgroundColor: '#1E1B4B', borderRadius: 20, padding: 18, flexDirection: 'row', alignItems: 'center', marginBottom: 25, borderWidth: 1, borderColor: '#312E81' },
//   badgeRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
//   badgeText: { color: '#C084FC', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
//   coachTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
//   coachSub: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
//   playButton: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#7C3AED', justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
//   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
//   sectionTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
//   viewAll: { color: '#C084FC', fontSize: 13, fontWeight: '600' },
//   lessonCard: { backgroundColor: '#111827', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#1F2937' },
//   completedCard: { borderColor: '#14532d' },
//   lessonTitle: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
//   lessonDesc: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
//   metaRow: { flexDirection: 'row', gap: 12, marginTop: 8 },
//   durationText: { color: '#6B7280', fontSize: 11 },
//   statusText: { fontSize: 11, fontWeight: '600' },
//   actionIcon: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#1F2937', justifyContent: 'center', alignItems: 'center', marginLeft: 12 },
// });

// apps/mobile/src/screens/LessonsScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { CheckCircle2, Lock, Play, Sparkles } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3012';

export default function LessonsScreen({ navigation }: any) {
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userXp, setUserXp] = useState(820);
  const [userStreak, setUserStreak] = useState(8);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const token = await AsyncStorage.getItem('user_token');
        const res = await axios.get(`${API_URL}/courses/lessons`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const resData = res.data?.data || res.data;
        if (resData && Array.isArray(resData)) {
          setLessons(resData);
        } else if (resData && resData.lessons) {
          setLessons(resData.lessons);
        }
      } catch (e) {
        // Fallback default curriculum
        setLessons([
          {
            id: 1,
            title: 'Professional Greetings & Corporate Pitch',
            duration: '2 mins',
            isFree: true,
            completed: true,
            desc: 'Master executive introductions.',
          },
          {
            id: 2,
            title: 'Advanced Job Interview Frameworks',
            duration: '5 mins',
            isFree: false,
            completed: false,
            desc: 'High-impact technical interview responses.',
          },
          {
            id: 3,
            title: 'Client Negotiation & Stakeholder Calls',
            duration: '4 mins',
            isFree: false,
            completed: false,
            desc: 'Handle tough client objections smoothly.',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchLessons();
  }, []);

  const handleLessonPress = (lesson: any) => {
    if (lesson.isFree || lesson.completed) {
      // Navigate to AI Speech Coach or practice flow
      navigation.navigate('AI Coach' as never);
    } else {
      // Redirect to PLUS Pass Paywall
      navigation.navigate('Progress' as never);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Banner */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Mrityunjay! 👋</Text>
          <Text style={styles.subtext}>Ready to elevate your English fluency?</Text>
        </View>
        <View style={styles.statsBadge}>
          <Text style={styles.xpText}>🏆 {userXp} XP</Text>
          <Text style={styles.streakText}>🔥 {userStreak}d Streak</Text>
        </View>
      </View>

      {/* AI Speech Coach Banner */}
      <TouchableOpacity
        style={styles.coachCard}
        onPress={() => navigation.navigate('AI Coach' as never)}
        activeOpacity={0.9}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.badgeRow}>
            <Sparkles size={14} color="#C084FC" />
            <Text style={styles.badgeText}>AI SPEECH COACH</Text>
          </View>
          <Text style={styles.coachTitle}>Real-time Phoneme & Accent Analysis</Text>
          <Text style={styles.coachSub}>Practice corporate pitching with Emma AI.</Text>
        </View>
        <View style={styles.playButton}>
          <Play size={20} color="#FFF" fill="#FFF" />
        </View>
      </TouchableOpacity>

      {/* Curriculum Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Curriculum & Modules</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Progress' as never)}>
          <Text style={styles.viewAll}>View All →</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="small" color="#7C3AED" style={{ marginTop: 20 }} />
      ) : (
        Array.isArray(lessons) &&
        lessons.map((lesson, index) => (
          <TouchableOpacity
            key={lesson.id || index}
            style={[styles.lessonCard, lesson.completed && styles.completedCard]}
            onPress={() => handleLessonPress(lesson)}
            activeOpacity={0.85}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              <Text style={styles.lessonDesc}>{lesson.desc}</Text>
              <View style={styles.metaRow}>
                <Text style={styles.durationText}>⏱ {lesson.duration}</Text>
                <Text
                  style={[
                    styles.statusText,
                    lesson.isFree ? { color: '#34D399' } : { color: '#FACC15' },
                  ]}
                >
                  {lesson.isFree ? '✨ Free Preview' : '🔒 Plus Locked'}
                </Text>
              </View>
            </View>
            <View style={styles.actionIcon}>
              {lesson.completed ? (
                <CheckCircle2 size={22} color="#34D399" />
              ) : lesson.isFree ? (
                <Play size={18} color="#FFF" />
              ) : (
                <Lock size={18} color="#9CA3AF" />
              )}
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#030712', flexGrow: 1, paddingBottom: 110 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  subtext: { color: '#9CA3AF', fontSize: 12, marginTop: 2 },
  statsBadge: {
    backgroundColor: '#111827',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1F2937',
    alignItems: 'flex-end',
  },
  xpText: { color: '#FACC15', fontWeight: 'bold', fontSize: 12 },
  streakText: { color: '#FB923C', fontWeight: 'bold', fontSize: 11, marginTop: 2 },
  coachCard: {
    backgroundColor: '#1E1B4B',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#312E81',
  },
  badgeRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  badgeText: { color: '#C084FC', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  coachTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  coachSub: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  playButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  viewAll: { color: '#C084FC', fontSize: 13, fontWeight: '600' },
  lessonCard: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  completedCard: { borderColor: '#14532d' },
  lessonTitle: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
  lessonDesc: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  metaRow: { flexDirection: 'row', gap: 12, marginTop: 8 },
  durationText: { color: '#6B7280', fontSize: 11 },
  statusText: { fontSize: 11, fontWeight: '600' },
  actionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
});
