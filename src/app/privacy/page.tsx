"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/components/legal/legal-page";
import { PageType } from "../page";

export default function Privacy() {
  const handleNavigate = (page: PageType) => {
    window.location.href = page === "home" ? "/" : `/${page}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <LegalPage page="privacy" onNavigate={handleNavigate} />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}