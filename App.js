import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as StationsProvider} from './src/context/StationsContext';
import {Provider as CompanyProvider} from './src/context/CompanyContext';
import {navigationRef} from './src/navigationRef';
import Routers from './src/Routers';

const App = () => {
  return (
    <CompanyProvider>
      <StationsProvider>
        <AuthProvider>
          <NavigationContainer ref={navigationRef}>
            <Routers />
          </NavigationContainer>
        </AuthProvider>
      </StationsProvider>
    </CompanyProvider>
  );
};

export default App;
