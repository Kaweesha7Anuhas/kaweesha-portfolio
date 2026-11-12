"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2">
            <Link href="#home" className="font-heading font-bold text-2xl tracking-tighter">
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm text-sm">
              {siteConfig.headline}
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Socials</h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-2 glass rounded-full hover:text-brand-violet hover:border-brand-violet/50 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          
          <Link 
            href="#home"
            className="mt-4 md:mt-0 flex items-center gap-2 hover:text-foreground transition-colors"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}