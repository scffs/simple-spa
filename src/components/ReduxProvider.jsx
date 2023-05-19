import React from 'react';
import { Provider } from 'react-redux';

import App from '../App.jsx';

import store from '../store/store.js';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxProvider;