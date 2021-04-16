import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, useTheme} from 'react-native-elements';
import {bottomTabs} from '../utils/constants';

const BottomTabs = () => {
  const [selected, setselected] = useState(0);
  const {theme} = useTheme();

  const listItem = ({item, index}) => (
    <TouchableOpacity style={styles.item} onPress={() => setselected(index)}>
      <Icon
        name={item.image}
        size={28}
        color={index == selected ? theme.colors.primary : theme.colors.grey4}
      />
      <Text
        style={[
          styles.title,
          {
            color:
              index == selected ? theme.colors.primary : theme.colors.grey2,
          },
        ]}>
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
    height: 80,
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
    paddingVertical: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 15,
  },
});

export default BottomTabs;
