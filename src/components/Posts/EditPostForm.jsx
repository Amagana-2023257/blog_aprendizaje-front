// src/components/Posts/EditPostForm.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetPost } from '../../shared/hooks/useGetPost';
import { useUpdatePost } from '../../shared/hooks/useUpdatePost';
import { Input } from '../UI/Input';

export const EditPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchPost, post, isLoading: loadingPost } = useGetPost();
  const { updatePost, isLoading: saving } = useUpdatePost();
  const [form, setForm] = useState({ title: '', description: '', course: '' });

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  useEffect(() => {
    if (post) setForm({ title: post.title, description: post.description, course: post.course });
  }, [post]);

  const handleChange = (val, field) => setForm(f => ({ ...f, [field]: val }));
  const handleSubmit = e => {
    e.preventDefault();
    updatePost(id, form).then(() => navigate(`/posts/${id}`));
  };

  if (loadingPost) return <p>Cargando...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <Input field="title" label="Título" type="text" value={form.title} onChangeHandler={handleChange} showErrorMessage={!form.title} validationMessage="Requerido" onBlurHandler={() => {}} />
      <Input field="description" label="Descripción" textArea value={form.description} onChangeHandler={handleChange} showErrorMessage={!form.description} validationMessage="Requerido" onBlurHandler={() => {}} />
      <Input field="course" label="Curso" type="text" value={form.course} onChangeHandler={handleChange} showErrorMessage={!form.course} validationMessage="Requerido" onBlurHandler={() => {}} />
      <button type="submit" className="btn btn-warning" disabled={saving}>{saving ? 'Guardando...' : 'Actualizar Publicación'}</button>
    </form>
  );
};
