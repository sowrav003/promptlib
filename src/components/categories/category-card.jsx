"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function CategoryCard({
  name,
  count,
  navigate
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card
        onClick={() => navigate("/categories", { name })}
        className="cursor-pointer transition-colors hover:bg-secondary/50"
      >
        <CardContent className="p-2 text-center">

          <h3 className="text-lg font-semibold">
            {name}
          </h3>

          <p className="text-sm text-muted-foreground mt-1">
            {count} prompts
          </p>

        </CardContent>
      </Card>
    </motion.div>
  )
}