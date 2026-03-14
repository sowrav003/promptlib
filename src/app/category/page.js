import Link from "next/link"
import { initialPrompts } from "@/lib/data"

export default function CategoriesPage() {

  const categories = [...new Set(initialPrompts.map(p => p.category))]

  return (
    <main className="min-h-[70vh] max-w-7xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Categories
        </h1>

        <p className="text-muted-foreground">
          Browse prompts by category
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {categories.map((category) => {

          const count = initialPrompts.filter(
            p => p.category === category
          ).length

          return (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="border rounded-xl p-6 hover:bg-muted transition"
            >

              <h3 className="font-semibold text-lg">
                {category}
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                {count} prompts
              </p>

            </Link>
          )
        })}

      </div>

    </main>
  )
}