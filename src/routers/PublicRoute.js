import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...otherProps
}) => {
  return (
    <Route
      {...otherProps}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.prototypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
