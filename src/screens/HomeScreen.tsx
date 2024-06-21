// screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Video } from '../types/video';
import apiClient, { setAuthToken } from '../api/apiClient';

const HomeScreen: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = setAuthToken('token');
        const response = await apiClient('/videos', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
