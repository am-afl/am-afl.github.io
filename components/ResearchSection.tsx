'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, RefreshCw, Eye, CheckCircle, ArrowRight, GitFork, Cpu } from 'lucide-react';
import { RESEARCH_PROJECT } from '@/lib/data';

export function ResearchSection() {
  const steps = [
    {
      num: "01",
      title: "Conditioning & Diffusion",
      desc: "Initial text prompt conditioned through text encoder into diffusion sampling pipeline to produce initial visual output.",
      badge: "Generation Phase",
    },
    {
      num: "02",
      title: "Perception & Alignment Scoring",
      desc: "Cross-modal CLIP evaluation paired with custom PerceptionEncoder scans for attribute binding, object counts, and spatial consistency.",
      badge: "Verification Phase",
    },
    {
      num: "03",
      title: "Discrepancy Reasoning",
      desc: "Agentic LLM analyzes discrepancy vectors between intention and generated artifact to formulate diagnostic repair strategies.",
      badge: "Reflection Phase",
    },
    {
      num: "04",
      title: "Adaptive Regeneration",
      desc: "Dynamically rewrites prompt tokens, modifies attention weights, and regenerates targeted regions without human intervention.",
      badge: "Self-Correction Phase",
    },
  ];

  return (
    <section id="research" className="py-24 px-4 sm:px-6 relative max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Frontier Academic Research
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Autonomous Agentic Text-to-Image Generation
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      {/* Main Research Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-zinc-800/80 shadow-2xl relative overflow-hidden mb-12">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
            {RESEARCH_PROJECT.status}
          </span>
          <span className="text-xs font-mono text-zinc-400">
            {RESEARCH_PROJECT.domain}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          {RESEARCH_PROJECT.title}
        </h3>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
          {RESEARCH_PROJECT.abstract}
        </p>

        {/* Cyclic Agent Loop Visualizer */}
        <div className="my-10 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800">
          <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-6 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
              Self-Correcting Closed-Loop Architecture
            </span>
            <span className="text-[11px] text-emerald-400">Autonomous Cycle Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-sky-400 font-bold">{step.num}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {step.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">{step.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Innovations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RESEARCH_PROJECT.keyInnovations.map((item, idx) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm mb-2">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-400 mr-2">Research Stack:</span>
          {RESEARCH_PROJECT.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
