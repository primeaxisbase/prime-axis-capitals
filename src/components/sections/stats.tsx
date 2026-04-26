"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { Users, IndianRupee, Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: "1000+",
    label: "Customers Served",
    icon: Users,
    targetValue: 1000,
    suffix: "+",
  },
  {
    value: "₹50 Cr+",
    label: "Loans Disbursed",
    icon: IndianRupee,
    targetValue: 50,
    prefix: "₹",
    suffix: " Cr+",
  },
  {
    value: "4.8/5",
    label: "Customer Rating",
    icon: Star,
    targetValue: 4.8,
    suffix: "/5",
    decimals: 1,
  },
  {
    value: "24 Hrs",
    label: "Average Disbursal Time",
    icon: Clock,
    targetValue: 24,
    suffix: " Hrs",
  },
];

function AnimatedCounter({ 
  targetValue, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: { 
  targetValue: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number; 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 50, 
    stiffness: 100 
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetValue);
    }
  }, [isInView, motionValue, targetValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            Our Impact
          </Badge>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Numbers That Speak
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter
                    targetValue={stat.targetValue}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
