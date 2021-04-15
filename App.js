import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import Header from './src/components/header';
import InfoCard from './src/components/infoCard';
import Search from './src/components/search';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Header />
        <Search />
        <InfoCard />
        {/* InfoCard */}
        {/* Promotions */}
        {/* Categories */}
        {/* Bottom Tabs */}
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
