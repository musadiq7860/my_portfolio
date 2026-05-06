"use client"

import {
  Github,
  Star,
  GitFork,
  Briefcase,
  Globe,
  Sparkles,
  BarChart3,
  MessageSquare,
  Bot,
  ExternalLink,
  Code2,
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"
import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    name: "job-copilot",
    description:
      "Full-stack AI web app that takes your resume PDF and a job description, then rewrites your resume bullets to match the job's ATS keywords and generates a tailored cover letter — all in under 60 seconds.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2,
    url: "https://github.com/musadiq7860/job-copilot",
    icon: Briefcase,
    tech: ["Next.js", "FastAPI", "Groq", "LLaMA"],
  },
  {
    name: "multilingual-support-agent",
    description:
      "AI-powered multilingual customer support agent with real-time language detection, contextual responses, and automated ticket routing via n8n workflows.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2,
    url: "https://github.com/musadiq7860/multilingual-support-agent",
    icon: Globe,
    tech: ["FastAPI", "React", "Groq", "Supabase", "n8n"],
  },
  {
    name: "ai-portfolio-generator",
    description:
      "AI-powered portfolio & CV generator — paste GitHub URL, upload LinkedIn PDF, get a live portfolio site + downloadable CV in 60 seconds.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 2,
    url: "https://github.com/musadiq7860/ai-portfolio-generator",
    icon: Sparkles,
    tech: ["Node.js", "Gemini AI", "Express", "EJS"],
  },
  {
    name: "AI_growth_auditor",
    description:
      "AI-powered business growth audit tool — scrapes website, generates custom 3-step strategy via Gemini, delivers to email, logs leads to Google Sheets.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 2,
    url: "https://github.com/musadiq7860/AI_growth_auditor",
    icon: BarChart3,
    tech: ["n8n", "Gemini AI", "Google Sheets", "Gmail"],
  },
  {
    name: "ai-sentiment-feedback-analyzer",
    description:
      "AI-powered customer feedback analyzer — Gemini classifies sentiment (Positive/Negative/Neutral), logs to Google Sheets, sends email alerts via n8n.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 2,
    url: "https://github.com/musadiq7860/ai-sentiment-feedback-analyzer",
    icon: MessageSquare,
    tech: ["n8n", "Gemini AI", "Webhooks", "Google Sheets"],
  },
  {
    name: "FARMGUARDIAN",
    description:
      "AI-powered agricultural assistant for Pakistani farmers — crop disease detection, fertilizer recommendations & irrigation planning in Urdu.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 2,
    forks: 2,
    url: "https://github.com/musadiq7860/FARMGUARDIAN",
    icon: Bot,
    tech: ["React Native", "TensorFlow", "CNN", "Flask"],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
      delay: i * 0.1,
    },
  }),
}

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              AI agents, full-stack apps, and automation workflows — my best work from GitHub.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`relative h-full bg-card rounded-xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                    hoveredProject === index
                      ? "border-primary/50 shadow-xl shadow-primary/10"
                      : "border-border"
                  }`}
                >
                  {/* Animated gradient border glow */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-accent/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10" />

                  {/* Card header */}
                  <div className="p-5 pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <project.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block"
                              style={{ backgroundColor: project.languageColor }}
                            />
                            <span className="text-xs text-muted-foreground">{project.language}</span>
                          </div>
                        </div>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 flex-shrink-0 mt-1"
                      />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-5 pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer stats */}
                    <div className="flex items-center gap-4 pt-3 border-t border-border/50">
                      <div className="flex items-center gap-1 text-muted-foreground group-hover:text-yellow-500/80 transition-colors">
                        <Star size={14} className="group-hover:fill-yellow-500/80 transition-all duration-300" />
                        <span className="text-xs">{project.stars}</span>
                      </div>
                      {project.forks && (
                        <div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary/80 transition-colors">
                          <GitFork size={14} />
                          <span className="text-xs">{project.forks}</span>
                        </div>
                      )}
                      <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground/50 group-hover:text-primary/50 transition-colors">
                        <Code2 size={12} />
                        <span>Source</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="flex justify-center mt-12">
            <Link
              href="https://github.com/musadiq7860?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 text-muted-foreground font-medium group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <Github size={18} />
              View All Repositories
              <ExternalLink
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
