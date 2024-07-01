import apiClient from './apiClient';
// import { Video } from '../types/video';

export const getVideos = async () => {
  const response = await apiClient.get('/videos');
  return response.data;
};

export const getVideoById = async (id: string) => {
  const response = await apiClient.get(`/videos/${id}`);
  return response.data;
};
