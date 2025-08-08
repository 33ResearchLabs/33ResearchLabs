import {
  Calendar,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Bookmark,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredPost, posts } from "@/data/posts";
import axios from "axios";
import { toast } from "sonner";
import { ArticleModal } from "@/components/ArticleModel";

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubscribeEmail = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(`${BackendUrl}/api/users/subscribe`, {
        email,
      });
      if (response.status === 200) {
        toast.success("✅ Subscribed successfully");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "❌ Submission failed. Try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "AI":
        return "bg-blue-100 text-blue-800";
      case "Blockchain":
        return "bg-purple-100 text-purple-800";
      case "Cybersecurity":
        return "bg-red-100 text-red-800";
      case "Business":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const categories = ["All", "AI", "Blockchain", "Cybersecurity", "Business"];
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-electric-50/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Deep Tech{" "}
            <span className="bg-gradient-to-r from-electric-600 to-electric-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Thought leadership, technical breakdowns, and founder notes from
            the cutting edge
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-electric-600 hover:bg-electric-700"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "All" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <Badge className="bg-electric-100 text-electric-800 mb-4">
                Featured
              </Badge>
              <h2 className="text-2xl font-bold text-neutral-900">Latest Insights</h2>
            </div>
            <Card className="overflow-hidden border hover:shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-8 flex flex-col justify-center">

                  <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-10 h-10 bg-electric-100 rounded-full flex items-center justify-center text-sm font-medium text-electric-600">
                      {featuredPost.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">{featuredPost.author}</div>
                      <div className="text-sm text-neutral-500">{featuredPost.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>

                  </div>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-electric-600 hover:bg-electric-700 text-white w-fit"
                  >
                    Read Full Article <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Modal */}
      {isModalOpen && (
        <ArticleModal
          title={featuredPost.title}
          author={featuredPost.author}
          role={featuredPost.role}
          date={featuredPost.date}
          image={featuredPost.image}
          fullContent={featuredPost.fullContent}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Posts Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all group overflow-hidden"
            >
              <div
                className={`h-24 bg-gradient-to-r ${post.color} flex items-center justify-between px-6`}
              >
                <post.icon className="h-8 w-8 text-white/90" />
                <div className="text-white/70 text-xs font-mono">
                  {post.category.toUpperCase()}
                </div>
              </div>
              <CardHeader className="pb-4">
                <Badge className={`${getCategoryColor(post.category)} mb-3`}>
                  {post.category}
                </Badge>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-electric-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-600 text-sm">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-electric-100 rounded-full flex items-center justify-center">
                      <span className="text-electric-600 font-medium text-xs">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-sm text-neutral-700">
                      {post.author}
                    </div>
                  </div>
                  <Bookmark className="h-4 w-4 text-neutral-400 hover:text-electric-600" />
                </div>
                <div className="flex items-center space-x-4 text-xs text-neutral-500 mt-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Insights;
