import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import Icon from '../components/Icon';

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name={require('../assets/plus.png')} size={35} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});

export default NewListingButton;
