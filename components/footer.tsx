"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { EASE, staggerContainer, viewportOnce } from "@/lib/motion"

const socials = [
  { href: "https://github.com/musadiq7860", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/muhammad-musaddaq-qaysir-99a17425a", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:muhammadmusadiq7860@gmail.com", icon: Mail, label: "Email" },
]

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: EASE }}
      className="py-8 px-6 border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center gap-6"
          >
            {socials.map((social) => (
              <motion.div key={social.label} variants={iconVariants} whileHover={{ y: -3, scale: 1.1 }}>
                <Link
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors block"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Muhammad Musadiq. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
