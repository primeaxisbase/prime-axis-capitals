"use client";

import { motion } from "framer-motion";
import { 
  UserCheck, 
  Home, 
  Briefcase, 
  Building,
  CreditCard,
  Calculator,
  Receipt,
  DollarSign,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServicesSectionProps {
  onLoanSelect: (loanType: string) => void;
}

const services = [
  {
    name: "Personal Loans",
    description: "Whether it's a wedding, vacation, or unexpected expense – get funds up to ₹50 Lakhs with minimal documentation.",
    features: ["Interest from 9.9% p.a.", "1-7 years tenure", "No collateral required"],
    icon: UserCheck,
    id: "personal-loan",
  },
  {
    name: "Home Loans",
    description: "Turn your dream home into reality. Competitive rates, flexible EMIs, and dedicated support throughout your journey.",
    features: ["Interest from 8.35% p.a.", "Up to 30 years tenure", "Quick sanction"],
    icon: Home,
    id: "home-loan",
  },
  {
    name: "Business Loans",
    description: "Expand operations, manage working capital, or invest in new opportunities. Unsecured business loans up to ₹2 Crores.",
    features: ["Interest from 12% p.a.", "Flexible repayment", "Minimal documentation"],
    icon: Briefcase,
    id: "business-loan",
  },
  {
    name: "Loan Against Property",
    description: "Unlock the value of your property. Get substantial funds while continuing to own your asset.",
    features: ["Interest from 9.5% p.a.", "Up to 20 years tenure", "High loan amount"],
    icon: Building,
    id: "loan-against-property",
  },
  {
    name: "Credit Card Assistance",
    description: "Get the best credit card options tailored to your needs with instant approval and exclusive benefits.",
    features: ["Zero annual fees", "High credit limit", "Exclusive rewards & cashback"],
    icon: CreditCard,
    id: "credit-card-assistance",
  },
  {
    name: "Accounting Service",
    description: "Professional accounting and bookkeeping services for individuals and businesses to manage finances efficiently.",
    features: ["Monthly reconciliation", "Financial reporting", "Expert consultation"],
    icon: Calculator,
    id: "accounting-service",
  },
  {
    name: "GST Filing",
    description: "Hassle-free GST compliance and filing services to keep your business compliant and audit-ready.",
    features: ["Monthly GST returns", "ITC optimization", "Dedicated support"],
    icon: Receipt,
    id: "gst-filing",
  },
  {
    name: "Income Tax Filing",
    description: "Expert income tax filing and planning services to minimize your tax liability legally and efficiently.",
    features: ["Expert guidance", "Maximum deductions", "Quick processing"],
    icon: DollarSign,
    id: "income-tax-filing",
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

export function ServicesSection({ onLoanSelect }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
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
            Our Services
          </Badge>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored financial products for every stage of your journey
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={itemVariants}>
              <Card 
                className="h-full hover:shadow-xl transition-all duration-300 border-border/50 group cursor-pointer hover:border-[#1b94cb]/30"
                onClick={() => onLoanSelect(service.name)}
              >
                <CardHeader>
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#e0f2fe' }}
                  >
                    <service.icon className="h-7 w-7" style={{ color: '#196b92' }} />
                  </div>
                  <CardTitle className="font-[var(--font-playfair)] text-xl text-black group-hover:text-[#196b92] transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#1b94cb' }} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      onLoanSelect(service.name);
                    }}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
