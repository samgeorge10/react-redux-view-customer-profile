import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from '../components/common/NoMatch';
import Layout from '../containers/layout/Layout'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/pageNotFound' component={NoMatch} />
      <Route path='/' component={Layout} />
    </Switch>
  );
};

export default AppRoutes;