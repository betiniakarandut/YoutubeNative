import apiClient from './apiClient';
import { User } from '../types/user';

export const signIn = async (email: string, password: string) => {
  const response = await apiClient.post('/user/signin', { email, password });
  return response.data;
};

export const signUp = async (email: string, password: string) => {
  const response = await apiClient.post('/user/signup', { email, password });
  return response.data;
};
