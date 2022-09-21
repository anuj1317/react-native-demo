import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';

function ListItem({title, subTitle, image, IconComponent, onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </AppText>
          )}
        </View>
        <Image
          resizeMode="contain"
          style={{
            width: 18,
            height: 18,
            marginRight: 5,
          }}
          source={require('../assets/next.png')}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  detailsContainer: {
    marginLeft: 12,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'contain',
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
  title: {
    fontWeight: '500',
    color: colors.medium,
    fontSize: 15,
  },
});

export default ListItem;
