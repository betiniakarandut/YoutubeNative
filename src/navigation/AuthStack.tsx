// src/navigation/AuthStack.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
// import OtpVerificationScreen from '../screens/OtpVerificationScreen'; // Add if OTP verification is a separate screen

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      {/* <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} /> Add if necessary */}
    </Stack.Navigator>
  );
};

export default AuthStack;
