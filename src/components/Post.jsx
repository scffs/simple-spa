import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Card } from 'react-bootstrap';

import { fetchUserRequest } from '../slices/userSlice';

import Avatar from '../assets/ava.png';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const handleUserClick = () => {
    dispatch(fetchUserRequest(post.userId));
  };

  return (
    <Card style={{ width: '15rem' }} className="h-100">
      <Link to={`/profile/${post.userId}`} onClick={handleUserClick}>
        <Card.Img variant="top" src={Avatar} />
      </Link>
      <Card.Body>
        <Card.Title className="text-truncate">{post.title}</Card.Title>
        <Card.Text className="text-truncate">{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
