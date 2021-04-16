import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import images from '../assets/images';
import { SliderBox } from "react-native-image-slider-box";
import { useTheme } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const carosel = [images.banner, images.banner, images.banner, images.banner];
const screen = Dimensions.get('screen');
const Promotions = () => {
  const {theme} = useTheme()
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Promotions</Text>
        <Text style={styles.title}>See all</Text>
      </View>
      <SliderBox  sliderBoxHeight={240}
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      disableOnPress
      ImageComponent={FastImage}
      ImageComponentStyle={{borderRadius: 15,height:250, width: '97%', marginTop: 5}}
      inactiveDotColor={theme.colors.grey5}
      images={carosel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 16,
  },
  textContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  item: {height: 198, width: screen.width, alignItems: 'center', paddingEnd: 8},
});

export default Promotions;
