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

export const posts = [
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
    color: "from-blue-400 to-blue-600",
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

export const featuredPost = {
  title:
    "The Future of AI Infrastructure: Why Foundation Models Need New Architecture",
  author: "33ResearchLabs",
  role: "AI Infrastructure Innovator",
  date: "August 8, 2025",
  image: "https://tse1.mm.bing.net/th/id/OIP.cm8W7HDVsi62PM5dceWJxwHaEt?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3", // replace with your image URL
  fullContent: `
In today's rapidly evolving technological landscape, Artificial Intelligence (AI) has become a ubiquitous presence, revolutionizing industries and transforming the way we interact with machines. As AI continues to advance, the need for innovative infrastructure that can support the growing complexity of AI models is becoming increasingly crucial. In this article, we will explore the future of AI infrastructure and why foundation models require new architecture to meet the demands of tomorrow's AI applications.

The Evolution of AI Infrastructure
Over the past decade, AI has made significant strides in its capabilities, from speech recognition and image classification to natural language processing and autonomous driving. These advancements have been made possible by the development of sophisticated AI models, such as large-scale neural networks like GPT-3 and BERT, which have pushed the boundaries of what AI can achieve.

However, as AI models become more complex and data-intensive, the need for robust infrastructure to support their training and deployment has become increasingly apparent. Traditional AI infrastructure, built on conventional server architectures, is struggling to keep pace with the demands of modern AI workloads, leading to performance bottlenecks and scalability issues.

The Challenges of Foundation Models
Foundation models, such as GPT-3 and BERT, are pre-trained models that can be fine-tuned for specific tasks, making them incredibly versatile and powerful. However, these models are also incredibly large and resource-intensive, requiring massive amounts of data and computational power to train and deploy effectively.

The sheer size and complexity of foundation models present significant challenges for traditional AI infrastructure. Training these models can take weeks or even months, consuming vast amounts of energy and resources in the process. Additionally, the deployment of these models on a large scale requires scalable infrastructure that can handle the high computational demands of real-time AI applications.

The Need for New Architecture
To address these challenges, a new generation of AI infrastructure is needed, one that is specifically designed to support the unique requirements of foundation models. This new architecture must be optimized for the parallel processing and distributed computing needed to train and deploy large-scale AI models efficiently.

One approach to achieving this is through the use of specialized hardware, such as Graphics Processing Units (GPUs) and Tensor Processing Units (TPUs), which are specifically designed for AI workloads. These hardware accelerators can significantly speed up the training and deployment of AI models, making them more efficient and cost-effective.

Additionally, innovations in software architecture, such as distributed computing frameworks like Kubernetes and Apache Spark, can help orchestrate the deployment of AI models across multiple servers, enabling seamless scalability and performance optimization.

Conclusion
As AI continues to advance at a rapid pace, the need for new infrastructure to support the growing demands of foundation models is clear. By investing in innovative hardware and software solutions tailored to the unique requirements of AI workloads, organizations can unlock the full potential of AI and drive future innovation across industries.

The Role of 33ResearchLabs in Shaping the Future of AI Infrastructure
33ResearchLabs is a leader in developing innovative solutions for AI infrastructure. By leveraging their expertise and cutting-edge technology, they are revolutionizing the way foundation models are designed and implemented. Through continuous research and development, 33ResearchLabs is paving the way for the future of AI infrastructure.
`,
};

export const contactInfo = [
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
    description: "Decentralized",
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
    question: "What is 33ResearchLabs?",
    answer:
      "33ResearchLabs is a dominant force in Web3, AI, and crypto development. We offer complete development, marketing, and scalable growth solutions, enabling businesses and startups to confidently innovate.",
  },
  {
    question: "What services are provided by 33ResearchLabs?",
    answer:
      "We provide full-stack Web3 and AI platform development, blockchain integration, smart contract creation, token launch strategy, crypto project marketing, and growth acceleration services in one location.",
  },
  {
    question: "What distinguishes 33ResearchLabs from other tech firms?",
    answer:
      "In contrast to conventional businesses, we integrate community development, strategic marketing, and in-depth technological knowledge. Our interdisciplinary team helps close the gap between cutting-edge technology and practical application in the fields of AI and crypto.",
  },
  {
    question: "Do you collaborate with companies in their early stages?",
    answer:
      "Indeed. Our speciality at 33ResearchLabs is assisting early-stage firms with idea validation, MVP development, and rapid scaling. We can help you whether you need proof-of-concept or go-to-market support.",
  },
  {
    question: "Can you assist with security and auditing smart contracts?",
    answer:
      "Of course. To make sure your blockchain application is secure and compliant, we prioritise secure development and offer smart contract audits, risk assessments, and vulnerability testing.",
  },
  {
    question:
      "Do you provide AI integration for systems that are already in place?",
    answer:
      "Yes, in order to improve automation and decision-making, we assist in integrating AI features into current applications, such as chatbots, language models, predictive analytics, and autonomous agents.",
  },
  {
    question: "Which sectors do you cater to?",
    answer:
      "Numerous industries, including DeFi, NFTs, gaming, fintech, healthcare, logistics, and more, are served by our products. We can create the link if your company wants to use Web3 or AI.",
  },
  {
    question: "How can I begin using 33ResearchLabs?",
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
    image: "https://1000logos.net/wp-content/uploads/2024/10/A16z-Logo.png",
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
    image:
      "https://images.seeklogo.com/logo-png/45/1/accel-logo-png_seeklogo-453006.png",
    description:
      "Early backer of Facebook, Slack, Spotify, and Dropbox. Invests globally from seed to growth.",
  },
};



