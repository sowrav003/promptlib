"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import CategoryCard from "./category-card"
import { initialPrompts } from "@/lib/data.js"


export default function CategoriesSection({
  navigate
}) {
  const categories = [...new Set(initialPrompts.map(p => p.category))]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-10"
      >
        <Sparkles className="text-primary" />

        <h2 className="text-2xl sm:text-3xl font-bold">
        Category Spotlight
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-4">

        {categories.map(cat => (
          <CategoryCard
            key={cat}
            name={cat}
            count={initialPrompts.filter(p => p.category === cat).length}
            navigate={navigate}
          />
        ))}

      </div>

    </section>
  )
}