import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';

function ListingsScreen({navigation}) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    try {
      const response = await listingsApi.getListings();
      console.log('status--------', response.status);
      setError(false);
      setListings(response.data);
    } catch (err) {
      return setError(true);
    }
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText style={{color: 'tomato', alignSelf: 'center'}}>
            Couldn't retrieve the listings.
          </AppText>
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={listing => listing.char_id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.name}
            subTitle={item.nickname}
            imageUrl={item.img}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
