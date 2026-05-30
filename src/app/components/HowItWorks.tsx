"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageCircle,
  ClipboardList,
  Scale,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "01",
    title: "Share Your Requirement",
    description:
      "Tell us what you’re looking for — loans, property, insurance, or global opportunities.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Get Expert Guidance",
    description:
      "We understand your situation and recommend the most suitable options clearly.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Compare & Choose",
    description:
      "Evaluate the best options across services and make confident decisions.",
    icon: Scale,
  },
  {
    step: "04",
    title: "Move Forward Smoothly",
    description:
      "We support you end-to-end — ensuring a simple, transparent, and stress-free process.",
    icon: CheckCircle,
  },
];

const accentColor = "#1C7293"; // Cerulean

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".how-heading",
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
        ".how-sub",
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
        ".how-step",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.to(".how-orb", {
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
      {/* Ambient orb – muted Cerulean + Dark Cyan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="how-orb absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-[#1C7293]/10 to-[#32908F]/10 rounded-full blur-[120px]" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none">
        <div
          className="w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/noise.webp')" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="how-heading text-[40px] md:text-[56px] font-semibold text-[#0F172A] font-sora tracking-tight leading-tight">
            How It Works
            <span className="block text-[#1C7293]">
              A Simple, Guided Process
            </span>
          </h2>

          <p className="how-sub mt-6 text-[#4B5563] text-lg">
            We make complex decisions easy by guiding you step by step,
            with clarity and confidence.
          </p>

          {/* divider – muted accent */}
          <div className="how-sub w-16 h-[2px] bg-[#1C7293] mx-auto mt-8 rounded-full opacity-60" />
        </div>

        {/* STEPS */}
        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="how-step group relative p-6 rounded-3xl bg-white border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Removed the glow overlay – only icon hover effect remains */}
                <div className="relative z-10">
                  {/* STEP NUMBER */}
                  <span className="text-sm font-semibold text-[#1C7293] opacity-70">
                    {item.step}
                  </span>

                  {/* ICON – muted accent */}
                  <div className="mt-4 w-11 h-11 flex items-center justify-center rounded-xl bg-[#1C7293]/10 text-[#1C7293] group-hover:bg-[#1C7293]/20 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-lg font-semibold text-[#0F172A] font-sora tracking-tight">
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom border on hover – optional, but matches consistency */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#1C7293]/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}