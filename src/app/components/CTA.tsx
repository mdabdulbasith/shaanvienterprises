"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-heading",
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
        ".cta-sub",
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
        ".cta-buttons",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[#0f172a] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="cta-heading text-[40px] md:text-[52px] font-semibold text-white font-sora tracking-tight leading-tight">
            Ready to Make the Right Decision?
          </h2>

          <p className="cta-sub mt-6 text-white/80 text-lg">
            Speak with an advisor and get clear, honest guidance tailored to your needs — no pressure, no confusion.
          </p>

          <div className="cta-buttons mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl bg-[#ff9805] text-white font-medium shadow-md hover:bg-[#E08800] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Talk to an Advisor
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}