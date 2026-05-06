"use client"

import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"
import { AnimatedSection } from "./animated-section"

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
    title: "Machine Learning Engineer",
    company: "Freelance",
    location: "Remote",
    period: "Sep 2023 — Present",
    description:
      "Designed and deployed machine learning models in Python using Scikit-learn for classification and regression tasks such as salary prediction and student performance analysis.",
    skills: ["Python", "Scikit-learn", "Classification", "Regression", "Data Analysis"],
  },
  {
    title: "Machine Learning Model Developer",
    company: "Freelancer.com",
    location: "Remote",
    period: "Jul 2023 — Jul 2025",
    description:
      "Developed and fine-tuned machine learning models for predictive analytics, including student performance prediction and salary forecasting using Python and Scikit-learn.",
    skills: ["Machine Learning Algorithms", "Python", "Predictive Analytics", "Model Fine-tuning"],
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

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <AnimatedSection direction="left">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Education & Experience</h2>
          </AnimatedSection>
          <div className="space-y-12">
            {/* Education */}
            <div className="space-y-6">
              <AnimatedSection>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap size={18} className="animate-bounce" />
                  <span className="text-sm font-medium uppercase tracking-wider">Education</span>
                </div>
              </AnimatedSection>
              {education.map((edu, index) => (
                <AnimatedSection key={edu.degree} delay={100 + index * 150}>
                  <div className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full group-hover:scale-125 transition-transform" />
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded hover:bg-accent/20 transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-6">
              <AnimatedSection>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase size={18} className="animate-pulse" />
                  <span className="text-sm font-medium uppercase tracking-wider">Experience</span>
                </div>
              </AnimatedSection>
              {experience.map((exp, index) => (
                <AnimatedSection key={exp.title} delay={100 + index * 150}>
                  <div className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-border rounded-full group-hover:border-primary group-hover:scale-125 transition-all" />
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
