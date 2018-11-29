import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import LayoutContainer from './LayoutContainer'
import UserProfileContainer from '../users/UserProfileContainer';

const Layout = (props) => {
  const { match } = props;
  console.log(`${match.url}profile`);
  return(
    <LayoutContainer>
      <Switch>
        <Route exact path={`${match.url}`} component={UserProfileContainer} />
        <Route exact path={`${match.url}profile`} component={UserProfileContainer} />
        <Route path='/*' render={(props) => (<Redirect to='/pageNotFound' />)} exact />
      </Switch>
    </LayoutContainer>
  );
}

export default Layout;
