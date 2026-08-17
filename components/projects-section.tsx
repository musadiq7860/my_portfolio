"use client"

import {
  Github,
  ArrowUpRight,
  Bot,
  Briefcase,
  Globe,
  Flame,
  Receipt,
  BookOpen,
  Database,
  Scale,
  Stethoscope,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  FlameOnMockup,
  InvoiceExtractorMockup,
  RagChatbotMockup,
  SqlAgentMockup,
  LexAiMockup,
  DentalClinicMockup,
} from "./project-mockups"

const EASE = [0.16, 1, 0.3, 1] as const

type Project = {
  index: string
  eyebrow: string
  name: string
  description: string
  tech: string[]
  url: string
  icon: LucideIcon
  image?: string
  mockup?: React.ComponentType
  external?: boolean
}

const projects: Project[] = [
  {
    index: "01",
    eyebrow: "FINAL YEAR PROJECT / AGRICULTURE AI",
    name: "FarmGuardian",
    description:
      "An offline-first mobile app for Pakistani farmers with on-device crop disease detection (91% accuracy) and yield prediction across five crops, each paired with cure recommendations — fully localized in Urdu. Won 1st Place (People's Choice) and 3rd Place at the COMSATS Spring 2026 FYP Competition.",
    tech: ["React Native", "TFLite", "Random Forest", "Supabase"],
    url: "https://github.com/musadiq7860/FARMGUARDIAN",
    icon: Bot,
    image: "/farmguardian.png",
  },
  {
    index: "02",
    eyebrow: "SOLO PROJECT / CAREER TOOLS",
    name: "Job Copilot",
    description:
      "A 3-stage LLM chain extracts ATS keywords from a job description, rewrites resume bullets to match, and generates a tailored cover letter — delivered as a downloadable DOCX in under 60 seconds from a single PDF upload.",
    tech: ["Next.js 14", "FastAPI", "Groq LLaMA 3.3", "Supabase"],
    url: "https://github.com/musadiq7860/job-copilot",
    icon: Briefcase,
    image: "/job-copilot.png",
  },
  {
    index: "03",
    eyebrow: "SOLO PROJECT / CUSTOMER SUPPORT AI",
    name: "Multilingual Support Agent",
    description:
      "Language detection, translation, intent classification, sentiment analysis, and urgency scoring in a single LLM call across any language — with n8n-automated ticket routing and a full admin dashboard.",
    tech: ["FastAPI", "React", "Groq", "n8n"],
    url: "https://github.com/musadiq7860/multilingual-support-agent",
    icon: Globe,
    image: "/multilingual-agent.png",
  },
  {
    index: "04",
    eyebrow: "COLLABORATION / AUTOMATION",
    name: "Flame On! WhatsApp Receptionist",
    description:
      "An AI receptionist for a Pakistani restaurant that handles the full order flow — menu Q&A, pricing, confirmation, delivery address — entirely in Roman Urdu, with Redis-backed conversation memory and orders logged straight to Google Sheets.",
    tech: ["n8n", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Redis"],
    url: "https://github.com/musadiq7860/flame-on-whatsapp-ai-receptionist",
    icon: Flame,
    mockup: FlameOnMockup,
  },
  {
    index: "05",
    eyebrow: "COLLABORATION / DOCUMENT AI",
    name: "AI Invoice Extractor",
    description:
      "A multi-tenant SaaS that pulls vendor, date, amount, and line items from invoice and receipt images via OCR plus an LLM extraction layer, with company-level logins and a dashboard for search and vendor stats.",
    tech: ["Flask", "LangChain", "Tesseract OCR", "Supabase"],
    url: "https://github.com/musadiq7860/ai-invoice-extractor",
    icon: Receipt,
    mockup: InvoiceExtractorMockup,
  },
  {
    index: "06",
    eyebrow: "COLLABORATION / RAG SYSTEMS",
    name: "Business Docs RAG Chatbot",
    description:
      "Upload any business document and get a per-session retrieval-augmented chatbot on the fly — built first in LangChain, then converted into a reusable, self-hosted n8n workflow.",
    tech: ["LangChain", "Groq", "Chroma", "n8n"],
    url: "https://github.com/musadiq7860/rag-business-docs-chatbot",
    icon: BookOpen,
    mockup: RagChatbotMockup,
  },
  {
    index: "07",
    eyebrow: "SOLO PROJECT / RAG SYSTEMS",
    name: "SQL RAG Agent",
    description:
      "A hybrid RAG agent that answers natural-language questions over both structured business data and unstructured documents, routing each query to a SQL agent or a document-retrieval chain depending on intent.",
    tech: ["LangChain", "SQL Agent", "Groq", "RAG"],
    url: "https://github.com/musadiq7860/sql-rag-agent",
    icon: Database,
    mockup: SqlAgentMockup,
  },
  {
    index: "08",
    eyebrow: "CLIENT PROJECT / LEGAL TECH",
    name: "Lex.AI — Legal Document Simplifier",
    description:
      "Simplifies dense legal documents into plain language by combining a fine-tuned legal-domain DistilBERT model with an LLM for clause-level explanation. Private client build — case study on request.",
    tech: ["Next.js 14", "FastAPI", "Legal-BERT", "Groq LLaMA 3.3"],
    url: "https://musadiq-portfolio.vercel.app/#contact",
    icon: Scale,
    mockup: LexAiMockup,
    external: true,
  },
  {
    index: "09",
    eyebrow: "CLIENT PROJECT / WEB DESIGN",
    name: "Dental Clinic Demo",
    description:
      "A client demo build for a dental clinic — appointment booking flow, services showcase, and clinic info site shipped end-to-end on Next.js and deployed to Vercel.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    url: "https://github.com/flowcraft7/dental-clinic-demo",
    icon: Stethoscope,
    mockup: DentalClinicMockup,
    external: true,
  },
]

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border">
        <Image src={project.image} alt={project.name} fill className="object-cover" loading="lazy" />
      </div>
    )
  }
  if (project.mockup) {
    const Mockup = project.mockup
    return <Mockup />
  }
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <project.icon className="w-16 h-16 text-primary/40 relative z-10" strokeWidth={1.2} />
    </div>
  )
}

