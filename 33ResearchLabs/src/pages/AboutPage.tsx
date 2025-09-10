import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Zap,
  Globe,
  Lock,
  Brain,
  Network,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-electric-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-electric-600 to-electric-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-800 mb-8">
            Building the Infrastructure of the Future
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            At 33 Research Labs, we believe the next great leap in technology
            won't come from isolated breakthroughs — it will come from
            integrated, intelligent, and trustless infrastructure. Our mission
            is to build the foundational systems that enable a secure,
            autonomous, and decentralized digital future.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                We are a deep-tech research and engineering company operating at
                the intersection of <strong>Artificial Intelligence</strong>,{" "}
                <strong>Blockchain Technology</strong>, and{" "}
                <strong>Cybersecurity</strong>. With over a decade of collective
                experience across advanced R&D, protocol design, and secure
                system architecture, our team works on the problems most
                critical to humanity's digital future.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We don't build apps. We build the invisible frameworks that
                tomorrow's systems will rely on — scalable AI pipelines,
                decentralized computer networks, and secure-by-design protocols
                that withstand adversarial conditions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-electric-50/40 border border-electric-200 p-6 rounded-xl text-center">
                <Brain className="h-12 w-12 text-electric-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">
                  AI Systems
                </h3>
                <p className="text-sm text-neutral-600">
                  Autonomous & Scalable
                </p>
              </div>
              <div className="bg-electric-50/40 border border-electric-200 p-6 rounded-xl text-center">
                <Network className="h-12 w-12 text-electric-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Blockchain
                </h3>
                <p className="text-sm text-neutral-600">
                  Decentralized & Trustless
                </p>
              </div>
              <div className="bg-electric-50/40 border border-electric-200 p-6 rounded-xl text-center">
                <Shield className="h-12 w-12 text-electric-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Cybersecurity
                </h3>
                <p className="text-sm text-neutral-600">Secure by Design</p>
              </div>
              <div className="bg-electric-50/40 border border-electric-200 p-6 rounded-xl text-center">
                <Zap className="h-12 w-12 text-electric-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Innovation
                </h3>
                <p className="text-sm text-neutral-600">Future-Ready Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-electric-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Why We Exist
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                The global digital ecosystem is undergoing a tectonic shift. AI
                is becoming autonomous. Blockchain is redefining trust. Data
                sovereignty, digital identity, and network security are no
                longer optional — they're essential.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                But the infrastructure underpinning these shifts is still
                fragmented, insecure, and fundamentally unprepared for what's
                coming.
              </p>
              <div className="text-center">
                <p className="text-2xl font-bold text-electric-600 mb-8">
                  33 Research Labs{" "}
                  <span className="text-black">exists to change that.</span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 bg-electric-50/40 p-4 rounded-lg">
                  <Globe className="h-6 w-6 text-electric-600 flex-shrink-0" />
                  <span className="font-medium text-neutral-900">
                    Decentralized by default
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-electric-50/40 p-4 rounded-lg">
                  <Lock className="h-6 w-6 text-electric-600 flex-shrink-0" />
                  <span className="font-medium text-neutral-900">
                    Secure at the protocol level
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-electric-50/40 p-4 rounded-lg">
                  <Brain className="h-6 w-6 text-electric-600 flex-shrink-0" />
                  <span className="font-medium text-neutral-900">
                    Intelligent at scale
                  </span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-neutral-700 italic">
                  We are not here to chase trends. We are here to build the
                  rails — the protocols, networks, and machine systems that will
                  power the digital economy for decades to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-electric-50/40 to-electric-100/30 border border-electric-200 p-8 rounded-2xl">
              <Target className="h-10 w-10 text-electric-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Deep Technical Expertise
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We've spent years at the edge of innovation, working with AI
                labs, L1 blockchain projects, cyber defense teams, and protocol
                DAOs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-electric-50/40 to-electric-100/30 border border-electric-200 p-8 rounded-2xl">
              <Network className="h-10 w-10 text-electric-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Cross-Domain Thinking
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We integrate machine learning, cryptography, and distributed
                systems to solve complex, interdisciplinary problems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-electric-50/40 to-electric-100/30 border border-electric-200 p-8 rounded-2xl">
              <Zap className="h-10 w-10 text-electric-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Mission-Driven
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We aren't building for vanity metrics — we're building for
                resilience, scalability, and long-term impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-electric-50/40 to-electric-100/30 border border-electric-200 p-8 rounded-2xl">
              <Brain className="h-10 w-10 text-electric-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Independent & Research-Oriented
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We prioritize deep research, first-principles thinking, and
                verifiable security over hype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-electric-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Our Philosophy
            </h2>
          </div>
          <div className="bg-white border border-neutral-200 p-8 lg:p-12 rounded-2xl shadow-sm">
            <p className="text-lg text-neutral-700 leading-relaxed mb-8 text-center">
              We are committed to shaping a world where humans and machines
              collaborate securely, where data is owned, not exploited, and
              where AI systems serve the interests of communities, not
              corporations.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8 text-center">
              Everything we build is designed with robustness, privacy, and
              autonomy in mind. We invest heavily in zero-knowledge systems,
              decentralized AI frameworks, autonomous agents, and
              quantum-resistant security to ensure that our technology stands
              the test of time — and threat.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Our Team
            </h2>
          </div>
          <div className="bg-gradient-to-br from-electric-50/40 to-electric-100/30 border border-electric-200 p-8 lg:p-12 rounded-2xl text-center">
            <Users className="h-16 w-16 text-electric-600 mx-auto mb-6" />
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              We are a small, elite group of engineers, cryptographers, security
              researchers, and AI scientists from leading global institutions
              and frontier projects. We value execution over noise, innovation
              over imitation, and integrity above all.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              We're remote-first, globally distributed, and obsessed with
              building the infrastructure no one else is willing to touch — the
              hard, complex, unseen layers that power the future.
            </p>
          </div>
        </div>
      </section> */}

      {/* Our Vision */}
      <section className="py-16  text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-neutral-700 mb-8">
              At 33 Research Labs, our vision is bold and long-term:
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-12 rounded-2xl mb-8">
            <p className="text-xl  text-center mb-8 text-neutral-700">
              To architect a digital future where intelligence is autonomous,
              infrastructure is decentralized, and trust is built into the
              protocol.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-electric-400 flex-shrink-0" />
                <span className="text-neutral-700">
                  Intelligence is decentralized
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-electric-400 flex-shrink-0" />
                <span className="text-neutral-700">Security is provable</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-electric-400 flex-shrink-0" />
                <span className="text-neutral-700">
                  Systems are trustless, resilient, and adaptive
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-black mb-4">
                We are not preparing for tomorrow. We are building it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-electric-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-electric-100 mb-8 max-w-2xl mx-auto">
            Ready to architect the infrastructure of tomorrow? Let's discuss how
            we can bring revolutionary technology to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="px-8 py-4 rounded-lg bg-white text-electric-600 hover:bg-electric-100 font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-lg text-white bg-white bg-opacity-10 hover:bg-white hover:text-electric-600 transition font-semibold"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
