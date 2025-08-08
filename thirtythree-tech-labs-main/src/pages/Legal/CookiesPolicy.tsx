import { Mail } from "lucide-react";

export const CookiesPolicy = () => {
  return (
    <section className=" text-blue-400 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">
          Cookies Policy
        </h1>


        <p className="mb-6 text-gray-700">
          This Cookies Policy explains how{" "}
          <span className="text-blue-500 font-semibold">33Research Labs</span>{" "}
          ("we", "us", or "our") uses cookies and similar technologies on our
          website{" "}
          <a
            href="https://www.33researchlabs.xyz/"
            className="text-blue-500"
            target="_blank"
          >
            33researchlabs{" "}
          </a>
          to enhance your browsing experience and provide personalized services.
          By continuing to use our website, you consent to our use of cookies in
          accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          1. What Are Cookies?
        </h2>
        <p className="text-gray-700 mb-4">
          Cookies are small text files that are stored on your device (computer,
          tablet, or mobile) when you visit a website. They help websites
          remember information about your visit, such as login details,
          preferences, and activity history, which can improve future
          interactions.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          2. Types of Cookies We Use
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <span className="text-blue-400 font-medium">
              Strictly Necessary Cookies:
            </span>
            Essential for the operation of our website — enable navigation,
            secure areas, and form submissions.
          </li>
          <li>
            <span className="text-blue-400 font-medium">
              Performance Cookies:
            </span>
            Collect anonymous data on site usage to help us improve performance
            and user experience.
          </li>
          <li>
            <span className="text-blue-400 font-medium">
              Functionality Cookies:
            </span>
            Remember user preferences like language and deliver a more
            personalized experience.
          </li>
          <li>
            <span className="text-blue-400 font-medium">
              Targeting & Advertising Cookies:
            </span>
            Used by third parties to deliver relevant ads and measure marketing
            campaign effectiveness.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          3. Third-Party Cookies
        </h2>
        <p className="text-gray-700 mb-2">
          Third-party services may place cookies via our website, such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Google Analytics</li>
          <li>Facebook Pixel</li>
          <li>LinkedIn Insight Tag</li>
          <li>Twitter/X Pixel</li>
        </ul>
        <p className="text-gray-700 mb-4">
          These services may track your activity across other websites. We
          encourage reviewing their respective privacy and cookie policies.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          4. How to Control Cookies
        </h2>
        <p className="text-gray-700 mb-2">
          You can manage or disable cookies in your browser settings:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Google Chrome: Settings Privacy and security Cookies</li>
          <li>
            Mozilla Firefox: Preferences Privacy & Security Cookies and Site
            Data
          </li>
          <li>Safari: Preferences Privacy Manage Website Data</li>
          <li>Microsoft Edge: Settings Cookies and site permissions</li>
        </ul>
        <p className="text-gray-400 italic mb-4">
          Note: Disabling cookies may impact certain website features.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          5. Changes to This Cookies Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this policy to reflect changes in law or our practices.
          Revisions will be posted on this page with a new date.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
          6. Contact Us
        </h2>
        <p className="text-gray-700">
          <a
            href="mailto:33researchlabs@gmail.com"
            className="text-blue-700 flex"
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
            className="text-blue-700"
            target="_blank"
          >
            www.33researchlabs.xyz/
          </a>
        </p>
      </div>
    </section>
  );
};
