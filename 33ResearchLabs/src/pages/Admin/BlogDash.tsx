import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

interface Blog {
  _id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
}

export const BlogDashboard = () => {
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  async function fetchBlogs() {
    try {
      const response = await axios.get(
        `${BackendUrl}/api/admin/dashboard/blogs`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        setBlogs(response.data);
        setTotalBlogs(response.data.length);
      } else {
        toast.error("Dashboard stat failed. Please try again.");
      }
    } catch (error) {
      toast.error("Dashboard stat failed. Please try again.");
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${BackendUrl}/api/admin/dashboard/blog/${id}`, {
        withCredentials: true,
      });
      toast.success("Blog deleted successfully");
      setSelectedBlog(null);
      fetchBlogs(); // Refresh list
    } catch (err) {
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Blog Dashboard</h2>
        <Link
          to="/admin/newblog"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          <Plus size={18} />
          Create New Blog
        </Link>
      </div>

      <div className="border border-gray-700 p-6 rounded-xl shadow-md max-w-5xl w-full">
        <div className="m-4 bg-blue-500 shadow-md hover:shadow-black w-fit p-4 rounded-md">
          <h3 className="text-lg text-white mb-4">Total Blogs: {totalBlogs}</h3>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-muted-foreground">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                onClick={() => setSelectedBlog(blog)}
                className="cursor-pointer p-4 rounded-lg shadow-md hover:shadow-blue-500 transition-all border border-gray-600"
              >
                <h4 className="text-gray-900 text-lg font-medium mb-2 capitalize">
                  {blog.title}
                </h4>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {blog.content}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <img
                  src={`${BackendUrl}/uploads/${blog.image}`}
                  alt="image"
                  className="mt-2 max-h-40 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedBlog(null)}
            >
              <X />
            </button>

            <h3 className="text-2xl text-white font-semibold mb-2 capitalize">
              {selectedBlog.title}
            </h3>
            <p className="text-gray-300 mb-4">{selectedBlog.content}</p>
            <img
              src={`${BackendUrl}/uploads/${selectedBlog.image}`}
              alt="Blog"
              className="w-full rounded-md mb-4"
            />
            <p className="text-xs text-gray-500 mb-6">
              Posted on: {new Date(selectedBlog.createdAt).toLocaleString()}
            </p>

            <div className="flex gap-4">
              <Link
                to={`/admin/blog/editblog/${selectedBlog._id}`}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(selectedBlog._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
