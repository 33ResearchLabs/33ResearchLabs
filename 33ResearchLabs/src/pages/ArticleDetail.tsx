import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { findPostBySlug, featuredPost } from "@/data/posts";
import ShareButton from "@/components/ShareButton";
import { Helmet } from "react-helmet";
import {
  generateCanonicalUrl,
  generateRobotsContent,
  ROBOTS_CONFIG,
} from "@/utils/seo";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the article by slug from URL params
  const post = findPostBySlug(id || "");

  // If no post found, show 404 or redirect
  if (!post) {
    navigate("/insights");
    return null;
  }

  // Prepare article content (handle both featured post and regular posts)
  const articleContent = {
    title: post.title,
    category: post.category,
    author: post.author,
    role: (post as any).role || "Technical Research",
    date: post.date,
    readTime: post.readTime,
    image: post.image || "/ai.jpg",
    content: `${post.excerpt}

## Deep Dive Analysis

This article explores the cutting-edge developments and implications in ${post.category.toLowerCase()} technology. Our research team has analyzed the latest trends and emerging patterns to provide comprehensive insights into this rapidly evolving field.

## Key Insights and Technical Details

The technology landscape continues to evolve at an unprecedented pace, with new innovations emerging regularly. Understanding these developments is crucial for organizations looking to stay competitive and leverage the latest advancements effectively.

## Implementation Strategies

Organizations seeking to implement these technologies should consider various factors including scalability, security, and long-term viability. A strategic approach ensures successful adoption and maximum return on investment.

## Future Implications

Looking ahead, these developments will likely have far-reaching implications across multiple industries. Companies that position themselves early will be best equipped to capitalize on emerging opportunities.

## The Role of 33ResearchLabs

At 33ResearchLabs, we continue to lead innovation in this space through cutting-edge research and development. Our team of experts works tirelessly to identify emerging trends and develop solutions that drive the future of technology.

## Conclusion

The insights presented in this analysis highlight the importance of staying informed about technological developments. As the landscape continues to evolve, organizations must remain agile and forward-thinking to succeed in an increasingly competitive environment.`,
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI":
        return "bg-electric-100 text-electric-800";
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

  return (
    <div className=" bg-white">
      <Helmet>
        <title>{articleContent.title} – 33 Research Labs</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`${post.category}, 33 Research Labs, AI, Web3, Cybersecurity, ${post.author}`}
        />
        <meta name="author" content={post.author} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        <meta property="og:title" content={articleContent.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={articleContent.image} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleContent.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={articleContent.image} />
        <meta
          name="robots"
          content={generateRobotsContent(ROBOTS_CONFIG.CONTENT)}
        />
        <link
          rel="canonical"
          href={generateCanonicalUrl(`/insights/article/${id}`)}
        />
      </Helmet>
      {/* Header */}
      <div className="bg-gradient-to-br from-neutral-50 to-electric-50/30 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div>
                <Badge
                  className={`${getCategoryColor(
                    articleContent.category
                  )} mb-4`}
                >
                  {articleContent.category}
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
                  {articleContent.title}
                </h1>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-electric-600" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">
                    {articleContent.author}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {articleContent.role}
                  </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center space-x-6 text-sm text-neutral-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{articleContent.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{articleContent.readTime}</span>
                </div>
                <ShareButton
                  title={articleContent.title}
                  description={post.excerpt}
                  className="ml-auto"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:pl-8">
              <img
                src={articleContent.image}
                alt={articleContent.title}
                className="w-full h-64 lg:h-70 mt-10 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-p:leading-relaxed">
          {articleContent.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-neutral-900 mt-12 mb-6"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Share Section at End of Article */}
        <div className="flex items-center justify-between pt-8 mt-12 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 font-medium">
              Share this article:
            </span>
            <ShareButton
              title={articleContent.title}
              description={post.excerpt}
              variant="outline"
              size="default"
            />
          </div>

          {/* Back to Insights Link */}
          <Button
            variant="ghost"
            onClick={() => navigate("/insights")}
            className="text-electric-600 hover:text-electric-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Button>
        </div>
      </article>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-electric-600 to-electric-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your AI Infrastructure?
          </h3>
          <p className="text-electric-100 mb-8 max-w-2xl mx-auto">
            Let 33ResearchLabs help you build the foundation for next-generation
            AI applications.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate("/contact-us")}
            className="bg-white text-electric-600 hover:bg-electric-50"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
