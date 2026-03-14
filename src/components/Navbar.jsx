"use client";

import { Moon, Plus, Search, Sun, Terminal } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/prompts?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-slate-900 dark:bg-stone-100 p-2 rounded-sm">
              <Terminal className="text-white dark:text-slate-900 h-5 w-5" />
            </div>

            <span className="font-serif italic font-bold text-2xl hidden sm:block">
              PromptLib
            </span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search prompts..."
                className="w-full pl-9 pr-3 py-2 rounded-full border bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/prompts"
              className="font-medium hover:scale-105 transition-transform"
            >
              <span className="hidden sm:inline">Prompts</span>
            </Link>
            <Link
              href="/category"
              className="font-medium hover:scale-105 transition-transform"
            >
              <span className="hidden sm:inline">Category</span>
            </Link>
            <ModeToggle />
            <Button asChild size="lg" className="flex items-center gap-2">
              <Link href="/prompts/new">
                <Plus size={18} />
                <span className="hidden sm:inline">Add Prompt</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
