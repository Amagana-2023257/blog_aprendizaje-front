// src/components/Comments/NewCommentForm.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from '../UI/Input';
import { useCreateComment } from '../../shared/hooks/useCreateComment';
import toast from 'react-hot-toast';

export const NewCommentForm = ({ onAdded }) => {
  const { id: postId } = useParams();
  const { createComment, isLoading } = useCreateComment();
  const [form, setForm] = useState({ name: '', content: '' });

  const handleChange = (val, field) => setForm(f => ({ ...f, [field]: val }));

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
    <form onSubmit={handleSubmit} className="mt-3">
      <Input
        field="name"
        label="Tu nombre"
        type="text"
        value={form.name}
        onChangeHandler={handleChange}
        showErrorMessage={!form.name}
        validationMessage="Requerido"
        onBlurHandler={() => {}}
      />
      <Input
        field="content"
        label="Comentario"
        textArea
        value={form.content}
        onChangeHandler={handleChange}
        showErrorMessage={!form.content}
        validationMessage="Requerido"
        onBlurHandler={() => {}}
      />
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading ? 'Publicando...' : 'Publicar Comentario'}
      </button>
    </form>
  );
};
