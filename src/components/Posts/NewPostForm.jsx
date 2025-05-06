// src/components/Posts/NewPostForm.jsx
import React, { useState } from 'react';
import { useCreatePost } from '../../shared/hooks/useCreatePost';
import { Input } from '../UI/Input';
import { useNavigate } from 'react-router-dom';

export const NewPostForm = () => {
  const { createPost, isLoading } = useCreatePost();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '', course: '' });

  const handleChange = (val, field) => setForm(f => ({ ...f, [field]: val }));
  const handleSubmit = e => {
    e.preventDefault();
    createPost(form).then(success => success && navigate('/posts'));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <Input field="title" label="Título" type="text" value={form.title} onChangeHandler={handleChange} showErrorMessage={!form.title} validationMessage="Requerido" onBlurHandler={() => {}} />
      <Input field="description" label="Descripción" textArea value={form.description} onChangeHandler={handleChange} showErrorMessage={!form.description} validationMessage="Requerido" onBlurHandler={() => {}} />
      <Input field="course" label="Curso" type="text" value={form.course} onChangeHandler={handleChange} showErrorMessage={!form.course} validationMessage="Requerido" onBlurHandler={() => {}} />
      <button type="submit" className="btn btn-success" disabled={isLoading}> {isLoading ? 'Guardando...' : 'Crear Publicación'} </button>
    </form>
  );
};