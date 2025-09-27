import {
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  ArrowUpRight,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useCallback, useMemo } from "react";
import { contactInfo, faqs } from "@/data/posts";
import ScheduleModal from "@/components/ScheduleModal";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  generateCanonicalUrl,
  generateRobotsContent,
  ROBOTS_CONFIG,
} from "@/utils/seo";
import { trackEvent, trackConversion } from "@/utils/googleAnalytics";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    projectDescription: "",
  });
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMetting, setModalMetting] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          error = "First name is required";
        } else if (value.trim().length < 2) {
          error = "First name must be at least 2 characters";
        }
        break;

      case "lastName":
        if (!value.trim()) {
          error = "Last name is required";
        } else if (value.trim().length < 2) {
          error = "Last name must be at least 2 characters";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "company":
        if (!value.trim()) {
          error = "Company name is required";
        }
        break;

      case "projectType":
        if (!value) {
          error = "Please select a project type";
        }
        break;

      case "budget":
        if (!value) {
          error = "Please select a budget range";
        }
        break;

      case "projectDescription":
        if (!value.trim()) {
          error = "Project description is required";
        } else if (value.trim().length < 10) {
          error = "Project description must be at least 10 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateForm = useCallback(() => {
    const newErrors = { ...errors };
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      newErrors[key as keyof typeof errors] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, errors]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Only validate on blur to reduce unnecessary re-renders
    if (errors[name as keyof typeof errors]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }, [errors]);

  const handleFormSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    try {
      console.log("Submitted Data:", formData);
      const response = await axios.post(
        `${BackendUrl}/api/users/query`,
        formData
      );

      if (response.status === 200) {
        toast.success("✅ Consultation request sent successfully!");

        // Track successful form submission
        trackConversion("contact_form_submit", {
          project_type: formData.projectType,
          budget_range: formData.budget,
          company: formData.company,
        });

        trackEvent("form_submit", "contact", "consultation_request");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          projectDescription: "",
        });
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          projectDescription: "",
        });
        Navigate("/");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "❌ Submission failed. Try again."
      );
      console.error("❌ Axios error:", error);
    } finally {
      setLoading(false);
    }
  }, [formData, validateForm, BackendUrl, Navigate]);

  const loadingSpinner = useMemo(() => (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
      Sending...
    </div>
  ), []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us – 33 Research Labs | Get In Touch</title>
        <meta
          name="description"
          content="Ready to build the next big thing? Contact 33 Research Labs for AI, Web3, and cybersecurity development. Schedule a consultation today."
        />
        <meta
          name="keywords"
          content="contact 33 Research Labs, AI development consultation, Web3 development contact, cybersecurity consultation, startup development"
        />
        <meta
          name="robots"
          content={generateRobotsContent(ROBOTS_CONFIG.INDEX)}
        />
        <link rel="canonical" href={generateCanonicalUrl("/contact-us")} />
      </Helmet>
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-electric-50/30 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Let's{" "}
            <span className="bg-[#1DA1F2] bg-clip-text text-transparent">
              Build
            </span>{" "}
            Together
          </h1>
          <p className="text-xl text-neutral-600 mb-4">
            Smart form + calendar booking for seamless collaboration
          </p>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            Ready to discuss your next project? We're here to help transform
            your vision into scalable, secure technology solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Start Your Project
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Tell us about your vision and technical requirements. We'll get
              back to you within 24 hours.
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const error = validateField(e.target.name, e.target.value);
                      setErrors((prev) => ({ ...prev, [e.target.name]: error }));
                    }}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const error = validateField(e.target.name, e.target.value);
                      setErrors((prev) => ({ ...prev, [e.target.name]: error }));
                    }}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={(e) => {
                    const error = validateField(e.target.name, e.target.value);
                    setErrors((prev) => ({ ...prev, [e.target.name]: error }));
                  }}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Input
                  name="company"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={(e) => {
                    const error = validateField(e.target.name, e.target.value);
                    setErrors((prev) => ({ ...prev, [e.target.name]: error }));
                  }}
                  className={errors.company ? "border-red-500" : ""}
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Project Type
                </label>
                <Select
                  onValueChange={(value) => {
                    setFormData((prev) => ({ ...prev, projectType: value }));
                    const error = validateField("projectType", value);
                    setErrors((prev) => ({ ...prev, projectType: error }));
                  }}
                >
                  <SelectTrigger
                    className={errors.projectType ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mvp">MVP Development</SelectItem>
                    <SelectItem value="security">Security Audit</SelectItem>
                    <SelectItem value="ai">AI Implementation</SelectItem>
                    <SelectItem value="blockchain">
                      Blockchain Development
                    </SelectItem>
                    <SelectItem value="consulting">
                      Technical Consulting
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Budget Range
                </label>
                <Select
                  onValueChange={(value) => {
                    setFormData((prev) => ({ ...prev, budget: value }));
                    const error = validateField("budget", value);
                    setErrors((prev) => ({ ...prev, budget: error }));
                  }}
                >
                  <SelectTrigger
                    className={errors.budget ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                    <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                    <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m+">$1M+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                )}
              </div>

              <div>
                <Textarea
                  name="projectDescription"
                  rows={6}
                  placeholder="Tell us about your project, timeline, tech stack, etc."
                  value={formData.projectDescription}
                  onChange={handleChange}
                  onBlur={(e) => {
                    const error = validateField(e.target.name, e.target.value);
                    setErrors((prev) => ({ ...prev, [e.target.name]: error }));
                  }}
                  className={errors.projectDescription ? "border-red-500" : ""}
                />
                {errors.projectDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.projectDescription}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-[#1DA1F2] hover:bg-electric-700 text-white disabled:opacity-50"
              >
                {loading ? loadingSpinner : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Multiple ways to reach us. Choose what works best for you.
            </p>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-electric-100 rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-[#1DA1F2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-lg text-neutral-700">{info.value}</p>
                    <p className="text-sm text-neutral-500">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="border-electric-200 bg-electric-50/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-[#1DA1F2]" />
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Schedule a Call
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">
                  Prefer to talk? Schedule a 30-minute consultation to discuss
                  your project in detail.
                </p>
                <Button
                  onClick={() => setModalMetting(true)}
                  variant="outline"
                  className="w-full border-electric-600 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
                >
                  Book Meeting
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <ScheduleModal
                  isOpen={isModalMetting}
                  onClose={() => setModalMetting(false)}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4  gap-16">
          <div>
            <h2 className="text-3xl text-center lg:text-4xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-center text-neutral-600 mb-6">
              Common questions about working with 33 Research Labs
            </p>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-lg p-4 mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-neutral-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-neutral-500" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                What's your typical project timeline?
              </h3>
              <p className="text-neutral-600">
                Most projects range from 12–20 weeks depending on complexity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Do you sign NDAs?
              </h3>
              <p className="text-neutral-600">
                Absolutely. We're happy to sign your NDA before any discussions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                What’s included in security audits?
              </h3>
              <p className="text-neutral-600">
                Code review, penetration testing, architecture analysis, and
                detailed remediation plans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Do you provide ongoing support?
              </h3>
              <p className="text-neutral-600">
                Yes, we offer flexible support packages after project launch.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="py-24 bg-[#1DA1F2] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl text-electric-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build scalable, secure technology
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.scrollTo(10, 0)}
              size="lg"
              variant="secondary"
            >
              Start Your Project
            </Button>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              variant="outline"
              className="border-white text-[#1DA1F2] hover:bg-white hover:text-[#1DA1F2]"
            >
              Schedule Consultation
            </Button>
            <ScheduleModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
