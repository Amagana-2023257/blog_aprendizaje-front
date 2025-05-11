// src/components/Sidebar/Sidebar.jsx
// (sin cambios, ya recibe selectedCourse y onSelectCourse)
import React, { useEffect } from 'react';
import { useGetPosts } from '../../shared/hooks/useGetPosts';
import PropTypes from 'prop-types';

export const Sidebar = ({ selectedCourse, onSelectCourse }) => {
  const { fetchPosts, posts } = useGetPosts();

  useEffect(() => {
    fetchPosts(''); // traemos todos para extraer cursos
  }, []);

  const courses = Array.from(new Set(posts.map(p => p.course).filter(Boolean)));

  return (
    <div className="border-end" style={{ width: '200px', minHeight: '100vh' }}>
      <h5 className="p-3">Filtrar por curso</h5>
      <ul className="list-unstyled px-3">
        <li className="mb-2">
          <button
            className={`btn btn-link ${selectedCourse === '' ? 'fw-bold' : ''}`}
            onClick={() => onSelectCourse('')}
          >
            Todos
          </button>
        </li>
        {courses.map(course => (
          <li key={course} className="mb-2">
            <button
              className={`btn btn-link ${selectedCourse === course ? 'fw-bold' : ''}`}
              onClick={() => onSelectCourse(course)}
            >
              {course}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  selectedCourse: PropTypes.string.isRequired,
  onSelectCourse: PropTypes.func.isRequired,
};
