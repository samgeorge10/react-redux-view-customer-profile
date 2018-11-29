import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import appProvider from './routes/index';

//importing the material ui theme
import './theme/material-ui-theme/assets/scss/material-kit-react.css';

// initializing the element root
const ElementRoot = document.getElementById('root');
const store = configureStore();

render(
  appProvider({store}), 
  ElementRoot
);