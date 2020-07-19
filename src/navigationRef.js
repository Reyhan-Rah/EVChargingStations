// RootNavigation.js

import * as React from 'react';

export const navigationRef = React.createRef();

export const navigate = (routeName, params) => {
  navigationRef.current?.navigate(routeName, params);
}

// add other navigation functions that you need and export them
