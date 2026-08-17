"use client"

import { useEffect, useState } from "react"

/**
 * True once the user has scrolled past the full-viewport hero section.
 * Header and HeroSection both use this so their nav rows swap at the exact
 * same scroll position and never overlap.
 */
export function usePastHero(offset = 140) {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight - offset)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [offset])

  return pastHero
}
