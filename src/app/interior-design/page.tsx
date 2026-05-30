"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InteriorDesignPage() {
    return (
        <main className="bg-[#F8FAFC] overflow-hidden">

            {/* HERO */}
            <section className="relative pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}
                        <div>

                            <span className="inline-block text-sm tracking-[0.3em] uppercase text-[#B27C66] font-medium">
                                Interior Designing
                            </span>

                            <h1 className="mt-6 text-[52px] sm:text-[68px] lg:text-[84px] leading-[0.95] tracking-[-0.05em] font-semibold text-[#0F172A]">
                                Spaces That Feel
                                <br />
                                As Good As
                                <br />
                                They Look
                            </h1>

                            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">
                                We create timeless interiors that blend aesthetics,
                                functionality, and comfort — transforming homes,
                                offices, and commercial spaces into environments
                                that inspire every day.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="
                    px-8 py-4 rounded-full
                    bg-[#B27C66]
                    text-white
                    font-medium
                    hover:bg-[#9e6d58]
                    transition
                  "
                                >
                                    Book Consultation
                                </Link>

                                <Link
                                    href="#projects"
                                    className="
                    px-8 py-4 rounded-full
                    border border-[#57737A]/20
                    text-[#0F172A]
                    hover:bg-white
                    transition
                  "
                                >
                                    View Projects
                                </Link>

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative">

                            <div className="relative h-[650px] rounded-[32px] overflow-hidden">

                                <Image
                                    src="/interior1.jpg"
                                    alt="Interior Design"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                            </div>

                            <div
                                className="
                  absolute
                  -bottom-8
                  -left-8
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-xl
                "
                            >
                                <p className="text-sm text-slate-500">
                                    Projects Completed
                                </p>

                                <h3 className="text-3xl font-semibold text-[#0F172A] mt-1">
                                    100+
                                </h3>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* DESIGN WITH PURPOSE */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    <div className="grid lg:grid-cols-2 gap-20">

                        <div>

                            <span className="text-sm uppercase tracking-[0.3em] text-[#B27C66]">
                                Our Philosophy
                            </span>

                            <h2 className="mt-5 text-[42px] md:text-[56px] leading-[1] tracking-[-0.04em] font-semibold text-[#0F172A]">
                                Design With
                                Purpose
                            </h2>

                        </div>

                        <div>

                            <p className="text-lg leading-9 text-slate-600">
                                Every space tells a story.
                                Our design approach combines thoughtful planning,
                                premium materials, and attention to detail to
                                create interiors that reflect your personality
                                and lifestyle.
                            </p>

                            <p className="mt-8 text-lg leading-9 text-slate-600">
                                Whether it's a luxury residence, modern office,
                                retail outlet, or hospitality project, we focus
                                on creating environments that are both beautiful
                                and functional.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* STATS */}
            <section className="pb-28">

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    <div
                        className="
              rounded-[32px]
              bg-[#F5F1EE]
              p-10 md:p-16
            "
                    >

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

                            <div>
                                <h3 className="text-5xl font-semibold text-[#0F172A]">
                                    100+
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Projects Completed
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-semibold text-[#0F172A]">
                                    95%
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Client Satisfaction
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-semibold text-[#0F172A]">
                                    10+
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Design Specialists
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-semibold text-[#0F172A]">
                                    500K+
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Sq Ft Designed
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FEATURED SPACES */}
            <section id="projects" className="pb-32">

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    {/* SECTION HEADER */}
                    <div className="mb-20">

                        <span className="text-sm uppercase tracking-[0.3em] text-[#B27C66]">
                            Featured Spaces
                        </span>

                        <h2 className="mt-5 text-[42px] md:text-[56px] leading-[1] tracking-[-0.04em] font-semibold text-[#0F172A]">
                            Designed Around
                            <br />
                            Real Living
                        </h2>

                    </div>

                    {/* LIVING ROOM */}

                    {/* LIVING ROOM */}
                    <div className="mb-40">

                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

                            <div>

                                <span className="text-sm uppercase tracking-[0.3em] text-[#B27C66]">
                                    Signature Collection
                                </span>

                                <h3 className="mt-4 text-[42px] md:text-[56px] leading-none tracking-[-0.04em] font-semibold text-[#0F172A]">
                                    Living Room
                                </h3>

                                <p className="mt-5 text-lg leading-8 text-slate-600 max-w-2xl">
                                    Elegant living spaces designed to balance comfort,
                                    functionality, and timeless sophistication.
                                </p>

                            </div>

                            <span className="text-[#B27C66] font-medium text-lg">
                                16 Featured Spaces
                            </span>

                        </div>

                        {/* IMAGE SLIDER */}
                        <div className="relative">

                            <div
                                className="
        flex overflow-x-auto
        snap-x snap-mandatory
        scrollbar-hide
        rounded-[32px]
      "
                            >

                                {Array.from({ length: 16 }, (_, i) => i + 1).map((item) => (

                                    <div
                                        key={item}
                                        className="
            relative
            min-w-full
            h-[750px]
            snap-center
            overflow-hidden
            group
          "
                                    >

                                        <Image
                                            src={`/living-room${item}.png`}
                                            alt={`Living Room ${item}`}
                                            fill
                                            className="
              object-cover
              transition-transform
              duration-1000
              group-hover:scale-105
            "
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                                        {/* Counter */}
                                        <div
                                            className="
              absolute
              bottom-8
              right-8
              px-5
              py-2
              rounded-full
              bg-white/90
              backdrop-blur-md
              text-sm
              font-medium
              text-[#0F172A]
            "
                                        >
                                            {item} / 16
                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* MASTER BEDROOM */}
                    <div className="mb-32">

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            <div>

                                <span className="text-[#B27C66] uppercase tracking-[0.25em] text-sm">
                                    09 Projects
                                </span>

                                <h3 className="mt-4 text-4xl font-semibold text-[#0F172A]">
                                    Master Bedroom
                                </h3>

                                <p className="mt-6 text-slate-600 leading-8">
                                    Carefully curated spaces that combine comfort,
                                    warmth, and timeless sophistication.
                                </p>

                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="relative h-[250px] rounded-[24px] overflow-hidden">
                                    <Image
                                        src="/mbr1.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="relative h-[250px] rounded-[24px] overflow-hidden">
                                    <Image
                                        src="/mbr2.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="relative h-[250px] rounded-[24px] overflow-hidden">
                                    <Image
                                        src="/mbr3.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="relative h-[250px] rounded-[24px] overflow-hidden">
                                    <Image
                                        src="/mbr4.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* CHILDREN BEDROOM */}
                    <div className="mb-32">

                        <h3 className="text-4xl font-semibold text-[#0F172A] mb-10">
                            Children's Bedroom
                        </h3>

                        <div className="grid md:grid-cols-3 gap-5">

                            <div className="relative h-[520px] rounded-[28px] overflow-hidden">
                                <Image
                                    src="/cbr1.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative h-[520px] rounded-[28px] overflow-hidden">
                                <Image
                                    src="/cbr2.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative h-[520px] rounded-[28px] overflow-hidden">
                                <Image
                                    src="/cbr3.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>

                    </div>

                    {/* PENTHOUSE */}
                    <div className="mb-32">

                        <h3 className="text-4xl font-semibold text-[#0F172A] mb-10">
                            Penthouse
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">

                            <div className="relative h-[700px] rounded-[28px] overflow-hidden">
                                <Image
                                    src="/ph1.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="grid gap-5">

                                <div className="relative h-[340px] rounded-[28px] overflow-hidden">
                                    <Image
                                        src="/ph2.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="relative h-[340px] rounded-[28px] overflow-hidden">
                                    <Image
                                        src="/ph3.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* BAR UNIT */}
                    <div
                        className="
        bg-[#0F172A]
        rounded-[32px]
        p-8 md:p-12
      "
                    >

                        <div className="flex items-center justify-between mb-10">

                            <h3 className="text-4xl font-semibold text-white">
                                Bar Unit
                            </h3>

                            <span className="text-[#B27C66]">
                                04 Projects
                            </span>

                        </div>

                        <div className="grid md:grid-cols-2 gap-5">

                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="
              relative
              h-[350px]
              rounded-[24px]
              overflow-hidden
            "
                                >
                                    <Image
                                        src={`/bu${item}.png`}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>
            {/* DESIGN PROCESS */}
            <section className="py-32 bg-[#F5F1EE]">

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    <div className="text-center mb-20">

                        <span className="text-sm uppercase tracking-[0.3em] text-[#B27C66]">
                            Our Process
                        </span>

                        <h2 className="mt-5 text-[42px] md:text-[56px] leading-[1] tracking-[-0.04em] font-semibold text-[#0F172A]">
                            From Vision
                            <br />
                            To Reality
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-5 gap-6">

                        {[
                            "Discovery",
                            "Space Planning",
                            "Design Concept",
                            "Execution",
                            "Final Styling",
                        ].map((item, index) => (

                            <div
                                key={item}
                                className="
            bg-white
            rounded-[28px]
            p-8
            border border-black/5
          "
                            >

                                <span className="text-5xl font-semibold text-[#B27C66]/30">
                                    0{index + 1}
                                </span>

                                <h3 className="mt-8 text-xl font-semibold text-[#0F172A]">
                                    {item}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* TESTIMONIALS */}
            <section className="py-32">

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    <div className="text-center mb-20">

                        <span className="text-sm uppercase tracking-[0.3em] text-[#B27C66]">
                            Client Stories
                        </span>

                        <h2 className="mt-5 text-[42px] md:text-[56px] leading-[1] tracking-[-0.04em] font-semibold text-[#0F172A]">
                            What Our Clients Say
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                quote:
                                    "Exceptional attention to detail. The team transformed our home into a space that feels elegant, warm, and functional.",
                                name: "Residential Client",
                            },
                            {
                                quote:
                                    "From concept to execution, everything was handled professionally. The final outcome exceeded expectations.",
                                name: "Penthouse Owner",
                            },
                            {
                                quote:
                                    "A seamless experience from start to finish. Creative ideas, transparent communication, and beautiful results.",
                                name: "Commercial Client",
                            },
                        ].map((item) => (

                            <div
                                key={item.name}
                                className="
            bg-white
            rounded-[28px]
            p-8
            border border-black/5
            shadow-[0_10px_30px_rgba(0,0,0,0.04)]
          "
                            >

                                <p className="text-lg leading-8 text-slate-600">
                                    "{item.quote}"
                                </p>

                                <div className="mt-8">

                                    <h4 className="font-semibold text-[#0F172A]">
                                        {item.name}
                                    </h4>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* FINAL CTA */}
            <section className="pb-32">

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    <div
                        className="
        bg-[#0F172A]
        rounded-[40px]
        px-8 md:px-16
        py-20
        text-center
      "
                    >

                        <span className="text-sm uppercase tracking-[0.3em] text-[#B27C66]">
                            Start Your Project
                        </span>

                        <h2
                            className="
          mt-6
          text-[42px]
          md:text-[64px]
          leading-[1]
          tracking-[-0.04em]
          font-semibold
          text-white
        "
                        >
                            Let's Design
                            <br />
                            Your Dream Space
                        </h2>

                        <p
                            className="
          mt-8
          max-w-2xl
          mx-auto
          text-lg
          leading-8
          text-slate-300
        "
                        >
                            Whether it's a luxury residence, modern workspace,
                            penthouse, or custom interior solution, we're ready
                            to bring your vision to life.
                        </p>

                        <Link
                            href="/contact"
                            className="
          inline-flex
          items-center
          gap-3
          mt-10
          px-8
          py-4
          rounded-full
          bg-[#B27C66]
          text-white
          font-medium
          hover:bg-[#9e6d58]
          transition
        "
                        >
                            Book Free Consultation
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                    </div>

                </div>

            </section>
        </main>
    );
}