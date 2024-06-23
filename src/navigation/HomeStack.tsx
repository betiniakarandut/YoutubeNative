import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VideoDetailsScreen from '../screens/VideoDetailsScreen';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  VideoDetails: { videoId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="VideoDetails" component={VideoDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
