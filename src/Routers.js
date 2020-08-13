import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AccountScreen from './screens/AccountScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import CompaniesScreen from './screens/CompaniesScreen';
import StationsScreen from './screens/StationsScreen';
import { Context as AuthContext } from './context/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Stations"
        component={ StationsScreen }
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Companies"
        component={ CompaniesScreen }
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={ AccountScreen }
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Routers = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

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
          <Stack.Screen
            name="Home"
            component={ Home }
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routers;
