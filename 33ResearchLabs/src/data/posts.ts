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

// Utility function to generate URL-friendly slugs
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Function to find post by slug
export const findPostBySlug = (slug: string) => {
  return posts.find(post => generateSlug(post.title) === slug) || 
         (generateSlug(featuredPost.title) === slug ? featuredPost : null);
};

export const posts = [
  {
    title: "Modular Blockchains: The Future of Scalable Decentralization",
    image:'/images/image.png',
    author: "Priya Nair",
    date: "November 3, 2025",
    readTime: "5 min read",
    category: "Blockchain",
    icon: "LayersIcon",
    color: "from-purple-400 to-purple-600",
    excerpt: "The next evolution of blockchain architecture is unfolding with modular blockchains, a paradigm shift designed to solve the scalability trilemma — balancing decentralization, security, and scalability. Unlike monolithic blockchains that handle execution, settlement, and data availability on a single layer, modular chains separate these functions, enabling unparalleled performance and flexibility across the ecosystem.",
    content: `The next evolution of blockchain architecture is unfolding with modular blockchains, a paradigm shift designed to solve the scalability trilemma — balancing decentralization, security, and scalability.

Unlike monolithic blockchains that handle execution, settlement, and data availability on a single layer, modular chains separate these functions, enabling unparalleled performance and flexibility across the ecosystem.

Leading examples such as Celestia, EigenLayer, and Avail are pioneering this approach, offering frameworks where developers can build custom execution layers without compromising on security or interoperability.

## Deep Dive Analysis

Modular blockchains are not just a technical upgrade; they represent a strategic rethinking of blockchain infrastructure.

By decoupling the layers, networks can now focus on specific performance objectives — whether it's high-throughput execution (as seen in rollups) or robust data availability.

This modular design reduces redundancy, lowers operating costs, and enhances composability — enabling faster innovation cycles across Web3 applications.

## Key Insights and Technical Details

• Separation of Functions: Modular chains split execution, consensus, and data availability into independent yet interconnected layers.

• Interoperability by Design: Seamless communication between layers enhances cross-chain operations and liquidity sharing.

• Shared Security Models: Layers can inherit security from trusted base chains, reducing attack surfaces.

• Developer Flexibility: Builders can deploy customized execution layers optimized for specific use cases — DeFi, gaming, AI data verification, or enterprise ledgers.

This flexibility positions modular blockchains as a key enabler of the next 10x leap in Web3 scalability.

## Implementation Strategies

Organizations seeking to leverage modular architecture should begin by:

• Assessing current infrastructure and scalability limits

• Exploring modular frameworks like Celestia, Polygon Avail, or EigenDA

• Adopting rollup-as-a-service (RaaS) platforms to accelerate deployment

• Prioritizing cross-layer interoperability testing for smoother integration

A well-planned modular migration strategy can future-proof applications and significantly reduce long-term maintenance costs.

## Future Implications

Modular blockchains will redefine the foundation of decentralized systems, impacting industries from finance to artificial intelligence.

They will enable specialized, application-specific blockchains that interact seamlessly — unlocking efficiency, flexibility, and mass adoption potential.

As Web3 scales beyond its early adopters, modularity will become the backbone of a more open, composable, and user-centric internet.

## The Role of 33ResearchLabs

At 33ResearchLabs, we are advancing research in modular architecture, ZK scaling, and cross-chain data systems.

Our R&D team collaborates with leading blockchain ecosystems to prototype and test scalable infrastructures that align with real-world enterprise and developer needs.

By exploring modularity's potential, we aim to bridge innovation with performance, creating solutions that shape the decentralized technologies of tomorrow.

## Conclusion

The rise of modular blockchains represents a pivotal moment for the Web3 ecosystem.

As this new model gains traction, organizations that adapt early will lead the next wave of blockchain innovation.

Through informed research and proactive adoption, the community can collectively move toward a faster, more secure, and truly decentralized digital economy.`
  },
  {
    title: "Zero-Knowledge Proofs: Beyond Privacy to Performance",
    image:'/images/1.png',
    author: "Marcus Rodriguez",
    date: "July 12, 2025",
    readTime: "2 min read",
    category: "Blockchain",
    icon: "LayersIcon",
    color: "from-purple-400 to-purple-600",
    excerpt: "Zero-Knowledge Proofs (ZKPs) have evolved from privacy tools to performance enhancers in blockchain technology. These cryptographic protocols now enable faster, more scalable networks through zk-SNARKs and zk-STARKs, compressing complex computations into lightweight proofs. ZK-rollups bundle thousands of transactions off-chain, dramatically reducing network congestion and gas fees while maintaining security.",
  },
  {
    title: "Quantum-Resistant Cryptography: Preparing for Q-Day",
     image:'/images/2.png',
    author: "Dr. Emily Watson",
    date: "August 10, 2025",
    readTime: "2 min read",
    category: "Cybersecurity",
    icon: "ShieldIcon",
    color: "from-red-400 to-red-600",
    excerpt: "Quantum computing threatens current cryptographic systems, with 'Q-Day' marking when quantum machines can break widely used encryption. Organizations must adopt quantum-resistant cryptography (PQC) now, using lattice-based algorithms like CRYSTALS-Kyber to future-proof digital security. The race is on to implement these solutions before quantum computers become capable of breaking traditional encryption.",
  },
  {
    title: "Multi-Chain Infrastructure: Lessons from Building ChainFlow",
     image:'/images/3.png',
    author: "Alex Kim",
    date: "April 8, 2025",
    readTime: "2 min read",
    category: "Blockchain",
    icon: "LayersIcon",
    color: "from-purple-400 to-purple-600",
    excerpt: "Multi-chain infrastructure addresses blockchain fragmentation by enabling interoperability between networks like Ethereum, Solana, and Polygon. ChainFlow's development revealed key lessons: secure cross-chain bridges, developer-friendly SDKs, and seamless user experiences are essential. The future of blockchain lies in collaborative, interconnected ecosystems rather than isolated networks.",
  },
  {
    title: "MLOps at Scale: Deploying AI in Production",
     image:'/images/4.png',
    author: "David Park",
    date: "July 5, 2025",
    readTime: "2 min read",
    category: "AI",
    icon: "Brain",
    color: "from-electric-400 to-electric-600",
    excerpt: "MLOps bridges the gap between AI research and production deployment, streamlining the ML lifecycle through automation, monitoring, and governance. Like DevOps transformed software delivery, MLOps revolutionizes how organizations operationalize AI at scale. Success requires automated pipelines, real-time monitoring, and cross-team collaboration to turn innovative models into scalable business value.",
  },
  {
    title: "The Economics of Deep Tech: Why VCs Are Missing the Point",
     image:'/images/5.jpg',
    author: "Lisa Chang",
    date: "August 3, 2025",
    readTime: "2 min read",
    category: "Business",
    icon: "TrendingUp",
    color: "from-green-400 to-green-600",
    excerpt: "Traditional venture capital models fall short in deep tech, where capital-intensive R&D requires years before commercial viability. Unlike software startups, deep tech ventures face technical rather than market risk, demanding patient capital and ecosystem collaboration. VCs must adapt their strategies with longer horizons and hybrid funding models to capture transformative opportunities.",
  },
  {
    title: "Building Trust in Trustless Systems",
     image:'/images/6.png',
    author: "James Liu",
    date: "March 30, 2025",
    readTime: "2 min read",
    category: "Blockchain",
    icon: "LayersIcon",
    color: "from-purple-400 to-purple-600",
    excerpt: "Blockchain promises trustless systems where cryptography and consensus replace intermediaries, yet user confidence remains essential. Building trust requires combining technical robustness with transparency, community governance, and security assurance. While blockchains eliminate central authorities, success depends on fostering trust through reliable user experiences and institutional adoption.",
  },
];

 export  const featuredPost = {
    title:
      "The Future of AI Infrastructure: Why Foundation Models Need New Architecture",
    excerpt: "As LLMs grow in complexity, traditional cloud infrastructure hits fundamental limits. New architectural patterns combining specialized hardware, distributed computing, and edge deployment are essential for next-generation AI systems. The future demands infrastructure designed specifically for foundation models.",
    author: "Sarah Chen",
    role: "Head of AI Research",
    date: "August 16, 2025",
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
      value: "Dharampur",
      description: "Himachal Pradesh, India"
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
    image: "https://www.finbots.ai/wp-content/uploads/2022/10/Page_Company-10.png",
    description:
      "Early backer of Facebook, Slack, Spotify, and Dropbox. Invests globally from seed to growth.",
  },
};
