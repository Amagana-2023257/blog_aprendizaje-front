// src/components/Posts/PostList.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGetPosts } from '../../shared/hooks/useGetPosts';

export const PostList = ({ courseFilter }) => {
  const { fetchPosts, posts, isLoading } = useGetPosts();

  useEffect(() => {
    fetchPosts(courseFilter);
  }, [courseFilter]);

  if (isLoading) return <p>Cargando publicaciones...</p>;
  if (!posts.length) return <p>No hay publicaciones disponibles.</p>;

  return (
    <ul className="list-group">
      {posts.map(p => (
        <li key={p._id} className="list-group-item d-flex justify-content-between align-items-center">
          <Link to={`/posts/${p._id}`}>{p.title}</Link>
          <span className="badge bg-secondary">{p.course}</span>
        </li>
      ))}
    </ul>
  );
};

PostList.propTypes = {
  courseFilter: PropTypes.string,
};

PostList.defaultProps = {
  courseFilter: '',
};
