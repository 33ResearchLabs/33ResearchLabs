import { Brain, SearchCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";

// Updated content with icons
const Content = [
  {
    title: "1. Research as a Service (RaaS)",
    icon: SearchCheck,
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
    icon: Activity,
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
    icon: Brain,
    description:
      "For founders and development teams, we act as a strategic partner, providing expert guidance from ideation to launch and beyond. We help you design robust, secure, and scalable systems poised for long-term success.",
    points: [
      "Mechanism & Protocol Design: Collaborative workshops and advisory on designing core protocol mechanics, consensus algorithms, and incentive systems.",
      "Token Economy Design: Crafting sustainable and effective token models that align network participants and drive long-term value.",
      "Go-to-Market Strategy: Strategic guidance on developer relations, community building, and navigating the Web3 ecosystem to achieve product-market fit.",
    ],
  },
];

const CoreServices = () => {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-14 text-center text-neutral-900">
        Our Core Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Content.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-electric-400 transition-all duration-300"
          >
            {/* Gradient top bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-500 to-electric-600 rounded-t-2xl" />

            {/* Icon */}
            <div className="w-10 h-10 bg-electric-100 rounded-lg flex items-center justify-center mb-4">
              <service.icon className="h-5 w-5 text-[#1DA1F2]" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-neutral-600 mb-4">
              {service.description}
            </p>

            {/* Feature Points */}
            <ul className="space-y-2 text-sm text-neutral-700 pl-4 list-disc">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
