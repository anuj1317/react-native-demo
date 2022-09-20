import React from 'react';
import ListingEditScreen from './ListingEditScreen';
import MessagesScreen from './MessagesScreen';
import {View, Text} from 'react-native';
import Screen from '../components/Screen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import StackNavigator, {
  TabNavigator,
} from '../../tutorials/BottomNavigation/AppNavigation';
import Navigatorr from '../../tutorials/BottomNavigation/Navigatorr';

function App() {
  return <Navigatorr />;
}

export default App;