function ProjectBlock({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <div
      className={`sticky top-0 h-screen w-full flex items-center overflow-hidden border-t border-border ${
        index % 2 === 0 ? "bg-background" : "bg-card"
      }`}
      style={{ zIndex: 10 + index }}
    >
      {/* Faint giant watermark number behind the content */}
      <span
        className="absolute -right-4 md:right-8 top-1/2 -translate-y-1/2 font-black text-foreground/[0.04] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(10rem, 32vw, 26rem)" }}
      >
        {project.index}
      </span>

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text side */}
        <div>
          <div className="flex items-start gap-4 md:gap-6 mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-5xl md:text-7xl font-black text-primary leading-none shrink-0"
            >
              {project.index}
            </motion.span>
            <div className="pt-1 md:pt-3">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
                className="text-[11px] md:text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2"
              >
                {project.eyebrow}
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
                className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground leading-[1.05]"
              >
                {project.name}
              </motion.h3>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
            transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            className="text-muted-foreground leading-relaxed max-w-lg mb-6"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
            transition={{ duration: 0.5, delay: 0.24, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {project.external ? "View Details" : "View Repo"}
              {project.external ? (
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <Github size={15} />
              )}
            </Link>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] font-mono text-muted-foreground">
                  {t}
                  {t !== project.tech[project.tech.length - 1] && <span className="mx-2 text-border">/</span>}
                </span>
              ))}
            </div>
          </motion.div>

          <span className="block mt-8 text-xs font-mono text-muted-foreground/50">
            {project.index} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <ProjectVisual project={project} />
        </motion.div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
        >
          <span className="text-xs font-mono text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            AI agents, full-stack apps, and automation workflows — scroll through my best work from GitHub.
          </p>
        </motion.div>
      </div>

      {/* Sticky-stacked case-study blocks — each pins while the next slides up over it */}
      <div className="relative">
        {projects.map((project, i) => (
          <ProjectBlock key={project.name} project={project} index={i} total={projects.length} />
        ))}
      </div>

      {/* View all repos button */}
      <div className="relative bg-background" style={{ zIndex: 10 + projects.length }}>
        <motion.div
          className="flex justify-center py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring" as const, stiffness: 80 }}
        >
          <Link
            href="https://github.com/musadiq7860?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 text-muted-foreground font-medium group hover:-translate-y-1"
          >
            <Github size={18} />
            View All Repositories
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
