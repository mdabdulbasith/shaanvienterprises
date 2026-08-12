"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "Loan Services",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = await res.json().catch(() => null);

      if (!res.ok) {
        setError((payload && payload.error) || "Failed to send message. Please try again later.");
        return;
      }

      // Show a friendly server-provided message and optional reference id
      const serverMsg = (payload && payload.message) || "Thanks — we've received your message.";

      setSubmitted(true);
      setSuccessMessage(serverMsg);
      setFormData({ name: "", email: "", service: "Loan Services", message: "" });
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-[#F8FAFC]">
      {/* ===================== */}
      {/* CONTACT HERO */}
      {/* ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="text-sm uppercase tracking-wider text-[#1C7293] font-semibold mb-4">
            Get In Touch
          </p>
          <h1 className="text-[42px] md:text-[54px] font-semibold text-[#0F172A] font-sora leading-tight">
            Let’s Talk About
            <span className="block text-[#1C7293] mt-2">
              What You’re Planning
            </span>
          </h1>
          <p className="mt-6 text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Whether you’re exploring a loan, property, insurance,
            or planning to study abroad — our advisors are here
            to guide you clearly and honestly.
          </p>
        </div>
      </section>

      {/* ===================== */}
      {/* CONTACT CONTENT */}
      {/* ===================== */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — INFO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora mb-4">
                Reach Out Anytime
              </h2>
              <div className="w-16 h-0.5 bg-[#1C7293] rounded-full opacity-60 mb-6" />
              <p className="text-[#4B5563] leading-relaxed max-w-md">
                We believe good decisions start with good conversations.
                Share your requirement and we’ll help you understand
                the right way forward — no pressure, no confusion.
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-5">
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="+91 99486 60444"
              />
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="contact@shaanvienterprises.com"
              />
              <ContactItem
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value="Serving clients across India with trusted partner institutions nationwide."
              />
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-[#0F172A] font-sora mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#1C7293] focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#1C7293] focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#1C7293] focus:border-transparent transition"
                >
                  <option>Loan Services</option>
                  <option>Real Estate</option>
                  <option>Insurance</option>
                  <option>Abroad Studies</option>
                  <option>Interior Design</option>
                  <option>Private Finance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your requirement"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#1C7293] focus:border-transparent transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF9805] text-white font-semibold py-3 px-4 hover:bg-[#E08800] transition shadow-md cursor-pointer"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
              {submitted ? (
                <p className="text-sm text-[#1C7293] font-medium">
                  {successMessage ?? "Thanks! Your message was sent."}
                </p>
              ) : null}
              {error ? (
                <p className="text-sm text-red-600 font-medium mt-2">{error}</p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/* COMPONENT */
function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-2.5 rounded-lg bg-[#1C7293]/10 text-[#1C7293]">
        {icon}
      </div>
      <div>
        <p className="font-medium text-[#0F172A]">{label}</p>
        <p className="text-[#4B5563] text-sm">{value}</p>
      </div>
    </div>
  );
}