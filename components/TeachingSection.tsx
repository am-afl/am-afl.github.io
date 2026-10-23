'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TEACHING_EXPERIENCES } from '@/lib/data';
import { BookOpen, GraduationCap, CheckCircle2, Calendar, Award } from 'lucide-react';

export function TeachingSection() {
  return (
    <section id="teaching" className="py-24 px-4 sm:px-6 relative max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          Academic Mentorship & Pedagogy
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Teaching Assistant Experience at Sharif
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      <div className="text-center max-w-2xl mx-auto mb-12 text-sm text-zinc-400 leading-relaxed">
        Teaching Assistant appointments at <span className="text-zinc-200 font-semibold">Sharif University of Technology</span> are competitively awarded to top-performing students. Mentored hundreds of undergraduates across core computer science disciplines.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEACHING_EXPERIENCES.map((ta, idx) => (
          <motion.div
            key={ta.course + ta.term}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-panel glass-panel-hover rounded-2xl p-6 border border-zinc-800/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {ta.course}
                </h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  {ta.term}
                </span>
              </div>

              <div className="text-xs font-mono text-zinc-400 mb-4 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                <span>{ta.institution}</span>
              </div>

              <div className="space-y-2 mb-5">
                {ta.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
              {ta.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
