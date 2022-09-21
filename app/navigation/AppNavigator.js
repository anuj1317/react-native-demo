import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import Icon from '../components/Icon';
import colors from '../config/colors';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      // tabBarActiveBackgroundColor: colors.primary,
      tabBarActiveTintColor: colors.black,
      //tabBarInactiveBackgroundColor: '#eee',
      tabBarInactiveTintColor: '#B7B2B1',
    }}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name={require('../assets/home2.png')} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
        tabBarIcon: ({color, size}) => (
          <Icon name={require('../assets/plus.png')} size={size} />
        ),
        headerShown: false,
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name={require('../assets/acc.png')} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
