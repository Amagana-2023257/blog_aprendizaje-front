// src/components/Comments/DeleteCommentButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteComment } from '../../shared/hooks/useDeleteComment';

export const DeleteCommentButton = ({ commentId, onDeleted }) => {
  const { deleteComment, isLoading } = useDeleteComment();
  const handleClick = () => deleteComment(commentId).then(deleted => deleted && onDeleted());

  return (
    <button onClick={handleClick} className="btn btn-sm btn-outline-danger ms-2" disabled={isLoading}>
      {isLoading ? '...' : 'Eliminar'}
    </button>
  );
};

DeleteCommentButton.propTypes = {
  commentId: PropTypes.string.isRequired,
  onDeleted: PropTypes.func
};

DeleteCommentButton.defaultProps = { onDeleted: () => {} };
