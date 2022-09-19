import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../components/forms';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <FormField
          autoCorrect={false}
          icon={require('../assets/user.png')}
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={require('../assets/email.png')}
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={require('../assets/pass.png')}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
  },
});

export default RegisterScreen;
