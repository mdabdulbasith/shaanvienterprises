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
                            Helping You Choose the Right Loan
                            <span className="block text-[#1C7293] mt-2">
                                with Confidence
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-[#4B5563] max-w-xl">
                            At Shaanvi Enterprises, we simplify home loans, business loans, personal loans, and education loans by connecting you with trusted banks and financial institutions in India.
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
            {/* LOAN SOLUTIONS */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] font-sora">
                            Explore Our Loan Solutions
                        </h2>

                        <p className="mt-5 text-[#4B5563] text-lg">
                            Whether you're buying your dream home, pursuing higher education,
                            or looking for financial support, we help you find the right loan
                            through trusted banking partners.
                        </p>

                        <div className="w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-60" />
                    </div>

                    {/* FEATURED */}
                    <div className="mb-20">

                        <h3 className="text-2xl font-semibold text-[#0F172A] mb-8">
                            Featured Loan Solutions
                        </h3>

                        <div className="grid lg:grid-cols-2 gap-8">

                            {/* HOME LOAN */}
                            <Link
                                href="/loans/home-loan"
                                className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition duration-500"
                            >
                                <div className="relative h-72">
                                    <Image
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                                        alt="Home Loan"
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                </div>

                                <div className="p-8">

                                    <div className="flex items-center gap-3 mb-4">
                                        <Home className="text-[#1C7293]" />
                                        <h3 className="text-2xl font-semibold text-[#0F172A]">
                                            Home Loans
                                        </h3>
                                    </div>

                                    <p className="text-[#4B5563] leading-relaxed">
                                        Purchase your dream home with competitive interest rates,
                                        flexible repayment options, and end-to-end documentation support.
                                    </p>

                                    <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1C7293] group-hover:gap-3 transition-all">
                                        Learn More
                                        <ArrowRight size={18} />
                                    </div>

                                </div>
                            </Link>

                            {/* EDUCATION */}
                            <Link
                                href="/loans/education-loan"
                                className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition duration-500"
                            >
                                <div className="relative h-72">
                                    <Image
                                        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                                        alt="Education Loan"
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                </div>

                                <div className="p-8">

                                    <div className="flex items-center gap-3 mb-4">
                                        <GraduationCap className="text-[#1C7293]" />
                                        <h3 className="text-2xl font-semibold text-[#0F172A]">
                                            Education Loans
                                        </h3>
                                    </div>

                                    <p className="text-[#4B5563] leading-relaxed">
                                        Finance your education in India or abroad with flexible
                                        repayment plans and expert guidance throughout the process.
                                    </p>

                                    <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1C7293] group-hover:gap-3 transition-all">
                                        Learn More
                                        <ArrowRight size={18} />
                                    </div>

                                </div>
                            </Link>

                        </div>

                    </div>

                    {/* OTHER LOANS */}
                    <div>

                        <h3 className="text-2xl font-semibold text-[#0F172A] mb-8">
                            Other Loan Solutions
                        </h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            <LoanCard
                                icon={<Building />}
                                title="Business Loans"
                                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
                                desc="Funding solutions to help your business grow."
                                buttonText="Enquire Now"
                                href="/contact"
                            />

                            <LoanCard
                                icon={<Car />}
                                title="Vehicle Loans"
                                image="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                                desc="Finance your new car or two-wheeler with ease."
                                buttonText="Enquire Now"
                                href="/contact"
                            />

                            <LoanCard
                                icon={<Landmark />}
                                title="Loan Against Property"
                                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                                desc="Unlock the value of your property with flexible funding."
                                buttonText="Enquire Now"
                                href="/contact"
                            />

                            <LoanCard
                                icon={<Home />}
                                title="Personal Loans"
                                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                                desc="Quick financial support for your personal needs."
                                buttonText="Enquire Now"
                                href="/contact"
                            />

                        </div>

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
function LoanCard({
    icon,
    title,
    desc,
    image,
    href,
    buttonText,
}: any) {
    return (
        <Link
            href={href}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            <div className="p-5">

                <div className="flex items-center gap-3 mb-3 text-[#1C7293]">
                    {icon}
                    <h3 className="font-semibold text-lg text-[#0F172A]">
                        {title}
                    </h3>
                </div>

                <p className="text-[#4B5563] text-sm leading-relaxed">
                    {desc}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-[#1C7293] font-medium group-hover:gap-3 transition-all">
                    {buttonText}
                    <ArrowRight size={16} />
                </div>

            </div>
        </Link>
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