"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, MessageCircle, Linkedin, Instagram, ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageType } from "@/app/page";

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const footerColumns = [
  {
    title: "Loan Products",
    links: [
      { name: "Personal Loan", href: "#services" },
      { name: "Home Loan", href: "#services" },
      { name: "Business Loan", href: "#services" },
      { name: "Loan Against Property", href: "#services" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Credit Card Assistance", href: "#services" },
      { name: "Accounting Service", href: "#services" },
      { name: "GST Filing", href: "#services" },
      { name: "Income Tax Filing", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "#partners" },
      { name: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "EMI Calculator", href: "#emi-calculator" },
      { name: "Eligibility Check", href: "#cta" },
      { name: "Blog", href: "/blog" },
      { name: "FAQs", href: "#faq" },
      { name: "Customer Support", href: "#cta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Grievance Redressal", href: "/grievance" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/message/LX2MQXDN2GJHA1?src=qr" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-auto" style={{ background: 'linear-gradient(135deg, #196b92 0%, #1b94cb 100%)' }}>
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 mb-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/images/5.png"
                alt="Prime Axis Capitals Logo"
                width={170}
                height={70}
                className="h-14 w-auto"
                sizes="(max-width: 768px) 160px, 340px"
                priority
              />
              <span className="hidden sm:inline font-[var(--font-playfair)] text-xl font-bold text-white">
                Prime Axis Capital
              </span>
            </button>
            <p className="text-white/80 mb-6 max-w-sm text-sm">
              Prime Axis Capital is a leading financial services firm specializing in loan facilitation, connecting individuals and businesses with the best lending solutions from trusted banks and NBFCs.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-white/80 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">
                  53, 1st Floor Sewak Park, Near Dwaraka Mor Metro Station, New Delhi - 110059
                </p>
              </div>
              <a href="tel:+917428614189" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                <Phone className="h-4 w-4 flex-shrink-0 group-hover:text-white/80" />
                <span className="text-sm">+91 74286 14189</span>
              </a>
              <a href="mailto:info@primeaxiscapital.in" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                <Mail className="h-4 w-4 flex-shrink-0 group-hover:text-white/80" />
                <span className="text-sm">info@primeaxiscapital.in</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-[var(--font-playfair)] font-semibold mb-4 text-white">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/70 text-center md:text-left">
            © 2026 Prime Axis Capitals. All rights reserved.
          </div>
          
          <p className="text-xs text-white/60 text-center md:text-right max-w-md">
            Loans are subject to credit approval and terms as per company policy. Interest rates mentioned are indicative and may vary based on individual credit profile.
          </p>

          {/* Right section with name and button */}
          <div className="flex items-center gap-3">
            <p className="text-sm text-white/70 font-bold">
             Owned By Tushar Rajput
            </p>
            {/* Back to top button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 text-white"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
