import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {useTheme} from 'react-native-elements';
import images from '../assets/images';

const deviceWidth = Dimensions.get('window').width;
const FIXED_BAR_WIDTH = 280;
const BAR_SPACE = 10;

const carosel = [images.banner, images.banner, images.banner, images.banner];

const Promotions = () => {
  const {theme} = useTheme();


  let imageArray = [];
  carosel.forEach((image, i) => {
    const thisImage = (
      <Image
        key={`image${i}`}
        source={image}
        resizeMode={'contain'}
        resizeMethod={'scale'}
        style={{width: deviceWidth, height: 300,backgroundColor:'#fff'}}
      />
    );
    imageArray.push(thisImage);
  });

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        pagingEnabled>
        {imageArray}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default Promotions;
