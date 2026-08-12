"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
    Building2,
    BarChart3,
    FileCheck2,
    Handshake,
} from "lucide-react";

import {
    Home,
    Hammer,
    Trees,
    RefreshCw,
    PlusCircle,
} from "lucide-react";

import {
    Calculator,
} from "lucide-react";

const homeLoanSolutions = [
    {
        title: "Home Purchase Loan",
        description:
            "Finance the purchase of your dream home with flexible repayment options and competitive interest rates.",
        icon: Home,
    },
    {
        title: "Construction Loan",
        description:
            "Get funding to construct a house on your own land with expert guidance throughout the process.",
        icon: Hammer,
    },
    {
        title: "Plot Purchase Loan",
        description:
            "Purchase residential plots with financing solutions from trusted banking partners.",
        icon: Trees,
    },
    {
        title: "Balance Transfer",
        description:
            "Transfer your existing home loan to another lender and enjoy better interest rates and lower EMIs.",
        icon: RefreshCw,
    },
    {
        title: "Top-up Loan",
        description:
            "Need additional funds? Extend your existing home loan for renovations or other financial needs.",
        icon: PlusCircle,
    },
];

const benefits = [
    {
        title: "35+ Banking Partners",
        description:
            "Compare home loan options from leading banks and financial institutions to find the one that best fits your needs.",
        icon: Building2,
    },
    {
        title: "Better Loan Comparisons",
        description:
            "We help you evaluate interest rates, repayment options, and loan features so you can make an informed decision.",
        icon: BarChart3,
    },
    {
        title: "Complete Documentation Support",
        description:
            "Our experts assist you with every document required, ensuring a smooth and hassle-free application process.",
        icon: FileCheck2,
    },
    {
        title: "End-to-End Assistance",
        description:
            "From your first consultation to final loan disbursement, we're with you at every stage of your journey.",
        icon: Handshake,
    },
];

const advisoryServices = [
    {
        title: "Compare Multiple Lenders",
        description:
            "We compare home loan options across our banking and financial partners to help you find a suitable solution.",
        icon: Building2,
    },
    {
        title: "Documentation Guidance",
        description:
            "Our team helps you understand and organize the required documents, making the application process smoother.",
        icon: FileCheck2,
    },
    {
        title: "Loan Comparison",
        description:
            "We explain interest rates, EMIs, repayment tenures, and loan features so you can make an informed choice.",
        icon: Calculator,
    },
    {
        title: "Dedicated Advisor",
        description:
            "From your initial enquiry to loan disbursement, you'll have a single point of contact throughout the journey.",
        icon: Handshake,
    },
];

const faqs = [
    {
        question: "How do you help me choose the right home loan?",
        answer:
            "We compare home loan options across multiple banking and financial partners, explain interest rates, repayment terms, and loan features, helping you make an informed decision based on your financial goals and requirements.",
    },
    {
        question: "Do you work with multiple banks?",
        answer:
            "Yes. We work with a network of trusted banks and financial institutions, allowing us to compare suitable home loan options and guide you towards the one that best fits your needs.",
    },
    {
        question: "Will Shaanvi assist throughout the loan process?",
        answer:
            "Absolutely. From the initial consultation and documentation guidance to lender coordination and loan disbursement support, our advisors stay with you throughout the entire home loan journey.",
    },
    {
        question: "How do I get started?",
        answer:
            "Simply contact our team through the enquiry form or by phone. We'll understand your requirements, discuss suitable home loan options, and guide you through the next steps.",
    },
];



