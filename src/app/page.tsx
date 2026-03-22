"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { StatsSection } from "@/components/sections/stats";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { EMICalculatorSection } from "@/components/sections/emi-calculator";
import { PartnersSection } from "@/components/sections/partners";
import { Footer } from "@/components/footer";

export type PageType = "home" | "privacy" | "terms" | "refund" | "grievance" | "careers" | "press" | "blog" | "about";

export default function Home() {
  const router = useRouter();
  const [selectedLoanType, setSelectedLoanType] = useState<string | null>(null);

  const handleNavigate = useCallback((page: PageType) => {
    if (page === "home") {
      router.push("/");
    } else {
      router.push(`/${page}`);
    }
  }, [router]);

  const handleLoanSelect = useCallback((loanType: string) => {
    setSelectedLoanType(loanType);
    setTimeout(() => {
      const ctaSection = document.getElementById("cta");
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  // Handle initial hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#loan-")) {
      const loanType = hash.replace("#loan-", "").replace(/-/g, " ");
      // Use requestAnimationFrame to avoid the lint warning
      requestAnimationFrame(() => {
        handleLoanSelect(loanType);
      });
    }
  }, [handleLoanSelect]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection onLoanSelect={handleLoanSelect} />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <EMICalculatorSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection selectedLoanType={selectedLoanType} />
        <PartnersSection />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
