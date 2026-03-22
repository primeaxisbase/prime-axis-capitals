"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const partners = [
  { name: "State Bank of India", shortName: "SBI" },
  { name: "HDFC Bank", shortName: "HDFC" },
  { name: "ICICI Bank", shortName: "ICICI" },
  { name: "Axis Bank", shortName: "Axis" },
  { name: "Kotak Mahindra Bank", shortName: "Kotak" },
  { name: "Bank of Baroda", shortName: "BOB" },
  { name: "Punjab National Bank", shortName: "PNB" },
  { name: "IndusInd Bank", shortName: "IndusInd" },
  { name: "Yes Bank", shortName: "Yes" },
  { name: "Federal Bank", shortName: "Federal" },
  { name: "IDFC First Bank", shortName: "IDFC" },
  { name: "RBL Bank", shortName: "RBL" },
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
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="aspect-square rounded-xl border border-border/50 bg-white flex flex-col items-center justify-center p-4 hover:border-[#1b94cb]/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div 
                  className="text-2xl md:text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: '#196b92' }}
                >
                  {partner.shortName}
                </div>
                <div className="text-xs text-muted-foreground text-center leading-tight group-hover:text-[#196b92] transition-colors">
                  {partner.name}
                </div>
              </div>
            </motion.div>
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
