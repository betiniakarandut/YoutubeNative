import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  VideoDetails: { videoId: string };
};

type VideoDetailsScreenRouteProp = RouteProp<RootStackParamList, 'VideoDetails'>;
type VideoDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VideoDetails'>;

type Props = {
  route: VideoDetailsScreenRouteProp;
  navigation: VideoDetailsScreenNavigationProp;
};

const VideoDetailsScreen: React.FC<Props> = ({ route }) => {
  const { videoId } = route.params;

  return (
    <View>
      <Text>Video Details for Video ID: {videoId}</Text>
    </View>
  );
};

export default VideoDetailsScreen;
