"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Bangalore",
    service: "Home Loan",
    message:
      "Shaanvi Enterprises made my home loan process extremely smooth. They explained every option clearly and helped me choose the right bank.",
  },
  {
    name: "Ananya Reddy",
    location: "Hyderabad",
    service: "Abroad Studies",
    message:
      "From university shortlisting to documentation, their guidance was honest and practical. I always felt supported at every step.",
  },
  {
    name: "Vikram Patel",
    location: "Ahmedabad",
    service: "Insurance & Investment",
    message:
      "What I liked most was the transparency. No pressure, no confusion — just clear advice based on my needs.",
  },
];

const accentColor = "#1C7293"; // Cerulean

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-heading",
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
        ".testimonial-sub",
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
        ".testimonial-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.to(".testimonial-orb", {
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
        <div className="testimonial-orb absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-[#1C7293]/10 to-[#32908F]/10 rounded-full blur-[120px]" />
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="testimonial-heading text-[40px] md:text-[56px] font-semibold text-[#0F172A] font-sora tracking-tight">
            What Our Clients Say
          </h2>

          <p className="testimonial-sub mt-5 text-[#4B5563] text-lg">
            Real experiences from people who trusted us with important decisions.
          </p>

          {/* Divider – muted accent */}
          <div className="testimonial-sub w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-60" />
        </div>

        {/* CARDS */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial-card group relative bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
            >
              {/* Removed the glow overlay – only subtle hover lift remains */}

              <div className="relative z-10 flex flex-col h-full">
                <div>
                  {/* Quote Icon – muted accent */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1C7293]/10 text-[#1C7293] mb-5 transition-all duration-300 group-hover:bg-[#1C7293]/20">
                    <Quote className="w-5 h-5" strokeWidth={1.8} />
                  </div>

                  {/* Message */}
                  <p className="text-[#0F172A] leading-relaxed mb-8 text-[15.5px] font-inter">
                    “{item.message}”
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#1C7293]/30 to-transparent mb-6" />
                  <div>
                    <p className="font-semibold text-[#0F172A] font-sora">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#4B5563]">
                      {item.service} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}