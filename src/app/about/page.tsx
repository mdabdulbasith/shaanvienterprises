"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="w-full bg-[#F8FAFC]">

      {/* ===================== */}
      {/* HERO – light theme */}
      {/* ===================== */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-[42px] md:text-[60px] font-semibold text-[#0F172A] font-sora tracking-tight leading-tight">
              A Trusted Partner for
              <span className="block text-[#1C7293] mt-2">
                Life’s Important Decisions
              </span>
            </h1>
            <p className="mt-6 text-[#4B5563] text-lg leading-relaxed max-w-xl">
              At Shaanvi Enterprises, we believe people deserve clarity when making decisions
              that shape their future. We focus on honest guidance, not pressure — helping you
              move forward with confidence and the right support.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <Image
              src="/about.jpg"
              alt="Advisory discussion"
              width={600}
              height={420}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* STORY */}
      {/* ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-semibold text-[#0F172A] font-sora tracking-tight">
                Our Story
              </h2>
              <p className="mt-6 text-[#4B5563] text-lg leading-relaxed">
                Shaanvi Enterprises was founded with a simple belief — people deserve
                honest, transparent guidance when making decisions that shape their future.
                <br /><br />
                Too often, individuals face confusing processes, unclear information,
                and advice driven by sales rather than outcomes. We built Shaanvi to be
                different — a place where clarity comes first, and long-term trust matters
                more than short-term gains.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about2.jpg"
                alt="Team discussion"
                width={520}
                height={380}
                className="rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* PHILOSOPHY – clean text only */}
      {/* ===================== */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[48px] font-semibold text-[#0F172A] font-sora tracking-tight">
              Our Approach
            </h2>
            <p className="mt-4 text-[#4B5563] max-w-xl mx-auto">
              The principles that guide every recommendation we make.
            </p>
            <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-60" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Guidance First", "Advice always comes before selling."],
              ["Clarity Always", "Clear steps, no confusion."],
              ["One Trusted Partner", "Multiple services, one advisor."],
              ["Long-Term Thinking", "Decisions designed to age well."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-semibold text-[#0F172A] text-lg">
                  {title}
                </h3>
                <p className="mt-2 text-[#4B5563] text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* WHAT WE DO */}
      {/* ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] md:text-[48px] font-semibold text-[#0F172A] font-sora tracking-tight">
              What We Do
            </h2>
            <p className="mt-6 text-[#4B5563] text-lg leading-relaxed">
              We simplify complex decisions by bringing together expertise across
              loans, real estate, insurance, abroad studies, interior design, and private finance.
              <br /><br />
              Instead of navigating multiple providers, you get one trusted partner
              who understands your goals and guides you at every step.
            </p>
          </div>
          <Image
            src="/about3.jpg"
            alt="Advisory"
            width={520}
            height={360}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* ===================== */}
      {/* TRUST – clean testimonial-like box */}
      {/* ===================== */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-8 rounded-xl bg-white border border-gray-200/60 shadow-sm">
            <p className="text-[#0F172A] text-lg leading-relaxed">
              Trusted by clients across multiple financial journeys and supported
              by 35+ partner institutions, Shaanvi Enterprises is built on years of
              real-world advisory experience — focused on clarity, reliability, and
              long-term relationships.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}