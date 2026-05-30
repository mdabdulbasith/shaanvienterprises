"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Landmark,
  Building2,
  ShieldCheck,
  GraduationCap,
  Wallet,
  Paintbrush,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-md shadow-black/5"
            : "bg-transparent"
        }`}
      >
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B2FE]/40 to-transparent" />
        )}

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[88px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setOpen(false)}
              aria-label="Home"
            >
              <div className="relative">
                <Image
                  src="/Logo.png"
                  alt="Shaanvi Enterprises Logo"
                  width={48}
                  height={48}
                  priority
                  className="object-contain sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9805] to-[#00B2FE] rounded-full blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
              </div>

              <div className="leading-tight">
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold font-sora">
                  <span className="text-[#FF9805]">Shaanvi</span>{" "}
                  <span className="text-[#00B2FE]">Enterprises</span>
                </div>
                <div className="hidden sm:block text-[9px] lg:text-[11px] font-medium uppercase tracking-widest text-gray-500 font-inter">
                  Always deliver more than expected
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10 xl:gap-12">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 font-inter font-medium text-[#0F172A]/80 hover:text-[#0F172A] transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B2FE] rounded-md px-2 py-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 opacity-0 invisible translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                  <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200/60" />
                    <div className="p-2">
                      <DropdownLink href="/loans" icon={<Landmark size={18} strokeWidth={1.8} />}>
                        Loans
                      </DropdownLink>
                      <DropdownLink href="/real-estate" icon={<Building2 size={18} strokeWidth={1.8} />}>
                        Real Estate
                      </DropdownLink>
                      <DropdownLink href="/insurance" icon={<ShieldCheck size={18} strokeWidth={1.8} />}>
                        Insurance
                      </DropdownLink>
                      <DropdownLink href="/abroad-studies" icon={<GraduationCap size={18} strokeWidth={1.8} />}>
                        Abroad Studies
                      </DropdownLink>
                      <DropdownLink href="/interior-design" icon={<Paintbrush size={18} strokeWidth={1.8} />}>
                        Interior Design
                      </DropdownLink>
                      <DropdownLink href="/private-finance" icon={<Wallet size={18} strokeWidth={1.8} />}>
                        Private Finance
                      </DropdownLink>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink href="/contact">Contact</NavLink>

              {/* CTA Button – Fresh Sky */}
              <Link
                href="/contact"
                className="relative px-6 py-2.5 rounded-xl font-inter font-semibold text-white bg-[#00B2FE] shadow-md shadow-[#00B2FE]/20 hover:shadow-[0_0_20px_rgba(0,178,254,0.4)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </Link>
            </div>

            {/* Mobile Menu Button – dark icon for light bg */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300 text-[#0F172A] hover:bg-gray-100 hover:border-[#00B2FE] transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B2FE]"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    open ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                >
                  <Menu size={20} />
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    open ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                >
                  <X size={20} />
                </span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay – light theme */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel – light */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 border-l border-gray-200 backdrop-blur-2xl bg-white/95 z-40 lg:hidden shadow-2xl transition-transform duration-500 ease-out overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="pt-20 pb-8 px-6 space-y-1">
          <MobileLink href="/" onClick={() => setOpen(false)}>
            Home
          </MobileLink>
          <MobileLink href="/about" onClick={() => setOpen(false)}>
            About
          </MobileLink>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#0F172A] font-medium font-inter hover:bg-[#00B2FE]/5 hover:text-[#00B2FE] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B2FE]"
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pt-2 space-y-1">
                <MobileSubLink href="/loans" onClick={() => setOpen(false)} icon={<Landmark size={16} />}>
                  Loans
                </MobileSubLink>
                <MobileSubLink href="/real-estate" onClick={() => setOpen(false)} icon={<Building2 size={16} />}>
                  Real Estate
                </MobileSubLink>
                <MobileSubLink href="/insurance" onClick={() => setOpen(false)} icon={<ShieldCheck size={16} />}>
                  Insurance
                </MobileSubLink>
                <MobileSubLink href="/abroad-studies" onClick={() => setOpen(false)} icon={<GraduationCap size={16} />}>
                  Abroad Studies
                </MobileSubLink>
                <MobileSubLink href="/interior-design" onClick={() => setOpen(false)} icon={<Paintbrush size={16} />}>
                  Interior Design
                </MobileSubLink>
                <MobileSubLink href="/private-finance" onClick={() => setOpen(false)} icon={<Wallet size={16} />}>
                  Private Finance
                </MobileSubLink>
              </div>
            </div>
          </div>

          <MobileLink href="/contact" onClick={() => setOpen(false)}>
            Contact
          </MobileLink>

          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-xl font-inter font-semibold text-white bg-[#00B2FE] shadow-md shadow-[#00B2FE]/20 hover:shadow-lg hover:shadow-[#00B2FE]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------ Helper Components (light mode) ------------------ */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-inter font-medium tracking-wide text-[#0F172A]/80 hover:text-[#0F172A] transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B2FE] rounded-md px-1"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B2FE] group-hover:w-full transition-all duration-300 ease-out" />
      </span>
    </Link>
  );
}

function DropdownLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#0F172A]/80 hover:text-[#00B2FE] hover:bg-[#00B2FE]/5 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B2FE]"
    >
      {icon && (
        <span className="text-[#00B2FE] group-hover:text-[#00B2FE] transition-colors duration-300">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 rounded-xl text-[#0F172A] font-medium font-inter hover:bg-[#00B2FE]/5 hover:text-[#00B2FE] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B2FE]"
    >
      {children}
    </Link>
  );
}

function MobileSubLink({
  href,
  children,
  onClick,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-[#0F172A]/70 font-medium hover:bg-[#00B2FE]/5 hover:text-[#00B2FE] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B2FE]"
    >
      {icon && <span className="text-[#00B2FE]">{icon}</span>}
      <span>{children}</span>
    </Link>
  );
}