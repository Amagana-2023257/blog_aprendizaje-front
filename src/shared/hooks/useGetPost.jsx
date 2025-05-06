import { useState } from "react";
import { getPostById as getPostByIdRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useGetPost = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = async (id) => {
    setIsLoading(true);
    try {
      const response = await getPostByIdRequest(id);
      if (response.error) throw response.e;
      setPost(response.data.post);
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchPost, post, isLoading };
};
