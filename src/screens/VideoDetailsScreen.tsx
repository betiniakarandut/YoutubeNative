// src/screens/VideoDetailsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../types/navigation';

// Define the type for the route prop
type VideoDetailsScreenRouteProp = RouteProp<HomeStackParamList, 'VideoDetails'>;

type Props = {
  route: VideoDetailsScreenRouteProp;
};

const VideoDetailsScreen = ({ route }: Props) => {
  const { videoId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Details Screen</Text>
      <Text>Video ID: {videoId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default VideoDetailsScreen;
