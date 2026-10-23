'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, AWARDS, VOLUNTEER_ROLES } from '@/lib/data';
import { GraduationCap, Award, Calendar, MapPin, Users, CheckCircle2, Trophy } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 relative max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2">
          Academic Foundations & Honors
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Education, Awards & Community
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      {/* Main Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-zinc-800/80 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {edu.period}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  GPA: {edu.gpa}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                {edu.degree}
              </h3>
              <div className="text-sm font-semibold text-zinc-300 mb-4 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>{edu.institution}</span>
                <span className="text-zinc-500 font-normal">• {edu.location}</span>
              </div>

              <div className="space-y-2 mb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* National Honor Spotlight */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-sky-500/30 shadow-2xl mb-16 relative overflow-hidden bg-gradient-to-br from-sky-950/20 to-zinc-950/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                National Academic Distinction
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Ranked Top 0.1% in Iranian National University Entrance Exam
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 w-fit">
            Top 0.1% • 150,000+ Candidates
          </span>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
          Achieved top 0.1% placement nationwide in the fiercely competitive National Konkur for Mathematics & Physics in 2020. This benchmark secured immediate merit admission to Sharif University of Technology’s elite Computer Engineering department.
        </p>
      </div>

      {/* Volunteer Activities & Leadership */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-4 h-4 text-sky-400" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            Academic Community Leadership & Volunteering
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VOLUNTEER_ROLES.map((vol) => (
            <div
              key={vol.event + vol.year}
              className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-[11px] font-mono text-sky-400">{vol.year}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    {vol.role}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">{vol.event}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{vol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
