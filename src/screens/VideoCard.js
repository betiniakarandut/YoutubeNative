import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const VideoCard = ({ video }) => {
    return(
        <View style={styles.card}>
            <Image source={{uri: video.filePath}} style={styles.thumbnail}/>
            <Text style={styles.title}>video.title</Text>
            <Text style={styles.description}>video.description</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 2,
    },
    thumbnail: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    description: {
      fontSize: 14,
      color: '#666',
    },
  });
  
  export default VideoCard;