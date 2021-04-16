import React from 'react';
import {
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import BottomTabs from './src/components/bottomTabs';
import Categories from './src/components/categories';
import Header from './src/components/header';
import InfoCard from './src/components/infoCard';
import Promotions from './src/components/promotions';
import Search from './src/components/search';

const App = () => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          <ScrollView>
            <Header />
            <Search />
            <InfoCard />
            <Promotions />
            <Categories />
          </ScrollView>
        </SafeAreaView>
        <BottomTabs />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
