"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-20">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* BRAND */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/Logo.png"
                alt="Shaanvi Enterprises"
                width={42}
                height={42}
                className="object-contain"
              />
              <span className="text-2xl font-semibold text-white font-sora">
                Shaanvi Enterprises
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Shaanvi Enterprises provides trusted guidance across loans,
              real estate, insurance, abroad studies, and interior design.
              We help individuals and families make confident financial
              decisions with clarity and care.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {/* SERVICES */}
            <div>
              <h4 className="text-sm font-semibold mb-5 text-white/80 uppercase tracking-wide">
                Services
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/loans" className="text-gray-300 hover:text-white transition">Loan Services</Link></li>
                <li><Link href="/real-estate" className="text-gray-300 hover:text-white transition">Real Estate</Link></li>
                <li><Link href="/insurance" className="text-gray-300 hover:text-white transition">Insurance</Link></li>
                <li><Link href="/abroad-studies" className="text-gray-300 hover:text-white transition">Abroad Studies</Link></li>
                <li><Link href="/interior-design" className="text-gray-300 hover:text-white transition">Interior Design</Link></li>
                <li><Link href="/private-finance" className="text-gray-300 hover:text-white transition">Private Finance</Link></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="text-sm font-semibold mb-5 text-white/80 uppercase tracking-wide">
                Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition">Terms of Use</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/disclosures" className="text-gray-300 hover:text-white transition">Disclosures</Link></li>
                <li><Link href="/licenses" className="text-gray-300 hover:text-white transition">Licenses</Link></li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="text-sm font-semibold mb-5 text-white/80 uppercase tracking-wide">
                Support
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Talk to an Advisor</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shaanvi Enterprises. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[Linkedin, Facebook, Instagram, X].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}