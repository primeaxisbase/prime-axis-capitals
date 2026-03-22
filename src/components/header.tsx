"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { PageType } from "@/app/page";

interface HeaderProps {
  onNavigate: (page: PageType) => void;
}

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "EMI Calculator", href: "#emi-calculator" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact", href: "#cta" },
];

export function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to top of page (hero section)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Top bar */}
      <div className="hidden md:block bg-gradient-primary text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+917428614189" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 74286 14189</span>
            </a>
            <a href="mailto:info@primeaxiscapital.in" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@primeaxiscapital.in</span>
            </a>
          </div>
          <div className="text-sm text-white/90">
            Mon-Sat: 9 AM - 8 PM
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src="/images/5.png"
              alt="Prime Axis Capitals Logo"
              width={150}
              height={62}
              className="h-14 w-auto"
              sizes="(max-width: 768px) 100px, 120px"
              priority
            />
            <span className="hidden sm:inline font-[var(--font-playfair)] text-2xl font-bold" style={{ color: '#1b94cb' }}>
              Prime Axis Capital
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-[#196b92] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://wa.me/message/LX2MQXDN2GJHA1?src=qr" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-[#196b92] text-[#196b92] hover:bg-[#196b92]/10">
                Talk to an Advisor
              </Button>
            </a>
            <Link href="#cta">
              <Button className="bg-gradient-primary hover:opacity-90 text-white">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={handleLogoClick}
                    className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <Image
                      src="/images/5.png"
                      alt="Prime Axis Capitals Logo"
                      width={260}
                      height={110}
                      className="h-24 w-auto"
                      sizes="(max-width: 768px) 140px, 260px"
                      priority
                    />
                    <span className="font-[var(--font-playfair)] text-xl font-bold" style={{ color: '#1b94cb' }}>
                      Prime Axis Capital
                    </span>
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-medium text-foreground hover:text-[#196b92] transition-colors py-3 px-4 rounded-lg hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-4 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground px-4">
                    <Phone className="h-4 w-4" style={{ color: '#1b94cb' }} />
                    <span>+91 74286 14189</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground px-4">
                    <Mail className="h-4 w-4" style={{ color: '#1b94cb' }} />
                    <span>info@primeaxiscapital.in</span>
                  </div>
                  <SheetClose asChild>
                    <Link href="#cta">
                      <Button className="bg-gradient-primary hover:opacity-90 text-white w-full mt-4">
                        Apply Now
                      </Button>
                    </Link>
                  </SheetClose>
                  <a href="https://wa.me/message/LX2MQXDN2GJHA1?src=qr" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="border-[#196b92] text-[#196b92] w-full">
                      Talk to an Advisor
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
