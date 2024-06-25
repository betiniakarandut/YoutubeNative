import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import apiClient from '../api/apiClient';
import VideoCard from './VideoCard';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalVideos, setTotalVideos] = useState(0);
  const perPage = 9;

  useEffect(() => {
    fetchVideos();
  }, [page]);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get(`/videos/pagination?page=${page}&limit=${perPage}`);
      const { videos, howManyVideos } = response.data;
      setVideos(prevVideos => [...prevVideos, ...videos]);
      setTotalVideos(howManyVideos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (videos.length < totalVideos) {
      setPage(page + 1);
    }
  };

  const renderFooter = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <FlatList
      data={videos}
      renderItem={({ item }) => <VideoCard video={item} />}
      keyExtractor={(item) => item._id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default VideoList;
