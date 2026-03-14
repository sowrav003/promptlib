"use client"

import { motion } from "framer-motion"
import { Bot, Loader2 } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card"

export default function HeroPreview() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:pl-8"
    >

      <div className="absolute -inset-1 rounded-3xl blur opacity-30 bg-primary"></div>

      <Card className="relative shadow-2xl">

        <CardHeader className="flex flex-row items-center gap-3 space-y-0">
          <div className="bg-primary p-1.5 rounded-lg">
            <Bot size={16} className="text-primary-foreground" />
          </div>

          <CardTitle className="text-sm">
            AI Live Tester
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">

          <div className="flex justify-end">
            <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-3 text-sm max-w-[85%]">
              Write a compelling hero section for my AI SaaS.
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-muted border rounded-2xl px-4 py-4 text-sm max-w-[95%]">

              <span className="font-bold block text-primary mb-2">
                Discover & Share AI Prompts
              </span>

              Supercharge your workflow with our community-driven library.

              <span className="inline-block w-2 h-4 ml-1 bg-primary animate-caret-blink"></span>

            </div>
          </div>

        </CardContent>

        <CardFooter>
          <div className="w-full bg-muted rounded-full px-4 py-2 flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">
              Generating response...
            </span>

            <Loader2 size={16} className="animate-spin ml-auto" />
          </div>
        </CardFooter>

      </Card>
    </motion.div>
  )
}