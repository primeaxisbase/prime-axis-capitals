"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Send, Loader2, CheckCircle2, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const jobs = [
  {
    title: "BPO Calling Executive",
    description: "Handle customer inquiries and provide excellent support through phone calls. Build relationships and resolve issues efficiently.",
    location: "Delhi",
    requirements: ["Communication skills", "Problem-solving", "Customer service experience"],
    type: "Full-time",
  },
  {
    title: "Telecaller",
    description: "Reach out to customers and promote our financial services. Meet targets and build client relationships through effective communication.",
    location: "Delhi",
    requirements: ["Sales drive", "Communication skills", "Target-oriented"],
    type: "Full-time",
  },
  {
    title: "Team Leader",
    description: "Lead a team of customer service professionals. Manage performance, ensure quality, and drive team success toward business goals.",
    location: "Delhi",
    requirements: ["Leadership experience", "Team management", "5+ years experience"],
    type: "Full-time",
  },
];

export function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedJob || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://dpsmuokcneepfmyqnhlf.supabase.co/rest/v1/career_applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc211b2tjbmVlcGZteXFuaGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5ODc4MTIsImV4cCI6MjA4OTU2MzgxMn0.mkFh5-tgacdIIW7cafRPcsE-wk1w2Eu74KOkqp2N2s0",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc211b2tjbmVlcGZteXFuaGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5ODc4MTIsImV4cCI6MjA4OTU2MzgxMn0.mkFh5-tgacdIIW7cafRPcsE-wk1w2Eu74KOkqp2N2s0`,
            "Prefer": "return=minimal",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            position: selectedJob,
            experience: formData.experience,
            cover_letter: formData.message,
            applied_at: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
        setSelectedJob("");
        toast({
          title: "Success!",
          description: "Your application has been submitted. We'll contact you soon.",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Join Our Team
            </Badge>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-black mb-4">
              Career Opportunities
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a dynamic team that's transforming the financial services industry. We're looking for talented individuals to grow with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-black mb-12 text-center">
            Open Positions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full hover:shadow-xl transition-all cursor-pointer border-border/50 group"
                  onClick={() => {
                    setSelectedJob(job.title);
                    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-black group-hover:text-[#196b92]">
                          {job.title}
                        </CardTitle>
                        <Badge className="mt-2" style={{ background: '#e0f2fe', color: '#196b92' }}>
                          {job.type}
                        </Badge>
                      </div>
                      <Briefcase className="h-8 w-8" style={{ color: '#196b92' }} />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{job.description}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" style={{ color: '#196b92' }} />
                      {job.location}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-black mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req) => (
                          <li key={req} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#1b94cb' }} />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r hover:opacity-90 text-white mt-4"
                      style={{ background: 'linear-gradient(135deg, #1b94cb 0%, #196b92 100%)' }}
                      onClick={() => setSelectedJob(job.title)}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 md:py-24 px-4" style={{ background: '#f0f7fb' }}>
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-black mb-2">
              Apply Now
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill in your details and select the position you're interested in.
            </p>

            <Card className="border-border/50">
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-black mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground text-center">
                      Thank you for your interest. We'll review your application and contact you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="position" className="text-black font-semibold mb-2 block">
                        Position <span className="text-red-500">*</span>
                      </Label>
                      <Select value={selectedJob} onValueChange={setSelectedJob}>
                        <SelectTrigger className="border-border/50">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobs.map((job) => (
                            <SelectItem key={job.title} value={job.title}>
                              {job.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-black font-semibold mb-2 block">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-border/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-black font-semibold mb-2 block">
                          Phone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-border/50"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-black font-semibold mb-2 block">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-border/50"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience" className="text-black font-semibold mb-2 block">
                        Years of Experience
                      </Label>
                      <Input
                        id="experience"
                        name="experience"
                        placeholder="e.g., 3 years"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="border-border/50"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-black font-semibold mb-2 block">
                        Cover Letter / Additional Notes
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us why you're interested in this position..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="border-border/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r hover:opacity-90 text-white text-lg py-6"
                      style={{ background: 'linear-gradient(135deg, #1b94cb 0%, #196b92 100%)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
