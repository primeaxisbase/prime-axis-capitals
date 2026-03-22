"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPage } from "@/components/pages/blog-page";

export default function Blog() {
  const handleNavigate = (page: string) => {
    window.location.href = page === "home" ? "/" : `/${page}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <BlogPage />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}