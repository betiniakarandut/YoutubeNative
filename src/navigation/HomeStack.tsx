// src/navigations/HomeStack.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import VideoDetailsScreen from '../screens/VideoDetailsScreen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="VideoDetails" component={VideoDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
