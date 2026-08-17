"use client"

import { Github, ExternalLink, GitCommitHorizontal, Star, GitFork, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, animate } from "framer-motion"
import { EASE, viewportOnce, ambientGlowBackground } from "@/lib/motion"

const githubProfile = "https://github.com/musadiq7860"

const stats = [
  { icon: Star, label: "Stars Earned", value: 45, suffix: "+", color: "text-yellow-500" },
  { icon: GitFork, label: "Repositories", value: 29, suffix: "+", color: "text-primary" },
  { icon: GitCommitHorizontal, label: "Contributions", value: 500, suffix: "+", color: "text-accent" },
  { icon: Users, label: "Followers", value: 5, suffix: "+", color: "text-purple-400" },
]

function CountUpStat({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <p ref={ref} className="text-2xl font-bold text-foreground">
      {display}
      {suffix}
    </p>
  )
}

export function GitHubSection() {
  return (
    <section id="github" className="relative py-24 px-6 bg-card/30 overflow-hidden">
      <div className="ambient-glow absolute -inset-1/4 opacity-30 pointer-events-none" style={{ background: ambientGlowBackground }} aria-hidden />
      <div className="relative max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-sm font-mono text-primary uppercase tracking-wider"
          >
            GitHub
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col gap-4"
            >
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
            </motion.div>

            {/* GitHub Stats — count up on scroll into view */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 120, damping: 16 }}
                  whileHover={{ y: -4 }}
                  className="group p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors duration-300 text-center"
                >
                  <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <CountUpStat value={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="p-4 bg-card rounded-xl border border-border overflow-hidden"
            >
              <p className="text-xs font-mono text-muted-foreground mb-3">Contribution Activity</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/38bdf8/musadiq7860"
                alt="GitHub Contribution Graph"
                className="w-full rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
