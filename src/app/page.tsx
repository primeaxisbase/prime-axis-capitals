"use client";

import { useState, useEffect, useCallback } from "react";
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
import { LegalPage } from "@/components/legal/legal-page";
import { CareersPage } from "@/components/pages/careers-page";
import { PressPage } from "@/components/pages/press-page";
import { BlogPage } from "@/components/pages/blog-page";
import { AboutPage } from "@/components/pages/about-page";

export type PageType = "home" | "privacy" | "terms" | "refund" | "grievance" | "careers" | "press" | "blog" | "about";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedLoanType, setSelectedLoanType] = useState<string | null>(null);

  const handleNavigate = useCallback((page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLoanSelect = useCallback((loanType: string) => {
    setSelectedLoanType(loanType);
    setCurrentPage("home");
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

  if (currentPage !== "home") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header onNavigate={handleNavigate} />
        <main className="flex-1">
          {currentPage === "about" && <AboutPage />}
          {currentPage === "careers" && <CareersPage />}
          {currentPage === "press" && <PressPage />}
          {currentPage === "blog" && <BlogPage />}
          {["privacy", "terms", "refund", "grievance"].includes(currentPage) && (
            <LegalPage page={currentPage as "privacy" | "terms" | "refund" | "grievance"} onNavigate={handleNavigate} />
          )}
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

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
