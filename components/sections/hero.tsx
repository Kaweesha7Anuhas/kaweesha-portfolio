"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";
import { TypingText } from "@/components/shared/typing-text";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-cyan/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Open to Internship Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to Internship Opportunities
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-4">
            Hi, I'm <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan">
              {siteConfig.name}
            </span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-8">
            <TypingText words={siteConfig.roles} />
          </div>

          <p className="text-muted-foreground max-w-lg mb-8 mx-auto md:mx-0">
            {siteConfig.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <Link href="#projects">
              <Button size="lg" className="rounded-full">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href={siteConfig.cvPath} download>
              <Button size="lg" variant="outline" className="rounded-full">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="#contact">
              <Button size="lg" variant="ghost" className="rounded-full">
                Contact Me <Mail className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="p-3 glass rounded-full hover:scale-110 hover:text-brand-violet transition-all"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image / Glow Frame Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo to-brand-cyan rounded-full blur-2xl opacity-40 animate-pulse" />
          <div className="relative w-full h-full rounded-full border border-white/20 glass flex items-center justify-center overflow-hidden">
             {/* YOU WILL ADD YOUR PROFILE PHOTO HERE IN PHASE 13 */}
             <span className="text-muted-foreground text-sm text-center px-4">
               Profile Photo Placeholder<br/>(Add to /public/profile.jpg)
             </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hidden md:block"
      >
        <Link href="#about" aria-label="Scroll to About">
          <ChevronDown className="h-6 w-6" />
        </Link>
      </motion.div>
    </section>
  );
}