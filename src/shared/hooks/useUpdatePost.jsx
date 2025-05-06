import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePost as updatePostRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useUpdatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updatePost = async (id, { title, description, course }) => {
    setIsLoading(true);
    try {
      const response = await updatePostRequest(id, { title, description, course });
      if (response.error) {
        const msg = response.e.response?.data?.message || response.e.message;
        toast.error(msg);
        return;
      }
      toast.success("Publicación actualizada");
      navigate(`/posts/${id}`);
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { updatePost, isLoading };
};
