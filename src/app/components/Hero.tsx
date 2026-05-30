"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-[80px] lg:pt-[88px]">
      {/* Gradient background – orange at bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #FF9805 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] font-sora leading-[1.2]">
            Smart Financial <br />
            <span className="text-[#00B2FE]">& Lifestyle Solutions</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-5 text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto font-inter"
        >
          One destination for loans, real estate, insurance, abroad studies, interior design, and private finance. Seamlessly integrated. Expertly delivered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <button className="px-7 py-3 rounded-full bg-[#00B2FE] text-white font-medium shadow-md hover:bg-[#0099DD] transition-all duration-300 hover:scale-105">
            Get Free Consultation
          </button>
          <button className="px-7 py-3 rounded-full border border-[#0F172A]/20 text-[#0F172A] font-medium hover:bg-[#0F172A]/5 transition-all duration-300 hover:scale-105">
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}