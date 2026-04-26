"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trustIndicators = [
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Star, value: "4.8★", label: "Rating By Customers" },
  { icon: IndianRupee, value: "₹50+ Cr", label: "Disbursed" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-0 pb-16 md:pb-24 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#196b92" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 bg-blue-500" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 bg-blue-700" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-4 text-white" style={{ background: '#1b94cb' }}>
              Finance Made Simple
            </Badge>
            
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Welcome to {" "}
              <span className="text-gradient">Prime Axis Capital</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Your trusted financial partner for Personal Loans, Business Loans, Home Loans, Loans Against Property, Credit Cards, GST, ITR, and Accounting Services | Connect in 24 Hours 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/instant-quote">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white text-lg px-8 py-6 w-full sm:w-auto">
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+917428614189">
                <Button size="lg" variant="outline" className="border-[#196b92] text-[#196b92] hover:bg-[#196b92]/10 text-lg px-8 py-6">
                  Talk to an Advisor
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50">
                    <item.icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-bold text-black">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-full min-h-[500px]">
              {/* TODO: Replace /images/hero/placeholder.jpg with your actual image */}
              <Image
                src="/images/hero/hero.png"
                alt="Hero Visual - Prime Axis Capital"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
