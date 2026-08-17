"use client"

import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { EASE, viewportOnce, ambientGlowBackground } from "@/lib/motion"

const education = [
  {
    degree: "Bachelor of Science (BS) in Computer Science",
    institution: "COMSATS University Islamabad, Abbottabad Campus",
    location: "Abbottabad, Pakistan",
    period: "Sep 2022 — Aug 2026",
    description:
      "Specializing in Artificial Intelligence, Machine Learning, and Full-Stack Development. Final Year Project: FarmGuardian - Intelligent Crop Disease Detection System using Deep Learning.",
    highlights: ["CGPA: 3.27/4.0", "IET Robotics Club", "Google Developer Student Club", "University Cricket Team"],
  },
  {
    degree: "Intermediate in Pre-Engineering",
    institution: "PIASS College Kasur",
    location: "Kasur, Pakistan",
    period: "Jun 2020 — Jul 2022",
    description:
      "Completed pre-engineering studies with focus on Mathematics, Physics, and Chemistry. Active participant in extracurricular activities.",
    highlights: ["Grade: A", "Cricket Team", "Volleyball Team", "Football Team"],
  },
  {
    degree: "Matriculation, Science (Biology)",
    institution: "District Public School & College Kasur",
    location: "Kasur, Pakistan",
    period: "Jan 2018 — Mar 2020",
    description: "Completed secondary education with a strong foundation in Science subjects.",
    highlights: ["Grade: A+", "Cricket Team", "Volleyball Team", "Football Team", "Basketball Team"],
  },
]

const experience = [
  {
    title: "Machine Learning Intern",
    company: "DevelopersHub Corporation",
    location: "Islamabad, Pakistan (Remote)",
    period: "Aug 2025 — Present",
    description:
      "Developing and optimizing machine learning models, performing data preprocessing, and conducting exploratory data analysis (EDA) to deliver actionable insights for real-world projects.",
    skills: ["Machine Learning", "Data Preprocessing", "EDA", "Python", "Model Optimization"],
  },
  {
    title: "Freelance Machine Learning Engineer",
    company: "Freelance & Freelancer.com",
    location: "Remote",
    period: "Jul 2023 — Present",
    description:
      "Designed, developed, and deployed 10+ ML models for clients worldwide. Projects include salary prediction systems, student performance analyzers, healthcare diagnostic classifiers, and business analytics dashboards using Python, Scikit-learn, and TensorFlow.",
    skills: ["Python", "Scikit-learn", "TensorFlow", "Classification", "Regression", "Predictive Analytics"],
  },
  {
    title: "AI Algorithm Engineer",
    company: "Academic Project",
    location: "COMSATS University",
    period: "May 2023 — Jul 2025",
    description:
      "Developed an AI-driven puzzle solver utilizing A*, Best-First Search, Breadth-First Search (BFS), and Depth-First Search (DFS) algorithms for optimization problems.",
    skills: ["Python", "Artificial Intelligence", "A* Algorithm", "BFS", "DFS"],
  },
  {
    title: "Mobile Application Developer (Flutter)",
    company: "Academic Project",
    location: "COMSATS University",
    period: "Mar 2025 — Jul 2025",
    description:
      "Developed cross-platform mobile applications using Flutter and Dart, implementing modern UI/UX patterns and integrating backend services.",
    skills: ["Flutter", "Dart", "Mobile Development", "Firebase", "UI/UX"],
  },
]

type TimelineEntry = {
  title: string
  subtitle: string
  location: string
  period: string
  description: string
  tags: string[]
}

function Timeline({ entries, dotVariant }: { entries: TimelineEntry[]; dotVariant: "filled" | "outline" }) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Progress line fills with a scroll-linked gradient as you move through the entries —
  // distinct from the projects section's sticky-stack, but similarly tied to scroll.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative pl-6">
      {/* Base track */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      {/* Scroll-linked animated fill, drawn on top of the track */}
      <motion.div
        style={{ scaleY: lineScale, transformOrigin: "top" }}
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary"
      />
      <div className="space-y-5">
        {entries.map((entry, index) => (
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: index * 0.12, ease: EASE }}
            whileHover={{ y: -3 }}
            className="relative pl-6 group"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.12 + 0.15, type: "spring" as const, stiffness: 300, damping: 15 }}
              className="absolute -left-[9px] top-4"
            >
              <span className="relative flex h-4 w-4">
                <motion.span
                  className={`absolute inline-flex h-full w-full rounded-full ${
                    dotVariant === "filled" ? "bg-primary/40" : "bg-accent/40"
                  }`}
                  animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                />
                <span
                  className={`relative inline-flex w-4 h-4 rounded-full group-hover:scale-125 transition-transform ${
                    dotVariant === "filled"
                      ? "bg-background border-2 border-primary"
                      : "bg-background border-2 border-border group-hover:border-primary"
                  }`}
                />
              </span>
            </motion.div>

            <div className="rounded-xl border border-transparent group-hover:border-primary/20 group-hover:bg-card/60 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300 p-4 -m-4 space-y-2">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {entry.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {entry.location}
                </span>
              </div>
              <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {entry.title}
              </h3>
              <p className="text-primary">{entry.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{entry.description}</p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.12 + 0.25 + tagIndex * 0.03, type: "spring" as const, stiffness: 260 }}
                    whileHover={{ y: -2 }}
                    className={
                      dotVariant === "filled"
                        ? "text-xs bg-accent/10 text-accent px-2 py-1 rounded hover:bg-accent/20 transition-colors"
                        : "text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    }
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      <div className="ambient-glow absolute -inset-1/4 opacity-20 pointer-events-none" style={{ background: ambientGlowBackground }} aria-hidden />
      <div className="relative max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-sm font-mono text-primary uppercase tracking-wider"
          >
            Education & Experience
          </motion.h2>
          <div className="space-y-12">
            {/* Education */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <motion.span
                  initial={{ rotate: -20, scale: 0.6 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ type: "spring" as const, stiffness: 220, damping: 14, delay: 0.1 }}
                >
                  <GraduationCap size={18} />
                </motion.span>
                <span className="text-sm font-medium uppercase tracking-wider">Education</span>
              </motion.div>
              <Timeline
                dotVariant="filled"
                entries={education.map((e) => ({
                  title: e.degree,
                  subtitle: e.institution,
                  location: e.location,
                  period: e.period,
                  description: e.description,
                  tags: e.highlights,
                }))}
              />
            </div>

            {/* Experience */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <motion.span
                  initial={{ rotate: -20, scale: 0.6 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ type: "spring" as const, stiffness: 220, damping: 14, delay: 0.1 }}
                >
                  <Briefcase size={18} />
                </motion.span>
                <span className="text-sm font-medium uppercase tracking-wider">Experience</span>
              </motion.div>
              <Timeline
                dotVariant="outline"
                entries={experience.map((e) => ({
                  title: e.title,
                  subtitle: e.company,
                  location: e.location,
                  period: e.period,
                  description: e.description,
                  tags: e.skills,
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
