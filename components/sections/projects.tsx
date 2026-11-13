"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { projects, Project, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories: ("All" | ProjectCategory)[] = ["All", "Backend", "Full-Stack", "Mobile"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <Reveal>
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Featured <span className="text-brand-violet">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full mb-8" />
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "rounded-full transition-all",
                    activeFilter === category ? "bg-brand-violet hover:bg-brand-violet/90 text-white" : "glass"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} featured />
            ))}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {regularProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            No projects found for this category.
          </div>
        )}

      </div>
    </section>
  );
}

function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const coverImage = project.images?.[0] || "placeholder.png";
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="glass h-full flex flex-col group overflow-hidden border-white/10 hover:border-brand-violet/50 transition-all duration-300">
        
        {/* Cover Image */}
        <div className={cn("w-full bg-secondary/30 relative overflow-hidden border-b border-white/5", featured ? "h-64 md:h-80" : "h-48")}>
          <Image
            src={`/projects/${coverImage}`}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardHeader>
          <div className="flex justify-between items-start gap-4 mb-2">
            <CardTitle className={cn("font-heading leading-tight group-hover:text-brand-violet transition-colors", featured ? "text-2xl" : "text-xl")}>
              {project.title}
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">{project.category}</Badge>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline" className="bg-background/50">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 5 && (
              <Badge variant="outline" className="bg-background/50">+{project.techStack.length - 5}</Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-4 border-t border-white/5 flex gap-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full gap-2 glass hover:text-brand-violet">
                <FaGithub className="h-4 w-4" /> Code
              </Button>
            </a>
          )}
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-1 gap-2">
                Details <ArrowRight className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            
            <DialogContent className="glass border-white/10 sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">{project.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground pt-2">
                  {project.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* Left Side: Images */}
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 group/carousel">
                    <Image
                      src={`/projects/${project.images[currentImgIndex]}`}
                      alt={`${project.title} screenshot ${currentImgIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                    
                    {/* Navigation Buttons */}
                    {project.images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-brand-violet text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-brand-violet text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {project.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {project.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImgIndex(i)}
                          className={cn(
                            "relative w-20 h-14 rounded-md overflow-hidden border-2 transition-all shrink-0",
                            currentImgIndex === i ? "border-brand-violet opacity-100" : "border-transparent opacity-50 hover:opacity-100"
                          )}
                        >
                          <Image
                            src={`/projects/${img}`}
                            alt={`Thumbnail ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-brand-violet/10 text-brand-violet">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex gap-2 mt-6 pt-4 border-t border-white/10">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full gap-2 glass hover:text-brand-violet">
                      <FaGithub className="h-4 w-4" /> View Source
                    </Button>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full gap-2">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>

      </Card>
    </motion.div>
  );
}