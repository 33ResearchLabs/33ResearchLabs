import React from "react";
import { Link } from "react-router-dom";

export const CompanyCulture = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-gray-700">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-black">
          Our Company <span className="text-electric-600">Culture</span>
        </h1>

        <p className="text-lg mb-10 text-center max-w-3xl mx-auto text-black">
          At 33 Research Labs, we believe that culture is the foundation of
          innovation. Our values guide how we work, collaborate, and grow
          together.
        </p>

        {/* Core Values */}
        <div className="bg-white rounded-2xl p-10 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            🌟 Core Values
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Integrity and transparency in everything we do</li>
            <li>Innovation through collaboration and experimentation</li>
            <li>Respect for individuals and diverse perspectives</li>
            <li>Ownership, accountability, and results-driven work</li>
            <li>Continuous learning and personal growth</li>
          </ul>
        </div>

        {/* Work Environment */}
        <div className="bg-white rounded-2xl p-10 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            🏢 Work Environment
          </h2>
          <p className="text-gray-700 mb-4">
            We foster a hybrid, remote-first environment that values
            flexibility, autonomy, and deep work. Team members are encouraged to
            explore, contribute ideas, and build meaningful solutions.
          </p>
          <p className="text-gray-700">
            From weekly innovation huddles to async updates, our workplace
            thrives on openness, trust, and meaningful conversations.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to build with us?
          </h3>
          <Link
            to="/contact-us"
            className="inline-block bg-white text-electric-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition duration-200"
          >
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};
