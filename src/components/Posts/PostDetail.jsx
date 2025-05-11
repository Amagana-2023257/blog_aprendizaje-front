// src/components/Posts/PostDetail.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPost } from '../../shared/hooks/useGetPost';

export const PostDetail = () => {
  const { id } = useParams();
  const { fetchPost, post, isLoading } = useGetPost();

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '12rem' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!post) {
    return <p className="text-center text-muted">Publicación no encontrada.</p>;
  }

  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm">
        {/* Header */}
        <div className="card-header">
          <h2 className="mb-0">{post.title}</h2>
        </div>
        {/* Body */}
        <div className="card-body">
          <p className="card-text">{post.description}</p>
        </div>
        {/* Footer */}
        <div className="card-footer text-muted">
          Curso: <em>{post.course}</em>
        </div>
      </div>
    </div>
  );
};
