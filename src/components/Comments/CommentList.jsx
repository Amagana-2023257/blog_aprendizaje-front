// src/components/Comments/CommentList.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetComments } from '../../shared/hooks/useGetComments';
import toast from 'react-hot-toast';

export const CommentList = () => {
  const { id: postId } = useParams();
  const { fetchComments, comments, isLoading } = useGetComments();

  useEffect(() => {
    if (!postId) return;
    fetchComments(postId);
    // Solo queremos llamar una vez cuando cambie postId
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  if (isLoading) return <p>Cargando comentarios...</p>;
  if (!comments.length) return <p>No hay comentarios.</p>;

  return (
    <ul className="list-group mt-3">
      {comments.map(c => (
        <li key={c._id} className="list-group-item">
          <strong>{c.name}</strong>: {c.content}
        </li>
      ))}
    </ul>
  );
};
