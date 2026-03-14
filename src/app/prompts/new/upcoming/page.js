import Link from "next/link"
import { Hammer, ArrowLeft, Sparkles } from "lucide-react"

export default function AddPromptComingSoon() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">

      <div className="max-w-xl text-center">

        <div className="flex justify-center mb-6">
          <Hammer size={40} className="text-primary" />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Add Prompt — Coming Soon
        </h1>

        <p className="text-muted-foreground mb-8">
          We are building a powerful prompt submission system where you’ll
          be able to share your best AI prompts with the community.
        </p>

        <div className="border rounded-xl p-6 bg-muted/40 text-left mb-8">
          <p className="font-medium mb-3 flex items-center gap-2">
            <Sparkles size={16} />
            Planned features
          </p>

          <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
            <li>Submit prompts to the community</li>
            <li>Auto-generate prompt slugs</li>
            <li>AI prompt enhancer</li>
            <li>Upvote and ranking system</li>
            <li>Prompt collections</li>
          </ul>
        </div>

        <Link
          href="/prompts"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border hover:bg-muted transition"
        >
          <ArrowLeft size={16} />
          Back to Prompts
        </Link>

      </div>

    </main>
  )
}