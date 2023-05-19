import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Header from './components/Header.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
