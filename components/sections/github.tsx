"use client";

import { Reveal } from "@/components/shared/reveal";
import { FaGithub } from "react-icons/fa6"; // Avoid lucide brand icons!
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";

export function GitHubSection() {
  return (
    <section id="github" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <Reveal>
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Open <span className="text-brand-violet">Source</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl">
              I build and share my projects on GitHub. Check out my latest commits, repositories, and coding activity.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto glass rounded-2xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-12">
          
          {/* GitHub Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
              <FaGithub className="h-10 w-10 text-foreground" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Kaweesha Anuhas</h3>
            <p className="text-muted-foreground mb-6">@kaweesha-anuhas</p>
            
            <a href="https://github.com/kaweesha-anuhas" target="_blank" rel="noopener noreferrer">
              <Button className="w-full md:w-auto gap-2 rounded-full">
                <Star className="h-4 w-4" /> Follow on GitHub
              </Button>
            </a>
          </div>

          {/* GitHub Stats Image */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-video bg-secondary/30 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
                {/* 
                  This uses an open-source GitHub Readme Stats API. 
                  We use standard img tag here because it's an external dynamic SVG.
                */}
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=kaweesha-anuhas&show_icons=true&theme=transparent&text_color=94a3b8&icon_color=8b5cf6&title_color=8b5cf6&hide_border=true" 
                  alt="Kaweesha's GitHub Stats"
                  className="w-full h-auto object-contain p-4"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}