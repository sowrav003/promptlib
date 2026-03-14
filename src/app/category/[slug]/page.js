import { initialPrompts } from "@/lib/data"
import PromptCard from "@/components/prompts/prompt-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export default async function CategoryPage({ params }) {

  const { slug } = await params

  const categoryPrompts = initialPrompts.filter(
    (p) => p.category?.toLowerCase() === slug?.toLowerCase()
  )
  console.log(categoryPrompts)

  if (!categoryPrompts.length) return notFound()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Back Button */}
      <Link
        href="/"
        className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-10">

        <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium mb-3">
          Category
        </span>

        <h1 className="text-4xl font-bold capitalize">
          {slug} Prompts
        </h1>

        <p className="text-muted-foreground mt-2">
          {categoryPrompts.length} prompts available
        </p>

      </div>

      {/* Prompts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {categoryPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}

      </div>

    </div>
  )
}