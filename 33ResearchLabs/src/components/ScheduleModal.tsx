import { useState } from "react";
import axios from "axios";
import { Dialog } from "@headlessui/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar, Send } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ScheduleModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${BackendUrl}/api/users/consultation`,
        formData
      );

      if (response.status === 200) {
        toast.success("✅ Consultation request sent successfully!");
        setSuccess(true);
        setFormData({ name: "", email: "", company: "", description: "" });
        navigate("/");
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

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

        {/* Modal Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-8 relative">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="h-6 w-6 text-electric-600" />
              <Dialog.Title className="text-2xl font-bold text-neutral-900">
                Schedule a Consultation
              </Dialog.Title>
            </div>

            <p className="text-neutral-600 mb-6">
              Fill out the form and we’ll get back to you to schedule a call.
            </p>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="company"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={handleChange}
              />
              <Textarea
                name="description"
                placeholder="Brief about your project..."
                rows={4}
                value={formData.description}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-electric-600 hover:bg-electric-700 text-white"
              >
                {loading ? "Submitting..." : "Submit"}
                {!loading && <Send className="ml-2 h-4 w-4" />}
              </Button>
            </form>

            {/* Success message (optional) */}
            {success && (
              <p className="mt-4 text-green-600 text-center">
                ✅ Your request was sent successfully!
              </p>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600"
            >
              ✕
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ScheduleModal;
