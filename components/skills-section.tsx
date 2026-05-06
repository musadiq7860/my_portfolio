"use client"

import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"

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

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <AnimatedSection direction="left">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Skills</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 100}>
                <div className="space-y-3">
                  <h3 className="text-foreground font-medium">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all cursor-default hover:scale-105 hover:-translate-y-0.5"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
