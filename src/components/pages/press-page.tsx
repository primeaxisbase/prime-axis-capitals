"use client";

import { motion } from "framer-motion";
import { Newspaper, Calendar, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pressReleases = [
  {
    id: 1,
    title: "Prime Axis Capitals Launches New Credit Card Assistance Service",
    date: "March 15, 2026",
    author: "Communications Team",
    excerpt: "Prime Axis Capitals announces the launch of its comprehensive credit card assistance service, helping customers find the perfect credit cards tailored to their financial needs.",
    content: "Prime Axis Capitals is thrilled to announce the launch of its new Credit Card Assistance service, designed to help individuals and businesses find the most suitable credit cards from leading banks. Our expert team will guide customers through the entire process, from application to approval, ensuring they get the best deals and benefits available in the market.",
    imageAlt: "Credit Card Assistance Launch",
  },
  {
    id: 2,
    title: "Prime Axis Capitals Expands Accounting Services Across India",
    date: "March 10, 2026",
    author: "Operations Team",
    excerpt: "With the growing demand for professional accounting services, Prime Axis Capitals expands its reach to provide expert bookkeeping and financial management solutions.",
    content: "Prime Axis Capitals is expanding its accounting services across major cities in India. Our team of certified accountants now offers comprehensive bookkeeping, financial reporting, and consultation services for businesses of all sizes. This expansion reflects our commitment to providing end-to-end financial solutions.",
    imageAlt: "Accounting Services Expansion",
  },
  {
    id: 3,
    title: "Prime Axis Capitals Achieves ₹50 Crore in Loan Disbursements",
    date: "March 5, 2026",
    author: "Media Relations",
    excerpt: "A major milestone - Prime Axis Capitals celebrates the completion of ₹50 crore in loan disbursements, reflecting trust and satisfaction of over 10,000 customers.",
    content: "Prime Axis Capitals proudly announces that it has successfully disbursed over ₹50 crores in loans to more than 10,00 satisfied customers. This milestone represents our unwavering commitment to financial inclusion and providing accessible lending solutions to individuals and businesses across India.",
    imageAlt: "50 Crore Milestone",
  },
  {
    id: 4,
    title: "New GST Filing and Income Tax Filing Services Now Available",
    date: "February 28, 2026",
    author: "Product Team",
    excerpt: "Prime Axis Capitals introduces dedicated GST and Income Tax filing services to simplify compliance for businesses and individuals.",
    content: "Prime Axis Capitals is pleased to introduce comprehensive GST Filing and Income Tax Filing services. Our experienced tax professionals ensure complete compliance while maximizing deductions and minimizing tax liability for our clients. We're making tax compliance stress-free and efficient.",
    imageAlt: "Tax Services Launch",
  },
  {
    id: 5,
    title: "Prime Axis Capitals Partners with Leading Financial Institutions",
    date: "February 20, 2026",
    author: "Strategic Partnerships",
    excerpt: "Strategic partnerships with top banks and NBFCs strengthen Prime Axis Capitals' position as a trusted financial services facilitator.",
    content: "Prime Axis Capitals has established strategic partnerships with leading banks and non-banking financial companies (NBFCs) across India. These collaborations enable us to offer our customers access to the best loan products, competitive rates, and personalized financial solutions.",
    imageAlt: "Partnership Announcement",
  },
  {
    id: 6,
    title: "Prime Axis Capitals Launches AI-Powered EMI Calculator",
    date: "February 15, 2026",
    author: "Technology Team",
    excerpt: "An innovative EMI calculator powered by AI makes loan planning easier and more accurate for our customers.",
    content: "Prime Axis Capitals has launched an advanced EMI calculator that uses artificial intelligence to provide precise calculations and personalized loan recommendations. This tool helps customers understand their loan options better and make informed financial decisions quickly.",
    imageAlt: "EMI Calculator Launch",
  },
];

export function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-20 pb-12 px-4" style={{ background: '#f0f7fb' }}>
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 text-white" style={{ background: '#1b94cb' }}>
              In The News
            </Badge>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-black mb-4">
              Press Coverage
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest news, announcements, and updates from Prime Axis Capitals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all border-border/50 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-black group-hover:text-[#196b92] transition-colors">
                          {release.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm">
                          {release.excerpt}
                        </CardDescription>
                      </div>
                      <Newspaper className="h-8 w-8 flex-shrink-0" style={{ color: '#196b92' }} />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-justify">{release.content}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" style={{ color: '#196b92' }} />
                        {release.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" style={{ color: '#196b92' }} />
                        {release.author}
                      </div>
                    </div>

                    <Button 
                      variant="ghost"
                      className="w-fit text-[#196b92] hover:bg-[#e0f2fe] px-0 group/btn"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4" style={{ background: '#f0f7fb' }}>
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-black mb-4">
              Media Inquiries
            </h2>
            <p className="text-muted-foreground mb-6">
              For press inquiries, media requests, or to feature Prime Axis Capitals in your publication, please contact us.
            </p>
            <Button 
              className="bg-gradient-to-r hover:opacity-90 text-white"
              style={{ background: 'linear-gradient(135deg, #1b94cb 0%, #196b92 100%)' }}
            >
              Contact PR Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
