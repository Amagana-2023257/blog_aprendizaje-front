// src/components/Posts/DeletePostButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useDeletePost } from '../../shared/hooks/useDeletePost';

export const DeletePostButton = ({ postId, onDeleted }) => {
  const { deletePost, isLoading } = useDeletePost();
  const handleClick = () => deletePost(postId).then(deleted => deleted && onDeleted());

  return (
    <button onClick={handleClick} className="btn btn-danger ms-2" disabled={isLoading}>
      {isLoading ? 'Eliminando...' : 'Eliminar'}
    </button>
  );
};

DeletePostButton.propTypes = {
  postId: PropTypes.string.isRequired,
  onDeleted: PropTypes.func
};

DeletePostButton.defaultProps = { onDeleted: () => {} };