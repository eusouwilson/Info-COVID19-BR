import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
