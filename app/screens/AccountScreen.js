import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import colors from '../config/colors';
import Icon from '../components/Icon';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: require('../assets/list.png'),
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: require('../assets/email.png'),
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Anuj Singh"
          subTitle="anujsingh@gmail.com"
          image={require('../assets/profile.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon
            name={require('../assets/logout.png')}
            backgroundColor="#ffe66d"
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 15,
  },
});

export default AccountScreen;
