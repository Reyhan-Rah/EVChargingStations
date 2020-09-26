import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import * as navigationRef from '../navigationRef';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <AuthForm
        headaeText="Sign in to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <TouchableOpacity
        onPress={() => {
          navigationRef.navigate('Signup');
          clearErrorMessage();
        }}>
        <Spacer>
          <Text style={styles.link}>
            "Don't have an account? Sign up instead"
          </Text>
        </Spacer>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
  link: {
    color: 'blue',
  },
});

export default SigninScreen;
