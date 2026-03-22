"use client";

import { motion } from "framer-motion";
import { FileCheck, Upload, CheckCircle, Banknote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    step: 1,
    title: "Fill Application",
    description: "Complete our simple online application form with basic details about you and your financial needs.",
    icon: FileCheck,
  },
  {
    step: 2,
    title: "Review and Contact",
    description: "Our team reviews your application and contacts you, to discuss you requirements.",
    icon: Upload,
  },
  {
    step: 3,
    title: "Get Approval",
    description: "Our team reviews your application and provides approval.",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Receive Funds",
    description: "Sign the agreement and get funds directly in your bank account.",
    icon: Banknote,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="mb-4 text-white" style={{ background: '#1b94cb' }}>
            Simple Process
          </Badge>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to get your loan approved
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#196b92] via-[#1b94cb] to-[#38b2ac]" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step number with icon */}
                  <div className="relative mb-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #196b92 0%, #1b94cb 100%)' }}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow"
                      style={{ background: '#1b94cb' }}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
