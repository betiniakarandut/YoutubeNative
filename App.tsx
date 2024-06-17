import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import VideoItem from './src/components/video/VideoItem';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channelName: string;
  views: number;
}

const videos: Video[] = [
  {
    id: '1',
    thumbnail: 'https://example.com/thumbnail1.jpg',
    title: 'Video 1',
    channelName: 'Channel 1',
    views: 1000,
  },
  {
    id: '2',
    thumbnail: 'https://example.com/thumbnail2.jpg',
    title: 'Video 2',
    channelName: 'Channel 2',
    views: 2000,
  },
];

const App = () => {
  const renderItem: ListRenderItem<Video> = ({ item }) => (
    <VideoItem video={item} onPress={(video) => console.log('Pressed', video)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to right, rgb(203, 16, 16), rgb(178, 36, 58))',
  },
});

export default App;
