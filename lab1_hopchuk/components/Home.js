import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import NewsBlock from '../components/NewsBlock';
import MenuBar from '../components/MenuBar';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MenuBar activeTab='Home' onPress={navigation.navigate} />
      <View style={styles.mainContainer}>
        <NewsBlock />
        <View style={styles.imageContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default Home;
