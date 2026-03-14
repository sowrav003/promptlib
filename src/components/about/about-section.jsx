"use client"

import { motion } from "framer-motion"
import { Users, Shield, Heart } from "lucide-react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            About PromptLib
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            PromptLib is a community-driven library of powerful AI prompts
            designed to help developers, creators, and marketers work faster
            and smarter.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-3">

          <FeatureCard
            icon={<Users className="text-blue-500 dark:text-blue-400" />}
            title="Community Driven"
            description="Prompts are shared and curated by developers and creators from around the world."
            bgColor="bg-blue-100 dark:bg-blue-500/20"
          />

          <FeatureCard
            icon={<Shield className="text-green-500 dark:text-green-400" />}
            title="Tested & Verified"
            description="Every prompt can be tested directly with AI to ensure it produces useful results."
            bgColor="bg-green-100 dark:bg-green-500/20"
          />

          <FeatureCard
            icon={<Heart className="text-pink-500 dark:text-pink-400" />}
            title="Free & Open"
            description="PromptLib is a free project built for learning, sharing knowledge, and improving productivity."
            bgColor="bg-pink-100 dark:bg-pink-500/20"
          />

        </div>

      </div>

    </section>
  )
}

function FeatureCard({ icon, title, description,bgColor }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card className="h-full hover:shadow-lg transition">

        <CardHeader className="flex flex-col items-start gap-4">

          <div className={`p-3 rounded-lg ${bgColor}`}>
            {icon}
          </div>

          <CardTitle>{title}</CardTitle>

          <CardDescription>
            {description}
          </CardDescription>

        </CardHeader>

      </Card>
    </motion.div>
  )
}