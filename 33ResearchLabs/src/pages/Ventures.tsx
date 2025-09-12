import {
  ExternalLink,
  ArrowUpRight,
  Calendar,
  Users,
  DollarSign,
  Shield,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Ventures = () => {
  const ventures = [
    {
      name: "QuantumGuard",
      description:
        "Next-generation quantum-resistant encryption for enterprise security.",
      status: "Series A",
      category: "Cybersecurity",
      metrics: { users: "50K+", revenue: "$2M ARR", funding: "$15M" },
      icon: Shield,
      color: "from-red-400 to-red-600",
    },
    {
      name: "ChainFlow",
      description:
        "Multi-chain infrastructure for seamless DeFi protocol integration.",
      status: "Live",
      category: "Blockchain",
      metrics: { users: "25K+", tvl: "$100M+", transactions: "1M+" },
      icon: Layers,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "NeuralOps",
      description:
        "MLOps platform for enterprise AI deployment and monitoring.",
      status: "Beta",
      category: "AI",
      metrics: { users: "5K+", models: "10K+", uptime: "99.9%" },
      icon: Cpu,
      color: "from-electric-400 to-electric-600",
    },
    {
      name: "SecureVault",
      description: "Zero-knowledge proof system for private data verification.",
      status: "Development",
      category: "Cybersecurity",
      metrics: { partnerships: "12", pilot: "3", patents: "5" },
      icon: Zap,
      color: "from-green-400 to-green-600",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800";
      case "Series A":
        return "bg-electric-100 text-[#1DA1F2]";
      case "Beta":
        return "bg-yellow-100 text-yellow-800";
      case "Development":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-electric-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Our{" "}
              <span className="bg-[#1DA1F2] bg-clip-text text-transparent">
                Ventures
              </span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              In-house projects and products that define the future of deep tech
            </p>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              We don't just advise—we build. Our venture portfolio showcases
              breakthrough technologies in AI, blockchain, and cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#1DA1F2] mb-2">
                12
              </div>
              <div className="text-neutral-600">Active Ventures</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#1DA1F2] mb-2">
                $150M+
              </div>
              <div className="text-neutral-600">Total Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#1DA1F2] mb-2">
                500K+
              </div>
              <div className="text-neutral-600">Combined Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#1DA1F2] mb-2">
                8
              </div>
              <div className="text-neutral-600">Successful Exits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ventures.map((venture, index) => (
              <Card
                key={venture.name}
                className="overflow-hidden border-neutral-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Smaller visual representation */}
                <div
                  className={`h-32 sm:h-36 md:h-40 bg-gradient-to-br ${venture.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <venture.icon className="h-12 w-12 sm:h-14 sm:w-14 text-white/90" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  <div className="absolute top-3 left-3">
                    <div className="w-2.5 h-2.5 bg-white/80 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-white/70 text-xs font-mono">
                    {venture.category.toUpperCase()}
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getStatusColor(venture.status)}>
                      {venture.status}
                    </Badge>
                    <Badge variant="outline">{venture.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {venture.name}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {venture.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(venture.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-semibold text-neutral-900">
                          {value}
                        </div>
                        <div className="text-sm text-neutral-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      disabled
                      size="sm"
                      className=" bg-[#1DA1F2] hover:bg-electric-700 text-white"
                    >
                      Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Our <span className="text-[#1DA1F2]">Investment</span>{" "}
                Philosophy
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We invest in problems that matter. Each venture addresses
                fundamental challenges in digital infrastructure, with potential
                for global impact.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="h-4 w-4 text-[#1DA1F2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Long-term Thinking
                    </h3>
                    <p className="text-neutral-600">
                      Building infrastructure that lasts decades, not quarters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-[#1DA1F2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Founder-Led
                    </h3>
                    <p className="text-neutral-600">
                      We back exceptional founders solving hard problems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="h-4 w-4 text-[#1DA1F2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Value Creation
                    </h3>
                    <p className="text-neutral-600">
                      Focus on sustainable business models and real utility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-electric-100 to-neutral-100 rounded-2xl p-8">
                <div className="h-full bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#1DA1F2] mb-2">
                      3-7 years
                    </div>
                    <div className="text-neutral-600 mb-4">
                      Average hold period
                    </div>
                    <div className="text-2xl font-bold text-neutral-900 mb-2">
                      12x
                    </div>
                    <div className="text-neutral-600">
                      Average return multiple
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-electric-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Have an Idea? Let's Build Together.
          </h2>
          <p className="text-xl text-electric-100 mb-8 max-w-2xl mx-auto">
            We're always looking for the next breakthrough. Share your vision
            with us.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center bg-white text-gray-700 font-semibold px-5 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-200"
          >
            Submit Your Proposal
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ventures;
