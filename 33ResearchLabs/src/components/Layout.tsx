import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

const Topnavigation = [
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about-us" },
];

const socialLinks = [
  {
    icon: <Twitter size={18} strokeWidth={1.5} />,
    href: "https://x.com/33research_labs",
    label: "Twitter",
  },
  {
    icon: <Linkedin size={18} strokeWidth={1.5} />,
    href: "https://linkedin.com/company/33researchlabs",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={18} strokeWidth={1.5} />,
    href: "mailto:33researchlabs@gmail.com",
    label: "Email",
  },
];

const legalLinks = [
  { label: "Privacy", url: "/privacy" },
  { label: "Terms", url: "/terms" },
  { label: "Cookies", url: "/cookie-policy" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      window.scrollTo(0, 0);
    }
  }, [pathname, location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-zinc-100 shadow-[0_1px_3px_0_rgb(0_0_0/0.02)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-semibold text-sm tracking-tight">33</span>
              </div>
              <span className="text-zinc-900 text-[15px] font-semibold tracking-[-0.01em]">
                Research Labs
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {Topnavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-zinc-900 bg-zinc-100"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="w-px h-5 bg-zinc-200 mx-3" />
              <Button
                className="bg-zinc-900 hover:bg-zinc-800 text-white text-[13px] font-medium h-9 px-4 rounded-lg transition-all duration-200 shadow-none"
                asChild
              >
                <Link to="/contact-us" className="flex items-center gap-1.5">
                  Get Started
                  <ArrowUpRight size={14} strokeWidth={2} />
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-zinc-100 px-6 py-6 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-zinc-900 bg-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-[15px] font-medium h-12 rounded-lg"
                asChild
              >
                <Link to="/contact-us">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-[72px]">{children}</main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Main footer content */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              {/* Brand column */}
              <div className="lg:col-span-5">
                <Link to="/" className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-zinc-900 font-semibold text-sm tracking-tight">33</span>
                  </div>
                  <span className="text-white text-[15px] font-semibold tracking-[-0.01em]">
                    Research Labs
                  </span>
                </Link>
                <p className="text-zinc-400 text-[15px] leading-relaxed max-w-sm mb-8">
                  A venture studio and deep-tech powerhouse building the future of crypto, AI, and Web3.
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Links columns */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  {/* Company */}
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500 mb-5">
                      Company
                    </h3>
                    <ul className="space-y-3">
                      {navigation.slice(0, 4).map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500 mb-5">
                      Services
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services#blockchain" className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-200">
                          Blockchain
                        </Link>
                      </li>
                      <li>
                        <Link to="/services#ai" className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-200">
                          AI Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/services#security" className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-200">
                          Security
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Legal */}
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500 mb-5">
                      Legal
                    </h3>
                    <ul className="space-y-3">
                      {legalLinks.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.url}
                            className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-zinc-800 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[13px] text-zinc-500">
                © {new Date().getFullYear()} 33 Research Labs
              </p>
              <p className="text-[13px] text-zinc-600">
                Precision. Innovation. Scale.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
