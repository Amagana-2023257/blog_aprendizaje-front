import { useState } from "react";
import { deleteComment as deleteCommentRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useDeleteComment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteComment = async (id) => {
    setIsLoading(true);
    try {
      const response = await deleteCommentRequest(id);
      if (response.error) {
        const msg = response.e.response?.data?.message || response.e.message;
        toast.error(msg);
        return false;
      }
      toast.success("Comentario eliminado");
      return true;
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteComment, isLoading };
};
