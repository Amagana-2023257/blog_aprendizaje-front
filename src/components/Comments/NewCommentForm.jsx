// src/components/Comments/NewCommentForm.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCreateComment } from '../../shared/hooks/useCreateComment';
import toast from 'react-hot-toast';

export const NewCommentForm = ({ onAdded }) => {
  const { id: postId } = useParams();
  const { createComment, isLoading } = useCreateComment();
  const [form, setForm] = useState({ name: '', content: '' });

  const handleChange = (value, field) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!postId) {
      toast.error('ID de publicación no válido');
      return;
    }
    const comment = await createComment(postId, form);
    if (comment) {
      setForm({ name: '', content: '' });
      onAdded && onAdded(comment);
    }
  };

  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Añadir Comentario</h5>
          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Tu nombre
              </label>
              <input
                id="name"
                type="text"
                className={`form-control ${!form.name ? 'is-invalid' : ''}`}
                value={form.name}
                onChange={e => handleChange(e.target.value, 'name')}
              />
              {!form.name && (
                <div className="invalid-feedback">Este campo es requerido</div>
              )}
            </div>

            {/* Contenido */}
            <div className="mb-4">
              <label htmlFor="content" className="form-label">
                Comentario
              </label>
              <textarea
                id="content"
                rows="3"
                className={`form-control ${!form.content ? 'is-invalid' : ''}`}
                value={form.content}
                onChange={e => handleChange(e.target.value, 'content')}
              />
              {!form.content && (
                <div className="invalid-feedback">Este campo es requerido</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Publicando...
                </>
              ) : (
                'Publicar Comentario'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
