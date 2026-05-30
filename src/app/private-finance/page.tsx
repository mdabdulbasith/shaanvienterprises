"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Wallet,
  TrendingUp,
  PiggyBank,
  ShieldCheck,
  FileCheck,
  Briefcase,
  CheckCircle,
} from "lucide-react";

export default function PrivateFinancePage() {
  return (
    <main className="bg-[#F8FAFC]">

      {/* ===================== */}
      {/* HERO */}
      {/* ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-[#1C7293] font-semibold">
              Private Finance
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F172A] font-sora leading-tight">
              Direct Funding Solutions
              <br />
              Beyond Traditional Banking
            </h1>
            <p className="mt-6 text-lg text-[#4B5563] max-w-xl">
              We provide flexible, customised financing by connecting you with
              private capital sources—bypassing the rigid constraints of
              conventional bank loans.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#FF9805] text-white font-semibold hover:bg-[#E08800] transition shadow-md"
              >
                Get Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1600&auto=format&fit=crop"
              alt="finance workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* STORY / INTRO */}
      {/* ===================== */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md order-1 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="planning"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
              Direct, Flexible, & Transparent
            </h2>
            <div className="w-16 h-[2px] bg-[#1C7293] mt-4 rounded-full opacity-60" />
            <p className="mt-6 text-[#4B5563] leading-relaxed">
              Private finance describes the funding of businesses or projects
              using non-public capital, without relying on the traditional
              banking system.
            </p>
            <p className="mt-4 text-[#4B5563] leading-relaxed">
              We help you access customised solutions through private credit,
              private equity, or direct lending—offering far greater flexibility
              and speed than conventional bank financing.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* SERVICES GRID */}
      {/* ===================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
              How Private Finance Works for You
            </h2>
            <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
            <p className="mt-5 text-[#4B5563] max-w-2xl mx-auto">
              Private finance provides two primary ways to access capital—each
              with distinct risk and return profiles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Wallet className="w-8 h-8" />}
              title="Private Credit"
              description="Lending from non‑bank institutions, providing flexible, senior secured loans directly to businesses that may not qualify for standard bank financing."
            />
            <ServiceCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Private Equity"
              description="Taking an ownership stake in established companies to improve their value, operations, and growth before exiting for a profit."
            />
            <ServiceCard
              icon={<FileCheck className="w-8 h-8" />}
              title="Direct Lending"
              description="A core part of private credit, creating tailor‑made loan agreements negotiated bilaterally between the borrower and a private lender."
            />
            <ServiceCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Mezzanine Financing"
              description="A hybrid of debt and equity, often used when senior debt capacity is exhausted. This approach offers higher returns with higher risk."
            />
            <ServiceCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Structured Credit"
              description="Solutions for unique corporate events like acquisitions, restructuring or spin‑offs that fall outside the scope of regular business financing."
            />
            <ServiceCard
              icon={<PiggyBank className="w-8 h-8" />}
              title="Peer‑to‑Peer Lending"
              description="An alternative model that connects individual borrowers directly with private lenders through digital platforms, bypassing traditional financial intermediaries."
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* WHY CHOOSE US */}
      {/* ===================== */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
            The Benefits of Private Financing
          </h2>
          <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <BenefitCard
              icon={<ShieldCheck />}
              title="Customised & Flexible"
              desc="Loan terms, covenants and structures can be negotiated to match your specific needs, unlike rigid bank products[reference:8]."
            />
            <BenefitCard
              icon={<CheckCircle />}
              title="Faster Approvals"
              desc="Private lenders make decisions based on forward‑looking potential, not just historic credit scores, resulting in quicker processing."
            />
            <BenefitCard
              icon={<TrendingUp />}
              title="Access to Larger Capital"
              desc="Private finance includes a market projected to reach $5 trillion by 2029, providing substantial funding capacity[reference:9]."
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* PROCESS */}
      {/* ===================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
            A Transparent & Collaborative Process
          </h2>
          <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
          <div className="space-y-8 text-left mt-12">
            {[
              "Understand your specific financing requirement and long-term goals.",
              "Match you with the appropriate private capital source (credit, equity, or hybrid).",
              "Negotiate customised terms and structure the financing agreement.",
              "Provide continuous support through the entire funding lifecycle.",
            ].map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="text-2xl font-bold text-[#1C7293] min-w-[50px]">
                  {`0${i + 1}`}
                </div>
                <p className="text-[#4B5563] text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* STATEMENT / QUOTE */}
      {/* ===================== */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="p-8 rounded-xl bg-white border border-gray-200/60 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] leading-snug">
              Private finance is not just an alternative to a bank loan,
              <br />
              it is a more direct, flexible and powerful tool.
            </h2>
            <p className="mt-4 text-[#4B5563]">
              We simplify everything — so you can move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* FINAL CTA */}
      {/* ===================== */}
      <section className="py-20 bg-[#1C7293] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sora">
          Ready to Access Private Capital?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-white/90">
          Speak with our private finance experts to explore flexible funding
          solutions tailored to your business or personal needs.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-[#FF9805] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#E08800] transition shadow-md"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}

/* COMPONENTS */
function ServiceCard({ icon, title, description }: any) {
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

function BenefitCard({ icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition">
      <div className="text-[#1C7293] mb-3">{icon}</div>
      <h3 className="font-semibold text-lg text-[#0F172A]">{title}</h3>
      <p className="text-[#4B5563] mt-2 text-sm">{desc}</p>
    </div>
  );
}