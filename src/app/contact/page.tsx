"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
              <div className="w-16 h-[2px] bg-[#1C7293] rounded-full opacity-60 mb-6" />
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
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#1C7293] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#1C7293] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1">
                  Service Interested In
                </label>
                <select
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
                  placeholder="Tell us briefly about your requirement"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#1C7293] focus:border-transparent transition"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF9805] text-white font-semibold py-3 px-4 hover:bg-[#E08800] transition shadow-md"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
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