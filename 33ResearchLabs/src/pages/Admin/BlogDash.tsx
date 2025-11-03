import { useState, useEffect } from "react";
import { Plus, X, Edit, Trash2, Eye, Calendar, Image } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-electric-50/20">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">
              Blog Management
            </h2>
            <p className="text-neutral-600 mt-1">
              Manage your blog posts and content
            </p>
          </div>
          <Link to="/admin/newblog">
            <Button className="bg-[#1DA1F2] hover:bg-electric-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create New Blog
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Card */}
        <Card className="mb-6 border-neutral-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-neutral-900">
              <Eye className="h-5 w-5 text-[#1DA1F2]" />
              <span>Blog Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{totalBlogs}</div>
                <p className="text-blue-100 text-sm">Total Blogs</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">
                  {
                    blogs.filter(
                      (blog) =>
                        new Date(blog.createdAt) >
                        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                    ).length
                  }
                </div>
                <p className="text-green-100 text-sm">This Month</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">
                  {
                    blogs.filter(
                      (blog) =>
                        new Date(blog.createdAt) >
                        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                    ).length
                  }
                </div>
                <p className="text-purple-100 text-sm">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Table */}
        <Card className="border-neutral-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-neutral-900">
              <Image className="h-5 w-5 text-[#1DA1F2]" />
              <span>All Blog Posts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-600"></div>
                <span className="ml-2 text-neutral-600">Loading blogs...</span>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-12">
                <Image className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                <p className="text-neutral-500 text-lg">No blogs found</p>
                <p className="text-neutral-400 text-sm mb-4">
                  Create your first blog post to get started
                </p>
                <Link to="/admin/newblog">
                  <Button className="bg-[#1DA1F2] hover:bg-electric-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Blog
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-neutral-200">
                      <TableHead className="font-semibold text-neutral-900">
                        Preview
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Title
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Content Preview
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Created
                      </TableHead>
                      <TableHead className="font-semibold text-neutral-900">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogs.map((blog) => (
                      <TableRow
                        key={blog._id}
                        className="border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer"
                        onClick={() => setSelectedBlog(blog)}
                      >
                        <TableCell className="py-4">
                          <div className="w-16 h-16 rounded-lg overflow-hidden border border-neutral-200">
                            <img
                              src={blog.image || '/placeholder.png'}
                              alt={blog.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.png';
                              }}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <div className="font-medium text-neutral-900 capitalize">
                            {blog.title}
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <div className="text-neutral-600 text-sm line-clamp-2 max-w-xs">
                            {blog.content.substring(0, 100)}...
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <div className="flex items-center space-x-1 text-neutral-600 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedBlog(blog);
                              }}
                              className="border-neutral-300 hover:bg-neutral-100"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Link to={`/admin/blog/editblog/${blog._id}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={(e) => e.stopPropagation()}
                                className="border-amber-300 text-amber-600 hover:bg-amber-50"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(blog._id);
                              }}
                              className="border-red-300 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Modern Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#1DA1F2] text-white p-6 relative">
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                onClick={() => setSelectedBlog(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-bold capitalize pr-12">
                {selectedBlog.title}
              </h3>
              <div className="flex items-center space-x-2 mt-2 text-electric-100">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">
                  Posted on {new Date(selectedBlog.createdAt).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[60vh] p-6">
              <div className="mb-6">
                <img
                  src={selectedBlog.image || '/placeholder.png'}
                  alt="Blog"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.png';
                  }}
                />
              </div>

              <div className="prose max-w-none">
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                  Content
                </h4>
                <div className="text-neutral-700 leading-relaxed bg-neutral-50 p-4 rounded-lg">
                  {selectedBlog.content}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4">
              <div className="flex items-center justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setSelectedBlog(null)}
                  className="border-neutral-300 hover:bg-neutral-100"
                >
                  Close
                </Button>
                <Link to={`/admin/blog/editblog/${selectedBlog._id}`}>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Blog
                  </Button>
                </Link>
                <Button
                  onClick={() => handleDelete(selectedBlog._id)}
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
