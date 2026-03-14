"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FireExtinguisher, TrendingUp } from "lucide-react"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

export default function PromptCard({ prompt }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="h-full"
    >


        <Card className="h-full flex flex-col transition-all hover:shadow-lg">

          {/* Header */}
          <CardHeader className="space-y-3">

            <Link href={`/category/${prompt.category.toLowerCase()}`} className="w-fit ">
            <Badge variant="secondary" className="w-fit hover:text-blue-500 transition-colors">
              {prompt.category}
            </Badge>
            </Link>
            <Link href={`/prompts/${prompt.slug}`} className="block h-full">
            <CardTitle className="text-lg leading-tight">
              {prompt.title}
            </CardTitle>
            </Link>
            <CardDescription className="line-clamp-2">
              {prompt.description}
            </CardDescription>

          </CardHeader>

          {/* Footer */}
          <CardFooter className="mt-auto flex justify-between text-sm text-muted-foreground border-t pt-4">

            <span>{prompt.author}</span>

            <div className="flex items-center gap-1">
              <TrendingUp size={14} />
              {prompt.upvotes}
            </div>

          </CardFooter>

        </Card>


    </motion.div>
  )
}