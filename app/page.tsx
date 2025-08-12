"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustPilot from "@/components/TrustPilot";
import Clients from "@/components/Clients";
import InvoiceCarousel from "@/components/InvoiceCarousel";
import WhyUs from "@/components/WhyUs";
import Faq from "@/components/Faq";

export default function Page() {
  const [route, setRoute] = useState("home");

  return (
    <div className="min-h-screen">
      <Header onGoto={setRoute} />
      <main>
        <Hero onGoto={setRoute} />
        <TrustPilot />
        <Clients />
        <InvoiceCarousel onGoto={setRoute} />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
