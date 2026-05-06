"use client"

import {
  ArrowUpRight,
  Leaf,
  Github,
  Star,
  GitFork,
  Briefcase,
  Globe,
  Sparkles,
  BarChart3,
  MessageSquare,
  Bot,
  Heart,
  Activity,
  TrendingUp,
  FlaskConical,
  Building2,
  ExternalLink,
  Code2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { useState } from "react"

const projects = [
  {
    title: "FarmGuardian",
    subtitle: "Final Year Project",
    description:
      "An intelligent agriculture support system designed to detect crop diseases using deep learning models and assist farmers in early diagnosis and decision-making.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "EfficientNet", "Flask", "React Native"],
    icon: Leaf,
    featured: true,
    image: "/ai-crop-disease-detection-mobile-app-with-plant-le.jpg",
    highlights: [
      "Deep learning-based disease detection using EfficientNet & CNN architectures",
      "Comparative analysis with VGG-based models for optimal accuracy",
      "Mobile-first application designed for field use by farmers",
      "Real-time image processing and instant diagnosis",
      "Actionable crop health recommendations engine",
    ],
    problemStatement:
      "Farmers often struggle to identify crop diseases early, leading to significant yield losses and economic impact. Traditional manual inspection is time-consuming and requires expert knowledge.",
    solution:
      "FarmGuardian provides an AI-powered solution that enables farmers to simply capture a photo of affected crops and receive instant, accurate disease identification along with treatment recommendations.",
    githubUrl: "https://github.com/musadiq7860/FARMGUARDIAN",
  },
  {
    title: "Skin Cancer & Pneumonia COVID Classifier",
    subtitle: "Medical Imaging AI",
    description:
      "Deep learning model for classifying skin cancer lesions and detecting pneumonia/COVID-19 from chest X-rays using convolutional neural networks.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Jupyter Notebook"],
    icon: Activity,
    featured: false,
    image: "/medical-ai-chest-xray-analysis-skin-cancer-detecti.jpg",
    githubUrl: "https://github.com/musadiq7860/skin-cancer-and-pneumonia-covid-classifier",
  },
  {
    title: "Breast Cancer Classifier",
    subtitle: "Healthcare ML",
    description:
      "Machine learning classification model for breast cancer diagnosis, utilizing medical imaging data to assist in early detection and diagnosis.",
    tech: ["Python", "Scikit-learn", "Jupyter Notebook", "Pandas", "NumPy"],
    icon: Heart,
    featured: false,
    image: "/machine-learning-breast-cancer-diagnosis-medical-d.jpg",
    githubUrl: "https://github.com/musadiq7860/Breast_cancer_classifier",
  },
  {
    title: "Heart Disease Classifier",
    subtitle: "Predictive Healthcare",
    description:
      "Predictive model for heart disease classification using patient health metrics and machine learning algorithms for early risk assessment.",
    tech: ["Python", "Scikit-learn", "Jupyter Notebook", "Pandas", "Matplotlib"],
    icon: Heart,
    featured: false,
    image: "/heart-disease-prediction-ai-ecg-analysis-medical-d.jpg",
    githubUrl: "https://github.com/musadiq7860/Heart_desease_classifier_",
  },
  {
    title: "Stock Price Movement Prediction",
    subtitle: "Financial ML",
    description:
      "Machine learning classifier for predicting stock price movements using historical market data and technical indicators.",
    tech: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook"],
    icon: TrendingUp,
    featured: false,
    image: "/stock-market-prediction-ai-trading-chart-candlesti.jpg",
    githubUrl: "https://github.com/musadiq7860/Stock_Price_Movement_Prediction_classifier",
  },
  {
    title: "Concrete Compressive Strength Predictor",
    subtitle: "Civil Engineering ML",
    description:
      "Regression model for predicting concrete compressive strength based on mixture components, aiding construction and material engineering.",
    tech: ["Python", "Scikit-learn", "Jupyter Notebook", "Regression"],
    icon: Building2,
    featured: false,
    image: "/concrete-strength-prediction-construction-engineer.jpg",
    githubUrl: "https://github.com/musadiq7860/concrete_compressive_strength-Predictor",
  },
  {
    title: "Crypto Tracker Flutter",
    subtitle: "Mobile Application",
    description:
      "Cross-platform cryptocurrency tracking application built with Flutter, featuring real-time price updates and Firebase integration.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "REST API"],
    icon: FlaskConical,
    featured: false,
    image: "/cryptocurrency-tracker-mobile-app-bitcoin-ethereum.jpg",
    githubUrl: "https://github.com/musadiq7860/Crypto-Tracker-Flutter",
  },
]

const pinnedRepos = [
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

export function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)
  const [hoveredPinned, setHoveredPinned] = useState<number | null>(null)

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
              A collection of projects showcasing my expertise in machine learning, artificial intelligence, and
              full-stack development.
            </p>
          </div>
        </AnimatedSection>

        {featuredProject && (
          <AnimatedSection delay={100}>
            <div className="relative group mb-16">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500">
                <div className="grid lg:grid-cols-2">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <Image
                      src={featuredProject.image || "/placeholder.svg"}
                      alt={featuredProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r" />
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-mono rounded-full flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Final Year Project
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <featuredProject.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{featuredProject.title}</h3>
                          <span className="text-xs font-mono text-accent uppercase tracking-wider">
                            AI-Powered Agriculture
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">The Problem</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {featuredProject.problemStatement}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-accent mb-1">The Solution</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{featuredProject.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {featuredProject.highlights?.slice(0, 4).map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground group/item">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5 group-hover/item:scale-150 transition-transform" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm font-medium"
                      >
                        <Github size={16} />
                        View on GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* ── Pinned GitHub Repositories ── */}
        <AnimatedSection delay={200}>
          <div className="space-y-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-xs font-mono text-primary">Open Source</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Pinned <span className="animate-text-shimmer bg-clip-text">Repositories</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
                AI agents, full-stack apps, and automation workflows from my GitHub.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinnedRepos.map((repo, index) => (
                <AnimatedSection key={repo.name} delay={300 + index * 100} direction="up">
                  <Link
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                    onMouseEnter={() => setHoveredPinned(index)}
                    onMouseLeave={() => setHoveredPinned(null)}
                  >
                    <div
                      className={`relative h-full bg-card rounded-xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                        hoveredPinned === index
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
                              <repo.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                                {repo.name}
                              </h4>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span
                                  className="w-2.5 h-2.5 rounded-full inline-block"
                                  style={{ backgroundColor: repo.languageColor }}
                                />
                                <span className="text-xs text-muted-foreground">{repo.language}</span>
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
                          {repo.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {repo.tech.map((t) => (
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
                            <span className="text-xs">{repo.stars}</span>
                          </div>
                          {repo.forks && (
                            <div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary/80 transition-colors">
                              <GitFork size={14} />
                              <span className="text-xs">{repo.forks}</span>
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
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── More Projects (original) ── */}
        <AnimatedSection delay={200}>
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <AnimatedSection key={project.title} delay={300 + index * 100} direction="up">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <div className="relative h-full bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                      {/* Project Image */}
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                        <div className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight size={16} className="text-primary" />
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <div className="p-2 bg-card/80 backdrop-blur-sm rounded-lg">
                            <project.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4">
                        <span className="text-xs font-mono text-accent uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                        <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-xs font-mono text-primary">+{project.tech.length - 3}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="flex justify-center mt-12">
            <Link
              href="https://github.com/musadiq7860?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 text-muted-foreground font-medium group"
            >
              <Github size={18} />
              View All Repositories
              <ArrowUpRight
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
