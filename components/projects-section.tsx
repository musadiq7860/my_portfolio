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
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    name: "FARMGUARDIAN",
    description:
      "AI-powered agricultural assistant for Pakistani farmers — crop disease detection using EfficientNet & CNN, fertilizer recommendations & irrigation planning in Urdu. Final Year Project at COMSATS.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 2,
    forks: 2,
    url: "https://github.com/musadiq7860/FARMGUARDIAN",
    icon: Bot,
    tech: ["React Native", "TensorFlow", "CNN", "Flask"],
    image: "/farmguardian.png",
    featured: true,
  },
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
    image: "/job-copilot.png",
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
    image: "/multilingual-agent.png",
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
    image: "/portfolio-generator.png",
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
    image: "/growth-auditor.png",
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
    image: "/sentiment-analyzer.png",
  },
]

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 16,
      delay: 0.15 + i * 0.12,
    },
  }),
}

const featuredCardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 18,
      delay: 0.2,
    },
  },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

const iconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 12,
    scale: 1.2,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 },
  },
}

const arrowVariants = {
  rest: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: 3,
    y: -3,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
}

const tagVariants = {
  rest: { y: 0 },
  hover: (i: number) => ({
    y: -2,
    transition: { delay: i * 0.03, type: "spring" as const, stiffness: 300, damping: 15 },
  }),
}

export function ProjectsSection() {
  const featuredProject = projects[0] // FARMGUARDIAN
  const otherProjects = projects.slice(1)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-xs font-mono text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            AI agents, full-stack apps, and automation workflows — my best work from GitHub.
          </p>
        </motion.div>

        {/* FARMGUARDIAN - Featured Hero Card */}
        <motion.div
          className="mb-12"
          variants={featuredCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Link
            href={featuredProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <motion.div
              className="relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-colors duration-500"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Gradient glow behind card */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/0 via-primary/40 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10" />

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                  <motion.div className="absolute inset-0" variants={imageVariants}>
                    <Image
                      src={featuredProject.image!}
                      alt={featuredProject.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />

                  {/* Featured badge */}
                  <motion.div
                    className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring" as const, stiffness: 150 }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span className="text-xs font-mono font-bold text-accent-foreground">Final Year Project</span>
                  </motion.div>
                </div>

                {/* Content side */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-primary/10 rounded-xl"
                      variants={iconVariants}
                    >
                      <featuredProject.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {featuredProject.name}
                      </h3>
                      <span className="text-xs font-mono text-accent uppercase tracking-wider">AI-Powered Agriculture</span>
                    </div>
                    <motion.div className="ml-auto" variants={arrowVariants}>
                      <ArrowUpRight size={20} className="text-primary" />
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        custom={i}
                        variants={tagVariants}
                        className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-lg group-hover:bg-primary/15 transition-colors"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-yellow-500 transition-colors">
                      <Star size={16} className="group-hover:fill-yellow-500 transition-all duration-300" />
                      <span className="text-sm font-medium">{featuredProject.stars}</span>
                    </div>
                    {featuredProject.forks && (
                      <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-primary transition-colors">
                        <GitFork size={16} />
                        <span className="text-sm font-medium">{featuredProject.forks}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: featuredProject.languageColor }} />
                      <span className="text-sm text-muted-foreground">{featuredProject.language}</span>
                    </div>
                    <div className="ml-auto inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <Github size={16} />
                      <span className="hidden sm:inline">View Source</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Other Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {otherProjects.map((project, index) => (
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
              >
                <motion.div
                  className="relative h-full bg-card rounded-xl border border-border overflow-hidden transition-colors duration-500 hover:border-primary/50"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* Gradient glow */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-accent/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10" />

                  {/* Project Image */}
                  <div className="relative h-44 overflow-hidden">
                    <motion.div className="absolute inset-0" variants={imageVariants}>
                      <Image
                        src={project.image!}
                        alt={project.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                    {/* Floating arrow on hover */}
                    <motion.div
                      className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-lg"
                      variants={arrowVariants}
                    >
                      <ArrowUpRight size={16} className="text-primary" />
                    </motion.div>

                    {/* Icon badge */}
                    <motion.div
                      className="absolute bottom-3 left-3 p-2.5 bg-card/80 backdrop-blur-sm rounded-lg"
                      variants={iconVariants}
                    >
                      <project.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, i) => (
                        <motion.span
                          key={t}
                          custom={i}
                          variants={tagVariants}
                          className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-4 pt-3 border-t border-border/50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.languageColor }} />
                        <span className="text-xs text-muted-foreground">{project.language}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground group-hover:text-yellow-500/80 transition-colors">
                        <Star size={13} className="group-hover:fill-yellow-500/80 transition-all duration-300" />
                        <span className="text-xs">{project.stars}</span>
                      </div>
                      {project.forks && (
                        <div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary/80 transition-colors">
                          <GitFork size={13} />
                          <span className="text-xs">{project.forks}</span>
                        </div>
                      )}
                      <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground/50 group-hover:text-primary/50 transition-colors">
                        <Code2 size={12} />
                        <span>Source</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all repos button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring" as const, stiffness: 80 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
