"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How can I get a personal loan in Delhi NCR?",
    answer: "You can apply online with basic documents like Aadhaar, PAN, and income proof. Approval is quick and hassle-free.",
  },
  {
    question: "Do you provide business loans without collateral?",
    answer: "Yes, we offer unsecured business loans for MSMEs and startups with flexible repayment options.",
  },
  {
    question: "What documents are required for GST filing?",
    answer: "Basic documents include GSTIN, invoices, and bank details. Our experts handle the complete process.",
  },
  {
    question: "Which is the best credit card in India?",
    answer: "The best credit card depends on your needs like cashback, travel, or shopping benefits. We help you choose the best credit card based on your needs.",
  },
  {
    question: "Do you provide GST and accounting services in Delhi?",
    answer: "Yes, we offer GST filing, bookkeeping, and accounting services for businesses and individuals in Delhi NCR.",
  },
  {
    question: "Can I get a business loan without collateral?",
    answer: "Yes, unsecured business loans are available for eligible applicants based on income, business profile, and eligibility criteria.",
  },
  {
    question: "Can I get a personal loan with low CIBIL score?",
    answer: "Yes, we provide loan options even for customers with lower credit scores.",
  },
  {
    question: "How long does approval take?",
    answer: "Most applications are approved within 24-48 hours.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-blue-50">
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
            FAQ
          </Badge>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our loan services
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-[var(--font-playfair)] text-lg font-semibold text-black pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
