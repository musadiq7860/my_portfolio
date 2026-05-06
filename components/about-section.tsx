"use client"

import { AnimatedSection } from "./animated-section"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <AnimatedSection direction="left">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">About</h2>
          </AnimatedSection>
          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <p className="text-lg text-foreground leading-relaxed">
                I&apos;m <span className="text-primary font-medium">Muhammad Musadiq</span>, a final-year Computer
                Science student at <span className="text-accent font-medium">COMSATS University Abbottabad</span>,
                specializing in <span className="text-accent font-medium">Artificial Intelligence</span>,{" "}
                <span className="text-accent font-medium">Machine Learning</span>, and{" "}
                <span className="text-accent font-medium">Full-Stack Development</span>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20 group hover:border-primary/40 transition-colors">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                <blockquote className="text-lg italic text-foreground text-center px-8">
                  &ldquo;Concepts are seeds, but action is the soil where they flourish.&rdquo;
                </blockquote>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans developing intelligent systems using deep learning frameworks including TensorFlow
                and Keras, building production-ready classification models, and creating cross-platform applications.
                I have hands-on experience with CNN architectures, medical imaging analysis, and predictive modeling
                for real-world applications.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="text-muted-foreground leading-relaxed">
                Throughout my academic and project journey, I have successfully developed and deployed machine learning
                solutions for healthcare diagnostics, agricultural disease detection, and financial market prediction.
                My technical portfolio demonstrates proficiency in end-to-end ML pipelines—from data preprocessing and
                model training to deployment and optimization.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={500}>
              <p className="text-muted-foreground leading-relaxed">
                I am actively seeking opportunities in{" "}
                <span className="text-foreground font-medium">AI-Powered Full-Stack Development</span> and{" "}
                <span className="text-foreground font-medium">AI/ML Engineering</span> roles where I can contribute
                to building impactful, data-driven products and continue growing as a technology professional.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
