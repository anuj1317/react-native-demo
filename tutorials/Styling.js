import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from '../app/components/AppButton';

import Card from '../app/components/Card';
import AppText from './AppText/AppText';

function Styling() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }}>
      <View style={styles.shadow}></View>

      <AppButton title="Login" onPress={() => console.log('Tapped')} />
      <AppText>React Native Tutorial</AppText>

      <View
        style={{
          backgroundColor: '#f8f4f4',
          padding: 20,
          paddingTop: 40,
          flexDirection: 'row',
          flex: 1,
        }}>
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require('../app/assets/jacket.jpg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'royalblue',
    borderRadius: 10,
    //Shadow for IOS
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
  },
});

export default Styling;
