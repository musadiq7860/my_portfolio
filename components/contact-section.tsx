"use client"

import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { EASE, staggerContainer, viewportOnce, ambientGlowBackground } from "@/lib/motion"

const contactLinks = [
  {
    name: "Email",
    value: "muhammadmusadiq7860@gmail.com",
    href: "mailto:muhammadmusadiq7860@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "Muhammad Musaddaq Qaysir",
    href: "https://www.linkedin.com/in/muhammad-musaddaq-qaysir-99a17425a",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/musadiq7860",
    href: "https://github.com/musadiq7860",
    icon: Github,
  },
]

const linkVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
}

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-card/30 overflow-hidden">
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
            Contact
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE }}
              className="space-y-4"
            >
              <p className="text-2xl text-foreground font-medium text-balance">
                Interested in working together or have a project in mind?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about
                technology and software development. Feel free to reach out!
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-4"
            >
              {contactLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors group-hover:rotate-12 duration-300">
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.name}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin size={16} />
              </motion.span>
              <span>Open to remote opportunities worldwide</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="mailto:muhammadmusadiq7860@gmail.com">
                    <Send size={16} className="mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
