import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {useTheme} from 'react-native-elements';
import images from '../assets/images';

const carosel = [images.banner, images.banner, images.banner, images.banner];

const Promotions = () => {
  const {theme} = useTheme();

  const thisImage = ({item}) => (
    <View style={styles.item}>
      <Image source={item} resizeMode={'cover'} height={150} />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Promotions</Text>
        <Text style={styles.title}>See all</Text>
      </View>
      <FlatList
        data={carosel}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={thisImage}
      />
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
  item: {height: 150, width: 280, paddingEnd: 8},
});

export default Promotions;
