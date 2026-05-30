"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Landmark,
  UserCheck,
  Layers,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Access to the Right Options",
    description:
      "From loans and insurance to real estate and abroad opportunities — compare the best options in one place.",
    icon: Landmark,
  },
  {
    title: "Guidance That Puts You First",
    description:
      "We understand your goals before recommending anything — no pressure, just the right advice for your situation.",
    icon: UserCheck,
  },
  {
    title: "Everything Under One Roof",
    description:
      "Finance, property, protection, and global opportunities — handled seamlessly by a single trusted team.",
    icon: Layers,
  },
  {
    title: "Clear & Reliable Process",
    description:
      "Transparent steps, honest timelines, and complete clarity from start to finish — across every service.",
    icon: ShieldCheck,
  },
];

const accentColor = "#1C7293";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-heading",
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
        ".why-sub",
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
        ".why-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.to(".why-orb", {
        y: -30,
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
      className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Ambient orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="why-orb absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-[#1C7293]/10 to-[#32908F]/10 rounded-full blur-[120px]" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none">
        <div
          className="w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/noise.webp')" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="why-heading text-[40px] md:text-[56px] font-semibold text-[#0F172A] font-sora tracking-tight leading-tight">
            Why People Trust
            <span className="block text-[#1C7293]">
              Shaanvi Enterprises
            </span>
          </h2>

          <p className="why-sub mt-6 text-[#4B5563] text-lg mx-auto">
            We don’t just provide services — we guide you through
            important decisions with clarity, confidence, and care.
          </p>

          <div className="why-sub w-16 h-[2px] bg-[#1C7293] mx-auto mt-8 rounded-full opacity-60" />
        </div>

        {/* Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="why-card group relative p-8 rounded-3xl bg-white border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Removed the absolute glow div – only icon hover remains */}

                <div className="relative z-10">
                  {/* Icon hover effect only */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1C7293]/10 text-[#1C7293] group-hover:bg-[#1C7293]/20 group-hover:text-[#1C7293] transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#0F172A] font-sora tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom border on hover (optional – keep? can remove if you want nothing else) */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#1C7293]/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}