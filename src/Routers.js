import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './screens/AccountScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import CompanyScreen from './screens/CompanyScreen';
import StationsScreen from './screens/StationsScreen';
import { Context as AuthContext } from './context/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stations" component={ StationsScreen } />
      <Tab.Screen name="Company" component={ CompanyScreen } />
      <Tab.Screen name="Account" component={ AccountScreen } />
    </Tab.Navigator>
  );
};

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
          <Stack.Screen name="Home" component={ Home } />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routers;
