import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({item, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={70}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
    color: colors.black,
  },
});

export default CategoryPickerItem;
