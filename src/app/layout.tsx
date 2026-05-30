import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "Shaanvi Enterprises | Loans, Real Estate, Insurance & Abroad Studies",
    template: "%s | Shaanvi Enterprises",
  },
  description:
    "Shaanvi Enterprises offers premium solutions in loans, abroad studies, real estate, interiors, insurance, and private finance — all under one trusted ecosystem.",
  keywords: [
    "Loans",
    "Education Loans",
    "Home Loans",
    "Real Estate",
    "Insurance",
    "Abroad Studies",
    "Study Abroad Consultants",
    "Interior Design",
    "Private Finance",
  ],
  openGraph: {
    title: "Shaanvi Enterprises",
    description:
      "Loans, Real Estate, Insurance & Abroad Studies — expert guidance under one roof.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} bg-[#050816] text-white antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
