"use client"

import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

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

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <AnimatedSection direction="left">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Contact</h2>
          </AnimatedSection>
          <div className="space-y-8">
            <AnimatedSection delay={100}>
              <div className="space-y-4">
                <p className="text-2xl text-foreground font-medium text-balance">
                  Interested in working together or have a project in mind?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology and software development. Feel free to reach out!
                </p>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link, index) => (
                <AnimatedSection key={link.name} delay={200 + index * 100} direction="right">
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
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={500}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="animate-bounce" />
                <span>Open to remote opportunities worldwide</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
              >
                <Link href="mailto:muhammadmusadiq7860@gmail.com">
                  <Send size={16} className="mr-2" />
                  Get In Touch
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
