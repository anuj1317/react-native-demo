import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import colors from '../config/colors';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Screen;
