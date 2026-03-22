"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Guide to Understanding Interest Rates on Personal Loans",
    excerpt: "Learn how interest rates are calculated and how to find the best rates for your personal loan needs.",
    content: "Interest rates are one of the most important factors when choosing a personal loan. In this comprehensive guide, we break down how interest rates work, what factors influence them, and how you can negotiate better rates with lenders. Understanding these concepts will help you save thousands of rupees over the life of your loan.",
    author: "Financial Expert",
    date: "March 18, 2026",
    category: "Loans",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Home Loan vs Personal Loan: Which One Should You Choose?",
    excerpt: "Comparing the key differences between home loans and personal loans to help you make an informed decision.",
    content: "Are you unsure whether a home loan or personal loan is right for your financial situation? This article compares the two options across interest rates, eligibility criteria, loan amount, tenure, and use cases. We'll help you understand which loan type aligns best with your financial goals and circumstances.",
    author: "Loan Specialist",
    date: "March 16, 2026",
    category: "Loans",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Essential Tips for GST Compliance and Filing",
    excerpt: "Stay compliant with GST regulations. Here are essential tips to keep your GST filing stress-free.",
    content: "GST compliance can be complex, but it's crucial for any business. This guide covers common GST filing requirements, deadlines, penalties for non-compliance, and practical tips to streamline your GST process. Learn how to maintain proper records and take advantage of input tax credits to optimize your tax liability.",
    author: "Tax Advisor",
    date: "March 14, 2026",
    category: "Taxes",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Smart Credit Card Strategies to Maximize Rewards",
    excerpt: "Understand how to use credit cards effectively and maximize rewards while avoiding common pitfalls.",
    content: "Credit cards can be a powerful financial tool when used wisely. Learn about different rewards categories, how to compare credit card offers, strategies for maximizing rewards points, and how to maintain a healthy credit score. Discover the best practices for responsible credit card usage.",
    author: "Finance Consultant",
    date: "March 12, 2026",
    category: "Credit",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Income Tax Filing Made Easy: A Step-by-Step Guide",
    excerpt: "Complete guide to filing income taxes in India with all important deadlines and documents.",
    content: "Filing income taxes doesn't have to be complicated. This step-by-step guide walks you through the entire process, from gathering necessary documents to filing your return online. We cover common deductions, recently updated tax slabs, frequently asked questions, and tips to maximize your tax benefits.",
    author: "Tax Professional",
    date: "March 10, 2026",
    category: "Taxes",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Business Loan Guide: Requirements and Application Process",
    excerpt: "Everything you need to know about securing a business loan for your startup or expansion.",
    content: "Whether you're starting a new business or expanding an existing one, understanding business loans is crucial. This comprehensive guide covers eligibility criteria, required documents, different types of business loans, how to calculate EMI, and common mistakes to avoid. Get approved faster with our practical tips.",
    author: "Business Advisor",
    date: "March 8, 2026",
    category: "Business",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "EMI Calculator: How to Plan Your Loan Repayment",
    excerpt: "Learn how to use EMI calculators effectively and plan your loan repayment strategy.",
    content: "Understanding your Equated Monthly Installment (EMI) is essential for financial planning. This article explains what EMI is, how it's calculated, and how using an EMI calculator can help you compare different loan options. We also provide tips on managing your EMI effectively and choosing a loan tenure that suits your budget.",
    author: "Financial Planner",
    date: "March 6, 2026",
    category: "Financial Planning",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "The Complete Guide to Accounting for Small Businesses",
    excerpt: "Learn the basics of business accounting and why it's essential for business success.",
    content: "Proper accounting is the backbone of any successful business. This guide covers basic accounting principles, bookkeeping best practices, financial statements interpretation, tax planning, and how to leverage accounting data for business decisions. Whether you're a startup or established business, these fundamentals apply.",
    author: "Accountant",
    date: "March 4, 2026",
    category: "Accounting",
    readTime: "7 min read",
  },
];

const categories = ["All", "Loans", "Taxes", "Credit", "Business", "Financial Planning", "Accounting"];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Financial Insights
            </Badge>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-black mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights and practical tips on loans, taxes, accounting, and financial planning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "text-white"
                    : "text-[#196b92] border border-[#196b92] hover:bg-[#e0f2fe]"
                }`}
                style={
                  selectedCategory === category
                    ? { background: "linear-gradient(135deg, #1b94cb 0%, #196b92 100%)" }
                    : {}
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all border-border/50 group cursor-pointer">
                  <CardHeader>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" style={{ color: '#196b92' }} />
                        <span className="text-sm font-medium text-[#196b92]">{post.category}</span>
                      </div>
                      <CardTitle className="text-2xl text-black group-hover:text-[#196b92] transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-justify leading-relaxed">{post.content}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" style={{ color: '#196b92' }} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" style={{ color: '#196b92' }} />
                        {post.date}
                      </div>
                      <Badge variant="outline" className="text-[#196b92]">
                        {post.readTime}
                      </Badge>
                    </div>

                    <Button 
                      variant="ghost"
                      className="w-fit text-[#196b92] hover:bg-[#e0f2fe] px-0 group/btn"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
