"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";
import { contactSchema, ContactFormValues } from "@/lib/validations/contact";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", honeypot: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const text = await response.text();
      let result;
      
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(`Server error (${response.status}). Check terminal for details.`);
      }

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again later.";
      toast.error("Failed to send message", { description: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Let&apos;s <span className="text-brand-violet">Work Together</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl text-lg">
              I&apos;m seeking a Software Engineering Internship. Whether you have an opportunity, a question, or just want to say hi, my inbox is always open.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="font-heading font-bold text-xl mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-muted-foreground hover:text-brand-violet transition-colors group">
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-brand-violet/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>{siteConfig.email}</span>
                  </a>
                  
                  <a href={`tel:${siteConfig.phoneIntl.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-muted-foreground hover:text-brand-violet transition-colors group">
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-brand-violet/10">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>{siteConfig.phoneIntl}</span>
                  </a>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="p-3 bg-white/5 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>{siteConfig.location}</span>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10">
                <h3 className="font-heading font-bold text-xl mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="p-3 bg-white/5 rounded-full hover:bg-brand-violet/20 hover:text-brand-violet transition-all hover:scale-110"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass p-6 md:p-8 rounded-xl border border-white/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Hi Kaweesha, I'd like to talk about..." 
                            className="min-h-[120px] bg-background/50 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="honeypot"
                    render={({ field }) => (
                      <div className="hidden" aria-hidden="true">
                        <input {...field} tabIndex={-1} autoComplete="off" />
                      </div>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}