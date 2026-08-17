"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code2, Layers, Smartphone, Wrench, Cloud, Brain, type LucideIcon } from "lucide-react"
import { EASE, viewportOnce, ambientGlowBackground } from "@/lib/motion"

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Frameworks & Libraries": Layers,
  "Mobile Development": Smartphone,
  "Tools & Technologies": Wrench,
  "Platforms & Cloud": Cloud,
  "AI & Machine Learning": Brain,
}

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C#", "Dart", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "FastAPI",
      "Django",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      "React Native",
      "Expo",
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Cross-Platform Apps",
      "REST API Integration",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "VS Code", "Jupyter", "Postman", "Figma", "Linux", "REST APIs"],
  },
  {
    title: "Platforms & Cloud",
    skills: ["AWS", "Google Cloud", "Vercel", "Firebase", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "CNNs",
      "Transfer Learning",
      "Model Deployment",
      "Data Analysis",
      "EDA",
    ],
  },
]

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.03, type: "spring" as const, stiffness: 260, damping: 18 },
  }),
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-card/30 overflow-hidden">
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
            Skills
          </motion.h2>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = categoryIcons[category.title]
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.06, ease: EASE }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 group">
                    {Icon && (
                      <motion.span
                        initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{
                          delay: categoryIndex * 0.06 + 0.1,
                          type: "spring" as const,
                          stiffness: 220,
                          damping: 14,
                        }}
                        className="text-primary/70 group-hover:text-primary group-hover:rotate-12 transition-all duration-300"
                      >
                        <Icon size={16} />
                      </motion.span>
                    )}
                    <h3 className="text-foreground font-medium">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        custom={skillIndex}
                        variants={badgeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        whileHover={{ y: -3, scale: 1.06 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
