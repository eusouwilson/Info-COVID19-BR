import React from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';

import MainNavigator from './navigation/MainNavigator';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#473f97" />
      <MainNavigator />
    </>
  );
};

export default Main;
