// src/types/navigation.d.ts

import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Auth Stack
export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

// Home Stack
export type HomeStackParamList = {
  Home: undefined;
  VideoDetails: { videoId: string };
  // Add other screens in the Home stack here
};

// Root Stack
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Home: NavigatorScreenParams<HomeStackParamList>;
  // Add other screens as needed
};

export type SignInScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;
export type SignInScreenRouteProp = RouteProp<AuthStackParamList, 'SignIn'>;

export type SignUpScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignUp'>;
export type SignUpScreenRouteProp = RouteProp<AuthStackParamList, 'SignUp'>;

export type SignInScreenProps = {
  navigation: SignInScreenNavigationProp;
  route: SignInScreenRouteProp;
};

export type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
  route: SignUpScreenRouteProp;
};
