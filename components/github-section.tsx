"use client"

import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

const githubProfile = "https://github.com/musadiq7860"

export function GitHubSection() {
  return (
    <section id="github" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <AnimatedSection direction="left">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">GitHub</h2>
          </AnimatedSection>
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}
