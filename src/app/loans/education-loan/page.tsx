"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Landmark,
  FileCheck2,
  Handshake,
  BookOpen,
  Globe2,
  School,
  BriefcaseBusiness,
  BookMarked,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    title: "Multiple Lending Partners",
    description:
      "Compare education loan options from trusted banks and financial institutions to find a financing solution that matches your academic goals.",
    icon: Landmark,
  },
  {
    title: "Expert Loan Guidance",
    description:
      "Understand repayment plans, moratorium periods, interest structures, and loan features with guidance from experienced advisors.",
    icon: GraduationCap,
  },
  {
    title: "Documentation Assistance",
    description:
      "Receive support in organizing and reviewing the required documents, making the loan application process smoother and easier.",
    icon: FileCheck2,
  },
  {
    title: "End-to-End Support",
    description:
      "From choosing the right lender to loan approval, our advisors guide you through every stage of your education loan journey.",
    icon: Handshake,
  },
];

const educationLoanSolutions = [
  {
    title: "Study in India",
    description:
      "Education loan solutions for undergraduate, postgraduate, and professional courses offered by institutions across India.",
    icon: School,
  },
  {
    title: "Study Abroad",
    description:
      "Explore financing options for higher education at universities around the world with guidance from our advisors.",
    icon: Globe2,
  },
  {
    title: "Undergraduate Programs",
    description:
      "Loan assistance for bachelor's degree programs across a wide range of academic disciplines.",
    icon: BookOpen,
  },
  {
    title: "Postgraduate Programs",
    description:
      "Flexible financing solutions for master's degrees, MBA programs, and other postgraduate studies.",
    icon: BookMarked,
  },
  {
    title: "Professional Courses",
    description:
      "Funding support for career-focused professional programs and specialized certification courses.",
    icon: BriefcaseBusiness,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Goal",
    description: "Tell us about your chosen course, university, and preferred funding plan.",
  },
  {
    number: "02",
    title: "Document Review",
    description: "We help you prepare the documents needed for your education loan application.",
  },
  {
    number: "03",
    title: "Lender Comparison",
    description: "We compare options from trusted banks and institutions to find the best fit.",
  },
  {
    number: "04",
    title: "Approval Support",
    description: "We stay with you until your loan is processed and sanctioned.",
  },
];

const eligibilityPoints = [
  "Admission proof from a recognized university or institution",
  "Identity and address documents for the applicant",
  "Income proof or financial documents for co-applicant support",
  "Course fee structure and academic records",
];

export default function EducationLoanPage() {
  return (
    <main className="overflow-hidden bg-[#F8FAFC]">
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#EAF4F8] text-[#1C7293] text-sm font-medium">
                Education Loan Services
              </span>

              <h1 className="mt-6 text-[46px] md:text-[60px] font-bold leading-[1.08] text-[#0F172A] font-sora">
                Helping You Invest In
                <span className="block bg-gradient-to-r from-[#FF9805] to-[#1C7293] bg-clip-text text-transparent">
                  Your Future
                </span>
              </h1>

              <p className="mt-7 text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Whether you are planning to study in India or abroad, Shaanvi Enterprises helps you compare education loan options, understand repayment plans, and secure financing that supports your academic journey.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-[#00B2FE] text-white font-semibold hover:bg-[#0098dc] transition"
                >
                  Talk to an Education Loan Advisor
                </Link>
                <Link
                  href="/loans"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1C7293]/20 text-[#1C7293] font-semibold hover:bg-[#EAF4F8] transition"
                >
                  View Other Loans
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div>
              <div className="relative h-[480px] rounded-[28px] overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
                  alt="Student walking on university campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[38px] md:text-[52px] font-bold font-sora text-[#0F172A]">
              Why Choose Shaanvi for Your Education Loan?
            </h2>
            <p className="mt-5 text-lg text-[#4B5563] leading-relaxed">
              Financing your education is an important decision. We help you compare loan options, simplify the application process, and guide you toward a financing solution that aligns with your academic aspirations.
            </p>
            <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-70" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-[#F8FAFC] border border-gray-200/70 rounded-3xl p-8 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF4F8] flex items-center justify-center mb-6 group-hover:bg-[#DCEFF6] transition">
                    <Icon className="w-7 h-7 text-[#1C7293]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{item.title}</h3>
                  <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[38px] md:text-[52px] font-bold font-sora text-[#0F172A]">
              Education Loan Solutions We Offer
            </h2>
            <p className="mt-5 text-lg text-[#4B5563] leading-relaxed">
              From undergraduate studies to overseas education and professional certifications, we help you find the right funding support for every ambition.
            </p>
            <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-70" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationLoanSolutions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative bg-white rounded-3xl border border-gray-200/70 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#FF9805] to-[#00B2FE]" />
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFF5E6] to-[#EAF4F8] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#1C7293]" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">{item.title}</h3>
                  <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="relative h-[420px] rounded-[28px] overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
              alt="Student planning education finance"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#EAF4F8] text-[#1C7293] text-sm font-medium">
              What You May Need
            </span>
            <h2 className="mt-6 text-[34px] md:text-[42px] font-bold font-sora text-[#0F172A]">
              Documents and information that support a smoother application
            </h2>
            <p className="mt-5 text-lg text-[#4B5563] leading-relaxed">
              Our advisors help you understand the documentation requirements so your education loan journey is clear, organised and stress-free.
            </p>

            <div className="mt-8 space-y-4">
              {eligibilityPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1C7293] mt-1" />
                  <p className="text-[#4B5563] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-[34px] md:text-[42px] font-bold text-[#0F172A] font-sora">
            A Simple 4-Step Education Loan Process
          </h2>
          <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-70" />
          <div className="grid md:grid-cols-4 gap-8 mt-14">
            {processSteps.map((step) => (
              <div key={step.number} className="p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition">
                <div className="text-2xl font-bold text-[#1C7293]">{step.number}</div>
                <h3 className="mt-3 font-semibold text-lg text-[#0F172A]">{step.title}</h3>
                <p className="text-[#4B5563] text-sm mt-2 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C7293] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sora">
          Ready to Start Your Education Loan Journey?
        </h2>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          Let our advisors help you compare education loan options and move forward with confidence.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-[#FF9805] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#E08800] transition shadow-md"
        >
          Apply for Guidance
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}