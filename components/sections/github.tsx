"use client";

import { Reveal } from "@/components/shared/reveal";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
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
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
              <FaGithub className="h-10 w-10 text-foreground" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Kaweesha Anuhas</h3>
            <p className="text-muted-foreground mb-6">@Kaweesha7Anuhas</p>
            
            <a href="https://github.com/Kaweesha7Anuhas" target="_blank" rel="noopener noreferrer">
              <Button className="w-full md:w-auto gap-2 rounded-full">
                <Star className="h-4 w-4" /> Follow on GitHub
              </Button>
            </a>
          </div>

          {/* GitHub Streak Card */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-video bg-secondary/30 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center p-4">
                {/* 
                  We use the streak-stats API here because it often loads faster 
                  and looks better for new profiles than the standard stats card.
                */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Kaweesha7Anuhas&theme=transparent&hide_border=true&stroke=8b5cf6&ring=8b5cf6&fire=8b5cf6&currStreakNum=ffffff&currStreakLabel=94a3b8&sideNums=ffffff&sideLabels=94a3b8&dates=94a3b8" 
                  alt="Kaweesha's GitHub Streak"
                  className="w-full h-auto object-contain"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}