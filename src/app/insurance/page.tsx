"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Shield,
  Car,
  HeartPulse,
  Plane,
  Flame,
  UsersRound,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Headphones,
  BadgeIndianRupee,
} from "lucide-react";

export default function InsurancePage() {
  return (
    <main className="bg-[#F8FAFC]">

      {/* ===================== */}
      {/* HERO – clean, no dark overlay */}
      {/* ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] font-sora leading-tight">
              Insurance That Protects
              <span className="block text-[#1C7293] mt-2">Your Future</span>
            </h1>
            <p className="mt-6 text-lg text-[#4B5563] max-w-xl">
              We provide reliable insurance coverage through trusted partners,
              helping you secure your health, property, and loved ones.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#FF9805] text-white font-semibold hover:bg-[#E08800] transition shadow-md"
              >
                Get Free Insurance Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop"
              alt="Insurance protection concept"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* INSURANCE SOLUTIONS */}
      {/* ===================== */}

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
              Insurance Solutions We Offer
            </h2>

            <p className="mt-4 text-[#4B5563] max-w-2xl mx-auto">
              Explore insurance solutions designed to help protect you, your family,
              your business, and the things that matter most.
            </p>

            <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-60" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <InsuranceCard
              icon={<Car className="w-8 h-8" />}
              title="Vehicle Insurance"
              description="Protection for your car or two-wheeler against accidents, theft, damages, and other covered risks."
            />

            <InsuranceCard
              icon={<HeartPulse className="w-8 h-8" />}
              title="Health Insurance"
              description="Financial support for medical emergencies, hospitalisation, treatments, and healthcare expenses."
            />

            <InsuranceCard
              icon={<BadgeIndianRupee className="w-8 h-8" />}
              title="Life Insurance & Investment Plans"
              description="Explore life insurance solutions and investment-linked plans that can help protect your family's future while supporting your long-term financial goals."
            />

            <InsuranceCard
              icon={<Plane className="w-8 h-8" />}
              title="Travel Insurance"
              description="Travel with greater confidence with coverage options for medical emergencies, trip disruptions, lost baggage, and other unexpected situations."
            />

            <InsuranceCard
              icon={<Home className="w-8 h-8" />}
              title="Property Insurance"
              description="Help protect your home, commercial property, and other valuable assets against covered risks and unexpected damages."
            />

            <InsuranceCard
              icon={<Flame className="w-8 h-8" />}
              title="Fire Insurance"
              description="Coverage options designed to help protect residential, commercial, and business assets against losses caused by fire and other covered events."
            />

            <InsuranceCard
              icon={<UsersRound className="w-8 h-8" />}
              title="Group & Corporate Insurance"
              description="Insurance solutions for companies and organisations, including employee health coverage and other group protection requirements."
            />

          </div>

        </div>
      </section>

      {/* ===================== */}
      {/* WHY CHOOSE US */}
      {/* ===================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
            Why Choose Our Insurance Services
          </h2>
          <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <WhyCard
              icon={<Shield />}
              title="Trusted Providers"
              desc="We partner with reliable insurance companies."
            />
            <WhyCard
              icon={<FileCheck />}
              title="Easy Claims"
              desc="Our experts guide you through the claims process."
            />
            <WhyCard
              icon={<Headphones />}
              title="Complete Coverage"
              desc="Policies tailored for your lifestyle and needs."
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* HOW IT WORKS (CLAIMS) */}
      {/* ===================== */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
            Simple Claims Process
          </h2>
          <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <ProcessStep
              number="01"
              title="Report"
              desc="Inform us about the incident."
            />
            <ProcessStep
              number="02"
              title="Documentation"
              desc="Submit required documents."
            />
            <ProcessStep
              number="03"
              title="Verification"
              desc="We coordinate with the insurer."
            />
            <ProcessStep
              number="04"
              title="Settlement"
              desc="Fast claim settlement."
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* FINAL CTA */}
      {/* ===================== */}
      <section className="py-20 bg-[#1C7293] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sora">
          Protect What Matters Most
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-white/90">
          Speak with our insurance advisors and choose the best protection plan
          for your future.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-[#FF9805] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#E08800] transition shadow-md"
          >
            Request Insurance Quote
          </Link>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTS */

function InsuranceCard({ icon, title, description }: any) {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition group">
      <div className="w-12 h-12 rounded-xl bg-[#1C7293]/10 text-[#1C7293] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#0F172A] font-sora tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-[#4B5563] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function WhyCard({ icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition">
      <div className="text-[#1C7293] mb-3">{icon}</div>
      <h3 className="font-semibold text-lg text-[#0F172A]">{title}</h3>
      <p className="text-[#4B5563] mt-2 text-sm">{desc}</p>
    </div>
  );
}

function ProcessStep({ number, title, desc }: any) {
  return (
    <div className="p-5 rounded-xl bg-white border border-gray-200/60 shadow-sm">
      <div className="text-2xl font-bold text-[#1C7293] mb-2">{number}</div>
      <h4 className="font-semibold text-[#0F172A]">{title}</h4>
      <p className="text-sm text-[#4B5563] mt-1">{desc}</p>
    </div>
  );
}