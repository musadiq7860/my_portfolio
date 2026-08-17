"use client"

import { Quote } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from "framer-motion"
import { fadeUp, staggerContainer, viewportOnce, EASE, ambientGlowBackground } from "@/lib/motion"

const stats = [
  { value: 9, suffix: "+", label: "AI Products Shipped" },
  { value: 3, suffix: "+", label: "Client Collaborations" },
  { value: 91, suffix: "%", label: "Peak Model Accuracy" },
]

function CountUpStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.2,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay, ease: EASE }}
      whileHover={{ y: -3 }}
      className="text-center px-4"
    >
      <p ref={ref} className="text-3xl font-bold text-primary">
        {display}
        {suffix}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </motion.div>
  )
}

function QuoteCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 18 } },
      }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="relative p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20 group hover:border-primary/40 transition-colors"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -12, scale: 0.6 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.2, type: "spring" as const, stiffness: 200, damping: 14 }}
        className="absolute top-4 left-4"
        style={{ transform: "translateZ(20px)" }}
      >
        <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
      </motion.div>
      <blockquote
        className="text-lg italic text-foreground text-center px-8"
        style={{ transform: "translateZ(20px)" }}
      >
        &ldquo;Concepts are seeds, but action is the soil where they flourish.&rdquo;
      </blockquote>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
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
            About
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-lg text-foreground leading-relaxed">
              I&apos;m <span className="text-primary font-medium">Muhammad Musadiq</span>, a final-year Computer
              Science student at <span className="text-accent font-medium">COMSATS University Abbottabad</span>,
              specializing in <span className="text-accent font-medium">Artificial Intelligence</span>,{" "}
              <span className="text-accent font-medium">Machine Learning</span>, and{" "}
              <span className="text-accent font-medium">Full-Stack Development</span>.
            </motion.p>

            {/* Count-up stat row */}
            <motion.div
              variants={fadeUp}
              className="flex items-center divide-x divide-border rounded-xl border border-border bg-card/40 py-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex-1">
                  <CountUpStat {...stat} delay={i * 0.15} />
                </div>
              ))}
            </motion.div>

            <QuoteCard />

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              My expertise spans developing intelligent systems using deep learning frameworks including TensorFlow
              and Keras, building production-ready classification models, and creating cross-platform applications.
              I have hands-on experience with CNN architectures, medical imaging analysis, and predictive modeling
              for real-world applications.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Throughout my academic and project journey, I have successfully developed and deployed machine learning
              solutions for healthcare diagnostics, agricultural disease detection, and financial market prediction.
              My technical portfolio demonstrates proficiency in end-to-end ML pipelines—from data preprocessing and
              model training to deployment and optimization.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              I am actively seeking opportunities in{" "}
              <span className="text-foreground font-medium">AI-Powered Full-Stack Development</span> and{" "}
              <span className="text-foreground font-medium">AI/ML Engineering</span> roles where I can contribute
              to building impactful, data-driven products and continue growing as a technology professional.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
