import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface Video {
  thumbnail: string;
  title: string;
  channelName: string;
  views: number;
}

interface VideoItemProps {
  video: Video;
  onPress: (video: Video) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(video)}>
      <View style={styles.container}>
        <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>{video.title}</Text>
          <Text>{video.channelName}</Text>
          <Text>{video.views} views</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  details: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VideoItem;
