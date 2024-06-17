// src/api/video.ts
import apiClient from './apiClient';

export const getVideos = async () => {
  const response = await apiClient.get('/videos');
  return response.data;
};

export const getVideoById = async (id: string) => {
  const response = await apiClient.get(`/videos/${id}`);
  return response.data;
};