export default function HomeLoanPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef(null);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".faq-heading",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".faq-sub",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    delay: 0.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".faq-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <main className="overflow-hidden bg-[#F8FAFC]">

            {/* ================= HERO ================= */}
            <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* LEFT */}

                        <div>

                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#EAF4F8] text-[#1C7293] text-sm font-medium">
                                Home Loan Services
                            </span>

                            <h1 className="mt-6 text-[46px] md:text-[60px] font-bold leading-[1.08] text-[#0F172A] font-sora">

                                Helping You Own

                                <span className="block bg-gradient-to-r from-[#FF9805] to-[#1C7293] bg-clip-text text-transparent">
                                    Your Dream Home
                                </span>

                            </h1>

                            <p className="mt-7 text-lg text-[#4B5563] leading-relaxed max-w-xl">

                                Whether you're purchasing your first home, constructing a
                                new one, or refinancing an existing loan, Shaanvi Enterprises
                                helps you compare trusted lenders and secure a home loan
                                that fits your financial goals.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="px-8 py-4 rounded-xl bg-[#00B2FE] text-white font-semibold hover:bg-[#E08800] transition"
                                >
                                    Talk to an Advisor
                                </Link>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div>

                            <div className="relative h-[480px] rounded-[28px] overflow-hidden shadow-xl">

                                <Image
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
                                    alt="Home Loan"
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

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <h2 className="text-[38px] md:text-[52px] font-bold font-sora text-[#0F172A]">
                            Why Choose Shaanvi for Your Home Loan?
                        </h2>

                        <p className="mt-5 text-lg text-[#4B5563] leading-relaxed">
                            Finding the right home loan is about more than just interest rates.
                            We compare lenders, simplify documentation, and guide you through
                            every step to help you make a confident financial decision.
                        </p>

                        <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-70" />

                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {benefits.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                  group
                  bg-[#F8FAFC]
                  border border-gray-200/70
                  rounded-3xl
                  p-8
                  hover:bg-white
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all duration-300
                "
                                >

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-[#EAF4F8] flex items-center justify-center mb-6 group-hover:bg-[#DCEFF6] transition">

                                        <Icon
                                            className="w-7 h-7 text-[#1C7293]"
                                            strokeWidth={2}
                                        />

                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#4B5563] leading-relaxed">
                                        {item.description}
                                    </p>

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
                            Home Loan Solutions We Offer
                        </h2>

                        <p className="mt-5 text-lg text-[#4B5563]">
                            Whether you're purchasing your first home or refinancing an
                            existing one, we help you find the right financing solution.
                        </p>

                        <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-70" />

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {homeLoanSolutions.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
          group
          relative
          bg-white
          rounded-3xl
          border border-gray-200/70
          p-8
          shadow-sm
          hover:shadow-xl
          hover:-translate-y-1
          transition-all duration-300
          overflow-hidden
        "
                                >
                                    {/* Top Accent */}
                                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#FF9805] to-[#00B2FE]" />

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFF5E6] to-[#EAF4F8] flex items-center justify-center mb-6">

                                        <Icon
                                            className="w-7 h-7 text-[#1C7293]"
                                            strokeWidth={2}
                                        />

                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#4B5563] leading-relaxed">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">

                        <h2 className="text-[38px] md:text-[52px] font-bold font-sora text-[#0F172A]">
                            How We Help You
                        </h2>

                        <p className="mt-5 text-lg text-[#4B5563] leading-relaxed">
                            Securing a home loan involves more than submitting an application.
                            We guide you through every stage, helping simplify decisions and
                            making the journey as smooth as possible.
                        </p>

                        <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-70" />

                    </div>

                    {/* Cards */}

                    <div className="grid md:grid-cols-2 gap-8">

                        {advisoryServices.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                  group
                  bg-[#F8FAFC]
                  border border-gray-200/70
                  rounded-3xl
                  p-8
                  hover:bg-white
                  hover:shadow-lg
                  transition-all duration-300
                "
                                >

                                    <div className="flex gap-5">

                                        <div className="w-14 h-14 rounded-2xl bg-[#EAF4F8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#DCEFF6] transition">

                                            <Icon
                                                className="w-7 h-7 text-[#1C7293]"
                                                strokeWidth={2}
                                            />

                                        </div>

                                        <div>

                                            <h3 className="text-2xl font-semibold text-[#0F172A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-[#4B5563] leading-relaxed">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>
            <section
                ref={sectionRef}
                className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden"
            >
                <div className="max-w-4xl mx-auto px-6 sm:px-10">
                    {/* HEADER */}
                    <div className="text-center mb-14">
                        <h2 className="faq-heading text-[40px] md:text-[52px] font-semibold text-[#0F172A] font-sora tracking-tight">
                            Frequently Asked Questions
                        </h2>

                        <p className="faq-sub mt-5 text-[#4B5563] text-lg max-w-xl mx-auto">
                            Clear answers to common questions so you can move forward
                            with confidence and clarity.
                        </p>

                        {/* Divider – muted accent */}
                        <div className="faq-sub w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-60" />
                    </div>

                    {/* FAQ LIST */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    ref={(el) => { faqRefs.current[index] = el; }}
                                    className="faq-item group rounded-2xl border border-gray-200/60 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                                    >
                                        <span className="text-[#0F172A] font-medium text-[17px] font-inter">
                                            {faq.question}
                                        </span>

                                        <Plus
                                            className={`
                                  w-5 h-5 transition-all duration-300
                                  ${isOpen ? "rotate-45 text-[#1C7293]" : "text-[#1C7293] opacity-70"}
                                `}
                                        />
                                    </button>

                                    <div
                                        className={`
                                px-6 text-[#4B5563] leading-relaxed text-[15.5px] font-inter
                                transition-all duration-300 ease-in-out
                                ${isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
                              `}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section
                ref={sectionRef}
                className="relative py-20 md:py-28 bg-[#0f172a] overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-20 w-80 h-80 bg-[#ff9805]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B2FE]/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="max-w-3xl mx-auto text-center">

                        <h2 className="cta-heading text-[40px] md:text-[52px] font-semibold text-white font-sora tracking-tight leading-tight">
                            Ready to Find the Right
                            <span className="block bg-gradient-to-r from-[#ff9805] to-[#00B2FE] bg-clip-text text-transparent">
                                Home Loan?
                            </span>
                        </h2>

                        <p className="cta-sub mt-6 text-white/80 text-lg leading-relaxed">
                            Whether you're purchasing your first home, refinancing an existing loan,
                            or exploring your financing options, our advisors are here to help you
                            make a confident decision.
                        </p>

                        <div className="cta-buttons mt-10 flex justify-center">
                            <Link
                                href="/contact"
                                className="
            px-8 py-4
            rounded-xl
            bg-gradient-to-r from-[#ff9805] to-[#ffb547]
            text-white
            font-medium
            shadow-lg
            hover:shadow-xl
            hover:scale-105
            active:scale-95
            transition-all duration-300
          "
                            >
                                Talk to a Home Loan Advisor
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}