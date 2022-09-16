import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Image
          resizeMode="contain"
          style={{
            width: 18,
            height: 18,
            alignSelf: 'center',
            marginRight: 5,
            marginLeft: 5,
          }}
          source={icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
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
