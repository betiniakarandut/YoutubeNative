import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile } from '../types/profile';
import apiClient from '../api/apiClient';

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await apiClient.get('/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <Text>Loading...</Text>;
  }

  return (
    <View >
      <Image source={{ uri: profile.profile_image }}  />
      <Text >Name: {profile.full_name}</Text>
      <Text >Email: {profile.email}</Text>
      <Text >Phone: {profile.phone}</Text>
      <Text >Address: {profile.address}</Text>
      <Text >Zip Code: {profile.zip_code}</Text>
      <Text >Hobby: {profile.hobby}</Text>
      <Text >Bio: {profile.bio}</Text>
      <Text >Maiden Name: {profile.maiden_name}</Text>
      <Text >Date of Birth: {new Date(profile.date_of_birth).toDateString()}</Text>
      <Text >Gender: {profile.gender}</Text>
      <Text >Nationality: {profile.nationality}</Text>
      <Text >Country: {profile.country}</Text>
    </View>
  );
};


export default ProfileScreen;
