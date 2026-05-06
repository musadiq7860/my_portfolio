"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const roles = ["Software Engineer", "AI Engineer", "ML Engineer", "Full Stack Developer"]

const terminalCommands = [
  { prompt: "~", command: "whoami", output: "Muhammad Musadiq" },
  { prompt: "~", command: "cat skills.txt", output: "Python, TensorFlow, React, Flutter, Node.js" },
  { prompt: "~", command: "echo $CURRENT_FOCUS", output: "Building intelligent applications with AI/ML" },
  {
    prompt: "~",
    command: "cat motto.txt",
    output: '"Concepts are seeds, but action is the soil where they flourish."',
  },
]

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const [terminalLines, setTerminalLines] = useState<{ type: "command" | "output"; text: string; prompt?: string }[]>(
    [],
  )
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentTypingText, setCurrentTypingText] = useState("")
  const [isTypingCommand, setIsTypingCommand] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  // Role typing animation
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])

  useEffect(() => {
    if (currentCommandIndex >= terminalCommands.length) {
      // Loop back after delay
      const timeout = setTimeout(() => {
        setTerminalLines([])
        setCurrentCommandIndex(0)
        setCurrentTypingText("")
        setIsTypingCommand(true)
      }, 5000)
      return () => clearTimeout(timeout)
    }

    const currentCmd = terminalCommands[currentCommandIndex]

    if (isTypingCommand) {
      // Typing the command
      if (currentTypingText.length < currentCmd.command.length) {
        const timeout = setTimeout(() => {
          setCurrentTypingText(currentCmd.command.substring(0, currentTypingText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing command, show output
        const timeout = setTimeout(() => {
          setTerminalLines((prev) => [
            ...prev,
            { type: "command", text: currentCmd.command, prompt: currentCmd.prompt },
            { type: "output", text: currentCmd.output },
          ])
          setCurrentTypingText("")
          setIsTypingCommand(true)
          setCurrentCommandIndex((prev) => prev + 1)
        }, 500)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentCommandIndex, currentTypingText, isTypingCommand])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Morphing animated blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 blur-3xl animate-morph" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 blur-3xl animate-morph" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl animate-morph" style={{ animationDelay: '4s' }} />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating code symbols */}
      <div className="absolute top-[15%] left-[10%] text-primary/8 text-5xl font-mono animate-float-slow select-none pointer-events-none">{"{ }"}</div>
      <div className="absolute top-[25%] right-[12%] text-accent/8 text-4xl font-mono animate-float-medium select-none pointer-events-none">{"< />"}</div>
      <div className="absolute bottom-[20%] left-[8%] text-primary/8 text-3xl font-mono animate-float-fast select-none pointer-events-none">{"( )"}</div>
      <div className="absolute bottom-[35%] right-[8%] text-accent/6 text-3xl font-mono animate-float-slow select-none pointer-events-none" style={{ animationDelay: '3s' }}>{"[ ]"}</div>
      <div className="absolute top-[40%] left-[45%] text-primary/5 text-2xl font-mono animate-float-medium select-none pointer-events-none" style={{ animationDelay: '1s' }}>{"=>"}</div>

      {/* Animated particles */}
      <div className="absolute top-[10%] left-[30%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-float-slow" />
      <div className="absolute top-[60%] right-[25%] w-1 h-1 bg-accent/40 rounded-full animate-float-medium" />
      <div className="absolute bottom-[15%] left-[55%] w-2 h-2 bg-primary/20 rounded-full animate-float-fast" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[35%] right-[40%] w-1 h-1 bg-accent/30 rounded-full animate-float-slow" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-mono text-primary">Available for opportunities</span>
            </div>

            <p className="text-primary font-mono text-sm tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              Muhammad{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Musadiq</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium h-10">
              <span className="text-primary">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I build intelligent applications and full-stack solutions. Passionate about{" "}
              <span className="text-primary font-medium">Machine Learning</span>,{" "}
              <span className="text-accent font-medium">Artificial Intelligence</span>, and creating impactful software
              that solves real-world problems.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/musadiq7860"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-musaddaq-qaysir-99a17425a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:muhammadmusadiq7860@gmail.com"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="#contact"
                className="ml-4 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Glow effect behind terminal */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl transform scale-95" />

            <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-xs font-mono text-muted-foreground">musadiq@portfolio:~</span>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-sm min-h-[280px] max-h-[280px] overflow-hidden">
                {/* Previous lines */}
                {terminalLines.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line.type === "command" ? (
                      <div className="flex items-center gap-2">
                        <span className="text-accent">musadiq</span>
                        <span className="text-muted-foreground">@</span>
                        <span className="text-primary">portfolio</span>
                        <span className="text-muted-foreground">{line.prompt}</span>
                        <span className="text-muted-foreground">$</span>
                        <span className="text-foreground ml-2">{line.text}</span>
                      </div>
                    ) : (
                      <div className="text-muted-foreground pl-4 border-l-2 border-primary/30 ml-2">{line.text}</div>
                    )}
                  </div>
                ))}

                {/* Current typing line */}
                {currentCommandIndex < terminalCommands.length && (
                  <div className="flex items-center gap-2">
                    <span className="text-accent">musadiq</span>
                    <span className="text-muted-foreground">@</span>
                    <span className="text-primary">portfolio</span>
                    <span className="text-muted-foreground">{terminalCommands[currentCommandIndex].prompt}</span>
                    <span className="text-muted-foreground">$</span>
                    <span className="text-foreground ml-2">
                      {currentTypingText}
                      <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>▋</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="font-mono text-xs">Scroll to explore</span>
            <div className="p-2 border border-border rounded-full group-hover:border-primary/50 transition-colors">
              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
