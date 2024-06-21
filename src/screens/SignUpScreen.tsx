import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signUp } from '../api/user';
import { SignUpScreenProps } from '../types/navigation';

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ username: '', email: '', phone: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required'),
        password: Yup.string().min(6, 'Password too short').required('Required'),
      })}
      onSubmit={async (values) => {
        try {
          const response = await signUp(values.username, values.email, values.phone, values.password);
          navigation.navigate('OtpVerifier', { email: values.email });
        } catch (error) {
          console.error('Error signing up:', error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text>Username</Text>
          <TextInput
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            style={styles.input}
          />
          <Text>Email</Text>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input}
          />
          <Text>Phone</Text>
          <TextInput
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            style={styles.input}
          />
          <Text>Password</Text>
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={styles.input}
            secureTextEntry
          />
          <Button onPress={handleSubmit as (event: any) => void} title="Sign Up" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
  },
});

export default SignUpScreen;
