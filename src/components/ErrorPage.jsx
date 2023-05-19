import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Alert, Button, Container } from 'react-bootstrap';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  }

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Alert variant='danger' className='text-center'>
        <h1>404</h1>
        <p>Страница не найдена!</p>
        <Button variant="outline-danger" onClick={handleButtonClick}>На главную</Button>
      </Alert>
    </Container>
  );
};

export default ErrorPage;