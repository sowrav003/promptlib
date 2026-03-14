"use client"

import { ArrowRight, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroActions({ navigate }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

      <Button
        size="lg"
        onClick={() => navigate("/prompts")}
        className="flex items-center gap-2"
      >
        Explore Prompts
        <ArrowRight size={18} />
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={() => navigate("/prompts/new")}
        className="flex items-center gap-2"
      >
        <PenTool size={18} />
        Contribute
      </Button>

    </div>
  )
}