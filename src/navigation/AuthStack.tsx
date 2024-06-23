import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OtpVerifierScreen from '../screens/OtpVerifierScreen';
import { AuthStackParamList } from '../types/navigation';


const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OtpVerifier" component={OtpVerifierScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
