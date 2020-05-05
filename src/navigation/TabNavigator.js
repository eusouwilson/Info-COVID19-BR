import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarIcon from './TabIcon';
import colors from '../../constants/Colors';
//Tabs
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import InfoScreen from '../screens/InfoScreen';
import StatisticScreen from '../screens/StatisticScreen';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HomeScreen';

const RootStack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={INITIAL_ROUTE_NAME}
    tabBarOptions={{
      activeTintColor: colors.primaryColor,
      inactiveTintColor: colors.secondaryColor,
      labelStyle: { fontSize: 12 },
      style: { height: 100 },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-home" />
        ),
      }}
    />
    <Tab.Screen
      name="Statistic"
      component={StatisticScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-pie" />
        ),
      }}
    />
    <Tab.Screen
      name="News"
      component={NewsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="ios-paper" />
        ),
      }}
    />
    <Tab.Screen
      name="Info"
      component={InfoScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-information-circle" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
