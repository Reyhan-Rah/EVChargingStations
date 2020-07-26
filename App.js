import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider as AuthProvider} from './src/context/AuthContext';
import {navigationRef} from './src/navigationRef';
import Routers from './src/Routers';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Routers />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
