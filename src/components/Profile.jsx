import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserRequest } from '../slices/userSlice';
import Loading from './Loading.jsx';
import ErrorAlert from './ErrorAlert.jsx';
import { Card } from 'react-bootstrap';
import Avatar from '../assets/ava.png';

const Profile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);


  useEffect(() => {
    dispatch(fetchUserRequest(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <Card style={{ width: '18rem' }}>
      {user && (
        <div>
          <Card.Img variant="top" src={Avatar} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              {user.email}
            </Card.Text>
          </Card.Body>
        </div>
      ) }
    </Card>
  );
};

export default Profile;
