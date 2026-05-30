"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Banknote,
  Home,
  ShieldCheck,
  GraduationCap,
  Paintbrush,
  Wallet,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Loan Services",
    icon: Banknote,
    image: "/loan2.jpg",
    href: "/loans",
    description:
      "Home, business, personal, and education loans through trusted banking partners.",
  },
  {
    title: "Real Estate",
    icon: Home,
    image: "/real estate.jpg",
    href: "/real-estate",
    description:
      "Guidance for buying, selling, and investing in property with clarity and confidence.",
  },
  {
    title: "Insurance Services",
    icon: ShieldCheck,
    image: "/insurance.jpg",
    href: "/insurance",
    description:
      "Health, life, and vehicle insurance solutions to protect what matters most.",
  },
  {
    title: "Abroad Studies",
    icon: GraduationCap,
    image: "/abroad studies.jpg",
    href: "/abroad-studies",
    description:
      "End-to-end support for students planning education in top universities worldwide.",
  },
  {
    title: "Interior Designing",
    icon: Paintbrush,
    image: "/interior1.jpg",
    href: "/interior-design",
    description:
      "Modern, functional, and aesthetic interior solutions for homes, offices, and commercial spaces.",
  },
  {
    title: "Private Finance",
    icon: Wallet,
    image: "/private-finance.jpg",
    href: "/private-finance",
    description:
      "Wealth management, investment advisory, and tailored financial planning for individuals and businesses.",
  },
];

// Muted accent colour (Cerulean)
const accentColor = "#1C7293";

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  return (
    <Link
      href={service.href}
      className="service-card group relative overflow-hidden rounded-[4px] bg-white border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* TOP CONTENT */}
      <div className="p-6 md:p-8">
        <h3 className="text-[28px] md:text-[32px] leading-[1.1] font-semibold tracking-[-0.04em] text-[#0F172A] font-sora">
          {service.title}
        </h3>
        <p className="mt-4 text-[14px] leading-[1.7] text-[#4B5563] max-w-md">
          {service.description}
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative h-[280px] md:h-[320px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
      </div>

      {/* CTA BAR */}
      <div className="relative h-[64px] bg-[#1C7293] flex items-center justify-end px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#155A73] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
        <div className="relative z-10 flex items-center gap-3 text-white text-[12px] uppercase tracking-[0.16em] font-medium">
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(
        ".services-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: "power4.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power4.out", scrollTrigger: { trigger: cardsRef.current, start: "top 88%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* HEADER - reduced top margin */}
        <div className="text-center mb-16">
          <h2 className="services-heading text-[34px] md:text-[48px] font-semibold text-[#0F172A] font-sora tracking-[-0.04em]">
            Our Services
          </h2>
          <div className="services-sub w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full" />
          <p className="services-sub mt-6 text-[#4B5563] max-w-2xl mx-auto text-[16px] leading-[1.7]">
            Comprehensive solutions across finance, property, protection, and global opportunities — thoughtfully designed to guide every stage of your journey.
          </p>
        </div>

        {/* CARDS */}
        <div ref={cardsRef} className="grid gap-8 md:gap-10 lg:grid-cols-2">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#4B5563] hover:text-[#1C7293] transition-colors group"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}