"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/components/legal/legal-page";

export default function Terms() {
  const handleNavigate = (page: string) => {
    window.location.href = page === "home" ? "/" : `/${page}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <LegalPage page="terms" onNavigate={handleNavigate} />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}