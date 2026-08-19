// apps/mobile/src/screens/ProfileScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import { useAuthStore } from '../store/auth.store';
import { apiClient } from '../api/client';

export default function ProfileScreen({ navigation }: any) {
  const { user, logout } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [profileData, setProfileData] = useState<any>({
    firstName: user?.firstName || 'Mrityunjay',
    lastName: user?.lastName || 'Kumar',
    phone: user?.phone || '+91 7324882119',
    subscription: {
      status: 'Not Active',
      currentPlan: 'No Plan',
      autopayStatus: '-',
    },
  });

  const fetchProfileData = async () => {
    try {
      // Backend API call to fetch user profile & subscription details
      const response = await apiClient.get('/users/profile');
      if (response.data) {
        setProfileData(response.data);
      }
    } catch (error) {
      console.log('Using local user session data (Offline/Demo mode)');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchProfileData();
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#818cf8" />
        <Text style={styles.loadingText}>Loading Profile...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 4 }}>
          <Text style={{ color: '#ffffff', fontSize: 20 }}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#818cf8" />
        }
      >
        {/* User Info Section */}
        <View style={styles.userInfoSection}>
          <View style={styles.avatarOuter}>
            <View style={styles.avatarInner}>
              <Text style={{ fontSize: 36 }}>👤</Text>
            </View>
          </View>
          <Text style={styles.userName}>
            {profileData.firstName} {profileData.lastName || ''}
          </Text>
          <Text style={styles.userPhone}>{profileData.phone}</Text>
          <TouchableOpacity style={{ marginTop: 4 }}>
            <Text style={styles.editProfileText}>Edit Profile &gt;</Text>
          </TouchableOpacity>
        </View>

        {/* Subscription Plan Card */}
        <View style={styles.card}>
          <View style={styles.subCardHeader}>
            <Text style={styles.cardHeaderTitle}>Subscription Plan</Text>
            <View
              style={[
                styles.notActiveBadge,
                profileData.subscription?.status === 'Active' && styles.activeBadge,
              ]}
            >
              <Text
                style={[
                  styles.notActiveText,
                  profileData.subscription?.status === 'Active' && styles.activeText,
                ]}
              >
                {profileData.subscription?.status || 'Not Active'}
              </Text>
            </View>
          </View>

          <View style={styles.rowItem}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text>📅</Text>
              <Text style={styles.rowLabel}>Current Plan</Text>
            </View>
            <Text style={styles.rowValue}>{profileData.subscription?.currentPlan || 'No Plan'}</Text>
          </View>

          <View style={styles.rowItem}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text>🔄</Text>
              <Text style={styles.rowLabel}>Autopay Status</Text>
            </View>
            <Text style={{ color: '#f87171', fontWeight: 'bold' }}>
              {profileData.subscription?.autopayStatus || '-'}
            </Text>
          </View>

          <TouchableOpacity style={[styles.rowItem, { borderBottomWidth: 0, paddingBottom: 0 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text>⚙️</Text>
              <Text style={styles.rowLabel}>Manage Subscription</Text>
            </View>
            <Text style={{ color: '#9ca3af', fontWeight: 'bold' }}>&gt;</Text>
          </TouchableOpacity>
        </View>

        {/* Upgrade Banner */}
        <View style={styles.upgradeCard}>
          <Text style={styles.trialText}>🛡️ Start 3 Day Trial</Text>
          <TouchableOpacity
            style={styles.upgradeBtn}
            onPress={() => navigation.navigate('Paywall' as never)}
          >
            <Text style={styles.upgradeBtnText}>Upgrade to Seekho PLUS →</Text>
          </TouchableOpacity>
        </View>

        {/* Settings & Links Group */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.linkRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Text>❓</Text>
              <Text style={styles.linkText}>Help & Support</Text>
            </View>
            <Text style={{ color: '#6b7280' }}>&gt;</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Text>📄</Text>
              <Text style={styles.linkText}>Terms & Conditions</Text>
            </View>
            <Text style={{ color: '#6b7280' }}>&gt;</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Text>🔒</Text>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </View>
            <Text style={{ color: '#6b7280' }}>&gt;</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.linkRow, { borderBottomWidth: 0 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Text>🔄</Text>
              <Text style={styles.linkText}>Refund Policy</Text>
            </View>
            <Text style={{ color: '#6b7280' }}>&gt;</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity onPress={logout} style={styles.logoutCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Text>🚪</Text>
            <Text style={styles.logoutBtnText}>Log Out</Text>
          </View>
          <Text style={{ color: '#f87171' }}>&gt;</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={{ fontSize: 11 }}>ℹ️</Text>
            <Text style={styles.footerText}>App Version</Text>
            <Text style={styles.footerVersion}>v 1.1.33</Text>
          </View>
          <Text style={styles.madeInIndia}>Made with 🤍 in India</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#030712', paddingHorizontal: 20, paddingTop: 24 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#030712' },
  loadingText: { color: '#9ca3af', marginTop: 12, fontSize: 12, fontWeight: '500' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  headerTitle: { color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginLeft: 16 },
  userInfoSection: { alignItems: 'center', marginBottom: 24 },
  avatarOuter: { width: 96, height: 96, borderRadius: 48, padding: 2, borderWidth: 2, borderColor: 'rgba(99, 102, 241, 0.5)', backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' },
  avatarInner: { width: '100%', height: '100%', borderRadius: 44, backgroundColor: '#1e293b', justifyContent: 'center', alignItems: 'center' },
  userName: { color: '#ffffff', fontSize: 20, fontWeight: '800', marginTop: 12 },
  userPhone: { color: '#9ca3af', fontSize: 12, fontWeight: '500', marginTop: 4 },
  editProfileText: { color: '#818cf8', fontSize: 12, fontWeight: '600' },
  card: { backgroundColor: '#0f172a', borderWidth: 1, borderColor: '#1e293b', borderRadius: 20, padding: 16, marginBottom: 20 },
  subCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  cardHeaderTitle: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
  notActiveBadge: { backgroundColor: 'rgba(239, 68, 68, 0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(239, 68, 68, 0.2)' },
  notActiveText: { color: '#f87171', fontSize: 11, fontWeight: 'bold' },
  activeBadge: { backgroundColor: 'rgba(52, 211, 153, 0.1)', borderColor: 'rgba(52, 211, 153, 0.2)' },
  activeText: { color: '#34d399' },
  rowItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(30, 41, 59, 0.6)' },
  rowLabel: { color: '#d1d5db', fontSize: 12, fontWeight: '500' },
  rowValue: { color: '#ffffff', fontWeight: 'bold', fontSize: 12 },
  upgradeCard: { backgroundColor: 'rgba(245, 158, 11, 0.1)', borderWidth: 1, borderColor: 'rgba(245, 158, 11, 0.3)', borderRadius: 20, padding: 16, marginBottom: 20, alignItems: 'center' },
  trialText: { color: '#fbbf24', fontSize: 11, fontWeight: '800', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 1 },
  upgradeBtn: { width: '100%', backgroundColor: '#f59e0b', paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  upgradeBtnText: { color: '#030712', fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5 },
  linkRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(30, 41, 59, 0.6)' },
  linkText: { color: '#e5e7eb', fontSize: 12, fontWeight: '500' },
  logoutCard: { backgroundColor: 'rgba(239, 68, 68, 0.1)', borderWidth: 1, borderColor: 'rgba(239, 68, 68, 0.2)', borderRadius: 20, padding: 16, marginBottom: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logoutBtnText: { color: '#f87171', fontSize: 12, fontWeight: 'bold' },
  footer: { alignItems: 'center', marginBottom: 30 },
  footerText: { color: '#6b7280', fontSize: 11, fontWeight: '500' },
  footerVersion: { color: '#9ca3af', fontSize: 11, fontWeight: 'bold' },
  madeInIndia: { color: '#4b5563', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 8 },
});