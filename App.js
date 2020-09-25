import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import DrawerScreen1 from './src/screens/DrawerScreen1';
import DrawerScreen2 from './src/screens/DrawerScreen2';
import DrawerScreen3 from './src/screens/DrawerScreen3';
import TabScreen1 from './src/screens/TabScreen1';
import TabScreen2 from './src/screens/TabScreen2';
import TabScreen3 from './src/screens/TabScreen3';
import LoginScreen from './src/screens/LoginScreen';
import SignOutScreen from './src/screens/SignOutScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default function App() {
  const createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='Details' component={DetailsScreen} />
      <Stack.Screen name='Bottom Tabs' children={createBottomTabs} />
      <Stack.Screen name='Top Tabs' children={createTopTabs} />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );

  const createTopTabs = () => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen name='Tab 1' component={TabScreen1} />
        <MaterialTopTabs.Screen name='Tab 2' component={TabScreen2} />
        <MaterialTopTabs.Screen name='Tab 3' component={TabScreen3} />
      </MaterialTopTabs.Navigator>
    );
  };
  const createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name='Tab 1' component={TabScreen1} />
        <MaterialBottomTabs.Screen name='Tab 2' component={TabScreen2} />
        <MaterialBottomTabs.Screen name='Tab 3' component={TabScreen3} />
      </MaterialBottomTabs.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' children={createHomeStack} />
        <Drawer.Screen name='My Songs' component={DrawerScreen1} />
        <Drawer.Screen name='Profile' component={DrawerScreen2} />
        <Drawer.Screen name='Credits' component={DrawerScreen3} />
        <Drawer.Screen name='Logout' component={SignOutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
