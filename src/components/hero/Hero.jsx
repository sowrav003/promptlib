"use client"

import { motion } from "framer-motion"
import HeroBadge from "./hero-badge"
import HeroActions from "./hero-actions"
import HeroPreview from "./hero-preview"

export default function Hero({ navigate }) {
  return (
    <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 ">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 text-center lg:text-left"
        >

          <HeroBadge />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-tight">
            Stop typing <br />
            <span className="italic text-muted-foreground">
              from scratch.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Discover, test, and share high-quality prompts for coding,
            marketing, and creative writing.
          </p>

          <HeroActions navigate={navigate} />

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroPreview />
        </motion.div>

      </div>
    </section>
  )
}