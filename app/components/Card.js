import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, imageUrl, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    flex: 1,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'repeat',
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
    color: 'black',
  },
});

export default Card;
