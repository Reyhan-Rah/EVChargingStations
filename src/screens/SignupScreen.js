import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import * as navigationRef from '../navigationRef';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm 
        headaeText= "Sign Up for Tracker"
        errorMessage= { state.errorMessage }
        submitButtonText= "Sign Up"
        onSubmit= {signup}
      />
      <TouchableOpacity
        onPress={() => {
          navigationRef.navigate('Signin')
          clearErrorMessage();
        }}>
        <Spacer>
          <Text style={styles.link}>"Don't have an account? Sign in instead"</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    marginTop: 100
  },
  link: {
    color: 'blue'
  }
});

export default SignupScreen;
