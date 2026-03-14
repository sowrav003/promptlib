"use client";

import { motion } from "framer-motion";
import { ArrowBigLeft, ArrowBigRightDash, ArrowRight, FireExtinguisher, Flame } from "lucide-react";
import PromptCard from "./prompt-card";
import { initialPrompts } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TrendingPrompts() {
  const trending = [...initialPrompts]
    .sort((a, b) => b.upvotes - a.upvotes)
    .slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-10"
      >
        <div className="w-full flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Flame className="text-orange-500" />

            <h2 className="text-2xl sm:text-3xl font-bold">Trending Prompts</h2>
          </div>
          <Link
            href="/prompts"
            className="text-sm font-medium text-primary hover:underline"
          >
            <Button variant="link" size="sm" className="px-0 text-blue-500 dark:text-blue-400">
              View All
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trending.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </section>
  );
}
