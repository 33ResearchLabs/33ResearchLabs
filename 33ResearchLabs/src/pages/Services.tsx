import {
  Code,
  Shield,
  Zap,
  CheckCircle,
  ArrowUpRight,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import CoreServices from "@/components/CoreService";
import { useState } from "react";
import ScheduleModal from "@/components/ScheduleModal";
import { Helmet } from "react-helmet";
import {
  generateCanonicalUrl,
  generateRobotsContent,
  ROBOTS_CONFIG,
} from "@/utils/seo";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Code,
      title: "MVP to Production",
      description:
        "From prototype to scalable product in 12-16 weeks. Full-stack development with enterprise-grade architecture.",
      features: [
        "Technical architecture & design",
        "Full-stack development",
        "DevOps & deployment",
        "Performance optimization",
      ],
      timeline: "12-16 weeks",
      investment: "$150K - $500K",
    },
    {
      icon: Shield,
      title: "Security Audits",
      description:
        "Comprehensive cybersecurity assessments for Web3 protocols, smart contracts, and enterprise systems.",
      features: [
        "Smart contract audits",
        "Penetration testing",
        "Architecture review",
        "Compliance certification",
      ],
      timeline: "4-8 weeks",
      investment: "$50K - $200K",
    },
    {
      icon: Zap,
      title: "AI Implementation",
      description:
        "Custom AI solutions from machine learning models to LLM integration and autonomous systems.",
      features: [
        "Model development & training",
        "LLM integration",
        "MLOps infrastructure",
        "AI strategy consulting",
      ],
      timeline: "8-20 weeks",
      investment: "$100K - $750K",
    },
  ];

  const ourExpertise = [
    {
      company: "33 Research Labs",
      mission:
        "We combine cutting-edge research, technical expertise, and market insight to deliver services that drive sustainable impact. From blockchain protocols to AI-driven insights, we support innovators at every stage.",
      services: [
        {
          title: "Blockchain Protocol & Infrastructure Development",
          description:
            "We design and build high-performance, secure, and scalable blockchain protocols. Whether it’s a Layer-1, Layer-2 network, or side-chain architecture, our engineers craft resilient infrastructures optimized for throughput, decentralization, and interoperability.",
        },
        {
          title: "Smart Contract Design & Audits",
          description:
            "Creating robust, trustworthy smart contracts is essential. We develop custom smart contracts tailored to your project (DeFi, NFTs, tokenomics, etc.), and provide thorough auditing services—identifying vulnerabilities, optimizing gas, and ensuring compliance.",
        },
        {
          title: "AI‑Driven On‑Chain Intelligence & Analytics",
          description:
            "Leverage the power of artificial intelligence to extract real insights from on-chain data. We build systems that analyze transaction flows, user behavior, network health, and market signals—helping you make data‑backed strategic decisions faster.",
        },
        {
          title: "Tokenomics Strategy & Token Design",
          description:
            "A token is more than just a symbol. We help you design token models that align incentives, sustain community engagement, and ensure long‑term project health. This includes supply mechanisms, vesting schedules, governance dynamics, and economic simulations.",
        },
        {
          title: "Decentralized Application (dApp) Development",
          description:
            "From back‑end protocol logic to front‑end user interfaces, we build full‑stack dApps that are user friendly, secure, and performant. Wallet integrations, cross‑chain bridges, UX/UI design—everything needed to deliver seamless user experiences.",
        },
        {
          title: "Web3 Go‑to‑Market & Growth Advisory",
          description:
            "Launch with impact. We partner with you to create strategies for product positioning, community growth, influencer partnerships, and market entry (exchanges, listings, etc.). Our goal is to connect your innovation to its audience.",
        },
        {
          title: "Security, Compliance, & Risk Management",
          description:
            "Navigating the technical & regulatory risks in crypto and AI domains takes expertise. We audit for security vulnerabilities, assist with regulatory compliance (where applicable), conduct penetration testing, and build frameworks to manage risk proactively.",
        },
        {
          title: "Research & Innovation Lab",
          description:
            "33 Research Labs is not just about immediate launches—we invest in long‑term research. This includes prototyping new protocols, exploring quantum resistance, cryptography, AI/ML in decentralized settings, benchmarking emerging blockchains, and advising on future trends.",
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Deep dive into your vision, technical requirements, and market positioning.",
    },
    {
      step: "02",
      title: "Architecture",
      description:
        "Design scalable, secure systems that grow with your business.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Rapid, iterative development with weekly demos and feedback loops.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "Production deployment with monitoring, support, and optimization.",
    },
  ];

  const caseStudies = [
    {
      company: "DeFi Protocol",
      challenge: "Needed to launch cross-chain yield farming platform",
      solution:
        "Built multi-chain smart contracts with advanced security features",
      result: "$50M TVL in first quarter",
      category: "Blockchain",
    },
    {
      company: "Enterprise SaaS",
      challenge: "Required AI-powered fraud detection system",
      solution: "Developed ML pipeline with real-time anomaly detection",
      result: "99.7% accuracy, $2M fraud prevented monthly",
      category: "AI",
    },
    {
      company: "Fintech Startup",
      challenge: "Needed SOC 2 compliance for Series A",
      solution: "Implemented zero-trust architecture and security protocols",
      result: "SOC 2 Type II certification in 12 weeks",
      category: "Security",
    },
  ];

  const Content = [
    {
      title: "1. Research as a Service (RaaS)",
      description:
        "Stay ahead of the curve with custom-tailored research reports and market analysis. Our RaaS offering provides you with ongoing insights into the sectors and technologies that matter most to your organization.",
      points: [
        "Custom Research Reports: Deep dives into specific protocols, ecosystems, or emerging technological primitives (e.g., ZK-tech, DeFi derivatives, DePIN).",
        "Market & Competitive Analysis: Comprehensive mapping of specific market segments, identifying key players, opportunities, and strategic threats.",
        "Technology Trend Briefings: Regular, high-level briefings for executives and investment teams on the most important trends shaping the future of Web3.",
      ],
    },
    {
      title: "2. Technical Due Diligence & Protocol Audits",
      description:
        "For venture funds and investors, we provide uncompromising technical due diligence that goes far beyond a surface-level review. We stress-test the fundamental architecture, security assumptions, and economic models of potential investments.",
      points: [
        "Protocol Architecture Review: In-depth analysis of a project's whitepaper, technical documentation, and core design principles.",
        "Cryptoeconomic Analysis: Assessment of tokenomics, incentive structures, and long-term economic viability.",
        "Smart Contract & Security Review: High-level code review and security analysis to identify potential vulnerabilities and architectural risks (Note: This is not a substitute for a full, formal security audit).",
      ],
    },
    {
      title: "3. Protocol Design & GTM Advisory",
      description:
        "For founders and development teams, we act as a strategic partner, providing expert guidance from ideation to launch and beyond. We help you design robust, secure, and scalable systems poised for long-term success.",
      points: [
        "Mechanism & Protocol Design: Collaborative workshops and advisory on designing core protocol mechanics, consensus algorithms, and incentive systems.",
        "Token Economy Design: Crafting sustainable and effective token models that align network participants and drive long-term value.",
        "Go-to-Market Strategy: Strategic guidance on developer relations, community building, and navigating the Web3 ecosystem to achieve product-market fit.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Services – 33 Research Labs | AI, Web3 & Cybersecurity Development
        </title>
        <meta
          name="description"
          content="Transform your ideas into production-ready solutions with 33 Research Labs. MVP development, security audits, AI implementation, and Web3 infrastructure services."
        />
        <meta
          name="keywords"
          content="33 Research Labs services, AI development, Web3 development, cybersecurity audits, MVP development, smart contract audits, blockchain development"
        />
        <meta
          name="robots"
          content={generateRobotsContent(ROBOTS_CONFIG.INDEX)}
        />
        <link rel="canonical" href={generateCanonicalUrl("/services")} />
      </Helmet>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 tracking-[-0.02em] mb-6">
              Deep Tech{" "}
              <span className="text-zinc-400">Consulting</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 mb-6 leading-relaxed">
              From MVP builds to cybersecurity audits—we turn complex problems
              into scalable solutions
            </p>
            <p className="text-[15px] text-zinc-400 max-w-2xl mx-auto">
              Partner with our team of senior engineers, security experts, and
              AI researchers to build technology that defines tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* our approch */}
      <CoreServices />

      {/* Our Expertise  */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We combine cutting-edge research, technical expertise, and market
              insight to deliver services that drive sustainable impact. From
              blockchain protocols to AI-driven insights, we support innovators
              at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourExpertise[0].services.map((service, index) => (
              <Card
                key={service.title}
                className="border-neutral-200 hover:border-electric-300 hover:scale-105 hover:shadow-md hover:shadow-black transition-all duration-300 h-full"
              >
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 bg-electric-100 rounded-lg flex items-center justify-center mb-6">
                    <Code className="h-6 w-6 text-[#18181B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              What We Offer ?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive services across the full technology stack
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="border-neutral-200 hover:border-electric-300 hover:scale-105 hover:shadow-md hover:shadow-black transition-all duration-300 h-full"
              >
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 bg-electric-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-[#18181B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex space-x-4 mb-6">
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">
                        Timeline
                      </div>
                      <div className="text-sm font-medium text-neutral-900">
                        {service.timeline}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">
                        Investment
                      </div>
                      <div className="text-sm font-medium text-neutral-900">
                        {service.investment}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#18181B] flex-shrink-0" />
                        <span className="text-sm text-neutral-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Proven methodology for delivering complex technical projects on
              time and on budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#18181B] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-electric-200 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Recent Success Stories
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="border-neutral-200 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-black"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{study.category}</Badge>
                    <Award className="h-5 w-5 text-[#18181B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {study.company}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-neutral-700 mb-1">
                        Challenge
                      </div>
                      <div className="text-sm text-neutral-600">
                        {study.challenge}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-700 mb-1">
                        Solution
                      </div>
                      <div className="text-sm text-neutral-600">
                        {study.solution}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#18181B] mb-1">
                        Result
                      </div>
                      <div className="text-sm font-semibold text-neutral-900">
                        {study.result}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Why Partner with 33 Research Labs
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We're not just consultants—we're builders. Our team combines
                deep technical expertise with real-world startup experience.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-[#18181B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Speed to Market
                    </h3>
                    <p className="text-neutral-600">
                      Ship faster without compromising quality. Our process cuts
                      development time by 40%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-[#18181B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Senior-Level Team
                    </h3>
                    <p className="text-neutral-600">
                      Every project is staffed with 10+ year veterans from top
                      tech companies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-[#18181B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-neutral-600">
                      $2B+ in value created across 100+ successful projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-electric-100 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-[#18181B] mb-1">
                      100+
                    </div>
                    <div className="text-sm text-neutral-600">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="bg-neutral-100 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-neutral-900 mb-1">
                      98%
                    </div>
                    <div className="text-sm text-neutral-600">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-neutral-100 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-neutral-900 mb-1">
                      $2B+
                    </div>
                    <div className="text-sm text-neutral-600">
                      Value Created
                    </div>
                  </div>
                  <div className="bg-electric-100 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-[#18181B] mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-neutral-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-[-0.02em] mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
            Schedule a technical consultation to discuss your project
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100 font-medium"
            >
              Schedule Consultation
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            {isModalOpen && (
              <ScheduleModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
