import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import PlayerArchive from './components/PlayerArchive/PlayerArchive';

/**
 * Init app
 */
render(
  <Provider store={store}>
    <PlayerArchive />
  </Provider>, document.getElementById('root')
);
