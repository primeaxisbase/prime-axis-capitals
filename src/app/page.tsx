"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";

// Lazy load below-the-fold sections for better performance
const HowItWorksSection = dynamic(() => import("@/components/sections/how-it-works").then(mod => ({ default: mod.HowItWorksSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#196b92]"></div></div>
});

const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#196b92]"></div></div>
});

const StatsSection = dynamic(() => import("@/components/sections/stats").then(mod => ({ default: mod.StatsSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#196b92]"></div></div>
});

const FAQSection = dynamic(() => import("@/components/sections/faq").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#196b92]"></div></div>
});

const CTASection = dynamic(() => import("@/components/sections/cta").then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#196b92]"></div></div>
});

const EMICalculatorSection = dynamic(() => import("@/components/sections/emi-calculator").then(mod => ({ default: mod.EMICalculatorSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#196b92]"></div></div>
});

const PartnersSection = dynamic(() => import("@/components/sections/partners").then(mod => ({ default: mod.PartnersSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#196b92]"></div></div>
});

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#196b92]"></div></div>
});

export type PageType = "home" | "privacy" | "terms" | "refund" | "grievance" | "careers" | "blog" | "about";

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
      const ctaSection = document.getElementById("quick-enquiry-card");
      if (ctaSection) {
        const isMobile = window.innerWidth <= 768;
        const headerOffset = isMobile ? 80 : 100; // Reduced offset to bring form more into view
        
        // Get the element's position relative to the viewport
        const elementRect = ctaSection.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        
        // Scroll to the element minus the header offset
        window.scrollTo({
          top: absoluteElementTop - headerOffset,
          behavior: "smooth"
        });
      }
    }, 100);
  }, []);

  // Handle initial hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#quick-enquiry-form" || hash === "#quick-enquiry-card") {
      // Handle navigation to quick enquiry form with precise positioning
      const scrollToForm = () => {
        const ctaSection = document.getElementById("quick-enquiry-card");
        if (ctaSection) {
          const isMobile = window.innerWidth <= 768;
          const headerOffset = isMobile ? 80 : 100; // Reduced offset to bring form more into view
          
          // Get the element's position relative to the viewport
          const elementRect = ctaSection.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          
          // Scroll to the element minus the header offset
          window.scrollTo({
            top: absoluteElementTop - headerOffset,
            behavior: "smooth"
          });
        }
      };
      
      // Delay for mobile devices to ensure page is fully loaded
      setTimeout(scrollToForm, window.innerWidth <= 768 ? 1000 : 500);
    } else if (hash.startsWith("#loan-")) {
      const loanType = hash.replace("#loan-", "").replace(/-/g, " ");
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
