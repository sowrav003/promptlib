// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { AwardIcon, Copy, TrendingUp } from "lucide-react"
// import { notFound } from "next/navigation"
// import { initialPrompts } from "@/lib/data"
import CopyButton from "@/components/CopyButton"
import Link from "next/link"
import { notFound } from "next/navigation"
import { initialPrompts } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

export default async function PromptPage({ params }) {
  const { slug } = await params
  const prompt = initialPrompts.find((p) => p.slug === slug)

  if (!prompt) return notFound()

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">


      <Link
        href="/prompts"
        className="flex items-center text-sm text-muted-foreground mb-6"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to Prompts
      </Link>

      <div className="border rounded-2xl p-8 space-y-8">


        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
              {prompt.category}
            </span>

            <span className="text-sm text-muted-foreground">
              ~ {prompt.upvotes} upvotes
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-2">
            {prompt.title}
          </h1>

          <p className="text-muted-foreground">
            {prompt.description}
          </p>
        </div>


        <div className="border rounded-xl p-6 bg-muted/40 relative">

          <div className="flex justify-between items-center mb-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              The Prompt
            </span>

                      <CopyButton text={prompt.prompt} />
          </div>

          <pre className="text-sm whitespace-pre-wrap font-mono">
            {prompt.prompt}
          </pre>

        </div>


        <div className="border-t pt-6 flex justify-between items-center">

          <div>
            <p className="font-medium">{prompt.author}</p>
            <p className="text-xs text-muted-foreground">
              Added on {prompt.createdAt}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {prompt.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>

    </main>
  )
}