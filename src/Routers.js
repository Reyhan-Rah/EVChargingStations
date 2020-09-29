import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './screens/AccountScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import CompaniesScreen from './screens/CompaniesScreen';
import CompanyDetailsScreen from './screens/CompanyDetailsScreen';
import StationsScreen from './screens/StationsScreen';
import { Context as AuthContext } from './context/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Company = () => {
  return (
    <Stack.Navigator initialRouteName="Companies">
      <Stack.Screen name="Companies" component={CompaniesScreen} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetailsScreen} />
    </Stack.Navigator>
  );
};

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stations" component={StationsScreen} />
      <Tab.Screen name="Companies" component={Company} />
      <Tab.Screen name="Account" component={AccountScreen} />
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
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </>
        )}
    </Stack.Navigator>
  );
};

export default Routers;
