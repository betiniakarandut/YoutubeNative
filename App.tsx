// src/App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/navigation';
import AuthStack from './src/navigation/AuthStack';
import HomeStack from './src/navigation/HomeStack';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Auth" component={AuthStack} />
        <RootStack.Screen name="Home" component={HomeStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
