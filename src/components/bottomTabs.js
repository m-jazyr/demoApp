import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, useTheme} from 'react-native-elements';
import {bottomTabs, categories} from '../utils/constants';

const BottomTabs = () => {
  const {theme} = useTheme();

  const listItem = ({item}) => (
    <TouchableOpacity style={styles.item}>
      <Icon name={item.image} size={28} color={theme.colors.grey4} />
      <Text style={[styles.title, {color: theme.colors.grey2}]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        data={bottomTabs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={listItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    height: 120,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    backgroundColor: '#fff',
    width: '100%',
  },
  item: {
    flex: 0.25,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 15,
  },
});

export default BottomTabs;
