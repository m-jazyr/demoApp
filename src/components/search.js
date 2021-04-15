import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useTheme} from 'react-native-elements';
import images from '../assets/images';

const Search = () => {
  const {theme} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.findText, {color: theme.colors.grey1}]}>
        Find your daily goods
      </Text>
      <View style={styles.searchBarContainer}>
        <View
          style={[styles.searchBar, {backgroundColor: theme.colors.disabled}]}>
          <images.search height={25} width={25} />
          <TextInput
            placeholder="Search here..."
            style={styles.searchBarInput}
          />
        </View>
        <images.filter height={60} width={60} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 24,
  },
  findText: {
    fontSize: 15,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 16,
  },
  searchBar: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    height: 60,
    marginRight: 12,
    padding: 16,
    backgroundColor: 'grey',
    borderRadius: 16,
  },
  searchBarInput: {
    borderBottomWidth: 0,
    paddingHorizontal: 8,
    margin: 0,
    fontSize: 18,
  },
});

export default Search;
