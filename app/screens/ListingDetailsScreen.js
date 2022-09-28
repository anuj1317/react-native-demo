import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen({route}) {
  const listing = route.params;
  return (
    <View style>
      <Image style={styles.image} source={{uri: listing.img}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.name}</AppText>
        <AppText style={styles.price}>Nickname: {listing.nickname}</AppText>
        <AppText style={styles.show}>Show: {listing.category}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/prof.png')}
            title="Anuj Singh"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 500,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
  },
  show: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: colors.black,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
