"use client"

import { Plus, Grid2x2, ArrowRight, Download, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePastHero } from "@/hooks/use-past-hero"

const EASE = [0.16, 1, 0.3, 1] as const

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  // This pill navbar only makes sense while the white hero is on screen —
  // once scrolled past it, the real site Header (same top-0 z-50 slot)
  // takes over. Both use the exact same shared hook so they swap in sync.
  const pastHero = usePastHero()

  return (
    <section
      className="relative flex flex-col overflow-hidden bg-white"
      style={{ minHeight: "100vh", justifyContent: "space-between" }}
    >
      {/* ===== Fixed pill navbar (z-50, pointer-events none on nav, auto on children) ===== */}
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: pastHero ? -16 : 0, opacity: pastHero ? 0 : 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-6"
        style={{ pointerEvents: pastHero ? "none" : "none" }}
      >
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
          {/* Left cluster */}
          <div className="flex items-center gap-2 md:gap-3" style={{ pointerEvents: pastHero ? "none" : "auto" }}>
            {/* Logo mark: two rotated rounded rectangles */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="6" y="4" width="16" height="8" rx="3" fill="#000" transform="rotate(-35 14 14)" />
                <rect x="6" y="16" width="16" height="8" rx="3" fill="#000" transform="rotate(-35 14 14)" />
              </svg>
              <span className="hidden md:inline text-[15px] font-medium text-black tracking-tight">
                Musadiq&nbsp;AI
              </span>
            </Link>

            {/* Menu pill — toggles real navigation since this is the only nav visible on the hero */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-black shrink-0"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white">
                  {menuOpen ? (
                    <X size={12} strokeWidth={3} className="text-black" />
                  ) : (
                    <Plus size={12} strokeWidth={3} className="text-black" />
                  )}
                </span>
                <span className="text-[11px] text-white">Menu</span>
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-white shadow-xl overflow-hidden"
                    style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                  >
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2.5 text-sm text-black/80 hover:bg-black/5 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tags pill */}
            <div className="hidden md:flex items-center gap-3 pl-4 pr-4 py-2 rounded-full bg-[#F4F4F6] shrink-0">
              <span className="text-[11px] text-black/70 whitespace-nowrap">AI Engineer</span>
              <span className="w-1 h-1 rounded-full bg-black/25 shrink-0" />
              <span className="text-[11px] text-black/70 whitespace-nowrap">Full-Stack Dev</span>
            </div>
          </div>

          {/* Right cluster */}
          <div
            className="hidden md:flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-[#F4F4F6] shrink-0"
            style={{ pointerEvents: pastHero ? "none" : "auto" }}
          >
            <a
              href="mailto:muhammadmusadiq7860@gmail.com"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-black shrink-0"
              aria-label="Contact"
            >
              <Grid2x2 size={14} className="text-white" />
            </a>
            <span className="text-[11px] text-black/70 whitespace-nowrap">Open to Work</span>
          </div>
        </div>
      </motion.nav>

      {/* ===== Full-screen background video / animated fallback (z-0) ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="relative w-[80%] h-[80%] md:w-full md:h-full overflow-hidden md:rounded-none rounded-2xl">
          {/* Drop your own file at /public/hero-bg.mp4 and uncomment to use a real video */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/hero-bg.mp4"
          /> */}

          {/* Animated fallback background — abstract, on-theme mesh gradient */}
          <div className="absolute inset-0 bg-[#0a0a0a]">
            <motion.div
              className="absolute -inset-1/4 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.55), transparent 45%), radial-gradient(circle at 70% 60%, rgba(52,211,153,0.45), transparent 45%), radial-gradient(circle at 50% 90%, rgba(255,255,255,0.12), transparent 50%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>
        </div>
      </motion.div>

      {/* ===== Footer content, pinned bottom, over white fade-up gradient (z-30) ===== */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
        className="relative z-30 mt-auto pt-32 pb-8 px-4 md:px-8"
        style={{
          background: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.85) 55%, transparent 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left block */}
          <div>
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="text-[13px] text-black/55">Full-Stack AI Engineer</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
              className="font-light text-black"
              style={{
                fontSize: "clamp(2rem, 8vw, 4.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Building AI Systems,
              <br />
              That Ship.
            </motion.h1>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
              className="flex items-center gap-3 mt-6"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-black text-white text-[13px]"
              >
                View Projects
                <ArrowRight size={13} />
              </Link>
              <a
                href="/Musadiq_CV.pdf"
                download="Muhammad_Musadiq_CV.pdf"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] text-black"
                style={{ border: "1px solid rgba(0,0,0,0.35)" }}
              >
                <Download size={13} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right block — tag pills */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
            className="flex md:flex-col flex-wrap gap-2 md:items-end"
          >
            {["LLM Agents", "Full-Stack", "Automation"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1.5 rounded-full bg-white text-black/70"
                style={{ border: "1px solid rgba(0,0,0,0.12)" }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Smooth handoff into the dark theme below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-20 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  )
}
