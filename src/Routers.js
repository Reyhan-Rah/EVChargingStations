import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from './screens/AccountScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import CompaniesScreen from './screens/CompaniesScreen';
import CompanyDetailScreen from './screens/CompanyDetailScreen';
import StationsScreen from './screens/StationsScreen';
import {Context as AuthContext} from './context/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Company = () => {
  return (
    <Stack.Navigator initialRouteName="Companies">
      <Stack.Screen
        name="Companies"
        component={CompaniesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompanyDetail"
        component={CompanyDetailScreen}
        options={{title: 'Back'}}
      />
    </Stack.Navigator>
  );
};

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Stations"
        component={StationsScreen}
        options={{title: 'Stations'}}
      />
      <Tab.Screen
        name="Companies"
        component={Company}
        options={{title: 'Companies'}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{title: 'Account'}}
      />
    </Tab.Navigator>
  );
};

const Routers = () => {
  const {state, tryLocalSignin} = useContext(AuthContext);

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
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routers;
