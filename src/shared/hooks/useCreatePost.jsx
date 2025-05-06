import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost as createPostRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createPost = async ({ title, description, course }) => {
    setIsLoading(true);
    try {
      const response = await createPostRequest({ title, description, course });
      if (response.error) {
        const msg = response.e.response?.data?.message || response.e.message;
        toast.error(msg);
        return;
      }
      toast.success("Publicación creada");
      navigate("/posts");
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createPost, isLoading };
};
