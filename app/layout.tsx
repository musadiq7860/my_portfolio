import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Muhammad Musadiq | AI & Full-Stack Engineer",
  description:
    "Final-year CS student at COMSATS University building AI-powered applications — from crop disease detectors for Pakistani farmers to full-stack automation tools. Specializing in Machine Learning, Deep Learning, and Full-Stack Development.",
  keywords: [
    "Muhammad Musadiq",
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Deep Learning",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "COMSATS",
  ],
  openGraph: {
    title: "Muhammad Musadiq | AI & Full-Stack Engineer",
    description:
      "Building AI-powered applications — from crop disease detectors to full-stack automation tools.",
    url: "https://musadiq-portfolio.vercel.app",
    siteName: "Muhammad Musadiq Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Musadiq | AI & Full-Stack Engineer",
    description:
      "Building AI-powered applications — from crop disease detectors to full-stack automation tools.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
