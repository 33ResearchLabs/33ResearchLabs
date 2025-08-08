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
import { useState } from "react";
import { contactInfo, faqs } from "@/data/posts";
import ScheduleModal from "@/components/ScheduleModal";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

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
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMetting, setModalMetting] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      console.log("Submitted Data:", formData);
      // ✅ Replace this with API call or EmailJS integration
      toast.success("Message sent successfully!");
      const response = await axios.post(
        `${BackendUrl}/api/users/query`,
        formData
      );

      if (response.status === 200) {
        toast.success("✅ Consultation request sent successfully!");
        setFormData({
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
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-600"></div>
        <div className="text-center mt-4">loading</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-electric-50/30 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-electric-600 to-electric-500 bg-clip-text text-transparent">
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
                <Input
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <Input
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                name="company"
                placeholder="Acme Inc."
                value={formData.company}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Project Type
                </label>
                <Select
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, projectType: value }))
                  }
                >
                  <SelectTrigger>
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
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Budget Range
                </label>
                <Select
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                >
                  <SelectTrigger>
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
              </div>

              <Textarea
                name="projectDescription"
                rows={6}
                placeholder="Tell us about your project, timeline, tech stack, etc."
                value={formData.projectDescription}
                onChange={handleChange}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-electric-600 hover:bg-electric-700 text-white"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
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
                    <info.icon className="h-6 w-6 text-electric-600" />
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
                  <Calendar className="h-6 w-6 text-electric-600" />
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
                  className="w-full border-electric-600 text-electric-600 hover:bg-electric-600 hover:text-white"
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
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Common questions about working with 33Research Labs
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

          <div className="space-y-6">
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
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-electric-600 to-electric-700 text-center">
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
              className="border-white text-blue-800 hover:bg-white hover:text-electric-600"
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
