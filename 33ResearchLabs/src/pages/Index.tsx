import React from 'react';
import { ArrowRight } from 'lucide-react';

import {
  Lightbulb,
  Zap,
  Cog,
  TrendingUp,
  Shield,
  Server,
  Globe,
} from 'lucide-react';

export default function IndexPage() {
  return (
    <div className="font-inter antialiased min-h-screen bg-white">

      {/* Hero Section - Confident & Established */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-zinc-900" />
                <span className="text-[13px] font-medium text-zinc-600 uppercase tracking-[0.15em]">
                  Est. 2012
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-zinc-900 tracking-[-0.03em] leading-[1.05] mb-8">
                Building the
                <br />
                Infrastructure
                <br />
                <span className="text-zinc-400">of the Future.</span>
              </h1>

              <p className="text-lg text-zinc-500 max-w-xl mb-12 leading-[1.7]">
                We are a full-stack studio accelerating innovation in the Web3, AI, and Cybersecurity domains, combining precision development with strategic market execution.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white text-[14px] font-medium tracking-wide rounded-md hover:bg-zinc-800 transition-colors duration-300"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 text-zinc-900 text-[14px] font-medium tracking-wide border border-zinc-200 rounded-md hover:border-zinc-900 transition-colors duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>

            {/* Right side - Sophisticated 3D Globe */}
            <div className="hidden lg:block relative">
              <style>{`
                @keyframes slowSpin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes reverseSpin {
                  from { transform: rotate(360deg); }
                  to { transform: rotate(0deg); }
                }
                @keyframes gentlePulse {
                  0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                  50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
                }
                @keyframes nodePulse {
                  0%, 100% { opacity: 0.4; }
                  50% { opacity: 1; }
                }
                .globe-orbit { animation: slowSpin 60s linear infinite; }
                .globe-orbit-reverse { animation: reverseSpin 45s linear infinite; }
                .globe-core-ring { animation: gentlePulse 4s ease-in-out infinite; }
                .globe-node { animation: nodePulse 3s ease-in-out infinite; }
              `}</style>
              <div className="aspect-square relative">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-radial from-zinc-100 to-transparent opacity-60" />

                {/* Main sphere outline */}
                <div className="absolute inset-[10%] border border-zinc-200 rounded-full" />

                {/* Horizontal latitude lines */}
                <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-zinc-200 -translate-y-1/2" />
                <div className="absolute top-[30%] left-[15%] right-[15%] h-px bg-zinc-100" />
                <div className="absolute top-[70%] left-[15%] right-[15%] h-px bg-zinc-100" />

                {/* Elliptical orbits */}
                <div className="absolute inset-[10%] border border-zinc-200 rounded-full" style={{ transform: 'rotateX(75deg)' }} />
                <div className="absolute inset-[10%] border border-zinc-150 rounded-full" style={{ transform: 'rotateX(75deg) rotateZ(60deg)' }} />
                <div className="absolute inset-[10%] border border-zinc-100 rounded-full" style={{ transform: 'rotateX(75deg) rotateZ(120deg)' }} />

                {/* Vertical meridian */}
                <div className="absolute top-[10%] bottom-[10%] left-1/2 w-px bg-zinc-200 -translate-x-1/2" />

                {/* Tilted orbital ring - animated */}
                <div className="absolute inset-[5%] rounded-full globe-orbit" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 border border-zinc-300 rounded-full" style={{ transform: 'rotateX(70deg) rotateY(20deg)' }} />
                </div>

                {/* Inner rings - animated */}
                <div className="absolute inset-[25%] border border-zinc-200 rounded-full globe-orbit-reverse" />
                <div className="absolute inset-[40%] border border-zinc-100 rounded-full globe-orbit" />

                {/* Node points */}
                <div className="absolute top-[10%] left-1/2 w-2 h-2 bg-zinc-900 rounded-full -translate-x-1/2" />
                <div className="absolute bottom-[10%] left-1/2 w-2 h-2 bg-zinc-900 rounded-full -translate-x-1/2" />
                <div className="absolute top-1/2 left-[10%] w-2 h-2 bg-zinc-900 rounded-full -translate-y-1/2" />
                <div className="absolute top-1/2 right-[10%] w-2 h-2 bg-zinc-900 rounded-full -translate-y-1/2" />

                {/* Center core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-900 rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-10 h-10 border border-zinc-300 rounded-full globe-core-ring" />
                <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zinc-200/50 rounded-full globe-core-ring" style={{ animationDelay: '1s' }} />

                {/* Floating satellite nodes */}
                <div className="absolute top-[20%] right-[20%] w-1.5 h-1.5 bg-zinc-400 rounded-full globe-node" />
                <div className="absolute bottom-[25%] left-[22%] w-1.5 h-1.5 bg-zinc-400 rounded-full globe-node" style={{ animationDelay: '1s' }} />
                <div className="absolute top-[35%] left-[18%] w-1 h-1 bg-zinc-300 rounded-full globe-node" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-[35%] right-[18%] w-1 h-1 bg-zinc-300 rounded-full globe-node" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar - Enterprise Style */}
      <section className="border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="px-8 py-12 border-r border-zinc-100 last:border-r-0">
              <p className="text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight mb-2">$6M+</p>
              <p className="text-[13px] text-zinc-500 uppercase tracking-wider">Capital Raised</p>
            </div>
            <div className="px-8 py-12 border-r border-zinc-100 last:border-r-0">
              <p className="text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight mb-2">40+</p>
              <p className="text-[13px] text-zinc-500 uppercase tracking-wider">Deployments</p>
            </div>
            <div className="px-8 py-12 border-r border-zinc-100 last:border-r-0">
              <p className="text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight mb-2">12+</p>
              <p className="text-[13px] text-zinc-500 uppercase tracking-wider">Networks</p>
            </div>
            <div className="px-8 py-12">
              <p className="text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight mb-2">100K+</p>
              <p className="text-[13px] text-zinc-500 uppercase tracking-wider">End Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Focus - Editorial Layout */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-zinc-300" />
                  <span className="text-[12px] font-medium text-zinc-400 uppercase tracking-[0.2em]">Expertise</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-normal text-zinc-900 tracking-[-0.02em] leading-[1.15] mb-6">
                  Where We
                  <br />Focus
                </h2>
                <p className="text-zinc-500 leading-relaxed">
                  Our expertise spans the most critical areas of next-generation technology, ensuring your project has a foundation built for scale and security.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-0 divide-y divide-zinc-100">
                <div className="group py-12 first:pt-0">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-zinc-900 mb-4 tracking-[-0.01em]">
                        Web3 & Blockchain Development
                      </h3>
                      <p className="text-zinc-500 leading-relaxed max-w-xl">
                        From complex smart contracts to decentralized applications (DApps), we engineer secure, audited, and scalable blockchain solutions on any major network.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group py-12">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                      <Server className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-zinc-900 mb-4 tracking-[-0.01em]">
                        AI/ML Integration & Tools
                      </h3>
                      <p className="text-zinc-500 leading-relaxed max-w-xl">
                        Leverage machine learning for data analysis, automated trading strategies, or unique on-chain AI tools. We turn algorithms into market advantages.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group py-12 last:pb-0">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-zinc-900 mb-4 tracking-[-0.01em]">
                        Cybersecurity & Auditing
                      </h3>
                      <p className="text-zinc-500 leading-relaxed max-w-xl">
                        Security is non-negotiable. We provide comprehensive code audits, penetration testing, and robust security infrastructure design to protect your assets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators - Full Width Bands */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-zinc-600" />
              <span className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em]">Approach</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal tracking-[-0.02em] leading-[1.15] mb-6">
              What Makes 33 Research Labs Different?
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Our approach is centered on speed, clarity, and deep sector expertise, differentiating us from conventional development houses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-12 lg:p-16">
              <div className="w-12 h-12 rounded-xl border border-zinc-700 flex items-center justify-center mb-8">
                <Lightbulb className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-4">Integrated Strategy</h3>
              <p className="text-zinc-500 leading-relaxed">
                We combine product strategy, technical development, and go-to-market planning from day one, ensuring alignment across all phases.
              </p>
            </div>

            <div className="bg-zinc-950 p-12 lg:p-16">
              <div className="w-12 h-12 rounded-xl border border-zinc-700 flex items-center justify-center mb-8">
                <Zap className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-4">Rapid Prototyping</h3>
              <p className="text-zinc-500 leading-relaxed">
                Our agile engineering teams are optimized for speed, allowing us to deliver functional prototypes and MVPs faster than industry standards.
              </p>
            </div>

            <div className="bg-zinc-950 p-12 lg:p-16">
              <div className="w-12 h-12 rounded-xl border border-zinc-700 flex items-center justify-center mb-8">
                <Cog className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-4">Full-Stack Ownership</h3>
              <p className="text-zinc-500 leading-relaxed">
                We handle everything from backend architecture and smart contracts to front-end UI/UX and API integration. One team, zero handoffs.
              </p>
            </div>

            <div className="bg-zinc-950 p-12 lg:p-16">
              <div className="w-12 h-12 rounded-xl border border-zinc-700 flex items-center justify-center mb-8">
                <TrendingUp className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-4">Growth-Oriented</h3>
              <p className="text-zinc-500 leading-relaxed">
                Our work is always informed by market data, designed not just to function, but to scale, attract users, and achieve commercial success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Work - Large Typography */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-zinc-300" />
              <span className="text-[12px] font-medium text-zinc-400 uppercase tracking-[0.2em]">Track Record</span>
              <div className="w-8 h-px bg-zinc-300" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-zinc-900 tracking-[-0.02em]">
              Our Proof of Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center">
              <p className="text-6xl lg:text-7xl font-light text-zinc-900 tracking-tight mb-4">$6M+</p>
              <p className="text-zinc-500">raised by teams we've supported</p>
            </div>
            <div className="text-center">
              <p className="text-6xl lg:text-7xl font-light text-zinc-900 tracking-tight mb-4">40+</p>
              <p className="text-zinc-500">production deployments</p>
            </div>
            <div className="text-center">
              <p className="text-6xl lg:text-7xl font-light text-zinc-900 tracking-tight mb-4">12+</p>
              <p className="text-zinc-500">chains integrated</p>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-100 my-16" />

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center">
              <p className="text-6xl lg:text-7xl font-light text-zinc-900 tracking-tight mb-4">&lt;0.1%</p>
              <p className="text-zinc-500">post-audit issue rate</p>
            </div>
            <div className="text-center">
              <p className="text-6xl lg:text-7xl font-light text-zinc-900 tracking-tight mb-4">3-wk</p>
              <p className="text-zinc-500">prototype to MVP</p>
            </div>
            <div className="text-center">
              <p className="text-6xl lg:text-7xl font-light text-zinc-900 tracking-tight mb-4">100K+</p>
              <p className="text-zinc-500">users across products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Minimal & Confident */}
      <section className="border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-zinc-900 tracking-[-0.02em] leading-[1.15] mb-6">
                Ready to build
                <br />something lasting?
              </h2>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-md">
                Ready to move from idea to market impact? Our team is standing by to discuss your vision and strategize the path forward.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a
                href="/contact-us"
                className="inline-flex items-center gap-4 px-10 py-5 bg-zinc-900 text-white text-[15px] font-medium tracking-wide rounded-md hover:bg-zinc-800 transition-colors duration-300 group"
              >
                Get in Touch
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
