import { Mail } from "lucide-react";

export const PrivacyPolicy = () => {
  return (
    <section className="text-neutral-800 bg-white py-16 px-6 md:px-20 mt-5">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Last Updated: July 29, 2025
        </p>

        <p className="mb-6 text-gray-700">
          At <span className="text-blue-500 font-semibold">33researchlabs</span>
          , we are committed to protecting your privacy. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your personal
          information when you interact with our website or engage with our
          services.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-2">
          We collect information to provide and improve our services
          effectively. This includes:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>
            <strong className="text-neutral-900">Personal Information:</strong>{" "}
            Full Name, Email Address, Phone Number, Company Name, Billing
            Information, Government-issued ID (when required).
          </li>
          <li>
            <strong className="text-neutral-900">Usage Data:</strong> IP
            Address, Browser type/version, Pages visited, Date & time, Referral
            URLs.
          </li>
          <li>
            <strong className="text-neutral-900">Third-Party Data:</strong>{" "}
            Publicly accessible sources, Social media (where publicly shared).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Delivering and managing our services</li>
          <li>Providing customer support</li>
          <li>Improving website performance</li>
          <li>Monitoring brand mentions and sentiment</li>
          <li>Handling billing and compliance</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          3. Sharing of Information
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>
            With trusted partners (e.g., legal teams, analytics providers)
          </li>
          <li>With authorities as required by law</li>
          <li>With platforms like Google or Yelp for takedown requests</li>
          <li className="text-gray-700 mt-2">
            We do <strong>not</strong> sell or trade your personal information.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          4. Data Security
        </h2>
        <p className="text-gray-600 mb-4">We protect your data using:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>SSL encryption</li>
          <li>Encrypted cloud storage</li>
          <li>Role-based access control</li>
          <li>Regular audits & monitoring</li>
        </ul>
        <p className="text-gray-500 italic mb-6">
          Note: While we follow industry standards, no system is completely
          secure.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          5. Your Rights
        </h2>
        <p className="text-gray-600 mb-2">You may have the right to:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Access and review your personal data</li>
          <li>Request corrections or deletion</li>
          <li>Object to certain uses</li>
          <li>Withdraw consent anytime</li>
        </ul>
        <p className="text-gray-600">
          To exercise your rights, contact us at:
          <br />
          <a
            href="mailto:33Research Labs@gmail.com"
            className="text-blue-500 font-medium flex"
          >
            <span className="pr-2 text-black">
              <Mail size={20} />
            </span>
            {"  "}
            33researchlabs@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
