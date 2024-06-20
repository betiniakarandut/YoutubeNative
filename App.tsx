// src/App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './src/navigation/AuthStack';
import HomeStack from './src/navigation/HomeStack';
import { RootStackParamList } from './src/types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Auth" component={AuthStack} />
        <RootStack.Screen name="Home" component={HomeStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
