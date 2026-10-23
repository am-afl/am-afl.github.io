'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/lib/data';
import { Layers, CheckCircle2, ChevronRight, Terminal, Cpu, Database, Sparkles, Layout, Wrench } from 'lucide-react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return Terminal;
      case 1: return Cpu;
      case 2: return Sparkles;
      case 3: return Database;
      case 4: return Layout;
      case 5: return Wrench;
      default: return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2">
          Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Mastered Technologies & Frameworks
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      {/* Category Pills Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = getCategoryIcon(idx);
          const isSelected = selectedCategory === idx;
          return (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-sky-500 text-zinc-950 font-semibold shadow-lg shadow-sky-500/20 scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-zinc-800/80 shadow-2xl"
        >
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                {SKILL_CATEGORIES[selectedCategory].category}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                {SKILL_CATEGORIES[selectedCategory].description}
              </p>
            </div>
            <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 w-fit">
              {SKILL_CATEGORIES[selectedCategory].skills.length} Core Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-sky-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm text-zinc-100 group-hover:text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {skill.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
