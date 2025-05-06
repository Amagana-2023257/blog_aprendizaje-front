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

  if (isLoading) return <p>Cargando...</p>;
  if (!post) return <p>Publicación no encontrada.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p><em>Curso: {post.course}</em></p>
      <p>{post.description}</p>
    </div>
  );
};