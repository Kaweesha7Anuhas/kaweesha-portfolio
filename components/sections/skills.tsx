"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/shared/reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <Reveal>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Technical <span className="text-brand-violet">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl">
              The technologies and tools I use to build robust, full-stack applications.
            </p>
          </div>
        </Reveal>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={0.1 * index}>
              <Card className="glass border-white/10 hover:border-brand-violet/50 transition-colors h-full group">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 bg-brand-violet/10 rounded-lg group-hover:bg-brand-violet/20 transition-colors">
                    <category.icon className="h-6 w-6 text-brand-violet" />
                  </div>
                  <CardTitle className="font-heading text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-md bg-background/50 border border-white/5 shadow-sm"
                      >
                        <skill.icon 
                          className="h-5 w-5" 
                          style={{ color: skill.color }} 
                        />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}