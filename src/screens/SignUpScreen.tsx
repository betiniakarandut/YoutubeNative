// src/screens/SignUpScreen.tsx

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../types/navigation';

// Define the type for the navigation prop
type SignUpScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignUp'>;

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Password too short').required('Required'),
        })}
        onSubmit={(values) => {
          // Handle sign up logic here
          console.log(values);
          navigation.navigate('SignIn');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
            <Button onPress={handleSubmit as () => void} title="Sign Up" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  error: {
    color: 'red',
  },
});

export default SignUpScreen;
