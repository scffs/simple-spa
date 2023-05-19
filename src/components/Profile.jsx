import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';

import Loading from './Loading.jsx';
import ErrorAlert from './ErrorAlert.jsx';
import Post from './Post.jsx';

import { fetchUserRequest } from '../slices/userSlice';
import { fetchPostsSuccess } from '../slices/postsSlice.js';

import Avatar from '../assets/ava.png';

const Profile = () => {
  const { userId } = useParams();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const posts = useSelector((state) => state.posts.posts);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  }


  useEffect(() => {
    dispatch(fetchUserRequest(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem(`user_${userId}_posts`));
    if (storedPosts && storedPosts.length > 0) {
      dispatch(fetchPostsSuccess(storedPosts));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (posts.length > 0) {
      const userPosts = posts.filter((post) => post.userId === parseInt(userId));
      localStorage.setItem(`user_${userId}_posts`, JSON.stringify(userPosts));
    }
  }, [posts, userId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  const userPosts = posts.filter((post) => post.userId === parseInt(userId));

  return (
    <>
      <Card style={{ width: '18rem' }} className="mb-4">
        {user && (
          <div>
            <Card.Img variant="top" src={Avatar} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
          </div>
        )}
      </Card>
      <Button onClick={handleButtonClick}>Назад</Button>
      <Row>
        {userPosts.map((post) => (
          <Col key={post.id} xs={12} md={6} lg={4}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Profile;
