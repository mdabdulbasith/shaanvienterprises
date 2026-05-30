import Image from "next/image";
import Link from "next/link";
import {
    Home,
    Search,
    FileCheck,
    Handshake,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

export default function RealEstatePage() {
    return (
        <main className="w-full bg-[#F8FAFC]">

            {/* ===================== */}
            {/* HERO */}
            {/* ===================== */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-[42px] md:text-[54px] font-semibold text-[#0F172A] font-sora leading-tight">
                            Real Estate Decisions
                            <span className="block text-[#1C7293] mt-2">
                                Handled with Clarity & Confidence
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-[#4B5563] max-w-xl leading-relaxed">
                            Buying, selling, or investing in property involves more than
                            listings. We manage the entire real estate journey — from
                            evaluation to closure — ensuring informed decisions and
                            smooth execution.
                        </p>
                        <div className="mt-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#FF9805] text-white font-semibold hover:bg-[#E08800] transition shadow-md"
                            >
                                Talk to a Property Advisor
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/real estate.jpg"
                            alt="Professional real estate advisory"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* WHAT WE HANDLE */}
            {/* ===================== */}
            <section className="py-20 md:py-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0F172A] font-sora">
                            What We Handle for You
                        </h2>
                        <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Property Evaluation",
                                desc: "Understand real market value before making any commitment.",
                                icon: Search,
                            },
                            {
                                title: "Buy & Sell Assistance",
                                desc: "Guided transactions with proper due diligence and negotiation.",
                                icon: Home,
                            },
                            {
                                title: "Documentation & Compliance",
                                desc: "Agreements, verification, and legal coordination handled carefully.",
                                icon: FileCheck,
                            },
                            {
                                title: "End-to-End Closure",
                                desc: "From initial discussion to final handover — we stay involved.",
                                icon: Handshake,
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition">
                                    <Icon className="w-8 h-8 text-[#1C7293] mb-4" strokeWidth={1.6} />
                                    <h3 className="font-semibold text-xl text-[#0F172A] font-sora tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-[#4B5563] text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* OUR APPROACH / PROCESS */}
            {/* ===================== */}
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0F172A] font-sora">
                                Our Approach
                            </h2>
                            <div className="w-16 h-[2px] bg-[#1C7293] mt-4 rounded-full opacity-60" />
                            <div className="mt-10 space-y-10">
                                {[
                                    {
                                        step: "01",
                                        title: "Understand Your Requirement",
                                        desc: "We start by understanding your budget, purpose, timeline, and preferences.",
                                    },
                                    {
                                        step: "02",
                                        title: "Evaluate Options",
                                        desc: "Shortlisting properties based on feasibility, risk, and long-term value.",
                                    },
                                    {
                                        step: "03",
                                        title: "Execute the Process",
                                        desc: "Negotiation, coordination, documentation, and follow-ups handled by us.",
                                    },
                                    {
                                        step: "04",
                                        title: "Successful Closure",
                                        desc: "We stay involved until the transaction is fully completed.",
                                    },
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-5">
                                        <div className="text-2xl font-bold text-[#1C7293] min-w-[50px]">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#0F172A] font-sora">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-[#4B5563] leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* RIGHT – IMAGE with exact dimensions as requested */}
                        <div className="relative flex justify-center">
                            <div className="relative w-[697px] h-[722px] rounded-[24px] overflow-hidden shadow-lg">
                                <Image
                                    src="/real estate 1.jpg"
                                    alt="Real estate advisory process"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* WHY US */}
            {/* ===================== */}
            <section className="py-16 bg-[#F8FAFC]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="p-8 rounded-xl bg-white border border-gray-200/60 shadow-sm">
                        <ShieldCheck className="w-10 h-10 text-[#1C7293] mx-auto mb-5" strokeWidth={1.6} />
                        <p className="text-lg text-[#0F172A] leading-relaxed">
                            We don’t push properties. We protect your interests.
                            Our role is to help you make a decision you’ll be
                            comfortable with long after the transaction is done.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}