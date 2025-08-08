import { Helmet } from "react-helmet";
import { ArrowRight, Cpu, Shield, Layers, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { partnerMeta, partners } from "@/data/posts";

// NOTE: No need for useEffect or useNavigate for this scroll behavior.

const Index = () => {
  const focusAreas = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description:
        "From LLM infrastructure to autonomous systems. We build AI that thinks ahead.",
    },
    {
      icon: Layers,
      title: "Blockchain & Web3",
      description:
        "Decentralized protocols, DeFi platforms, and next-gen crypto infrastructure.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Zero-trust architecture, quantum-resistant protocols, and enterprise security.",
    },
  ];

  return (
    // FIX 1: Added snap-scroll behavior to the main container.
    // It will now scroll vertically (snap-y), be mandatory (snap-mandatory),
    // fill the screen height (h-screen), and be scrollable (overflow-y-scroll).
    <main className=" ">
      <Helmet>
        <title>33Research Labs – AI, Web3 & Cybersecurity Infrastructure</title>
        <meta
          name="description"
          content="33researchlabs is a deep-tech venture studio building next-gen AI, Web3, and cybersecurity products with startup velocity and global scale."
        />
        <meta
          name="keywords"
          content="33Research Labs, 33researchlabs, AI startup, Web3 infrastructure, blockchain, cybersecurity, crypto venture studio"
        />
        <meta
          property="og:title"
          content="33researchlabs – Building the Infrastructure of the Future"
        />
        <meta
          property="og:description"
          content="Crypto-native venture studio and deep-tech consultancy helping launch next-gen AI and Web3 products."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://www.33researchlabs.xyz/" />
      </Helmet>

      {/* Hero Section */}
      {/* FIX 2: Made this section a snap point.
          - `snap-start` makes this the snap alignment point.
          - `` ensures it fills the viewport height.
          - `flex flex-col justify-center` keeps your content vertically centered. */}
      <section className="snap-start  flex flex-col justify-center relative overflow-hidden from-white via-neutral-50 to-electric-50/30 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-neutral-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 animate-fade-in relative inline-block group">
              <span className="">33ResearchLabs</span>{" "}
              <br className="hidden md:block" />
              is <span className="text-blue-500">Building the Infrastructure</span> of the Future
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in transition-transform duration-500 hover:scale-105">
              AI. Blockchain. Cybersecurity. And the velocity of startup
              execution.
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in transition-transform duration-500 hover:-translate-y-1">
              <strong>33Research Labs</strong> is a crypto-native venture studio
              and deep-tech consultancy that partners with founders to launch
              and scale next-gen products across AI, Web3, and digital
              infrastructure. Engineered for speed. Built with trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                size="lg"
                className="bg-electric-600 hover:bg-electric-700 text-white transform transition-transform duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact-us">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section
        id="services"
        className="snap-start  flex flex-col justify-center py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Where We Focus
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              33researchlabs brings deep expertise across the technologies that
              will define the next decade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area) => (
              <Card
                key={area.title}
                className=" hover:border-electric-300 transition-all duration-300 group shadow-lg hover:bg-blue-400 hover:duration-400"
              >
                <CardContent className="p-8 hover:scale-105">
                  <div className="w-12 h-12 bg-electric-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-electric-200 transition-colors duration-300">
                    <area.icon className="h-6 w-6 text-electric-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed ">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section
        id="trusted-partners"
        className="snap-start  flex flex-col justify-center py-24 bg-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              <span className="text-blue-500">Trusted</span> by Industry Leaders
            </h2>
            <p className="text-lg text-neutral-600">
              Trusted by global funds and early adopters backing the future of
              AI, Web3, and cybersecurity. <br />
              Discover why teams choose <strong>33Research Labs</strong> to
              build and scale.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => {
              const meta = partnerMeta[partner];
              return (
                <div
                  key={partner}
                  className="group p-4 border rounded-2xl bg-white shadow-sm hover:shadow-2xl hover:scale-105 hover:shadow-black  transition-all duration-300 flex flex-col items-center text-center"
                >
                  <img
                    src={meta.image}
                    alt={`${partner} logo`}
                    className="w-24 h-24 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {partner}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3">
                    {meta.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Long-form SEO Content */}
      <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">

        {/* Left Section */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            We Build. We Partner. We Scale.
          </h2>
          <p className="text-gray-600 text-lg">
            From in-house ventures to strategic partnerships, we develop SaaS products, blockchain tools,
            and security systems that define tomorrow's digital infrastructure.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔️</span> MVP to production in record time
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔️</span> Security-first architecture
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔️</span> Founder-to-founder collaboration
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔️</span> Global scale from day one
            </li>
          </ul>
        </div>

        {/* Right Section - Card */}
        <div className="mt-12 md:mt-0 md:ml-16 bg-blue-50 p-6 rounded-xl shadow-md max-w-md w-full">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-gray-800 font-medium">System Performance</h4>
              <div className="h-3 w-3 bg-green-500 rounded-full" />
            </div>

            {/* Uptime */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Uptime</span>
                <span>99.9%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-green-500 rounded" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Response Time</span>
                <span>12ms</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-blue-400 rounded" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Throughput */}
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Throughput</span>
                <span>10K req/s</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-blue-500 rounded" style={{ width: '85%' }}></div>
              </div>
            </div>

            <p className="mt-4 text-xs text-blue-600 flex items-center gap-1">
              📈 Optimized for Scale
            </p>
          </div>
        </div>
      </div>
      {/* FIX 3: Changed the wrapping div to a section to make it a snap point. */}
      <section
        id="differentiators"
        className="max-w-7xl mx-auto snap-start  flex flex-col justify-center p-6 lg:p-8 bg-white"
      >
        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 lg:p-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            What Makes <span className="text-blue-600">33researchlabs</span>{" "}
            Different?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl shadow-sm border border-blue-100">
              <div className="flex-shrink-0 text-blue-600">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI-First Approach
                </h3>
                <p className="text-gray-600">
                  From LLM ops to multi-agent coordination, we help teams deploy
                  intelligent systems that learn and adapt.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl shadow-sm border border-green-100">
              <div className="flex-shrink-0 text-green-600">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Security by Design
                </h3>
                <p className="text-gray-600">
                  Our cybersecurity experts design resilient systems, from
                  zero-trust infrastructure to quantum-safe protocols.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl shadow-sm border border-purple-100">
              <div className="flex-shrink-0 text-purple-600">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Crypto-Native Expertise
                </h3>
                <p className="text-gray-600">
                  We've helped launch DeFi platforms, audited smart contracts,
                  and built token economies from the ground up.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-yellow-50 rounded-xl shadow-sm border border-yellow-100">
              <div className="flex-shrink-0 text-yellow-600">
                <ArrowUpRight className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Startup Execution Speed
                </h3>
                <p className="text-gray-600">
                  Our team moves fast — helping you go from MVP to production in
                  weeks, not months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact-cta"
        className="snap-start  bg-blue-700  flex flex-col justify-center p-6 lg:p-8 "
      >
        <div className="max-w-7xl mx-auto text-center text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Join the Future with{" "}
            <span className="text-blue-200">33Research Labs</span>
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-3xl">
            We help crypto startups, AI innovators, and enterprise teams turn bold ideas into scalable products. Let 33researchlabs bring your vision to life.
          </p>

          <Link to="/contact-us">
            <button className="mt-8 bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
