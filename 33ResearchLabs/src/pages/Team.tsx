import {
  Linkedin,
  Twitter,
  Github,
  MapPin,
  Award,
  Users,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  generateCanonicalUrl,
  generateRobotsContent,
  ROBOTS_CONFIG,
} from "@/utils/seo";

const Team = () => {
  const leadership = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Principal Engineer at Google AI. Led teams building large-scale ML infrastructure serving billions of users.",
      location: "San Francisco, CA",
      expertise: [
        "AI Infrastructure",
        "Distributed Systems",
        "Product Strategy",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Martinez",
      role: "Co-Founder & CTO",
      bio: "Ex-Staff Security Engineer at Stripe. Built payment security systems processing $100B+ annually.",
      location: "Austin, TX",
      expertise: ["Cybersecurity", "Fintech", "Cryptography"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "Head of Blockchain",
      bio: "Former Protocol Engineer at Coinbase. Designed and shipped DeFi protocols managing $2B+ TVL.",
      location: "New York, NY",
      expertise: ["DeFi Protocols", "Smart Contracts", "Tokenomics"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  const team = [
    {
      name: "Emily Rodriguez",
      role: "Senior AI Engineer",
      location: "Seattle, WA",
      expertise: ["Machine Learning", "Computer Vision", "MLOps"],
    },
    {
      name: "Marcus Thompson",
      role: "Security Architect",
      location: "Boston, MA",
      expertise: ["Zero-Trust", "Penetration Testing", "Compliance"],
    },
    {
      name: "Lisa Wang",
      role: "Blockchain Developer",
      location: "Denver, CO",
      expertise: ["Solidity", "Layer 2", "Cross-Chain"],
    },
    {
      name: "James Park",
      role: "DevOps Engineer",
      location: "Portland, OR",
      expertise: ["Kubernetes", "AWS", "Infrastructure"],
    },
    {
      name: "Sofia Petrov",
      role: "Product Designer",
      location: "Los Angeles, CA",
      expertise: ["UX Design", "Design Systems", "User Research"],
    },
    {
      name: "Michael Brown",
      role: "Data Scientist",
      location: "Chicago, IL",
      expertise: ["Deep Learning", "NLP", "Analytics"],
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We set the highest standards for technical quality and execution.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Best ideas come from diverse perspectives working together.",
    },
    {
      icon: Heart,
      title: "Impact",
      description:
        "We build technology that makes a meaningful difference in the world.",
    },
  ];

  const stats = [
    { label: "Team Members", value: "25+" },
    { label: "Countries", value: "8" },
    { label: "Years Experience", value: "12+" },
    { label: "Patents Filed", value: "15" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Team – 33 Research Labs | World-Class AI, Web3 & Cybersecurity Talent
        </title>
        <meta
          name="description"
          content="Meet the world-class team at 33 Research Labs. Expert engineers, researchers, and strategists building the future of AI, Web3, and cybersecurity."
        />
        <meta
          name="keywords"
          content="33 Research Labs team, AI experts, Web3 developers, cybersecurity professionals, blockchain engineers, startup team"
        />
        <meta
          name="robots"
          content={generateRobotsContent(ROBOTS_CONFIG.INDEX)}
        />
        <link rel="canonical" href={generateCanonicalUrl("/team")} />
      </Helmet>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-electric-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              World-Class{" "}
              <span className="bg-[#1DA1F2] bg-clip-text text-transparent">
                Talent
              </span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Human-first, world-class team building the infrastructure of
              tomorrow
            </p>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              We're a diverse group of engineers, researchers, and designers
              who've built critical infrastructure at Google, Stripe, Coinbase,
              and other leading tech companies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#1DA1F2] mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Founders and leaders who've scaled technology at the world's
              largest companies
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={leader.name}
                className="border-neutral-200 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-400 to-electric-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-[#1DA1F2] font-medium mb-2">
                      {leader.role}
                    </p>
                    <div className="flex items-center justify-center space-x-1 text-sm text-neutral-500 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{leader.location}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 text-center">
                    {leader.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {leader.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 justify-center">
                    <a
                      href={leader.social.linkedin}
                      className="text-neutral-400 hover:text-[#1DA1F2] transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={leader.social.twitter}
                      className="text-neutral-400 hover:text-[#1DA1F2] transition-colors duration-200"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={leader.social.github}
                      className="text-neutral-400 hover:text-[#1DA1F2] transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              The Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Senior engineers and specialists from top tech companies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="border-neutral-200 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-electric-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#1DA1F2]">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#1DA1F2] font-medium text-sm mb-2">
                      {member.role}
                    </p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-neutral-500 mb-4">
                      <MapPin className="h-3 w-3" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Principles that guide how we build, work, and grow together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-electric-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-[#1DA1F2]" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-electric-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join the Future
          </h2>
          <p className="text-xl text-electric-100 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join our mission.
            Come build the infrastructure of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/company-culture"}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-[#1DA1F2]"
              >
                Learn About Culture
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
