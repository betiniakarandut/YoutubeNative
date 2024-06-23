// // src/navigation/AppNavigator.tsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import SignInScreen from '../screens/SignInScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import VideoPlaybackScreen from '../screens/VideoPlaybackScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const HomeStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="VideoPlayback" component={VideoPlaybackScreen} />
//   </Stack.Navigator>
// );

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="SignIn" component={SignInScreen} />
//         <Tab.Screen name="SignUp" component={SignUpScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
