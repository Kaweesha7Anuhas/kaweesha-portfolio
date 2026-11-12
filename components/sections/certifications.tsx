"use client";

import { Reveal } from "@/components/shared/reveal";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <Reveal>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Certifications & <span className="text-brand-violet">Courses</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full" />
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.1}>
              <Card className="glass h-full flex flex-col hover:border-brand-violet/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-violet/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="h-6 w-6 text-brand-violet" />
                  </div>
                  <CardTitle className="font-heading text-xl leading-tight">{cert.title}</CardTitle>
                  <CardDescription className="text-brand-cyan font-medium text-sm pt-1">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>

                <CardFooter className="pt-4 border-t border-white/5">
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full gap-2 glass hover:text-brand-violet">
                      View Credential <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </Reveal>
          ))}

          {/* Placeholder to show how future certs will look */}
          <Reveal delay={0.2}>
            <div className="glass h-full flex flex-col items-center justify-center p-6 rounded-xl border border-dashed border-white/20 text-center text-muted-foreground min-h-[250px]">
              <Award className="h-10 w-10 mb-4 opacity-50" />
              <p className="text-sm">More certifications coming soon...</p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}