"use client"

import { Flame, CheckCircle2, Stethoscope } from "lucide-react"
import { motion } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1] as const

function BrowserChrome({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-background/60 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
        <span className="ml-2 text-[10px] font-mono text-muted-foreground truncate">{url}</span>
      </div>
      <div className="relative flex-1 p-4">{children}</div>
    </div>
  )
}

// 1. Flame On! — WhatsApp receptionist, phone-frame chat mockup
export function FlameOnMockup() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-2xl overflow-hidden border border-border bg-background shadow-lg">
        <div className="flex items-center gap-2 px-3 py-2 bg-accent/90">
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Flame size={14} className="text-white" />
          </motion.span>
          <span className="text-[11px] font-medium text-white">Flame On! Bot</span>
        </div>
        <div className="p-2.5 space-y-2 bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,rgba(0,0,0,0.015)_10px,rgba(0,0,0,0.015)_20px)]">
          {[
            { self: false, w: "70%" },
            { self: true, w: "55%" },
            { self: false, w: "80%" },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.25, duration: 0.4, ease: EASE }}
              className={`flex ${b.self ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`h-5 rounded-lg ${b.self ? "bg-accent/25" : "bg-secondary"}`}
                style={{ width: b.w }}
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="flex justify-start"
          >
            <div className="flex items-center gap-1 h-5 px-2 rounded-lg bg-secondary">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full bg-muted-foreground"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// 2. AI Invoice Extractor — scanning line over a document, extracted fields appear
export function InvoiceExtractorMockup() {
  return (
    <BrowserChrome url="invoice-extractor.app">
      <div className="grid grid-cols-2 gap-3 h-full">
        <div className="relative rounded-lg border border-border bg-background p-2.5 space-y-1.5 overflow-hidden">
          {[90, 70, 80, 60, 75, 50].map((w, i) => (
            <div key={i} className="h-1.5 rounded bg-muted" style={{ width: `${w}%` }} />
          ))}
          <motion.div
            className="absolute left-0 right-0 h-6 bg-gradient-to-b from-primary/0 via-primary/25 to-primary/0"
            animate={{ top: ["0%", "95%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="space-y-2">
          {["Vendor", "Date", "Amount", "Line Items"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.4, ease: EASE }}
              className="rounded-md bg-primary/5 border border-primary/15 px-2 py-1"
            >
              <p className="text-[9px] text-muted-foreground">{label}</p>
              <div className="h-1.5 w-3/4 rounded bg-primary/30 mt-1" />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, type: "spring" as const, stiffness: 260 }}
            className="flex items-center gap-1 text-accent text-[10px] font-medium pt-1"
          >
            <CheckCircle2 size={12} /> Verified
          </motion.div>
        </div>
      </div>
    </BrowserChrome>
  )
}

// 3. Business Docs RAG Chatbot — doc chip + chat with thinking dots
export function RagChatbotMockup() {
  return (
    <BrowserChrome url="rag-business-docs.app">
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
          className="inline-flex items-center gap-1.5 self-start px-2 py-1 rounded-md bg-secondary text-[10px] text-muted-foreground mb-3"
        >
          📄 company_handbook.pdf
        </motion.div>
        <div className="space-y-2 flex-1">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
            className="flex justify-end"
          >
            <div className="h-5 w-2/3 rounded-lg bg-primary/20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4, ease: EASE }}
            className="flex items-center gap-1 h-6 px-2 rounded-lg bg-secondary w-fit"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-muted-foreground"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.4, ease: EASE }}
            className="space-y-1"
          >
            <div className="h-1.5 w-5/6 rounded bg-muted" />
            <div className="h-1.5 w-2/3 rounded bg-muted" />
          </motion.div>
        </div>
      </div>
    </BrowserChrome>
  )
}

// 4. SQL RAG Agent — table + query panel, animated highlighted row
export function SqlAgentMockup() {
  const rows = 4
  return (
    <BrowserChrome url="sql-rag-agent.app">
      <div className="grid grid-cols-2 gap-3 h-full">
        <div className="rounded-lg border border-border bg-background overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary/60 text-[8px] text-muted-foreground font-mono px-2 py-1">
            <span>id</span>
            <span>region</span>
            <span>total</span>
          </div>
          {Array.from({ length: rows }).map((_, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-3 px-2 py-1.5 gap-1 border-t border-border"
              animate={i === 2 ? { backgroundColor: ["rgba(56,189,248,0)", "rgba(56,189,248,0.12)", "rgba(56,189,248,0)"] } : {}}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-1.5 w-3/4 rounded bg-muted" />
              <span className="h-1.5 w-2/3 rounded bg-muted" />
              <span className="h-1.5 w-1/2 rounded bg-muted" />
            </motion.div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-background p-2.5 flex flex-col">
          <p className="text-[9px] text-muted-foreground mb-2">Ask a question</p>
          <div className="flex items-center gap-1 font-mono text-[10px] text-foreground">
            <span>Top region by sales?</span>
            <motion.span
              className="inline-block w-[2px] h-3 bg-primary"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-auto text-[9px] text-primary font-mono"
          >
            → routed to SQL agent
          </motion.div>
        </div>
      </div>
    </BrowserChrome>
  )
}

// 5. Lex.AI — dense legal text simplifying into short plain-language lines
export function LexAiMockup() {
  return (
    <BrowserChrome url="lex-ai.app">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2 h-full items-center">
        <div className="space-y-1.5">
          {[95, 88, 92, 80, 90, 75, 85].map((w, i) => (
            <div key={i} className="h-1.5 rounded bg-muted" style={{ width: `${w}%` }} />
          ))}
        </div>
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary text-lg"
        >
          →
        </motion.div>
        <div className="space-y-2">
          {[60, 45, 55].map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.4, ease: EASE }}
              className="h-2 rounded bg-primary/25"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>
    </BrowserChrome>
  )
}

// 6. Dental Clinic Demo — calendar with a pulsing selected appointment slot
export function DentalClinicMockup() {
  const cells = Array.from({ length: 21 })
  const selected = 12
  return (
    <BrowserChrome url="dental-clinic-demo.vercel.app">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-1.5 mb-2">
          <Stethoscope size={12} className="text-primary" />
          <span className="text-[10px] text-muted-foreground">Book an appointment</span>
        </div>
        <div className="grid grid-cols-7 gap-1 flex-1">
          {cells.map((_, i) => (
            <motion.div
              key={i}
              className={`rounded-md ${i === selected ? "bg-primary" : "bg-secondary"}`}
              animate={
                i === selected
                  ? { scale: [1, 1.12, 1], opacity: [1, 0.85, 1] }
                  : {}
              }
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </BrowserChrome>
  )
}
