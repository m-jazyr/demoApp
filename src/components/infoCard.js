import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-elements';
import images from '../assets/images';

const InfoCard = () => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <Image source={images.user} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Complete your profile</Text>
        <Text style={[styles.desc, {color: theme.colors.grey2}]}>
          Order to complete your registration kindly update your profile
        </Text>
      </View>
      <Image source={images.info} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 24,
    backgroundColor: '#fdf8e2',
  },
  textContainer: {
    width: '90%',
  },
  title: {
    paddingHorizontal: 8,
    fontSize: 18,
    marginBottom: 8,
  },
  desc: {
    paddingHorizontal: 8,
    fontSize: 15,
  },
});

export default InfoCard;
