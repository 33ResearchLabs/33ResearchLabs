import {
  Calendar,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Users,
  Bookmark,
  Code,
  Brain,
  Shield as ShieldIcon,
  Layers as LayersIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredPost, posts, generateSlug } from "@/data/posts";
import axios from "axios";
import { toast } from "sonner";
import { Helmet } from "react-helmet";
import {
  generateCanonicalUrl,
  generateRobotsContent,
  ROBOTS_CONFIG,
} from "@/utils/seo";

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error?.response?.data?.message || "❌ Submission failed. Try again."
      );
      console.error("❌ Axios error:", error);
    }
  };

  const categories = ["All", "AI", "Blockchain", "Cybersecurity", "Business"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI":
        return "bg-electric-100 text-[#1DA1F2]";
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
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-600"></div>
        <div className="text-center mt-4">loading</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Insights – 33 Research Labs | AI, Web3 & Cybersecurity Thought
          Leadership
        </title>
        <meta
          name="description"
          content="Deep tech insights from 33 Research Labs. Thought leadership, technical breakdowns, and founder notes from the cutting edge of AI, Web3, and cybersecurity."
        />
        <meta
          name="keywords"
          content="33 Research Labs insights, AI thought leadership, Web3 insights, cybersecurity trends, blockchain analysis, technical articles"
        />
        <meta
          name="robots"
          content={generateRobotsContent(ROBOTS_CONFIG.CONTENT)}
        />
        <link rel="canonical" href={generateCanonicalUrl("/insights")} />
      </Helmet>
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-electric-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Deep Tech{" "}
              <span className="bg-[#1DA1F2] bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Thought leadership, technical breakdowns, and founder notes from
              the cutting edge
            </p>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              We share our learnings from building the future—technical
              deep-dives, market analysis, and honest perspectives on what's
              working in deep tech.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-[#1DA1F2] hover:bg-electric-700"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory == "All" ? (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-electric-100 text-[#1DA1F2] mb-4">
                Featured
              </Badge>
              <h2 className="text-2xl font-bold text-neutral-900">
                Latest Insights
              </h2>
            </div>
            <Card className="overflow-hidden border-neutral-200 hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={featuredPost.image}
                  alt="ijidc"
                  className="w-[450px] flex items-center justify-center my-auto rounded-sm pl-3"
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge
                    className={`${getCategoryColor(
                      featuredPost.category
                    )} mb-4 w-fit`}
                  >
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-10 h-10 bg-electric-100 rounded-full flex items-center justify-center">
                      <span className="text-[#1DA1F2] font-medium text-sm">
                        {featuredPost.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">
                        {featuredPost.author}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {featuredPost.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button
                    className="bg-[#1DA1F2] hover:bg-electric-700 text-white w-fit"
                    onClick={() =>
                      navigate(
                        `/insights/article/${generateSlug(featuredPost.title)}`
                      )
                    }
                  >
                    Read More Article <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      ) : null}

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={index}
                className="border-neutral-200 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() =>
                  navigate(`/insights/article/${generateSlug(post.title)}`)
                }
              >
                <div
                  className={`h-24 bg-gradient-to-r ${post.color} flex items-center justify-between px-6 relative overflow-hidden`}
                >
                  <post.icon />
                  <div className="text-white/70 text-xs font-mono">
                    {post.category.toUpperCase()}
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <Badge
                    className={`${getCategoryColor(post.category)} mb-3 w-fit`}
                  >
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-[#1DA1F2] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-4 bg-electric-100 rounded-full flex items-center justify-center">
                        <span className="text-[#1DA1F2] font-medium text-xs">
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
                    <Bookmark className="h-4 w-4 text-neutral-400 hover:text-[#1DA1F2] transition-colors duration-200" />
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-neutral-500 mt-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-electric-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-[#1DA1F2]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Get weekly insights on AI, blockchain, and cybersecurity delivered
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent"
              />
              <Button
                onClick={handleSubscribeEmail}
                className="bg-[#1DA1F2] hover:bg-electric-700 text-white py-6"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              Join 10,000+ founders and engineers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1DA1F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-electric-100">Technical Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-electric-100">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-electric-100">Expert Contributors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
