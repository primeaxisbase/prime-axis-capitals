"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutPage } from "@/components/pages/about-page";

export default function About() {
  const handleNavigate = (page: string) => {
    // This will be handled by Next.js routing
    window.location.href = page === "home" ? "/" : `/${page}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}