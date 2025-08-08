import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    image: null,
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/blog/${id}`,
          {
            withCredentials: true,
          }
        );
        setBlog(res.data);
        setForm({
          title: res.data.title,
          content: res.data.content,
          author: res.data.author || "",
          image: null,
        });
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("author", form.author);
      if (form.image) {
        formData.append("image", form.image);
      }

      await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/dashboard/blog/${id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Blog updated successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update blog.");
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500 py-10">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="text-center text-red-500 py-10">Blog not found</div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <div className="max-w-3xl mx-auto border border-gray-200 bg-white rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-500">Edit Blog</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-600">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">Content</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={6}
              required
              className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">Author</label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">Image</label>

            {!form.image && blog.image && (
              <div className="mb-2">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${blog.image}`}
                  alt="Current blog"
                  className="h-32 object-cover rounded-md border border-gray-300"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Current image. Upload a new one only if you want to change it.
                </p>
              </div>
            )}

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="text-sm text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};
