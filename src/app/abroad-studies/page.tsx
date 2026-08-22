"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

export default function AbroadStudiesPage() {
  return (
    <main className="w-full bg-[#F8FAFC]">

      {/* ===================== */}
      {/* HERO */}
      {/* ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[42px] md:text-[56px] font-semibold text-[#0F172A] font-sora leading-tight">
              Study Abroad
              <span className="block text-[#1C7293] mt-2">
                Without Confusion
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#4B5563] max-w-xl">
              From selecting the right country to securing your visa,
              we guide you through every step of your journey.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#FF9805] text-white font-semibold hover:bg-[#E08800] transition shadow-md"
              >
                Talk to an Advisor
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop"
              alt="students abroad"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* DESTINATIONS */}
      {/* ===================== */}

      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
              Study Destinations
            </h2>

            <p className="mt-4 text-[#4B5563]">
              Explore study opportunities across some of the world's leading
              education destinations.
            </p>

            <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                name: "USA",
                img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1000&auto=format&fit=crop",
              },
              {
                name: "UK",
                img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1000&auto=format&fit=crop",
              },
              {
                name: "Canada",
                img: "https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?w=1000&auto=format&fit=crop",
              },
              {
                name: "Australia",
                img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1000&auto=format&fit=crop",
              },
              {
                name: "New Zealand",
                img: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1000&auto=format&fit=crop",
              },
              {
                name: "Europe",
                img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000&auto=format&fit=crop",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={item.img}
                    alt={`Study in ${item.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-white font-semibold text-xl">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ===================== */}
      {/* WHAT WE HELP WITH */}
      {/* ===================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
              alt="student consulting"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
              What We Help You With
            </h2>
            <div className="w-16 h-[2px] bg-[#1C7293] mt-4 rounded-full opacity-60" />
            <div className="mt-8 space-y-3">
              {[
                "University selection based on your profile",
                "Application & SOP guidance",
                "Visa documentation & approvals",
                "Travel and accommodation support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1C7293] mt-0.5" />
                  <span className="text-[#4B5563]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* YOUR JOURNEY STEPS */}
      {/* ===================== */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
              Your Journey
            </h2>
            <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Consultation", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop", step: "01" },
              { title: "Shortlisting", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop", step: "02" },
              { title: "Applications", img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop", step: "03" },
              { title: "Departure", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop", step: "04" },
            ].map((step, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#1C7293] font-semibold mb-1">
                    Step {step.step}
                  </p>
                  <p className="font-semibold text-[#0F172A]">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* WHY US */}
      {/* ===================== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="p-8 rounded-xl bg-[#F8FAFC] border border-gray-200/60 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-[#1C7293] mx-auto mb-5" />
            <p className="text-lg text-[#0F172A] leading-relaxed">
              We don’t just help you go abroad — we guide you toward the
              right decision for your future with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}