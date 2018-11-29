import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const appProvider = ({store}) => (
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
);

appProvider.propTypes = {
  store: PropTypes.object.isRequired
};

export default appProvider;