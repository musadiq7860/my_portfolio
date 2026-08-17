// Shared animation primitives so every section moves with the same
// timing/easing language established in the hero and projects sections.

export const EASE = [0.16, 1, 0.3, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 18 } },
}

export function staggerContainer(stagger = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  }
}

export const viewportOnce = { once: true, margin: "-80px" }

// Ambient background glow style — echoes the hero's animated mesh gradient
// at low opacity. Used with the `.ambient-glow` utility class (globals.css)
// which handles the slow rotation.
export const ambientGlowBackground =
  "radial-gradient(circle at 25% 30%, color-mix(in srgb, var(--primary) 35%, transparent), transparent 45%), radial-gradient(circle at 75% 70%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 45%)"
