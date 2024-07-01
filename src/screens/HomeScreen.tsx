import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import VideoList from './VideoList';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = 'ios-person';
            } else if (route.name === 'Search') {
              iconName = 'ios-search';
            } else if (route.name === 'Home') {
              iconName = 'ios-home';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabel: route.name,
        })}
      >
        <Tab.Screen name="Home" component={VideoList} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
