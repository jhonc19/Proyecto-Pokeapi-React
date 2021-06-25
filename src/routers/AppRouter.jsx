import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import HomeRoutes from './HomeRoutes';
import Auth from '../pages/Auth';

import AuthContext from '../context/Auth/AuthContext';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const authContext = useContext(AuthContext);
  const { isLogged } = authContext;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Auth}
            isAuthenticated={isLogged}
          />
          <PrivateRoute
            path="/"
            component={HomeRoutes}
            isAuthenticated={isLogged}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
