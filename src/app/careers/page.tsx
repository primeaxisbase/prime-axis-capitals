"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CareersPage } from "@/components/pages/careers-page";

export default function Careers() {
  const handleNavigate = (page: string) => {
    window.location.href = page === "home" ? "/" : `/${page}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <CareersPage />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}