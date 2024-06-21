import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { verifyOTP } from '../api/user';
import { OtpVerifierScreenProps } from '../types/navigation';

const OtpVerifierScreen: React.FC<OtpVerifierScreenProps> = ({ navigation, route }) => {
  const { email } = route.params;

  return (
    <Formik
      initialValues={{ email: email, otp: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        otp: Yup.string().required('Required'),
      })}
      onSubmit={async (values) => {
        try {
          await verifyOTP(values.email, values.otp);
          navigation.navigate('SignIn');
        } catch (error) {
          console.error('Error verifying OTP:', error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text>Email</Text>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input}
          />
          <Text>OTP</Text>
          <TextInput
            onChangeText={handleChange('otp')}
            onBlur={handleBlur('otp')}
            value={values.otp}
            style={styles.input}
          />
          <Button onPress={handleSubmit as (event: any) => void} title="Verify" />
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

export default OtpVerifierScreen;