export const caseStudies = [
  {
    id: 1,
    name: "QuantumGuard",
    industry: "Cybersecurity",
    stage: "Series A",
        users: "150K+",
    funding: "$12M",
    revenue: "$3.2M",
    overview:
      "QuantumGuard is a next-generation encryption platform designed to resist quantum computing threats. Built for enterprise-level security, it ensures that organizations can protect sensitive data against both current and future cryptographic challenges.",
    challenge:
      "With the rise of quantum computing, traditional encryption methods are at risk of being rendered obsolete. Large enterprises needed a forward-proof encryption solution that could handle massive data volumes without compromising speed or accessibility.",
    solution:
      "QuantumGuard developed quantum-resistant encryption protocols using lattice-based cryptography and advanced key exchange mechanisms. The platform integrates seamlessly with existing enterprise systems, minimizing migration friction.",
    results: [
      "50K+ active users across finance, healthcare, and government sectors.",
      "$2M ARR achieved within two years of launch.",
      "$15M in Series A funding secured to accelerate R&D and global expansion."
    ],
    keyTakeaways:
      "By addressing a future-critical security threat before it becomes mainstream, QuantumGuard positioned itself as a leader in the quantum cybersecurity space."
  },
  {
    id: 2,
    name: "ChainFlow",
    industry: "Blockchain",
        users: "150K+",
    funding: "$12M",
    revenue: "$3.2M",
    stage: "Live",
    overview:
      "ChainFlow is a multi-chain infrastructure platform that enables seamless DeFi protocol integration across diverse blockchain ecosystems. It simplifies cross-chain asset transfers and liquidity pooling for developers and end-users.",
    challenge:
      "The DeFi market is fragmented, with users and liquidity scattered across multiple chains. Developers faced high costs and complexity in creating cross-chain compatible applications.",
    solution:
      "ChainFlow built a secure, high-throughput bridging system with automated smart contract deployment across Ethereum, Solana, and other leading chains. It offers APIs and SDKs for rapid integration.",
    results: [
      "25K+ users onboarded in the first year.",
      "$100M+ total value locked (TVL) across integrated protocols.",
      "1M+ cross-chain transactions processed with minimal latency."
    ],
    keyTakeaways:
      "ChainFlow proved that interoperability is key to DeFi’s next growth phase, enabling protocols to reach wider liquidity pools without rebuilding from scratch."
  },
  {
    id: 3,
    name: "NeuralOps",
    industry: "AI / MLOps",
        users: "150K+",
    funding: "$12M",
    revenue: "$3.2M",
    stage: "Beta",
    overview:
      "NeuralOps is an MLOps platform designed for enterprise AI deployment, monitoring, and lifecycle management. It helps organizations efficiently transition AI models from research to production with robust version control, scaling, and compliance.",
    challenge:
      "Many enterprises struggle to operationalize AI models due to poor monitoring, lack of version control, and compliance bottlenecks. Downtime or model drift can lead to significant operational and financial losses.",
    solution:
      "NeuralOps offers automated CI/CD pipelines for AI models, real-time drift detection, and advanced monitoring dashboards. Its multi-cloud architecture ensures high uptime and scalability.",
    results: [
      "5K+ enterprise users across multiple industries.",
      "10K+ models deployed and monitored.",
      "99.9% uptime, ensuring mission-critical AI systems remain operational."
    ],
    keyTakeaways:
      "By focusing on reliability and automation, NeuralOps positioned itself as an indispensable tool for enterprises scaling AI initiatives."
  },
  {
    id: 4,
    name: "SecureVault",
    industry: "Cybersecurity",
    stage: "Development",
    overview:
      "SecureVault is a zero-knowledge proof system for private data verification, enabling businesses to validate sensitive information without revealing it.",
    challenge:
      "Companies needed to verify identities, credentials, and transactions while preserving user privacy — especially in highly regulated sectors like finance and healthcare.",
    solution:
      "SecureVault developed a ZK-proof protocol that integrates with enterprise authentication systems, allowing cryptographic verification without exposing underlying data.",
    results: [
      "12 strategic partnerships established with banks and fintechs.",
      "3 pilot programs successfully executed.",
      "5 patents filed for proprietary verification technology."
    ],
    keyTakeaways:
      "SecureVault is tackling the growing demand for privacy-preserving compliance tools with cutting-edge cryptographic methods."
  }
];
