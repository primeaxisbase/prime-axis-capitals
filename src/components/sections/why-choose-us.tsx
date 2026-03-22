"use client";

import { motion } from "framer-motion";
import { Eye, Zap, Headphones, Settings, TrendingDown, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    heading: "Transparent Process",
    description: "No hidden charges, no surprises. Everything is explained upfront so you know exactly what you're signing up for.",
    icon: Eye,
  },
  {
    heading: "Quick Disbursal",
    description: "Time matters. Our streamlined process ensures funds reach your account within 0-24 hours of approval.",
    icon: Zap,
  },
  {
    heading: "Dedicated Support",
    description: "A real person answers your calls. Our relationship managers guide you through every step.",
    icon: Headphones,
  },
  {
    heading: "Flexible Options",
    description: "Customize your loan tenure, EMI dates, and repayment structure to match your cash flows.",
    icon: Settings,
  },
  {
    heading: "Competitive Rates",
    description: "We constantly benchmark against the market to offer you the best possible interest rates.",
    icon: TrendingDown,
  },
  {
    heading: "All in One Solutions",
    description: "Loans, accounting, GST, and tax filing under one roof.",
    icon: Package,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24" style={{ background: '#f0f7fb' }}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="mb-4 text-white" style={{ background: '#196b92' }}>
            Why Choose Us
          </Badge>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Why Prime Axis Capitals?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just lenders – we're partners in your financial journey
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.heading} variants={itemVariants}>
              <Card className="h-full bg-white border-border/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: '#e0f2fe' }}
                  >
                    <reason.icon 
                      className="h-7 w-7 transition-colors duration-300" 
                      style={{ color: '#196b92' }} 
                    />
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-black mb-2">
                    {reason.heading}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
