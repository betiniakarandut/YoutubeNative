import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signIn } from '../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthToken } from '../api/apiClient';
import { SignInScreenProps } from '../types/navigation';

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setAuthToken(token);
      }
    };

    loadToken();
  }, []);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password too short').required('Required'),
      })}
      onSubmit={async (values) => {
        try {
          const response = await signIn(values.email, values.password);
          console.log('Full response:', response);
          const token = response?.data?.token;
          if (token) {
            await AsyncStorage.setItem('token', token);
            setAuthToken(token);
            navigation.navigate('Home');
          } else {
            console.error('Token is undefined');
          }
        } catch (error) {
          console.error('Error signing in:', error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text>Email</Text>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input}
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          
          <Text>Password</Text>
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={styles.input}
            secureTextEntry
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          
          <Button onPress={handleSubmit as (event: any) => void} title="Sign In" />
          
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
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
  errorText: {
    color: 'red',
  },
  signUpText: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default SignInScreen;
