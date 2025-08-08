import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${BackendUrl}/api/users/blog/${id}`,

        );
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id, BackendUrl]);

  if (loading)
    return <div className="text-white mt-20 text-center">Loading...</div>;
  if (!blog)
    return <div className="text-white mt-20 text-center">Blog not found</div>;

  return (
    <div className="min-h-screen px-6 py-12 text-black max-w-5xl h-full mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-2">
        By {blog.author || "33Research Labs"}
      </p>
      {blog.image && (
        <div className="flex flex-col md:flex-row items-start gap-6 my-6">
          <img
            src={`${BackendUrl}/uploads/${blog.image}`}
            alt={blog.title}
            className="w-full md:w-full rounded-tl-2xl rounded-br-2xl shadow-lg object-cover"
          />
          <div className="md:w-1/2 flex flex-col justify-start text-left">

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
