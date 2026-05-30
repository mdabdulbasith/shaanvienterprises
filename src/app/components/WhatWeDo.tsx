"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: "Thoughtful Guidance",
    description:
      "We take time to understand your goals — financial, personal, or professional — before recommending any path forward.",
  },
  {
    title: "Built Around Trust",
    description:
      "Transparency and consistency are our foundation. Long-term relationships matter more than short-term transactions.",
  },
  {
    title: "Modern Perspective",
    description:
      "We blend contemporary tools with human expertise to deliver solutions that fit today's evolving lifestyles.",
  },
  {
    title: "Calm & Personalized",
    description:
      "Complex decisions become simple when you have a partner who listens carefully and acts with care.",
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
          once: true,
        },
      });

      tl.fromTo(
        ".heading-reveal",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: "power4.out" }
      );

      tl.fromTo(
        ".copy-reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.8"
      );

      tl.fromTo(
        ".principle-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: { each: 0.1 },
          ease: "power4.out",
        },
        "-=0.7"
      );

      tl.fromTo(
        ".principle-line",
        { width: 0 },
        {
          width: 64,
          duration: 0.9,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=1"
      );

      gsap.to(".ambient-orb", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Top divider – subtle */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0F172A]/10 to-transparent" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none">
        <div
          className="w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/noise.webp')" }}
        />
      </div>

      {/* Ambient orb – using muted service colours (Cerulean + Dark Cyan) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ambient-orb absolute top-[-180px] left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-gradient-to-r from-[#1C7293]/10 to-[#32908F]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 md:gap-20 items-start">
          {/* LEFT: Introduction */}
          <div className="max-w-3xl">
            <p className="copy-reveal text-[11px] uppercase tracking-[0.32em] text-[#00B2FE] font-semibold mb-10">
              Who We Are
            </p>

            <h2 className="heading-reveal text-[50px] sm:text-[64px] md:text-[72px] font-[650] tracking-[-0.05em] text-[#0F172A] leading-[1.04] font-sora">
              A Modern
            </h2>
            <h2 className="heading-reveal text-[50px] sm:text-[64px] md:text-[72px] font-[650] tracking-[-0.05em] leading-[1.04] font-sora text-[#4B5563]">
              Ecosystem of Trust
            </h2>

            <p className="copy-reveal mt-8 text-[17px] md:text-[18px] text-[#4B5563] leading-[1.75] max-w-xl font-inter">
              We are a multi‑service platform that brings together finance, real
              estate, global education, insurance, and lifestyle solutions.
              Behind every service is a simple belief:{" "}
              <span className="text-[#00B2FE] font-medium">
                your goals deserve clarity, not complexity
              </span>
              .
            </p>
          </div>

          {/* RIGHT: Principles – with tighter spacing */}
          <div className="space-y-6 w-full">
            {principles.map((item, i) => (
              <div
                key={i}
                className="principle-item group transition-all duration-700 ease-out p-5 rounded-2xl hover:bg-white/50 hover:shadow-sm"
              >
                {/* Line – Fresh Sky accent */}
                <div
                  className="principle-line w-16 h-px bg-gradient-to-r from-[#00B2FE]/60 to-transparent mb-5 opacity-70 group-hover:opacity-100 transition-all duration-700"
                />

                <h3 className="text-[22px] md:text-[26px] tracking-[-0.04em] font-[600] text-[#0F172A] leading-[1.2] font-sora">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] md:text-[16px] leading-[1.7] text-[#4B5563] font-inter max-w-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}