import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import photosData from '../server/photos.json';

const PhotosScreen = () => {
  const { data } = photosData;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item.image }} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  image: {
    width: '45%',
    aspectRatio: 1,
    borderRadius: 10,
    marginHorizontal: '2.5%',
    marginVertical: 10,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: '2.5%',
  },
});

export default PhotosScreen;
