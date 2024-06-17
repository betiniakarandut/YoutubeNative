// src/types/navigation.d.ts

import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  VideoDetails: { videoId: string };
  // Add other screens in the Home stack here
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Home: NavigatorScreenParams<HomeStackParamList>;
  // Add other root stack screens here
};
