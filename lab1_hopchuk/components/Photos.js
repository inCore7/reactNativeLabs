import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';

const Photos = () => {
  const data = [
    { id: 1, image: require('../assets/1.jpg') },
    { id: 2, image: require('../assets/2.jpg') },
    { id: 3, image: require('../assets/3.jpg') },
    { id: 4, image: require('../assets/1.jpg') },
    { id: 5, image: require('../assets/2.jpg') },
    { id: 6, image: require('../assets/1.jpg') },
    { id: 7, image: require('../assets/2.jpg') },
    { id: 8, image: require('../assets/3.jpg') },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={(item) => (
          <Image style={styles.image} source={item.image} />
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

export default Photos;
