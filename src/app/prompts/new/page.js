"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function AddPromptPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    title: "",
    description: "",
    prompt: "",
    category: "Writing",
    tags: "",
    author: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const slug = form.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    const newPrompt = {
      ...form,
      slug,
      tags: form.tags.split(",").map((t) => t.trim()),
      createdAt: new Date().toISOString(),
      upvotes: 0
    }

    try {
      await fetch("/api/prompts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPrompt)
      })

      router.push("/prompts")
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      <button
        onClick={() => router.back()}
        className="flex items-center text-sm text-muted-foreground mb-6"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back
      </button>

      <div className="border rounded-2xl p-8">

        <h1 className="text-3xl font-bold mb-6">
          Create New Prompt
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <InputField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Next.js Component Generator"
            required
          />

          <InputField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short description..."
            required
          />

          <div>
            <label className="text-sm font-medium">Prompt</label>
            <textarea
              name="prompt"
              rows={6}
              required
              value={form.prompt}
              onChange={handleChange}
              placeholder="Act as a..."
              className="w-full mt-1 px-4 py-3 border rounded-lg font-mono text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="text-sm font-medium">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg"
              >
                <option>Writing</option>
                <option>Coding</option>
                <option>Marketing</option>
                <option>Data</option>
                <option>Business</option>
                <option>Creative</option>
              </select>
            </div>

            <InputField
              label="Author"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

          </div>

          <InputField
            label="Tags"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="react, nextjs, ai"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-primary text-white rounded-lg"
          >
            {loading ? "Publishing..." : "Publish Prompt"}
          </button>

        </form>

      </div>
    </div>
  )
}

function InputField({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full mt-1 px-4 py-2 border rounded-lg"
      />
    </div>
  )
}