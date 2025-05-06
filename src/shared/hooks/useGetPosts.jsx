import { useState } from "react";
import { getPosts as getPostsRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async (course) => {
    setIsLoading(true);
    try {
      const response = await getPostsRequest(course);
      if (response.error) throw response.e;
      setPosts(response.data.posts);
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchPosts, posts, isLoading };
};
