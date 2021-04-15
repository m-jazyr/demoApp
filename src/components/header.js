import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import images from '../assets/images';

const Header = () => {
  return (
    <View style={styles.container}>
      <images.avatar height={50} width={50} />
      <Text style={styles.title}>Welcome to 86</Text>
      <Image source={images.bell} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  title: {
    fontSize: 18,
  },
});

export default Header;
