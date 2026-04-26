"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SupportFormDialog } from "@/components/ui/support-form-dialog";

const loanTypes = [
  "Personal Loan",
  "Home Loan",
  "Business Loan",
  "Loan Against Property",
  "Credit Card Assistance",
  "Accounting Service",
];

interface CTASectionProps {
  selectedLoanType?: string | null;
}

export function CTASection({ selectedLoanType }: CTASectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loanType, setLoanType] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    if (selectedLoanType) {
      setLoanType(selectedLoanType);
    }
  }, [selectedLoanType]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      loanType: formData.get("loanType"),
      amount: formData.get("amount"),
      panNumber: formData.get("panNumber") || null,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Application Submitted!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quick-enquiry-form" className="py-16 md:py-24 bg-gradient-to-br from-white via-[#f0f7fb] to-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 text-white" style={{ background: '#196b92' }}>
              Get Started
            </Badge>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a personalized loan offer in under 2 minutes. No impact on your credit score.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50">
                  <Phone className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call us</div>
                  <div className="font-semibold text-black">+91 74286 14189 (Mon-Sat, 9 AM - 8 PM)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50">
                  <Mail className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email us</div>
                  <div className="font-semibold text-black">info@primeaxiscapital.in</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50">
                  <Clock className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Working hours</div>
                  <div className="font-semibold text-black">Mon-Sat: 9 AM - 8 PM</div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#emi-calculator">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                  Calculate Your EMI
                </Button>
              </a>
              <SupportFormDialog
                trigger={
                  <Button size="lg" variant="outline" className="border-[#196b92] text-[#196b92] hover:bg-[#196b92]/10">
                    Schedule a Callback
                  </Button>
                }
                title="Schedule a Callback"
                description="We'll call you back within 24 hours to discuss your requirements."
              />
            </div>
          </motion.div>

          {/* Right content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card id="quick-enquiry-card" className="bg-white shadow-xl border-border/50">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-50">
                      <CheckCircle2 className="h-8 w-8 text-blue-700" />
                    </div>
                    <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-black mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your application has been submitted successfully. Our team will contact you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-[#196b92] text-[#196b92]"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-black mb-6">
                      Quick Enquiry Form
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="border-border focus:border-[#196b92]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+91 98765 43210"
                            type="tel"
                            required
                            className="border-border focus:border-[#196b92]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          type="email"
                          required
                          className="border-border focus:border-[#196b92]"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="loanType">Loan Type</Label>
                          <Select name="loanType" value={loanType} onValueChange={setLoanType} required>
                            <SelectTrigger className="border-border focus:border-[#196b92]">
                              <SelectValue placeholder="Select loan type" />
                            </SelectTrigger>
                            <SelectContent>
                              {loanTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="amount">Required Amount</Label>
                          <Input
                            id="amount"
                            name="amount"
                            placeholder="₹10,00,000"
                            required
                            className="border-border focus:border-[#196b92]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="panNumber">PAN Number (Optional)</Label>
                        <Input
                          id="panNumber"
                          name="panNumber"
                          placeholder="Enter your 10-digit PAN"
                          maxLength={10}
                          className="border-border focus:border-[#196b92] uppercase"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your requirements..."
                          rows={3}
                          className="border-border focus:border-[#196b92] resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-primary hover:opacity-90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting, you agree to our Privacy Policy and Terms of Service.
                      </p>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
