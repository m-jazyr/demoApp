import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import images from '../assets/images';

const carosel = [images.banner, images.banner, images.banner, images.banner];
const screen = Dimensions.get('screen');
const Promotions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Promotions</Text>
        <Text style={styles.title}>See all</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {carosel.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image
              source={item}
              resizeMode={'stretch'}
              height={100}
              width={'100%'}
            />
          </View>
        ))}
      </ScrollView>
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
