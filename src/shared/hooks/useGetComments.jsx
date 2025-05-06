import { useState } from "react";
import { getComments as getCommentsRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useGetComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComments = async (postId) => {
    setIsLoading(true);
    try {
      const response = await getCommentsRequest(postId);
      if (response.error) throw response.e;
      setComments(response.data.comments);
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchComments, comments, isLoading };
};
