import axios from "axios";

const BackendUrl = import.meta.env.VITE_BACKEND_URL;

export interface Post {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: string;
  color: string;
  createdAt: string;
}

export const fetchAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${BackendUrl}/api/users/blogs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPostById = async (id: string): Promise<Post> => {
  try {
    const response = await axios.get(`${BackendUrl}/api/users/blog/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};
