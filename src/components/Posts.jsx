import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPostsRequest } from '../slices/postsSlice';

import { Row, Col, Pagination } from 'react-bootstrap';

import Post from './Post';
import ErrorAlert from './ErrorAlert.jsx';
import Loading from './Loading.jsx';

const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <ErrorAlert error={error} />
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h2>Posts</h2>
      <Row className="justify-content-center gap-4">
        {currentPosts?.map((post) => (
          <Col key={post.id} md={6} lg={4} xl={3} className="h-100">
            <Post post={post} />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default Posts;
