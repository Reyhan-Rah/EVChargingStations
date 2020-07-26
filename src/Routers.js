import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from './screens/StationsScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import CompanyScreen from './screens/CompanyScreen';
import StationsScreen from './screens/StationsScreen';
import { Context as AuthContext } from './context/AuthContext';

const Stack = createStackNavigator();

const Routers = () => {
  const { state } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {state.token == null ? (
        <>
          <Stack.Screen
            name="Signin"
            component={ SigninScreen }
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={ SignupScreen }
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Stations" component={ StationsScreen } />
          <Stack.Screen name="Company" component={ CompanyScreen } />
          <Stack.Screen name="Account" component={ AccountScreen } />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routers;
