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
    <View style={styles.container}>
      <Image source={{ uri: profile.profile_image }} style={styles.profileImage} />
      <Text style={styles.text}>Name: {profile.full_name}</Text>
      <Text style={styles.text}>Email: {profile.email}</Text>
      <Text style={styles.text}>Phone: {profile.phone}</Text>
      <Text style={styles.text}>Address: {profile.address}</Text>
      <Text style={styles.text}>Zip Code: {profile.zip_code}</Text>
      <Text style={styles.text}>Hobby: {profile.hobby}</Text>
      <Text style={styles.text}>Bio: {profile.bio}</Text>
      <Text style={styles.text}>Maiden Name: {profile.maiden_name}</Text>
      <Text style={styles.text}>Date of Birth: {new Date(profile.date_of_birth).toDateString()}</Text>
      <Text style={styles.text}>Gender: {profile.gender}</Text>
      <Text style={styles.text}>Nationality: {profile.nationality}</Text>
      <Text style={styles.text}>Country: {profile.country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProfileScreen;
