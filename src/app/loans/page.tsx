"use client";

import Image from "next/image";
import Link from "next/link";
import {
    GraduationCap,
    Home,
    Building,
    Car,
    Landmark,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

export default function LoansPage() {
    return (
        <main className="bg-[#F8FAFC] overflow-hidden">

            {/* HERO – clean, no gradient */}
            <section className="relative py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] font-sora leading-tight">
                            Smart Loan Solutions
                            <span className="block text-[#1C7293] mt-2">
                                For Every Financial Need
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-[#4B5563] max-w-xl">
                            At Shaanvi Enterprises, we simplify loan approvals by connecting
                            you with trusted banks and financial institutions. From education
                            to home and business loans, we guide you through every step.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[#FF9805] text-white hover:bg-[#E08800] transition shadow-md"
                        >
                            Talk to a Loan Advisor
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop"
                            alt="Mortgage consultation"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* LOAN TYPES */}
            <section className="py-20 md:py-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
                            Loan Options We Offer
                        </h2>
                        <p className="text-[#4B5563] mt-4">
                            Flexible financing solutions tailored for individuals and businesses
                        </p>
                        <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <LoanCard
                            icon={<GraduationCap />}
                            title="Education Loans"
                            image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                            desc="Funding for higher education in India and abroad with flexible repayment plans."
                        />
                        <LoanCard
                            icon={<Home />}
                            title="Home Loans"
                            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                            desc="Affordable home financing solutions with competitive interest rates."
                        />
                        <LoanCard
                            icon={<Building />}
                            title="Business Loans"
                            image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
                            desc="Capital solutions to grow and expand your business operations."
                        />
                        <LoanCard
                            icon={<Car />}
                            title="Vehicle Loans"
                            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                            desc="Finance your dream car or two-wheeler with easy EMI options."
                        />
                        <LoanCard
                            icon={<Landmark />}
                            title="Loan Against Property"
                            image="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                            desc="Leverage your property to unlock significant funding opportunities."
                        />
                        <LoanCard
                            icon={<Home />}
                            title="Personal Loans"
                            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                            desc="Quick loans for emergencies, travel, weddings, and personal expenses."
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                            alt="Loan advisor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#0F172A] font-sora">
                            Why Choose Shaanvi Enterprises
                        </h2>
                        <p className="mt-4 text-[#4B5563]">
                            Our financial experts simplify the loan process and help you
                            secure the best deals from leading banks and lenders.
                        </p>
                        <div className="mt-8 space-y-4">
                            <Benefit text="35+ trusted bank partnerships" />
                            <Benefit text="Expert documentation support" />
                            <Benefit text="Competitive interest rates" />
                            <Benefit text="Fast loan approvals" />
                            <Benefit text="Personalized financial guidance" />
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 md:py-24 bg-[#F8FAFC]">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-sora">
                        Simple 4 Step Loan Process
                    </h2>
                    <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-5 rounded-full opacity-60" />
                    <div className="grid md:grid-cols-4 gap-8 mt-14">
                        <Process number="01" title="Consultation" desc="Discuss your financial needs with our advisors." />
                        <Process number="02" title="Documentation" desc="Prepare and submit required loan documents." />
                        <Process number="03" title="Bank Matching" desc="We connect you with the best lender." />
                        <Process number="04" title="Loan Approval" desc="Quick approval and fund disbursement." />
                    </div>
                </div>
            </section>

            {/* CTA – muted background with bright button */}
            <section className="py-20 bg-[#1C7293] text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-sora">
                    Ready to Get Your Loan Approved?
                </h2>
                <p className="mt-4 text-white/90 max-w-xl mx-auto">
                    Speak with our loan experts today and discover the best financial
                    solutions tailored for you.
                </p>
                <Link
                    href="/contact"
                    className="mt-8 inline-block bg-[#FF9805] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#E08800] transition shadow-md"
                >
                    Apply for Loan
                </Link>
            </section>
        </main>
    );
}

/* COMPONENTS – updated colors */
function LoanCard({ icon, title, desc, image }: any) {
    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                />
            </div>
            <div className="p-5">
                <div className="flex items-center gap-3 text-[#1C7293] mb-2">
                    {icon}
                    <h3 className="font-semibold text-lg text-[#0F172A]">{title}</h3>
                </div>
                <p className="text-[#4B5563] text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function Benefit({ text }: any) {
    return (
        <div className="flex items-start gap-3">
            <CheckCircle className="text-[#1C7293] mt-1" size={18} />
            <p className="text-[#4B5563]">{text}</p>
        </div>
    );
}

function Process({ number, title, desc }: any) {
    return (
        <div className="p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition">
            <div className="text-2xl font-bold text-[#1C7293]">{number}</div>
            <h3 className="mt-3 font-semibold text-lg text-[#0F172A]">{title}</h3>
            <p className="text-[#4B5563] text-sm mt-2 leading-relaxed">{desc}</p>
        </div>
    );
}