import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

import colors from '../config/colors';

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Text style={{fontSize: 18}}>Close</Text>
      </View>
      <View style={styles.deleteIcon}>
        <Text style={{fontSize: 18}}>Delete</Text>
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 60,
    height: 50,
    position: 'absolute',
    top: 40,
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  deleteIcon: {
    width: 60,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
