import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Button, Text} from 'react-native';
import Screen from '../../app/components/Screen';

function Tweets({navigation}) {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate('TweetDetails', {name: 'Anuj'})}
      />
    </Screen>
    // useNavigation() hook to pass navigation prop to child component
  );
}

function TweetDetails({route}) {
  const {params} = route;
  return (
    <Screen>
      <Text style={{color: 'red'}}>
        Tweet Details ---- Props----{params.name}
      </Text>
    </Screen>
  );
}
//useRoute() hook to pass route prop to child component

function Account() {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
}

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'tomato'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        // Setting title dynamically with routes
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

//Creating Tab Bar

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'tomato',
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: '#eee',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Feed" component={StackNavigator} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default StackNavigator;
