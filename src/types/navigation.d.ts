import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  OtpVerifier: { userId: string };
};

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  VideoDetails: { videoId: string };
  // Add other screens in the Home stack here
};

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};

export type SignInScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;
export type SignInScreenRouteProp = RouteProp<AuthStackParamList, 'SignIn'>;

export type SignUpScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignUp'>;
export type SignUpScreenRouteProp = RouteProp<AuthStackParamList, 'SignUp'>;

export type OtpVerifierScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'OtpVerifier'>;
export type OtpVerifierScreenRouteProp = RouteProp<AuthStackParamList, 'OtpVerifier'>;

export type SignInScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Auth'> & SignInScreenNavigationProp;
  route: SignInScreenRouteProp;
};

export type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Auth'> & SignUpScreenNavigationProp;
  route: SignUpScreenRouteProp;
};

export type OtpVerifierScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Auth'> & OtpVerifierScreenNavigationProp;
  route: OtpVerifierScreenRouteProp;
};

export type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;
export type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
