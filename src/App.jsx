import React, { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Loading from './components/Loading.jsx';
const Header = lazy(() => import('./components/Header.jsx'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <Container className='mt-5'>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
