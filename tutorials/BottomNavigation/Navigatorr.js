import React from 'react';
import {TabNavigator} from './AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

function Navigatorr() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default Navigatorr;
