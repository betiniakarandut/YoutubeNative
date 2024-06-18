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
    <TouchableOpacity onPress={() => onPress(video)} style={styles.container}>
      <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title}>{video.title}</Text>
        <Text>{video.channelName}</Text>
        <Text>{video.views} views</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 120,
    height: 90,
    borderRadius: 4,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VideoItem;
