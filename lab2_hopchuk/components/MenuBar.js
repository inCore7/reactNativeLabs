import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const MenuBar = ({ activeTab, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Photos' && styles.activeTabButton]}
        onPress={() => onPress('Photos')}
      />
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Home' && styles.activeTabButton]}
        onPress={() => onPress('Home')}
      />
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Profile' && styles.activeTabButton]}
        onPress={() => onPress('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f2f2f2',
  },
  tabButton: {
    paddingHorizontal: 10,
  },
});

export default MenuBar;
