import React from 'react';
import Button from '../components/Button';
import FocusCard from '../components/FocusCard';
import MetricCard from '../components/MetricCard';
import DiffCard from '../components/DiffCard';
import { PRIMARY_BLUE, BG_LIGHTEST_BLUE, TEXT_DARK, BORDER_LIGHT, BG_FOOTER, PASTEL_BLUE, PASTEL_GREEN, PASTEL_YELLOW, PASTEL_PURPLE } from '../config/colors';

import {
  Menu,
  Lightbulb,
  Zap,
  Cog,
  TrendingUp,
  Shield,
  Server,
  Globe,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';

export default function IndexPage() {
  return (
    <div className={`font-inter text-[${TEXT_DARK}] antialiased min-h-screen bg-white`}>
      
      {/* Navigation Bar */}
      <header 
        className={`sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b py-4`}
        style={{ borderColor: BORDER_LIGHT }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="/" className={`text-2xl font-bold`} style={{ color: TEXT_DARK }}>
            33 Research <span style={{ color: PRIMARY_BLUE }}>Labs</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex space-x-10 items-center">
            <a href="/" className={`text-gray-900 font-medium transition hover:text-[#2F6BFF]`}>Home</a>
            <a href="/services" className={`text-gray-900 font-medium transition hover:text-[#2F6BFF]`}>Services</a>
            <a href="/insights" className={`text-gray-900 font-medium transition hover:text-[#2F6BFF]`}>Insights</a>
            <a href="/about-us" className={`text-gray-900 font-medium transition hover:text-[#2F6BFF]`}>About us</a>
            <Button href="/get-started" primary className="ml-6 py-2.5 px-5">Get Started</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 border border-gray-300 rounded-lg text-gray-700 hover:border-blue-500">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span 
            className={`inline-block text-sm font-semibold px-4 py-2 mb-4 rounded-full border border-blue-100`}
            style={{ color: PRIMARY_BLUE, backgroundColor: BG_LIGHTEST_BLUE }}
          >
            33 Research Labs
          </span>
          <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight`} style={{ color: TEXT_DARK }}>
            Building the Infrastructure of the Future.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We are a full-stack studio accelerating innovation in the Web3, AI, and Cybersecurity domains, combining precision development with strategic market execution.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/get-started" primary>Start Building</Button>
            <Button href="/services" primary={false}>View Services</Button>
          </div>
        </div>
      </section>

      {/* 2. Where We Focus Section (Cards) */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4`} style={{ color: TEXT_DARK }}>
              Where We <span style={{ color: PRIMARY_BLUE }}>Focus</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans the most critical areas of next-generation technology, ensuring your project has a foundation built for scale and security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FocusCard
              title="Web3 & Blockchain Development"
              description="From complex smart contracts to decentralized applications (DApps), we engineer secure, audited, and scalable blockchain solutions on any major network."
              icon={Globe}
            />
            <FocusCard
              title="AI/ML Integration & Tools"
              description="Leverage machine learning for data analysis, automated trading strategies, or unique on-chain AI tools. We turn algorithms into market advantages."
              icon={Server}
            />
            <FocusCard
              title="Cybersecurity & Auditing"
              description="Security is non-negotiable. We provide comprehensive code audits, penetration testing, and robust security infrastructure design to protect your assets."
              icon={Shield}
            />
          </div>
        </div>
      </section>

      {/* 3. What Makes 33 Research Labs Different? Section (Feature Blocks) */}
      <section 
        className={`py-20 md:py-24`} 
        style={{ backgroundColor: BG_LIGHTEST_BLUE }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4`} style={{ color: TEXT_DARK }}>
              What Makes <span style={{ color: PRIMARY_BLUE }}>33 Research Labs</span> Different?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach is centered on speed, clarity, and deep sector expertise, differentiating us from conventional development houses.
            </p>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DiffCard
                title="Integrated Strategy"
                description="We combine product strategy, technical development, and go-to-market planning from day one, ensuring alignment across all phases."
                icon={Lightbulb}
                colorHex={PASTEL_BLUE}
              />
              <DiffCard
                title="Rapid Prototyping"
                description="Our agile engineering teams are optimized for speed, allowing us to deliver functional prototypes and MVPs faster than industry standards."
                icon={Zap}
                colorHex={PASTEL_GREEN}
              />
              <DiffCard
                title="Full-Stack Ownership"
                description="We handle everything from backend architecture and smart contracts to front-end UI/UX and API integration. One team, zero handoffs."
                icon={Cog}
                colorHex={PASTEL_YELLOW}
              />
              <DiffCard
                title="Growth-Oriented"
                description="Our work is always informed by market data, designed not just to function, but to scale, attract users, and achieve commercial success."
                icon={TrendingUp}
                colorHex={PASTEL_PURPLE}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Proof of Work Section (Metrics) */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold`} style={{ color: TEXT_DARK }}>
              Our <span style={{ color: PRIMARY_BLUE }}>Proof</span> of Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
              Numbers that reflect our execution, not logos.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <MetricCard value="$6M+" description="raised by teams we’ve supported" />
            <MetricCard value="40+" description="production deployments" />
            <MetricCard value="12+" description="chains integrated (EVM + Solana + custom networks)" />
            <MetricCard value="&lt;0.1%" description="post-audit issue rate" />
            <MetricCard value="3-week" description="average time from prototype to MVP" />
            <MetricCard value="100K+" description="users across products we helped build" />
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section 
        className={`py-20 md:py-28`}
        style={{ backgroundColor: BG_LIGHTEST_BLUE }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4`} style={{ color: TEXT_DARK }}>
            Join the Future with <span style={{ color: PRIMARY_BLUE }}>33 Research Labs</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to move from idea to market impact? Our team is standing by to discuss your vision and strategize the path forward.
          </p>
          <Button href="/get-started" primary className="py-3.5 px-8">Get in Touch</Button>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className={`text-gray-300 py-16 text-sm`}
        style={{ backgroundColor: BG_FOOTER }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-16">
            
            {/* Logo and Socials */}
            <div className="col-span-2 md:col-span-2">
              <a href="/" className="text-2xl font-bold text-white mb-4 block">
                33 Research <span style={{ color: PRIMARY_BLUE }}>Labs</span>
              </a>
              <p className="text-gray-500 mb-4">Accelerating innovation in Web3, AI, and Cybersecurity.</p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/33ResearchLabs" className="text-gray-400 hover:text-[#2F6BFF] transition">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/33researchlabs/" className="text-gray-400 hover:text-[#2F6BFF] transition">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:info@33researchlabs.xyz" className="text-gray-400 hover:text-[#2F6BFF] transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="/about-us" className="text-gray-400 hover:text-[#2F6BFF] transition">About Us</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-[#2F6BFF] transition">Careers</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#2F6BFF] transition">Contact</a></li>
                <li><a href="/insights" className="text-gray-400 hover:text-[#2F6BFF] transition">Insights</a></li>
              </ul>
            </div>
            
            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="/services#blockchain" className="text-gray-400 hover:text-[#2F6BFF] transition">Blockchain Dev</a></li>
                <li><a href="/services#ai" className="text-gray-400 hover:text-[#2F6BFF] transition">AI/ML Solutions</a></li>
                <li><a href="/services#security" className="text-gray-400 hover:text-[#2F6BFF] transition">Security & Audit</a></li>
                <li><a href="/services#marketing" className="text-gray-400 hover:text-[#2F6BFF] transition">Web3 Marketing</a></li>
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="/terms-of-service" className="text-gray-400 hover:text-[#2F6BFF] transition">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#2F6BFF] transition">Privacy Policy</a></li>
                <li><a href="/disclaimer" className="text-gray-400 hover:text-[#2F6BFF] transition">Disclaimer</a></li>
                <li><a href="/sitemap.xml" className="text-gray-400 hover:text-[#2F6BFF] transition">Sitemap</a></li>
              </ul>
            </div>
            
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-xs text-gray-500">
            &copy; 2024 33 Research Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}