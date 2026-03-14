import { Sparkles, Rocket, Zap, Brain } from "lucide-react"

const features = [
  {
    title: "AI Prompt Tester",
    description: "Test prompts directly inside PromptLib using integrated AI models.",
    icon: Brain
  },
  {
    title: "Community Upvotes",
    description: "Vote on the best prompts so the community can discover top-quality prompts faster.",
    icon: Zap
  },
  {
    title: "Prompt Collections",
    description: "Create and share curated collections of prompts for specific workflows.",
    icon: Sparkles
  },
  {
    title: "Prompt Analytics",
    description: "See which prompts are used most and track their performance.",
    icon: Rocket
  }
]

export default function UpcomingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Upcoming Features
        </h1>

        <p className="text-muted-foreground max-w-xl mx-auto">
          PromptLib is just getting started. Here are some features
          we’re currently planning to build.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {features.map((feature, i) => {
          const Icon = feature.icon

          return (
            <div
              key={i}
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="text-primary" size={20} />
                <h3 className="font-semibold text-lg">
                  {feature.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          )
        })}

      </div>

    </main>
  )
}