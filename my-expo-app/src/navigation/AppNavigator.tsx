import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

/**
 * Type definitions for the navigation stack parameters.
 * This ensures type safety when navigating between screens.
 */
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * AppNavigator handles the stack navigation for the application.
 * It configures the transition between HomeScreen and DetailsScreen.
 */
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 17,
          },
          headerShadowVisible: true,
          headerBackTitleVisible: true,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home' 
          }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ 
            title: 'Details',
            headerBackTitle: 'Back'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;