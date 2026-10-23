'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WORK_EXPERIENCES } from '@/lib/data';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2">
          Professional Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Software Engineering Experience
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      {/* Timeline items */}
      <div className="relative border-l border-zinc-800 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
        {WORK_EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative"
          >
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 rounded-full bg-zinc-950 border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/20">
              <Briefcase className="w-3.5 h-3.5" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-zinc-800/80 shadow-2xl relative overflow-hidden group hover:border-zinc-700/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sky-400 font-semibold text-sm font-mono mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <Calendar className="w-3 h-3 text-sky-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Impact Callout */}
              <div className="p-3.5 rounded-xl bg-sky-500/5 border border-sky-500/20 mb-6 flex items-start gap-2.5">
                <TrendingUp className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs text-sky-200">
                  <span className="font-semibold text-sky-300">Core Engineering Impact: </span>
                  {exp.impactMetric}
                </div>
              </div>

              {/* Key Bullet Achievements */}
              <div className="space-y-2.5 mb-6">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-zinc-800/80">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
