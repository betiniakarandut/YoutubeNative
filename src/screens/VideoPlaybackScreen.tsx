// src/screens/VideoPlaybackScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getVideoById } from '../api/video';
import VideoPlayer from '../components/VideoPlayer';

const VideoPlaybackScreen: React.FC = ({ route }) => {
  const { videoId } = route.params;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const data = await getVideoById(videoId);
      setVideo(data);
    };
    fetchVideo();
  }, [videoId]);

  if (!video) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <VideoPlayer url={video.url} />
      <Text style={styles.title}>{video.title}</Text>
      <Text>{video.channelName}</Text>
      <Text>{video.views} views</Text>
      <Text>{video.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default VideoPlaybackScreen;
