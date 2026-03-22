"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PressPage } from "@/components/pages/press-page";

export default function Press() {
  const handleNavigate = (page: string) => {
    window.location.href = page === "home" ? "/" : `/${page}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <PressPage />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}