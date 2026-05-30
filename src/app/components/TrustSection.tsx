"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Landmark,
  ShieldCheck,
  Users,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "35+", label: "Bank Tie-ups", icon: Landmark },
  { value: "1000+", label: "Clients Guided", icon: Users },
  { value: "Multiple", label: "Service Verticals", icon: CheckCircle },
  { value: "Transparent", label: "Process", icon: ShieldCheck },
];

const accentColor = "#1C7293"; // Cerulean

export default function TrustSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".trust-heading",
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
        ".trust-sub",
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
        ".trust-stat",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.to(".trust-orb", {
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
        <div className="trust-orb absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-[#1C7293]/10 to-[#32908F]/10 rounded-full blur-[120px]" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none">
        <div
          className="w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/noise.webp')" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="trust-heading text-[38px] md:text-[52px] font-semibold text-[#0F172A] font-sora tracking-tight">
            Trusted by Clients.
            <span className="block text-[#1C7293]">
              Proven by Results
            </span>
          </h2>

          <p className="trust-sub mt-5 text-[#4B5563] text-lg">
            Real outcomes, reliable guidance, and long-term relationships built on trust.
          </p>

          {/* Subtle divider */}
          <div className="trust-sub w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-60" />
        </div>

        {/* STATS STRIP */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="trust-stat flex flex-col items-center">
                {/* Icon – muted accent */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1C7293]/10 text-[#1C7293] transition-all duration-300 group-hover:bg-[#1C7293]/20">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>

                {/* Value */}
                <p className="mt-4 text-3xl md:text-4xl font-semibold text-[#0F172A]">
                  {item.value}
                </p>

                {/* Label */}
                <p className="mt-2 text-[#4B5563] text-sm font-medium">
                  {item.label}
                </p>

                {/* subtle divider */}
                <div className="w-6 h-[2px] bg-[#1C7293]/30 mt-3 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}