import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const articleContent = {
    title:
      "The Future of AI Infrastructure: Why Foundation Models Need New Architecture",
    category: "AI",
    author: "33ResearchLabs Team",
    role: "Technical Research",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    content: `In today's rapidly evolving technological landscape, Artificial Intelligence (AI) has become a ubiquitous presence, revolutionizing industries and transforming the way we interact with machines. As AI continues to advance, the need for innovative infrastructure that can support the growing complexity of AI models is becoming increasingly crucial. In this article, we will explore the future of AI infrastructure and why foundation models require new architecture to meet the demands of tomorrow's AI applications.

## The Evolution of AI Infrastructure

Over the past decade, AI has made significant strides in its capabilities, from speech recognition and image classification to natural language processing and autonomous driving. These advancements have been made possible by the development of sophisticated AI models, such as large-scale neural networks like GPT-3 and BERT, which have pushed the boundaries of what AI can achieve.

However, as AI models become more complex and data-intensive, the need for robust infrastructure to support their training and deployment has become increasingly apparent. Traditional AI infrastructure, built on conventional server architectures, is struggling to keep pace with the demands of modern AI workloads, leading to performance bottlenecks and scalability issues.

## The Challenges of Foundation Models

Foundation models, such as GPT-3 and BERT, are pre-trained models that can be fine-tuned for specific tasks, making them incredibly versatile and powerful. However, these models are also incredibly large and resource-intensive, requiring massive amounts of data and computational power to train and deploy effectively.

The sheer size and complexity of foundation models present significant challenges for traditional AI infrastructure. Training these models can take weeks or even months, consuming vast amounts of energy and resources in the process. Additionally, the deployment of these models on a large scale requires scalable infrastructure that can handle the high computational demands of real-time AI applications.

## The Need for New Architecture

To address these challenges, a new generation of AI infrastructure is needed, one that is specifically designed to support the unique requirements of foundation models. This new architecture must be optimized for the parallel processing and distributed computing needed to train and deploy large-scale AI models efficiently.

One approach to achieving this is through the use of specialized hardware, such as Graphics Processing Units (GPUs) and Tensor Processing Units (TPUs), which are specifically designed for AI workloads. These hardware accelerators can significantly speed up the training and deployment of AI models, making them more efficient and cost-effective.

Additionally, innovations in software architecture, such as distributed computing frameworks like Kubernetes and Apache Spark, can help orchestrate the deployment of AI models across multiple servers, enabling seamless scalability and performance optimization.

## Conclusion

As AI continues to advance at a rapid pace, the need for new infrastructure to support the growing demands of foundation models is clear. By investing in innovative hardware and software solutions tailored to the unique requirements of AI workloads, organizations can unlock the full potential of AI and drive future innovation across industries.

## The Role of 33ResearchLabs in Shaping the Future of AI Infrastructure

33ResearchLabs is a leader in developing innovative solutions for AI infrastructure. By leveraging their expertise and cutting-edge technology, they are revolutionizing the way foundation models are designed and implemented. Through continuous research and development, 33ResearchLabs is paving the way for the future of AI infrastructure.`,
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-neutral-50 to-electric-50/30 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <Button
            variant="outline"
            onClick={() => navigate("/insights")}
            className="mb-6 hover:bg-electric-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Button> */}

          <div className="mb-6 pt-8">
            <Badge
              className={`${getCategoryColor(articleContent.category)} mb-4`}
            >
              {articleContent.category}
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              {articleContent.title}
            </h1>
          </div>

          {/* Author Info */}
          <div className="flex items-center space-x-4 mb-6 py-10">
            <div className="w-12 h-12 bg-electric-100 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-electric-600" />
            </div>
            <div>
              <div className="font-medium text-neutral-900 ">
                {articleContent.author}
              </div>
              <div className="text-sm text-neutral-500">
                {articleContent.role}
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex items-center space-x-6 text-sm text-neutral-500 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{articleContent.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{articleContent.readTime}</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <img
          src={"/ai.jpg"}
          alt={articleContent.title}
          className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
        />
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
