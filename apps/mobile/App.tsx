// apps/mobile/App.tsx
// import './src/utils/global.css'; // <-- Yeh line wapas add karein
import React, { useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStack } from './src/navigation/AuthStack';
import { MainTabs } from './src/navigation/MainTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaywallScreen from './src/screens/PaywallScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = React.useState<string>('Auth');
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const token = await AsyncStorage.getItem('user_token');
        const isSubscribed = await AsyncStorage.getItem('is_subscribed');

        if (token) {
          if (isSubscribed === 'true') {
            setInitialRoute('MainTabs');
          } else {
            setInitialRoute('Paywall');
          }
        } else {
          setInitialRoute('Auth');
        }
      } catch (error) {
        console.error('Session check failed:', error);
      } finally {
        setIsReady(true);
      }
    };

    checkUserSession();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#030712" />
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
          <RootStack.Screen name="Auth" component={AuthStack} />
          <RootStack.Screen name="Paywall" component={PaywallScreen} />
          <RootStack.Screen name="MainTabs" component={MainTabs} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
  },
});
