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
  MapPin,
  Mail,
} from "lucide-react";

export  const posts = [
    {
      title: "Zero-Knowledge Proofs: Beyond Privacy to Performance",
      excerpt:
        "How ZK technology is evolving from privacy protection to computational efficiency.",
      author: "Marcus Rodriguez",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Blockchain",
      icon: LayersIcon,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Quantum-Resistant Cryptography: Preparing for Q-Day",
      excerpt:
        "The timeline for quantum computers breaking current encryption—and what to do about it.",
      author: "Dr. Emily Watson",
      date: "December 10, 2024",
      readTime: "15 min read",
      category: "Cybersecurity",
      icon: ShieldIcon,
      color: "from-red-400 to-red-600",
    },
    {
      title: "Multi-Chain Infrastructure: Lessons from Building ChainFlow",
      excerpt:
        "Technical deep-dive into building seamless cross-chain protocols.",
      author: "Alex Kim",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Blockchain",
      icon: LayersIcon,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "MLOps at Scale: Deploying AI in Production",
      excerpt:
        "From model training to production monitoring—the complete MLOps pipeline.",
      author: "David Park",
      date: "December 5, 2024",
      readTime: "12 min read",
      category: "AI",
      icon: Brain,
      color: "from-electric-400 to-electric-600",
    },
    {
      title: "The Economics of Deep Tech: Why VCs Are Missing the Point",
      excerpt:
        "Traditional metrics fail in deep tech. Here's how we evaluate infrastructure investments.",
      author: "Lisa Chang",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Business",
      icon: TrendingUp,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Building Trust in Trustless Systems",
      excerpt:
        "Social consensus mechanisms and their role in decentralized governance.",
      author: "James Liu",
      date: "November 30, 2024",
      readTime: "9 min read",
      category: "Blockchain",
      icon: LayersIcon,
      color: "from-purple-400 to-purple-600",
    },
  ];

 export  const featuredPost = {
    title:
      "The Future of AI Infrastructure: Why Foundation Models Need New Architecture",
    excerpt:
      "As LLMs grow in complexity, traditional cloud infrastructure hits fundamental limits. We explore the architectural patterns that will define the next generation of AI systems.",
    author: "Sarah Chen",
    role: "Head of AI Research",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "AI",
    icon: Brain,
    color: "from-electric-400 to-electric-600",
    image:
      "https://r2.erweima.ai/imgcompressed/compressed_b897bcf6d77096abfa9d86e20a66aa8c.webp",
  };

 
  export  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "33researchlabs@gmail.com",
      description: "For general inquiries and partnerships",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Decentralized",
      description: "Decentralized"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "We respond to all inquiries quickly",
    },
  ];

  export const faqs = [
  {
    question: "What is 33 Research Labs?",
    answer:
      "33 Research Labs is a dominant force in Web3, AI, and crypto development. We offer complete development, marketing, and scalable growth solutions, enabling businesses and startups to confidently innovate.",
  },
  {
    question: "What services are provided by 33 Research Labs?",
    answer:
      "We provide full-stack Web3 and AI platform development, blockchain integration, smart contract creation, token launch strategy, crypto project marketing, and growth acceleration services in one location.",
  },
  {
    question: "What distinguishes 33 Research Labs from other tech firms?",
    answer:
      "In contrast to conventional businesses, we integrate community development, strategic marketing, and in-depth technological knowledge. Our interdisciplinary team helps close the gap between cutting-edge technology and practical application in the fields of AI and crypto.",
  },
  {
    question: "Do you collaborate with companies in their early stages?",
    answer:
      "Indeed. Our speciality at 33 Research Labs is assisting early-stage firms with idea validation, MVP development, and rapid scaling. We can help you whether you need proof-of-concept or go-to-market support.",
  },
  {
    question: "Can you assist with security and auditing smart contracts?",
    answer:
      "Of course. To make sure your blockchain application is secure and compliant, we prioritise secure development and offer smart contract audits, risk assessments, and vulnerability testing.",
  },
  {
    question: "Do you provide AI integration for systems that are already in place?",
    answer:
      "Yes, in order to improve automation and decision-making, we assist in integrating AI features into current applications, such as chatbots, language models, predictive analytics, and autonomous agents.",
  },
  {
    question: "Which sectors do you cater to?",
    answer:
      "Numerous industries, including DeFi, NFTs, gaming, fintech, healthcare, logistics, and more, are served by our products. We can create the link if your company wants to use Web3 or AI.",
  },
  {
    question: "How can I begin using 33 Research Labs?",
    answer:
      "You can email us directly or use the form on our website to get in touch with us. Following an initial conversation, we will suggest a customised roadmap to quickly and accurately realise your project.",
  },
];

export type PartnerName =
  | "Andreessen Horowitz"
  | "Sequoia Capital"
  | "Y Combinator"
  | "Founders Fund"
  | "Lightspeed"
  | "Accel Partners";

export const partners: PartnerName[] = [
  "Andreessen Horowitz",
  "Sequoia Capital",
  "Y Combinator",
  "Founders Fund",
  "Lightspeed",
  "Accel Partners",
];

export const partnerMeta: Record<
  PartnerName,
  { image: string; description: string }
> = {
  "Andreessen Horowitz": {
    image:
      "https://1000logos.net/wp-content/uploads/2024/10/A16z-Logo.png",
    description:
      "A Silicon Valley VC firm investing in AI, crypto, bio, fintech, and consumer tech. Over $40B AUM.",
  },
  "Sequoia Capital": {
    image:
      "https://static.startuptalky.com/2022/02/Sequoia-Capital-logo-StartupTalky.jpg",
    description:
      "Global venture capital leader backing giants like Apple, Google, Stripe, and Airbnb.",
  },
  "Y Combinator": {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSom7Xg6kirG4xUdsbaKaEyyUQiuGZ8ewq29A&s",
    description:
      "The top startup accelerator. Alumni include Airbnb, Stripe, Reddit, and over 5,000 startups.",
  },
  "Founders Fund": {
    image:
      "https://cdn.prod.website-files.com/6642a56bd1568e16dd916707/6642c3a235497dc4b3b45265_founders-fund-logo.png",
    description:
      "VC firm led by Peter Thiel. Early investor in SpaceX, Palantir, Facebook, and more.",
  },
  Lightspeed: {
    image:
      "https://cdn.prod.website-files.com/645258dee17c72222bca47d8/674876e0f06b9fc1b4978929_290a2960-8345-4049-92c4-205c5b4613c1.png",
    description:
      "Global VC firm managing over $25B. Backed Snap, Faire, Epic Games, and Rubrik.",
  },
  "Accel Partners": {
    image: "https://images.seeklogo.com/logo-png/45/1/accel-logo-png_seeklogo-453006.png",
    description:
      "Early backer of Facebook, Slack, Spotify, and Dropbox. Invests globally from seed to growth.",
  },
};
