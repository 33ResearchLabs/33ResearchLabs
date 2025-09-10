import { useEffect, useState } from "react";
import axios from "axios";
import { FeaturedPostCard } from "@/components/feturedPost";
import { Link } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  content: string;
  category?: string;
  createdAt: string;
  image?: string;
  author?: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(false);

  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Blog[]>(
          `${BackendUrl}/api/admin/dashboard/blogs`,
          {
            withCredentials: true,
          }
        );
        const allBlogs = res.data;

        setBlogs(allBlogs);
        setFilteredBlogs(allBlogs);

        const uniqueCategories = [
          ...new Set(allBlogs.map((b) => b.category || "Uncategorized")),
        ];
        setCategories(["All", ...uniqueCategories]);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [BackendUrl]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter(
          (b) => (b.category || "Uncategorized") === selectedCategory
        )
      );
    }
  }, [selectedCategory, blogs]);

  return (
    <div className="box-border min-h-screen  text-white mt-16">
      {/* Banner */}
      <h1 className="text-3xl md:text-4xl font-bold text-electric-600 mb-4 pt-5 text-center">
        Our Latest Blogs
      </h1>
      <FeaturedPostCard />
      {/* Blog Listing */}
      <div className="min-h-screen  text-white px-4 py-10">
        <div className=" mx-auto">
          {/* Category Filter */}
          <div className="mb-6 flex justify-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#1e293b] text-white border border-[#334155] p-2 rounded-md focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="text-center text-gray-300">Loading blogs...</div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center text-gray-400">No blogs found.</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {filteredBlogs.map((blog) => (
                <Link
                  to={`/blog/${blog._id}`}
                  state={blog}
                  key={blog._id}
                  className="h-full"
                >
                  <div className="h-full min-h-[22rem] bg-[#1e293b] border border-[#334155] rounded-xl p-4 flex flex-col md:flex-row gap-4 shadow-md hover:shadow-orange-500/10 transition-shadow">
                    {/* Image */}
                    <div className="md:w-1/2 h-48 md:h-auto overflow-hidden">
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                          blog.image
                        }`}
                        alt={blog.title}
                        className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-3 capitalize">
                          {blog.title}
                        </h2>
                        <p className="text-gray-300 text-sm mb-4">
                          {blog.content.length > 250
                            ? blog.content.slice(0, 250) + "..."
                            : blog.content}
                        </p>
                      </div>

                      <div className="text-sm text-orange-400 font-semibold mt-auto">
                        By {blog.author || "ReputationOneAI"}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
