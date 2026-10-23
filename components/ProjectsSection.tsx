'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project } from '@/lib/data';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Cpu, 
  Terminal, 
  ArrowUpRight,
  ShieldAlert,
  GitBranch,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { GithubIcon } from './Icons';

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeTabByProject, setActiveTabByProject] = useState<Record<string, 'challenge' | 'architecture' | 'solution' | 'impact'>>({});

  const categories = ['All', 'AI & Research', 'Backend & Distributed', 'Full-Stack', 'Systems'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const setProjectTab = (projectId: string, tab: 'challenge' | 'architecture' | 'solution' | 'impact') => {
    setActiveTabByProject((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2">
          Featured Engineering & Research
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Architectural Highlights & Systems
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedFilter === cat
                ? 'bg-sky-500 text-zinc-950 font-semibold shadow-lg shadow-sky-500/20 scale-105'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="space-y-12">
        {filteredProjects.map((project, idx) => {
          const currentTab = activeTabByProject[project.id] || 'architecture';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-zinc-800/80 shadow-2xl relative overflow-hidden group hover:border-zinc-700/80 transition-all"
            >
              {/* Top metadata bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-sky-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-sky-400/90 mb-4 font-mono">
                {project.tagline}
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Metrics Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80"
                  >
                    <div className="text-[10px] font-mono uppercase text-zinc-400">{metric.label}</div>
                    <div className="text-xs sm:text-sm font-semibold text-zinc-100 mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Deep-Dive Tabs (Challenge, Architecture, Solution, Impact) */}
              <div className="border border-zinc-800/80 rounded-2xl bg-zinc-950/60 p-4 sm:p-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 pb-3 mb-4">
                  <button
                    onClick={() => setProjectTab(project.id, 'architecture')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      currentTab === 'architecture'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Architecture</span>
                  </button>

                  <button
                    onClick={() => setProjectTab(project.id, 'challenge')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      currentTab === 'challenge'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Core Challenge</span>
                  </button>

                  <button
                    onClick={() => setProjectTab(project.id, 'solution')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      currentTab === 'solution'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Engineered Solution</span>
                  </button>

                  <button
                    onClick={() => setProjectTab(project.id, 'impact')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      currentTab === 'impact'
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Measured Impact</span>
                  </button>
                </div>

                <div className="text-sm text-zinc-300 leading-relaxed min-h-[4rem]">
                  {currentTab === 'architecture' && (
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">System Topology</div>
                      <p>{project.architecture}</p>
                    </div>
                  )}
                  {currentTab === 'challenge' && (
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">Engineering Bottleneck</div>
                      <p>{project.challenge}</p>
                    </div>
                  )}
                  {currentTab === 'solution' && (
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Implementation Details</div>
                      <p>{project.solution}</p>
                    </div>
                  )}
                  {currentTab === 'impact' && (
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">Measurable Results</div>
                      <p>{project.impact}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
