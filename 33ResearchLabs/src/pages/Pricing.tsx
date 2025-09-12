import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description:
      "Build your online presence and gain trust with a basic reputation profile.",
    features: [
      "Basic Reputation Scan",
      "Public Profile Page",
      "Monthly Updates",
    ],
    buttonText: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Advanced tools for influencers, founders & professionals.",
    features: [
      "AI-Powered Credibility Score",
      "Real-Time Monitoring",
      "Weekly Reputation Reports",
      "Priority Email Support",
    ],
    buttonText: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-stack reputation management for teams or agencies.",
    features: [
      "Team Dashboards",
      "Custom API Integration",
      "Dedicated Account Manager",
      "White-Label Solution",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];
export default function PricingPage() {
  return (
    <div className=" text-[#1DA1F2] min-h-screen py-16 px-6 mt-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Choose Your 33 Research Plan
        </h2>
        <p className="text-gray-500 mb-12">
          AI-powered solutions to monitor, enhance, and protect your digital
          presence.
        </p>

        <div className="grid md:grid-cols-3 gap-8 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border  ${
                plan.popular
                  ? "border-orange-500 shadow-lg shadow-orange-500/10"
                  : "border-gray-700"
              } bg-[#1E293B] flex flex-col justify-between hover:scale-105 transition-all duration-300`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-electric-200">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-orange-400 mt-2">
                  {plan.price}
                </p>
                <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                <ul className="mt-6 space-y-2 text-left text-gray-200">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      ✅ <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={
                  plan.buttonText === "Contact Sales"
                    ? "/contact-us"
                    : "/contact-us"
                }
                className="mt-6 w-full bg-white text-gray-600 py-2 px-4 rounded-lg font-medium transition- hover:bg-electric-500 hover:text-whi"
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
