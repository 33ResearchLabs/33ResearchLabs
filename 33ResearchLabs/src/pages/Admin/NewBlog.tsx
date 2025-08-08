import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  //   Backend Url
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessage("Title and content are required.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) {
        formData.append("image", image); // image should be of type File
      }

      const res = await axios.post(
        `${BackendUrl}/api/admin/dashboard/blog`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        setMessage("Blog created successfully!");
        setTitle("");
        setContent("");
        navigate("/admin/blog");
      } else {
        setMessage("Failed to create blog.");
      }
    } catch (err) {
      setMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-[#1e293b] border border-[#334155]">
          <CardHeader>
            <h1 className="text-2xl font-bold text-white">Create New Blog</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Content
                </label>
                <textarea
                  value={content}
                  placeholder="Enter Content"
                  onChange={(e) => setContent(e.target.value)}
                  rows={8}
                  className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image</label>
                <input
                  type="file"
                  name="image"
                  id="file"
                  className="w-full"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 p-2 hover:bg-orange-600 text-white w-full"
                disabled={loading}
              >
                {loading ? "Publishing..." : "Publish Blog"}
              </button>
              {message && (
                <p className="text-sm mt-2 text-center text-orange-400">
                  {message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
