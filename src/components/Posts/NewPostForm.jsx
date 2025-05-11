// src/components/Posts/NewPostForm.jsx
import React, { useState } from 'react';
import { useCreatePost } from '../../shared/hooks/useCreatePost';
import { Input } from '../UI/Input';
import { useNavigate } from 'react-router-dom';

export const NewPostForm = () => {
  const { createPost, isLoading } = useCreatePost();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '', course: '' });

  const handleChange = (val, field) =>
    setForm(prev => ({ ...prev, [field]: val }));

  const handleSubmit = async e => {
    e.preventDefault();
    const success = await createPost(form);
    if (success) navigate('/posts');
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm">
        <div className="card-header text-center bg-white">
          <h4 className="mb-0">Crear Nueva Publicación</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Título */}
            <div className="mb-3">
              <Input
                field="title"
                label="Título"
                type="text"
                value={form.title}
                onChangeHandler={handleChange}
                showErrorMessage={!form.title}
                validationMessage="Requerido"
                onBlurHandler={() => {}}
              />
            </div>
            {/* Descripción */}
            <div className="mb-3">
              <Input
                field="description"
                label="Descripción"
                textArea
                value={form.description}
                onChangeHandler={handleChange}
                showErrorMessage={!form.description}
                validationMessage="Requerido"
                onBlurHandler={() => {}}
              />
            </div>
            {/* Curso */}
            <div className="mb-4">
              <Input
                field="course"
                label="Curso"
                type="text"
                value={form.course}
                onChangeHandler={handleChange}
                showErrorMessage={!form.course}
                validationMessage="Requerido"
                onBlurHandler={() => {}}
              />
            </div>
            {/* Botón */}
            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Guardando...
                </>
              ) : (
                'Crear Publicación'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
