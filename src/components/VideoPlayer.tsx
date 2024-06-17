// src/components/VideoPlayer.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: url }}
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;
