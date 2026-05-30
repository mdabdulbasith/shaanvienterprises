"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What services does Shaanvi Enterprises provide?",
    answer:
      "We offer guidance across loans, real estate, insurance, abroad studies, and wellness solutions, helping you make informed financial decisions under one roof.",
  },
  {
    question: "Do you work with multiple banks and institutions?",
    answer:
      "Yes. We are partnered with 35+ banks and financial institutions, allowing us to compare options and recommend what best fits your needs.",
  },
  {
    question: "Is there any cost for consultation?",
    answer:
      "Initial consultation and guidance are provided without obligation. Any applicable charges will always be communicated transparently.",
  },
  {
    question: "How do you ensure unbiased recommendations?",
    answer:
      "Our recommendations are based on your requirements, eligibility, and long-term goals — not commissions or pushy sales tactics.",
  },
  {
    question: "Can I get support after I choose a service?",
    answer:
      "Absolutely. We assist you throughout the entire process until completion, ensuring clarity at every step.",
  },
];

const accentColor = "#1C7293"; // Cerulean

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-heading",
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
        ".faq-sub",
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
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
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
      className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="faq-heading text-[40px] md:text-[52px] font-semibold text-[#0F172A] font-sora tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="faq-sub mt-5 text-[#4B5563] text-lg max-w-xl mx-auto">
            Clear answers to common questions so you can move forward
            with confidence and clarity.
          </p>

          {/* Divider – muted accent */}
          <div className="faq-sub w-16 h-[2px] bg-[#1C7293] mx-auto mt-6 rounded-full opacity-60" />
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                ref={(el) => { faqRefs.current[index] = el; }}
                className="faq-item group rounded-2xl border border-gray-200/60 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[#0F172A] font-medium text-[17px] font-inter">
                    {faq.question}
                  </span>

                  <Plus
                    className={`
                      w-5 h-5 transition-all duration-300
                      ${isOpen ? "rotate-45 text-[#1C7293]" : "text-[#1C7293] opacity-70"}
                    `}
                  />
                </button>

                <div
                  className={`
                    px-6 text-[#4B5563] leading-relaxed text-[15.5px] font-inter
                    transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
                  `}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}