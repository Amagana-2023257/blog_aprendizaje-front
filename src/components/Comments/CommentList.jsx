// src/components/Comments/CommentList.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetComments } from '../../shared/hooks/useGetComments';

export const CommentList = () => {
  const { id: postId } = useParams();
  const { fetchComments, comments, isLoading } = useGetComments();

  useEffect(() => {
    if (!postId) return;
    fetchComments(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando comentarios...</span>
        </div>
      </div>
    );
  }

  if (!comments.length) {
    return <p className="text-center text-muted mt-3">No hay comentarios.</p>;
  }

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <div className="mt-3">
        {comments.map(c => (
          <div key={c._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">{c.name}</h6>
              <p className="card-text">{c.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
