import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen({ navigation }: any) {

  const handleLogin = async () => {
    try {
      // 1. Login API call yahan hoti hai...
      // Maan lijiye login success ho gaya aur token save kar liya:
      await AsyncStorage.setItem('user_token', 'mock_token_123');

      // 2. Check karein ki user ke paas subscription hai ya nahi
      const hasSubscribed = await AsyncStorage.getItem('is_subscribed');

      if (hasSubscribed === 'true') {
        // Agar subscription active hai, toh direct Main App (Dashboard / AI Coach) par bhejein
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' as never }],
        });
      } else {
        // Agar subscription nahi hai, toh ₹1 Trial Paywall screen khol dein
        navigation.navigate('PaywallScreen' as never);
      }

    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login / Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0F19' },
  loginBtn: { backgroundColor: '#7C3AED', padding: 16, borderRadius: 12, width: '80%', alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});