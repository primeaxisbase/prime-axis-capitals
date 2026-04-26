"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CareersPage } from "@/components/pages/careers-page";
import { PageType } from "../page";

export default function Careers() {
  const handleNavigate = (page: PageType) => {
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