import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import App from '../App.jsx';

import store from '../store/store.js';

const ReduxProvider = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  );
};

export default ReduxProvider;