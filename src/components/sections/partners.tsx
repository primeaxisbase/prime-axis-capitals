"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const partners = [
  { name: "State Bank of India", shortName: "SBI", slug: "sbi", logo: "/images/bank-logo/SBI.jpeg" },
  { name: "HDFC Bank", shortName: "HDFC", slug: "hdfc", logo: "/images/bank-logo/HDFC.png" },
  { name: "ICICI Bank", shortName: "ICICI", slug: "icici", logo: "/images/bank-logo/ICICI.png" },
  { name: "Axis Bank", shortName: "Axis", slug: "axis", logo: "/images/bank-logo/Axis.png" },
  { name: "Kotak Mahindra Bank", shortName: "Kotak", slug: "kotak", logo: "/images/bank-logo/Kotak.png" },
  { name: "Bank of Baroda", shortName: "BOB", slug: "bob", logo: "/images/bank-logo/BOB.jpeg" },
  { name: "Punjab National Bank", shortName: "PNB", slug: "pnb", logo: "/images/bank-logo/PNB.png" },
  { name: "IndusInd Bank", shortName: "IndusInd", slug: "induslnd", logo: "/images/bank-logo/Indus.jpeg" },
  { name: "Yes Bank", shortName: "Yes", slug: "yes", logo: "/images/bank-logo/Yes.jpeg" },
  { name: "Federal Bank", shortName: "Federal", slug: "federal", logo: "/images/bank-logo/Federal.jpeg" },
  { name: "IDFC First Bank", shortName: "IDFC", slug: "idfc", logo: "/images/bank-logo/IDFC.png" },
  { name: "RBL Bank", shortName: "RBL", slug: "rbl", logo: "/images/bank-logo/RBL.png" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 text-white" style={{ background: '#1b94cb' }}>
            Our Partners
          </Badge>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Trusted by Leading Banks & NBFCs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with India's top financial institutions to bring you the best loan offers
          </p>
        </motion.div>

        {/* Partners grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner, index) => (
            <Link href={`/partners/${partner.slug}`} key={partner.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="aspect-square rounded-xl border border-border/50 bg-white flex flex-col items-center justify-center p-4 hover:border-[#1b94cb]/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Logo if available */}
                  <div className="relative w-full h-16 flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={100}
                      height={60}
                      className="h-full w-auto object-contain max-w-full transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to shortName if image fails to load
                        e.currentTarget.style.display = "none";
                        const fallback = document.getElementById(`fallback-${partner.slug}`);
                        if (fallback) {
                          fallback.style.display = "block";
                        }
                      }}
                    />
                    <div
                      className="text-2xl md:text-3xl font-bold text-[#1b94cb] text-center"
                      id={`fallback-${partner.slug}`}
                      style={{ display: 'none' }}
                    >
                      {partner.shortName}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center leading-tight mt-2">
                    {partner.name}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All partnerships are regulated by RBI guidelines. Loans are subject to credit approval by respective banks.
        </motion.p>
      </div>
    </section>
  );
}
