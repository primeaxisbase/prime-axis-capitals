"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    loanType: "Home Loan",
    rating: 5,
    review: "From the first call to disbursement, everything was smooth. The team explained every charge clearly, and I got my home loan approved in just 5 days. Highly recommend Prime Axis Capitals.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    location: "Bangalore, Karnataka",
    loanType: "Business Loan",
    rating: 5,
    review: "I needed funds urgently for my boutique expansion. Prime Axis understood my urgency and processed my business loan in record time. Their relationship manager was available even on weekends!",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    loanType: "Personal Loan",
    rating: 5,
    review: "No hidden charges, no last-minute surprises. What they promised is exactly what I got. The interest rate was competitive, and the EMI options fit perfectly with my salary cycle.",
    initials: "AP",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    loanType: "GST Filing",
    rating: 5,
    review: "Managing GST compliance for my business was overwhelming. Prime Axis took that burden off my shoulders with their efficient GST filing service. Now I focus on growing my business!",
    initials: "SR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            Testimonials
          </Badge>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Stories from Our Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who trusted us
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-border/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 opacity-10">
                  <Quote className="h-8 w-8 md:h-16 md:w-16" style={{ color: '#196b92' }} />
                </div>
                
                <CardContent className="p-3 md:p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-2 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 md:h-5 md:w-5 fill-current"
                        style={{ color: '#1b94cb' }}
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-muted-foreground mb-3 md:mb-6 leading-relaxed text-xs md:text-sm">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Avatar className="h-8 w-8 md:h-12 md:w-12 border-2 flex-shrink-0" style={{ borderColor: '#1b94cb' }}>
                        <AvatarFallback style={{ backgroundColor: '#e0f2fe', color: '#196b92' }} className="font-semibold text-xs md:text-sm">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-black text-xs md:text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                    <Badge className="text-xs px-1 py-0 md:px-2 md:py-1 self-start sm:self-center flex-shrink-0" style={{ backgroundColor: '#e0f2fe', color: '#196b92' }}>
                      {testimonial.loanType}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
