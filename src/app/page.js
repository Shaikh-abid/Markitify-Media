"use client";

import Companies from "@/Components/Companies";
import ContactandFAQ from "@/Components/ContactandFAQ";
import Demo from "@/Components/Demo";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Portfolio from "@/Components/Portfolio";
import Quotation from "@/Components/Quotation";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Quotation />
      <Companies />
      <Testimonials />
      <Portfolio />

      <ContactandFAQ />
      <Footer />
      {/* <Timepass />  */}

      {/* <Demo /> */}
    </div>
  );
}
