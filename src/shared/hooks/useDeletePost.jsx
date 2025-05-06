import { useState } from "react";
import { deletePost as deletePostRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useDeletePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deletePost = async (id) => {
    setIsLoading(true);
    try {
      const response = await deletePostRequest(id);
      if (response.error) {
        const msg = response.e.response?.data?.message || response.e.message;
        toast.error(msg);
        return false;
      }
      toast.success("Publicación eliminada");
      return true;
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { deletePost, isLoading };
};
