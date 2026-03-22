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
    question: "What documents are required for a personal loan?",
    answer: "You'll need: (1) PAN Card and Aadhaar Card, (2) Last 3 months' salary slips or 2 years' ITR for self-employed, (3) Last 6 months' bank statements, (4) Proof of address. Additional documents may be requested based on your profile.",
  },
  {
    question: "How is my loan eligibility calculated?",
    answer: "Eligibility depends on your income, existing EMIs, credit score, employment history, and age. Generally, you can get a loan where your EMI is up to 40-50% of your monthly income after deducting existing obligations.",
  },
  {
    question: "Are there any hidden charges?",
    answer: "No. We believe in complete transparency. All charges including processing fee, interest rate, prepayment charges, and any other fees are clearly mentioned in your loan agreement before you sign.",
  },
  {
    question: "Can I prepay my loan?",
    answer: "Yes, you can prepay your loan partially or fully. For floating rate loans, there are no prepayment charges. For fixed rate personal loans, a nominal prepayment fee may apply after 12 months of regular EMI payments.",
  },
  {
    question: "What is the minimum and maximum loan amount?",
    answer: "For personal loans, you can borrow from ₹50,000 to ₹50 Lakhs. For home loans, the range is ₹10 Lakhs to ₹5 Crores. Business loans start from ₹1 Lakh up to ₹20 Crores. Final amount depends on your eligibility.",
  },
  {
    question: "How long does the approval process take?",
    answer: "Once all documents are submitted, approval typically takes 0-24 working hours. After approval, disbursement happens within 24-48 hours. Some pre-approved customers get instant disbursement.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24" style={{ background: '#f0f7fb' }}>
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
