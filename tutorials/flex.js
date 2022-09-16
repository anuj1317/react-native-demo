import React from 'react';
import {View} from 'react-native';

function flex() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', //main axis
        alignItems: 'center', //cross axis

        //if content overflows in UI then we use wrap
        // flexWrap: 'wrap',
        // alignContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          //   flexBasis: 100, //It sets the width and height based on primary axis..if flex direction is row then width will be set
          width: 100,
          height: 100,
          //alignSelf: 'flex-start', //cross axis
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />
      {/* <View
        style={{
          backgroundColor: 'grey',
          width: 100,
          height: 100,
        }}
      />

      <View
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,
        }}
      /> */}
    </View>
  );
}

export default flex;
