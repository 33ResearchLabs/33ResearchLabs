import { Mail } from "lucide-react";

export const TermPage = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-20 mt-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">
          Terms of Service
        </h1>

        <p className="mb-6 text-gray-700">
          These Terms of Service (“Terms”) govern your use of the services and
          website operated by{" "}
          <span className="text-[#1DA1F2] font-semibold">33 Research Labs</span>
          . By accessing or using our website or services, you agree to be bound
          by these Terms. If you do not agree with any part of these Terms, you
          must not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          1. Services Offered
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Content removal and suppression</li>
          <li>Brand and review monitoring</li>
          <li>Reputation repair for individuals and businesses</li>
          <li>Search engine optimization (SEO)</li>
          <li>Google My Business (GMB) profile optimization</li>
          <li>Brand identity and digital presence management</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          2. Eligibility
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>You are at least 18 years old</li>
          <li>You have the legal capacity to enter into a binding agreement</li>
          <li>You will use our services only for lawful purposes</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          3. User Obligations
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>No unlawful, defamatory, or fraudulent use of our services</li>
          <li>No reverse-engineering or platform interference</li>
          <li>No false or misleading information submission</li>
          <li>Compliance with all applicable laws</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          4. Payment & Fees
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Service fees communicated clearly before commencement</li>
          <li>Advance payments required unless agreed otherwise</li>
          <li>Late or failed payments may lead to service suspension</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          5. Service Limitations
        </h2>
        <p className="text-gray-700 mb-4">
          While we strive for effective outcomes, we do not guarantee specific
          results like complete removal of third-party content. Only legal and
          ethical methods are used.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          6. Confidentiality
        </h2>
        <p className="text-gray-700 mb-2">
          We keep client data confidential and do not share without:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Your explicit consent</li>
          <li>Legal obligations</li>
          <li>Trusted vendors under NDAs</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          7. Intellectual Property
        </h2>
        <p className="text-gray-700 mb-4">
          All content and assets belong to{" "}
          <span className="text-[#1DA1F2]">33 Research Labs</span> or its
          licensors. Unauthorized use or reproduction is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          8. Termination
        </h2>
        <p className="text-gray-700 mb-4">
          We may suspend or terminate access for violations, non-payment, abuse,
          or legal reasons without notice.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          9. Disclaimer of Warranties
        </h2>
        <p className="text-gray-700 mb-4">
          Services are provided “as is” and “as available.” We do not guarantee
          accuracy, uptime, or success. Use is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          10. Limitation of Liability
        </h2>
        <p className="text-gray-700 mb-4">
          We are not liable for indirect or consequential damages, including
          loss of profit, data, or goodwill, resulting from service usage.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          11. Governing Law
        </h2>
        <p className="text-gray-700 mb-4">
          These Terms are governed by Indian law. Disputes will be resolved in
          the courts of [Your City/State].
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          12. Changes to These Terms
        </h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms anytime. Continued use after changes implies
          your agreement to the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          13. Contact Us
        </h2>
        <p className="text-gray-700">
          <a
            href="mailto:33researchlabs@gmail.com"
            className="text-[#1DA1F2] flex"
          >
            <span className="pr-2 text-black">
              <Mail size={20} />
            </span>
            33researchlabs@gmail.com
          </a>
          <br />
          🌐{" "}
          <a
            href="https://www.33researchlabs.xyz/"
            className="text-[#1DA1F2]"
            target="_blank"
          >
            www.33researchlabs.xyz
          </a>
        </p>
      </div>
    </section>
  );
};
