import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';

const HomeRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/pokemon/list" component={Home} />
        <Route exact path="/pokemon/favorites">
          <Home showPagination={false} />
        </Route>
        <Redirect to="/pokemon/list" />
      </Switch>
    </Layout>
  );
};

export default HomeRoutes;
