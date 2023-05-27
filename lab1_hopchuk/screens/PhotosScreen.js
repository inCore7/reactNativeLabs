import React from 'react';
import { StyleSheet, View } from 'react-native';
import Photos from '../components/Photos';
import MenuBar from '../components/MenuBar';

const PhotosScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Photos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PhotosScreen;
