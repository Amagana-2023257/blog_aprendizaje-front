import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PostList } from '../Posts/PostList';
import { PostDetail } from '../Posts/PostDetail';
import { NewPostForm } from '../Posts/NewPostForm';
import { EditPostForm } from '../Posts/EditPostForm';
import { CommentList } from '../Comments/CommentList';
import { NewCommentForm } from '../Comments/NewCommentForm';

export const Content = () => (
  <main className="content-container flex-grow-1 p-4">
    <Routes>
      {/* Lista de publicaciones (público) */}
      <Route path="" element={<PostList />} />

      {/* Detalle de publicación y comentarios */}
      <Route
        path="posts/:id"
        element={
          <>
            <PostDetail />
            <CommentList />
            <NewCommentForm />
          </>
        }
      />

      {/* Nuevo post */}
      <Route path="posts/new" element={<NewPostForm />} />

      {/* Editar post */}
      <Route path="posts/edit/:id" element={<EditPostForm />} />

      {/* Fallback 404 */}
      <Route
        path="*"
        element={
          <div className="text-center text-danger">
            <h3>404 - Página no encontrada</h3>
          </div>
        }
      />
    </Routes>
  </main>
);
