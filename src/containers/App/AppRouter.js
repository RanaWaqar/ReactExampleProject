import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Login';
import * as ROUTES from './AppRoutesURL';

export const AppRoutes = () => {
  return (
      <Switch>
          <Route path={ROUTES.login}>
              <Login />
          </Route>
      </Switch>
  );
};

export default AppRoutes;