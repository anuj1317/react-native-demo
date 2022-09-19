import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {Platform} from 'react-native';
import colors from '../config/colors';

import defaultStyles from '../config/styles';

function AppTextInput({icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <Image
          resizeMode="contain"
          style={{
            width: 18,
            height: 18,
            alignSelf: 'center',
            marginRight: 8,
            marginLeft: 5,
          }}
          source={icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholderTextColor="#000"
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    marginVertical: 20,
  },
});

export default AppTextInput;
