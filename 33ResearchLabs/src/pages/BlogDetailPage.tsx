import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
interface Blog {
  _id: string;
  title: string;
  content: string;
  category?: string;
  createdAt: string;
  image?: string;
  author?: string;
  description?: string;
}
const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  useEffect(() => {
    // Try getting blog from location.state
    const stateBlog = (location.state as { blog?: Blog })?.blog;

    if (stateBlog) {
      setBlog(stateBlog);
      setLoading(false);
    } else {
      // If not found in state, fetch from backend
      const fetchBlog = async () => {
        try {
          const res = await axios.get(`${BackendUrl}/api/users/blog/${id}`);
          setBlog(res.data);
        } catch (err) {
          console.error("Error fetching blog:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchBlog();
    }
  }, [id, location.state, BackendUrl]);

  if (loading)
    return <div className="text-white mt-20 text-center">Loading...</div>;
  if (!blog)
    return <div className="text-white mt-20 text-center">Blog not found</div>;

  return (
    <div className="min-h-screen px-6 py-12 text-white max-w-5xl h-full mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-2">
        By {blog.author || "ReputationOneAI"}
      </p>
      {blog.image && (
        <div className="flex flex-col md:flex-row items-start gap-6 my-6">
          <img
            src={`${BackendUrl}/uploads/${blog.image}`}
            alt={blog.title}
            className="w-full md:w-1/2 rounded-tl-2xl rounded-br-2xl shadow-lg object-cover"
          />
          <div className="md:w-1/2 flex flex-col justify-start text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
              {blog.title}
            </h1>
            {/* Optional: more content */}
            <p className="text-muted-foreground">{blog.description}</p>
          </div>
        </div>
      )}

      <div className="text-lg leading-7 text-gray-700 whitespace-pre-wrap">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetailPage;
