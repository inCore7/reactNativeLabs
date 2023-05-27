import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import newsData from '../server/news.json';

const HomeScreen = () => {
  const { news } = newsData;

  const renderNewsItem = ({ item }) => {
    return (
      <View style={styles.newsItemContainer}>
        <Image style={styles.newsItemImage} source={{ uri: item.image }} />
        <View style={styles.newsItemContent}>
          <Text style={styles.newsItemTitle}>{item.title}</Text>
          <Text style={styles.newsItemDate}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {news.length > 0 ? (
        <FlatList
          data={news}
          renderItem={renderNewsItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={styles.noNewsContainer}>
          <Text style={styles.noNewsText}>No news</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  newsItemContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  newsItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  newsItemContent: {
    flex: 1,
  },
  newsItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsItemDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});


export default HomeScreen;
