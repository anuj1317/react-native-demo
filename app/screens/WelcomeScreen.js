import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}></Image>
        <Text style={styles.tagline}> Sell What you Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonContainer: {
    padding: 20,
    width: '100%',
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },

  tagline: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
    color: colors.black,
  },
});

export default WelcomeScreen;
