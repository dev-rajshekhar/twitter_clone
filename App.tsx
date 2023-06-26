/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './src/bottom_tabs/Feed';
import Search from './src/bottom_tabs/Search';
import TwitterSpace from './src/bottom_tabs/TwitterSpace';
import Communites from './src/bottom_tabs/Communities';
import Notifications from './src/bottom_tabs/Notifications';
import Messages from './src/bottom_tabs/Messages';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home-account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="cloud-search-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TwitterSpace"
          component={TwitterSpace}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="microphone-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Communites"
          component={Communites}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="group" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="bell-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarLabel: () => {
              return null;
            },

            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="message-text-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
