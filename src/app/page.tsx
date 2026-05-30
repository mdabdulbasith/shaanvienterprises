import Image from "next/image";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import TrustSection from "./components/TrustSection";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FAQs from "./components/FAQs";

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
