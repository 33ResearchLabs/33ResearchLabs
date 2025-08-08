import { Mail } from "lucide-react";

export const GdprPage = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-20 mt-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">
          GDPR Compliance Statement
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: July 29, 2025
          <br />
          Last Updated: July 29, 2025
        </p>

        <p className="mb-6 text-gray-700">
          At{" "}
          <span className="text-blue-500 font-semibold">33Research Labs</span>,
          we are fully committed to protecting the privacy and personal data of
          our users, in compliance with the General Data Protection Regulation
          (EU) 2016/679 (GDPR). This statement outlines your rights as a data
          subject and our responsibilities as a data controller or processor
          when handling personal information.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          1. Legal Basis for Processing
        </h2>
        <p className="text-gray-700 mb-2">
          We collect and process data only when a valid legal basis exists under
          Article 6 of the GDPR, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <span className="text-blue-500 font-medium">Consent</span> – where
            you have clearly agreed to the processing
          </li>
          <li>
            <span className="text-blue-500 font-medium">Contract</span> –
            necessary to fulfill a contractual obligation
          </li>
          <li>
            <span className="text-blue-500 font-medium">Legal obligation</span>{" "}
            – where required by law
          </li>
          <li>
            <span className="text-blue-500 font-medium">
              Legitimate interests
            </span>{" "}
            – when needed for business operations, provided your rights are not
            violated
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          2. Your Rights Under GDPR
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong className="text-blue-500">Right to Access</strong> – Request
            copies of your personal data
          </li>
          <li>
            <strong className="text-blue-500">Right to Rectification</strong> –
            Correct inaccurate or incomplete data
          </li>
          <li>
            <strong className="text-blue-500">Right to Erasure</strong> –
            Request deletion of your data ("Right to be Forgotten")
          </li>
          <li>
            <strong className="text-blue-500">
              Right to Restrict Processing
            </strong>{" "}
            – Ask us to limit usage of your data
          </li>
          <li>
            <strong className="text-blue-500">Right to Data Portability</strong>{" "}
            – Obtain your data in a structured format
          </li>
          <li>
            <strong className="text-blue-500">Right to Object</strong> – Object
            to data processing, including direct marketing
          </li>
          <li>
            <strong className="text-blue-500">Right to Withdraw Consent</strong>{" "}
            – Revoke consent at any time
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          📧 To exercise your rights, email us at{" "}
          <a href="mailto:33researchlabs@gmail.com" className="text-blue-700">
            33researchlabs@gmail.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          3. International Data Transfers
        </h2>
        <p className="text-gray-700 mb-2">
          We may process your data outside the EU/EEA, including in India or the
          U.S. To ensure GDPR compliance, we implement:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>Data Processing Agreements (DPAs)</li>
          <li>Hosting on GDPR-compliant platforms</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          4. Data Retention
        </h2>
        <p className="text-gray-700 mb-4">
          We retain data only as long as necessary to fulfill service needs,
          legal obligations, dispute resolution, or fraud prevention. You may
          request deletion, and we will comply unless legally required to retain
          it.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          5. Data Security Measures
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>SSL encryption</li>
          <li>Role-based access controls</li>
          <li>Regular system audits and security checks</li>
          <li>Employee training on data protection</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          6. Data Protection Officer (DPO)
        </h2>
        <p className="text-gray-700 mb-4">
          We have appointed a privacy lead to oversee GDPR compliance. You can
          contact our DPO or privacy team at:
        </p>
        <p className="text-gray-700 mb-6">
          <a
            href="mailto:33researchlabs@gmail.com"
            className="text-blue-500 flex"
          >
            <span className="pr-2 text-black">
              <Mail size={20} />
            </span>{" "}
            33researchlabs@gmail.com
          </a>
          <br />
          🌐{" "}
          <a
            href="https://www.33researchlabs.xyz/"
            className="text-blue-500"
            target="_blank"
          >
            www.33researchlabs.xyz
          </a>
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          7. Supervisory Authority Contact
        </h2>
        <p className="text-gray-700 mb-4">
          If you believe your rights under GDPR have been violated, you may
          contact your local data protection authority. EU residents can find
          contact details at:
          <a
            href="https://edpb.europa.eu/about-edpb/board/members_en"
            target="_blank"
            className="text-blue-500"
          >
            EDPB Member List
          </a>
          .
        </p>
      </div>
    </section>
  );
};
