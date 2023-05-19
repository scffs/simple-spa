import { Container, Spinner } from 'react-bootstrap';

const Loading = () => (
  <Container className="mt-5 d-flex justify-content-center">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Container>
);

export default Loading;