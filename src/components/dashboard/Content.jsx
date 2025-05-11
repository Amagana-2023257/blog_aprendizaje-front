// src/components/dashboard/Content.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';

import { Sidebar } from '../nav/Sidebar';
import { PostList } from '../Posts/PostList';
import { PostDetail } from '../Posts/PostDetail';
import { NewPostForm } from '../Posts/NewPostForm';
import { EditPostForm } from '../Posts/EditPostForm';
import { CommentList } from '../Comments/CommentList';
import { NewCommentForm } from '../Comments/NewCommentForm';

export const Content = ({ courseFilter, onSelectCourse }) => (
  <main className="content-container flex-grow-1 p-4">
    <Routes>
      {/* Ruta principal: lista + sidebar */}
      <Route
        path=""
        element={
          <div className="d-flex">
            <Sidebar
              selectedCourse={courseFilter}
              onSelectCourse={onSelectCourse}
            />
            <div className="flex-grow-1 p-4">
              <PostList courseFilter={courseFilter} />
            </div>
          </div>
        }
      />

      {/* Resto de rutas: sin sidebar */}
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
      <Route path="posts/new" element={<NewPostForm />} />
      <Route path="posts/edit/:id" element={<EditPostForm />} />
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

Content.propTypes = {
  courseFilter: PropTypes.string.isRequired,
  onSelectCourse: PropTypes.func.isRequired,
};
