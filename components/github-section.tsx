"use client"

import { Github, ExternalLink, GitCommitHorizontal, Star, GitFork, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

const githubProfile = "https://github.com/musadiq7860"

const stats = [
  { icon: Star, label: "Stars Earned", value: "45+", color: "text-yellow-500" },
  { icon: GitFork, label: "Repositories", value: "23+", color: "text-primary" },
  { icon: GitCommitHorizontal, label: "Contributions", value: "500+", color: "text-accent" },
  { icon: Users, label: "Followers", value: "5+", color: "text-purple-400" },
]

export function GitHubSection() {
  return (
    <section id="github" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <AnimatedSection direction="left">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">GitHub</h2>
          </AnimatedSection>
          <div className="space-y-8">
            <AnimatedSection delay={100}>
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">
                  Explore my open-source work, technical contributions, and project repositories.
                </p>
                <Link
                  href={githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 w-fit hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors group-hover:rotate-12 duration-300">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-foreground group-hover:text-primary transition-colors">musadiq7860</p>
                    <p className="text-sm text-muted-foreground">View GitHub Profile</p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2 group-hover:rotate-45"
                  />
                </Link>
              </div>
            </AnimatedSection>

            {/* GitHub Stats */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 100 }}
                    className="group p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 text-center hover:-translate-y-1"
                  >
                    <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Contribution Graph */}
            <AnimatedSection delay={300}>
              <div className="p-4 bg-card rounded-xl border border-border overflow-hidden">
                <p className="text-xs font-mono text-muted-foreground mb-3">Contribution Activity</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/38bdf8/musadiq7860"
                  alt="GitHub Contribution Graph"
                  className="w-full rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
