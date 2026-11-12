"use client";

import { Reveal } from "@/components/shared/reveal";
import { education } from "@/data/education";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <Reveal>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Education <span className="text-brand-violet">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full" />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.2}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-background border-2 border-brand-violet rounded-full md:-translate-x-1/2 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className="glass p-6 rounded-xl border border-white/10 hover:border-brand-violet/50 transition-colors group">
                    <div className="flex items-center gap-2 text-brand-violet mb-2">
                      {index === 0 ? <GraduationCap className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                      <Badge variant="secondary" className="bg-brand-violet/10 text-brand-violet border-0">
                        {item.period}
                      </Badge>
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl mb-1">{item.degree}</h3>
                    <p className="text-foreground/80 font-medium mb-2">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    
                    {item.expected && (
                      <div className="flex items-center gap-2 text-xs font-medium text-brand-cyan">
                        <Calendar className="h-4 w-4" />
                        {item.expected}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty div for the other side of the timeline (desktop) */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}