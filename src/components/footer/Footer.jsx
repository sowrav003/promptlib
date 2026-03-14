import Link from "next/link";
import { Terminal, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid gap-8 md:grid-cols-3">

          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-2 mb-3">

              <div className="bg-slate-900 dark:bg-stone-100 p-2 rounded-md">
                <Terminal className="text-white dark:text-slate-900 h-5 w-5" />
              </div>

              <span className="font-serif italic font-bold text-xl">
                PromptLib
              </span>

            </div>

            <p className="text-sm text-muted-foreground max-w-sm">
              A curated library of high-quality AI prompts for developers,
              marketers, and creators. Discover, test, and share prompts.
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">
              Navigation
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">

              <li>
                <Link href="/prompts" className="hover:text-primary">
                  Prompts
                </Link>
              </li>

              <li>
                <Link href="/category" className="hover:text-primary">
                  Category
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t mt-10 pt-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} PromptLib. Built for learning and portfolio.
        </div>

      </div>
    </footer>
  );
}