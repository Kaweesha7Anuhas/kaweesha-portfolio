"use client";

import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code2, Trophy } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "6" },
  { icon: GraduationCap, label: "Degree", value: "SLIIT BSc (Hons) IT" },
  { icon: Briefcase, label: "Focus", value: "Java & Spring Boot" },
  { icon: Trophy, label: "Graduation", value: "Expected 2028" },
];

const softSkills = ["Problem Solving", "Teamwork", "Adaptability", "Time Management", "Communication", "Continuous Learning"];
const learning = ["Microservices", "Docker", "AWS"];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <Reveal>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              About <span className="text-brand-violet">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <Reveal delay={0.1}>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                I am an Information Technology undergraduate at SLIIT with hands-on experience in Java, Spring Boot, and the MERN Stack. I specialize in REST API development, database management, and building web and mobile applications.
              </p>
              <p>
                My career goal is to secure a Software Engineering Internship where I can apply my technical knowledge to real-world software projects while growing into a highly skilled, versatile engineer.
              </p>
              
              <div className="pt-4">
                <h4 className="text-foreground font-semibold mb-3">Currently Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {learning.map((item) => (
                    <Badge key={item} variant="secondary" className="px-3 py-1 bg-brand-violet/10 text-brand-violet hover:bg-brand-violet/20">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-foreground font-semibold mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.2 + index * 0.1}>
                <Card className="glass border-white/10 hover:border-brand-violet/50 transition-colors h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center justify-center h-full">
                    <div className="p-3 bg-brand-violet/10 rounded-full mb-4">
                      <stat.icon className="h-6 w-6 text-brand-violet" />
                    </div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-1">{stat.value}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}