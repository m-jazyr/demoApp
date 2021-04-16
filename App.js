import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import BottomTabs from './src/components/bottomTabs';
import Categories from './src/components/categories';
import Header from './src/components/header';
import InfoCard from './src/components/infoCard';
import Promotions from './src/components/promotions';
import Search from './src/components/search';

const App = () => {
  return (
    <ThemeProvider>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          <ScrollView style={{marginBottom: 80}}>
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

export default App;
