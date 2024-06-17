// src/api/user.ts
import apiClient from './apiClient';

export const signIn = async (email: string, password: string) => {
  const response = await apiClient.post('/user/signin', { email, password });
  return response.data;
};

export const signUp = async (email: string, password: string) => {
  const response = await apiClient.post('/user/signup', { email, password });
  return response.data;
};
