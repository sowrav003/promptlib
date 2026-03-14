import PromptCard from "@/components/prompts/prompt-card"
import { initialPrompts } from "@/lib/data"

export default function PromptsPage() {

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          All Prompts
        </h1>

        <p className="text-muted-foreground mt-2">
          Browse and discover useful AI prompts.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {initialPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
          />
        ))}

      </div>

    </main>
  )
}