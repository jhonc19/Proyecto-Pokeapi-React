import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import HomeRoutes from './HomeRoutes';
import Auth from '../pages/Auth';
import Loading from '../components/shared/Loading';

import AuthContext from '../context/Auth/AuthContext';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const authContext = useContext(AuthContext);
  const { isLogged, isPending } = authContext;

  const stylePending = {
    backgroundColor: 'rgba(101,125,255,0.1516981792717087)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Router>
      {isPending ? (
        <div style={stylePending}>
          <Loading />
        </div>
      ) : (
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
      )}
    </Router>
  );
};

export default AppRouter;
