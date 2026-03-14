import { Heart, Shield, Users } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section className="relative py-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-stone-50 mb-6">
            About <span className="italic text-slate-500 dark:text-stone-400">PromptLib</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-stone-300 max-w-2xl mx-auto font-light leading-relaxed mb-16">
            PromptLib was born out of a simple necessity: keeping track of the best AI prompts. 
            We believe that as AI models grow more powerful, the ability to communicate with them 
            effectively becomes the ultimate developer skill.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-800">
                <Users size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-stone-100 mb-3">Community First</h3>
              <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-sm">
                Our library is curated by developers, for developers. Every prompt is shared by community members who test them in real-world scenarios.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 border border-purple-100 dark:border-purple-800">
                <Shield size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-stone-100 mb-3">Tested & Verified</h3>
              <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-sm">
                We integrate live AI testing directly into the platform so you can verify that a prompt generates the desired output before you copy it.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mb-6 border border-rose-100 dark:border-rose-800">
                <Heart size={24} className="text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-stone-100 mb-3">Free & Open</h3>
              <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-sm">
                PromptLib is built as a portfolio project and remains completely free. We believe productivity tools should be accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About