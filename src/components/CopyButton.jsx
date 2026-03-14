"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)

      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error("Copy failed", err)
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={copy}
      className="h-8 w-8"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </Button>
  )
}