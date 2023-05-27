import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NewsBlock from '../components/NewsBlock';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NewsBlock />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});


export default HomeScreen;
