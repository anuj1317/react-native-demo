import {Image, StyleSheet} from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import colors from '../config/colors';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          name="email"
          icon={require('../assets/email.png')}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardtype="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          icon={require('../assets/pass.png')}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
