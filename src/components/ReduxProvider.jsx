import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import Loading from './Loading.jsx';

import App from '../App.jsx';

import store from '../store/store.js';

const ReduxProvider = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  );
};

export default ReduxProvider;