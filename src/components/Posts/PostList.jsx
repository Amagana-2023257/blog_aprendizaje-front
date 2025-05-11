// src/components/Posts/PostList.jsx
// (ya maneja courseFilter, no hace falta tocar)
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGetPosts } from '../../shared/hooks/useGetPosts';

export const PostList = ({ courseFilter }) => {
  const { fetchPosts, posts, isLoading } = useGetPosts();

  useEffect(() => {
    fetchPosts(courseFilter);
  }, [courseFilter]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '12rem' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!posts.length) {
    return <p className="text-center text-muted">No hay publicaciones disponibles.</p>;
  }

  return (
    <div className="row">
      {posts.map(post => (
        <div key={post._id} className="col-12 col-sm-6 col-lg-4 mb-4">
          <Link to={`/posts/${post._id}`} className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{post.title}</h5>
                <div className="mt-auto">
                  <span className="badge bg-primary text-uppercase">
                    {post.course}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

PostList.propTypes = {
  courseFilter: PropTypes.string,
};

PostList.defaultProps = {
  courseFilter: '',
};
