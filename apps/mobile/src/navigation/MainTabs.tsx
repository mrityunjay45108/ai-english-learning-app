// // apps/mobile/src/navigation/MainTabs.tsx
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// import HomeScreen from '../screens/main/HomeScreen';
// import LessonsScreen from '../screens/LessonsScreen';
// import PlusScreen from '../screens/PlusScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import { MainTabParamList } from './types';

// const Tab = createBottomTabNavigator<MainTabParamList>();

// export const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#030712',
//           borderTopColor: '#1F2937',
//           height: 65,
//           paddingBottom: 8,
//           paddingTop: 8,
//         },
//         tabBarActiveTintColor: '#C084FC',
//         tabBarInactiveTintColor: '#64748b',
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName: any = 'home-outline';

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Courses') {
//             iconName = focused ? 'book' : 'book-outline';
//           } else if (route.name === 'Progress') {
//             iconName = focused ? 'stats-chart' : 'stats-chart-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'AI English App' }} />
//       <Tab.Screen
//         name="Courses"
//         component={LessonsScreen}
//         options={{ title: 'Corporate Modules' }}
//       />
//       <Tab.Screen name="Progress" component={PlusScreen} options={{ title: 'PLUS Pass' }} />
//       <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
//     </Tab.Navigator>
//   );
// };


// apps/mobile/src/navigation/MainTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/main/HomeScreen';
import LessonsScreen from '../screens/LessonsScreen';
import AiCoachScreen from '../screens/AiCoachScreen';
import PlusScreen from '../screens/PlusScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#030712',
          borderTopColor: '#1F2937',
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#C084FC',
        tabBarInactiveTintColor: '#64748b',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any = 'home-outline';
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Courses') iconName = focused ? 'book' : 'book-outline';
          else if (route.name === 'AI Coach') iconName = focused ? 'mic' : 'mic-outline';
          else if (route.name === 'Progress')
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={LessonsScreen} />
      <Tab.Screen name="AI Coach" component={AiCoachScreen} />
      <Tab.Screen name="Progress" component={PlusScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
