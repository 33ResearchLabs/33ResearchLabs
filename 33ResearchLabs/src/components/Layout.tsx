import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  MailIcon,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/insights" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

const footerNavigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/insights" },
  { name: "Blog", href: "/blog" },
];
const socialLinks = [
  {
    icon: <MailIcon size={20} />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=33researchlabs@gmail.com&su=Hello&body=Hi%2C%20I%20would%20like%20to%20connect...",
    label: "Gmail",
  },

  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/33research_labs/",
    label: "Instagram",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://x.com/33research_labs",
    label: "Twitter",
  },

  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com/company/33researchlabs",
    label: "LinkedIn",
  },
];

const productLinks = [
  { label: "Pricing", url: "/pricing" },
  { label: "About us", url: "/about-us" },

  { label: "Contact", url: "/contact-us" },
];

const legalLinks = [
  { label: "Privacy Policy", url: "/privacy" },
  { label: "Terms of Service", url: "/terms" },
  { label: "Cookie Policy", url: "/cookie-policy" },
  { label: "GDPR", url: "/gdpr" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      if (location.pathname !== "/") {
        navigate("/" + location.hash);
      }
    }
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, location]); // Scrolls on every route/pathname change

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group" aria-label="33 Research Labs homepage">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-500 to-electric-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-sm">33</span>
              </div>
              <span className="font-semibold text-neutral-900 text-lg">Research Labs</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive(item.href)
                    ? "text-electric-600"
                    : "text-neutral-600 hover:text-neutral-900"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-electric-600 hover:bg-electric-700 text-white"
                asChild
              >
                <Link to="/contact-us">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200">
            <div className="px-4 py-6 space-y-4">
              {footerNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors duration-200 ${isActive(item.href)
                    ? "text-electric-600"
                    : "text-neutral-600 hover:text-neutral-900"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="w-full bg-electric-600 hover:bg-electric-700 text-white"
                asChild
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Link to="/" className="flex items-center space-x-2 group" aria-label="33 Research Labs homepage">
                  <div className="w-8 h-8 bg-gradient-to-br from-electric-500 to-electric-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <span className="text-white font-bold text-sm">33</span>
                  </div>
                  <span className="font-semibold text-gray-400 text-lg">Research Labs</span>
                </Link>

              </div>
              <p className="text-neutral-400 max-w-md">
                33Research Labs is a venture studio and deep-tech powerhouse
                building the future of crypto, AI, and Web3. Development,
                marketing, and growth under one roof.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}

              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold mb-4">33ResearchLabs</h3>
              <ul className="space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.url}
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">More</h3>
              <ul className="space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.url}
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p className="text-neutral-400">
              © {new Date().getFullYear()} 33Research Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
