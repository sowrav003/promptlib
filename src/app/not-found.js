import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">

      {/* Icon */}
      <div className="mb-6">
        <Terminal size={50} className="text-muted-foreground" />
      </div>

      {/* 404 */}
      <h1 className="text-6xl font-bold mb-4">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-2">
        Prompt Not Found
      </h2>

      {/* Funny message */}
      <p className="text-muted-foreground max-w-md mb-8">
        Looks like this prompt escaped into the AI void.  
        Even GPT couldn't generate it.
      </p>

      {/* Button */}
      <Button asChild>
        <Link href="/prompts">
          Back to Prompts
        </Link>
      </Button>

    </main>
  )
}