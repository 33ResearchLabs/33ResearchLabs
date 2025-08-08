import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-electric-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-electric-600 to-electric-500 bg-clip-text text-transparent">
              33Research Labs
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Building mission-critical technology at the intersection of AI,
            blockchain, and cybersecurity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-neutral-700 text-lg space-y-6 leading-relaxed">
            <p>
              <strong>33Research Labs</strong> (also known as
              <em> 33researchlabs</em>) is a crypto-native venture studio and
              deep-tech consultancy. We specialize in building mission-critical
              products at the intersection of artificial intelligence,
              blockchain, and cybersecurity.
            </p>
            <p>
              With a focus on scalability, security, and real-world impact, our
              team partners with startups, venture funds, and enterprise clients
              to bring future-ready technology to life. Whether you're launching
              a tokenized network, training a custom LLM, or building secure
              digital infrastructure, 33researchlabs delivers world-class
              execution with startup velocity.
            </p>
            <p>
              Our unique strength lies in being both builders and operators. As
              a venture studio, 33Research Labs has launched internal products
              and helped scale external ventures across the US, Europe, and
              Asia.
            </p>
            <p>
              We work closely with founders from ideation through post-launch —
              offering not just code, but strategic guidance, infrastructure
              design, and go-to-market firepower.
            </p>
          </div>

          <div className="bg-electric-50/40 border border-electric-200 p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-2xl font-semibold text-electric-600 mb-4">
              Why 33Research Labs?
            </h2>
            <ul className="space-y-4 text-neutral-700 text-base list-disc list-inside">
              <li>Deep expertise in AI, crypto, and cybersecurity</li>
              <li>Global execution across US, Europe, and Asia</li>
              <li>Crypto-native team with startup-level velocity</li>
              <li>End-to-end support — from idea to launch & scale</li>
              <li>Builder-operator mindset with proven track record</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex w-full h-15 text-center my-10">
        <div className="w-fit bg-gradient-to-r from-electric-600 to-electric-700 text-white rounded-md  p-4 px-20 flex justify-center items-center text-center mx-auto">
          <Link to={"/blog"}>Blog</Link>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-electric-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-electric-100 mb-8 max-w-2xl mx-auto">
            Whether you're a founder or a fund, let's talk about how we can
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={"/contact-us"}
              className="px-6 py-3 rounded-lg text-white bg-white bg-opacity-10 hover:bg-white hover:text-electric-600 transition font-semibold"
            >
              Contact Us
            </Link>
            <Link
              to={"/"}
              className="px-6 py-3 rounded-lg bg-white text-electric-600 hover:bg-electric-100 font-semibold"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
