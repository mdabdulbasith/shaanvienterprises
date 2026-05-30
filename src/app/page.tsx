import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import TrustSection from "./components/TrustSection";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FAQs from "./components/FAQs";

export const metadata = {
  title: "Shaanvi Enterprises | Loans, Real Estate, Insurance & Financial Services",
  description:
    "Shaanvi Enterprises provides loans, real estate services, insurance solutions, abroad studies support, interior design, and private finance services in India. Trusted financial and lifestyle solutions under one roof.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <TrustSection />
      <Testimonials />
      <CTA/>
      <FAQs/>
    </>
  );
}
