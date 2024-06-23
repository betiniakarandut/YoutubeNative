import apiClient from './apiClient';

export const signIn = async (email: string, password: string) => {
  const response = await apiClient.post('/user/signin', { email, password });
  return response;
};

export const signUp = async (username: string, email: string, phone: string, password: string) => {
  const response = await apiClient.post('/user/signup', { username, email, phone, password });
  return response;
};

export const verifyOTP = async (userId: string, otp: string) => {
  const response = await apiClient.post('/user/verifyotp', { userId, otp });
  return response;
};