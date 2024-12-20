import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SocialScreen from './screens/SocialScreen';
import ProfileScreen from './screens/ProfileScreen';

// Define the type for the Bottom Tabs navigation
export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'help';

            // Assigning icons to navigation buttons based on name
              // Full credit to Ionicons for these
            if (route.name === 'Garage') {
                iconName = 'car-outline';
            } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
            } else if (route.name === 'Social Feed') {
                iconName = 'chatbubble-outline';
            } else if (route.name === 'Profile') {
                iconName = 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Social Feed" component={SocialScreen} />
        <Tab.Screen name="Garage" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
