// src/services/api.jsx
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/blog/v1",
  timeout: 5000,
  httpsAgent: false,
});

// Añade el token en cada petición si existe
apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);



// ── Posts ──────────────────────────────────────────────────────────────────────
export const getPosts = async (course) => {
  try {
    const params = course ? { course } : {};
    return await apiClient.get("/posts", { params });
  } catch (e) {
    checkResponseStatus(e);
    return { error: true, e };
  }
};

export const getPostById = async (id) => {
  try {
    return await apiClient.get(`/posts/${id}`);
  } catch (e) {
    checkResponseStatus(e);
    return { error: true, e };
  }
};

export const createPost = async (data) => {
  try {
    return await apiClient.post("/posts", data);
  } catch (e) {
    checkResponseStatus(e);
    return { error: true, e };
  }
};

export const updatePost = async (id, data) => {
  try {
    return await apiClient.put(`/posts/${id}`, data);
  } catch (e) {
    checkResponseStatus(e);
    return { error: true, e };
  }
};

export const deletePost = async (id) => {
  try {
    return await apiClient.delete(`/posts/${id}`);
  } catch (e) {
    checkResponseStatus(e);
    return { error: true, e };
  }
};

// ── Comments ───────────────────────────────────────────────────────────────────
export const getComments = async (postId) => {
  try {
    return await apiClient.get(`/posts/${postId}/comments`);
  } catch (e) {
    checkResponseStatus(e);
    return { error: true, e };
  }
};

export const createComment = async (postId, data) => {
  try {
    return await apiClient.post(`/posts/${postId}/comments`, data);
  } catch (e) {
    checkResponseStatus(e);
    return { error: true, e };
  }
};

export const deleteComment = async (id) => {
  try {
    return await apiClient.delete(`/comments/${id}`);
  } catch (e) {
    checkResponseStatus(e);
    return { error: true, e };
  }
};
