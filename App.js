import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './src/navigationRef';

import AccountScreen from './src/screens/StationsScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import CompanyScreen from './src/screens/CompanyScreen';
import StationsScreen from './src/screens/StationsScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={SigninScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
