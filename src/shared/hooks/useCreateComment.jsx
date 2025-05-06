import { useState } from "react";
import { createComment as createCommentRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useCreateComment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createComment = async (postId, { name, content }) => {
    setIsLoading(true);
    try {
      const response = await createCommentRequest(postId, { name, content });
      if (response.error) {
        const msg = response.e.response?.data?.message || response.e.message;
        toast.error(msg);
        return null;
      }
      toast.success("Comentario agregado");
      return response.data.comment;
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { createComment, isLoading };
};
