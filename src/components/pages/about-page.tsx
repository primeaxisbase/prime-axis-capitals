"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Target, Award, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our customers' needs and financial well-being above all else."
    },
    {
      icon: Zap,
      title: "Quick Approvals",
      description: "Fast, efficient loan processing with transparent terms and no hidden charges."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated financial experts ready to guide you through every step."
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Trusted partner for thousands of individuals and businesses across India."
    },
    {
      icon: Target,
      title: "Transparent",
      description: "Clear communication and honest dealings in all transactions."
    },
    {
      icon: CheckCircle,
      title: "Reliable",
      description: "Consistent, dependable service you can count on for your financial needs."
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "Prime Axis Capitals was established with a mission to democratize financial services."
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Expanded operations across major Indian cities with 50+ partnerships."
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Launched digital platform with EMI calculator and online applications."
    },
    {
      year: "2026",
      title: "Growth",
      description: "Serving 10,000+ satisfied customers with diversified financial products."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 font-[var(--font-playfair)]"
              style={{ color: '#1b94cb' }}
              variants={fadeInUp}
            >
              About Prime Axis Capitals
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Your trusted partner in financial growth and success. We provide comprehensive financial solutions designed to empower individuals and businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[var(--font-playfair)]">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Prime Axis Capitals, our mission is to provide accessible, transparent, and customer-centric financial solutions that enable individuals and businesses to achieve their goals. We believe in building long-term relationships based on trust, integrity, and mutual growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We connect borrowers with the best lending solutions from trusted banks and NBFCs, making financial empowerment a reality for everyone.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[var(--font-playfair)]">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To become India's most trusted financial services platform, known for innovation, customer excellence, and social responsibility. We envision a world where financial barriers no longer limit people's dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By leveraging technology and human expertise, we aim to transform the financial landscape and create opportunities for millions across the nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction with our customers.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  variants={fadeInUp}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                    style={{ background: '#1b94cb' }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-[var(--font-playfair)]">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From our founding to today, we've grown to serve thousands of satisfied customers.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div
                  className="inline-block px-4 py-2 rounded-full text-white font-bold mb-4"
                  style={{ background: '#1b94cb' }}
                >
                  {item.year}
                </div>
                <h3 className="text-xl font-bold mb-2 font-[var(--font-playfair)]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">
              Why Choose Us?
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Quick and hassle-free loan approval process",
              "Partnerships with 50+ trusted banks and NBFCs",
              "Transparent terms with no hidden charges",
              "Expert financial advisors available 24/7",
              "Competitive interest rates and flexible EMI options",
              "Dedicated customer support throughout your loan journey"
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start"
                variants={fadeInUp}
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1b94cb' }} />
                <p className="text-muted-foreground">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[var(--font-playfair)]">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let our expert advisors help you find the perfect financial solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/message/LX2MQXDN2GJHA1?src=qr" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-primary hover:opacity-90 text-white w-full sm:w-auto">
                  Talk to an Advisor
                </Button>
              </a>
              <Link href="#cta">
                <Button variant="outline" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
