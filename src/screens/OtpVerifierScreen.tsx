import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { verifyOTP } from '../api/user';
import { OtpVerifierScreenProps } from '../types/navigation';

const OtpVerifierScreen: React.FC<OtpVerifierScreenProps> = ({ navigation, route }) => {
  const { userId } = route.params;

  return (
    <Formik
      initialValues={{ userId: userId, otp: '' }}
      validationSchema={Yup.object({
        userId: Yup.string().required('Required'),
        otp: Yup.string().required('Required'),
      })}
      onSubmit={async (values) => {
        try {
          await verifyOTP(values.userId, values.otp);
          navigation.navigate('SignIn');
        } catch (error) {
          console.error('Error verifying OTP:', error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text>User ID</Text>
          <TextInput
            onChangeText={handleChange('userId')}
            onBlur={handleBlur('userId')}
            value={values.userId}
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