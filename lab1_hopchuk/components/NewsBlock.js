import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';

const NewsBlock = () => {
  const news = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      date: 'May 20, 2023',
      image: 'https://picsum.photos/id/28/4928/3264',
    },
    {
      id: 2,
      title: 'Consectetur adipiscing elit',
      date: 'May 19, 2023',
      image: 'https://picsum.photos/id/56/2880/1920',
    },
    {
      id: 3,
      title: 'Sed do eiusmod tempor incididunt',
      date: 'May 18, 2023',
      image: 'https://picsum.photos/id/9/5000/3269',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet',
      date: 'May 20, 2023',
      image: 'https://picsum.photos/id/28/4928/3264',
    },
    {
      id: 5,
      title: 'Consectetur adipiscing elit',
      date: 'May 19, 2023',
      image: 'https://picsum.photos/id/56/2880/1920',
    },
    {
      id: 6,
      title: 'Sed do eiusmod tempor incididunt',
      date: 'May 18, 2023',
      image: 'https://picsum.photos/id/9/5000/3269',
    },
    {
      id: 7,
      title: 'Lorem ipsum dolor sit amet',
      date: 'May 20, 2023',
      image: 'https://picsum.photos/id/28/4928/3264',
    },
    {
      id: 8,
      title: 'Consectetur adipiscing elit',
      date: 'May 19, 2023',
      image: 'https://picsum.photos/id/56/2880/1920',
    },
    {
      id: 9,
      title: 'Sed do eiusmod tempor incididunt',
      date: 'May 18, 2023',
      image: 'https://picsum.photos/id/9/5000/3269',
    },
    {
      id: 10,
      title: 'Sed do eiusmod tempor incididunt',
      date: 'May 18, 2023',
      image: 'https://picsum.photos/id/9/5000/3269',
    }
  ];

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
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
      />
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


export default NewsBlock;