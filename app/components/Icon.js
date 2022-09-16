import React from 'react';
import {View, Image} from 'react-native';

function Icon({name, size = 40, backgroundColor = '#FFF', iconColor = '#fff'}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={name} style={{width: 18, height: 18}} />
    </View>
  );
}

export default Icon;
