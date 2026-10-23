'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, FileDown, Mail, ArrowUpRight, Award, Cpu, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { useToast } from './Toast';

export function Hero() {
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    showToast('Copied email to clipboard: ' + PERSONAL_INFO.email);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center">
        {/* Academic / Elite Pedigree Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 shadow-lg backdrop-blur-md mb-8 hover:border-sky-500/40 transition-colors"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-300 tracking-wide">
            Sharif University of Technology • Top 0.1% National Rank
          </span>
          <span className="text-xs text-sky-400 font-semibold flex items-center">
            2026 Ready
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
        >
          AmirMohammad <br />
          <span className="text-gradient-accent">Aflatounian</span>
        </motion.h1>

        {/* High-Impact Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-zinc-300 max-w-2xl mb-8 leading-relaxed font-normal"
        >
          Software Engineer & Computer Engineering Researcher bridging{' '}
          <span className="text-white font-medium">high-throughput enterprise backend microservices</span>{' '}
          (Java Spring Boot, .NET Core, Kafka) with{' '}
          <span className="text-white font-medium">self-correcting agentic AI systems</span> and multimodal learning.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg hover:shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Explore Work & Research</span>
          </a>

          <a
            href="#experience"
            className="px-6 py-3 rounded-full bg-zinc-900/90 text-zinc-200 hover:text-white font-medium text-sm border border-zinc-700/80 hover:border-zinc-600 hover:bg-zinc-800 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-zinc-400" />
            <span>Enterprise Experience</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-4 py-3 rounded-full bg-zinc-900/60 text-zinc-300 hover:text-white font-mono text-xs border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all flex items-center gap-2"
            title="Click to copy email address"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Copy Email</span>
          </button>
        </motion.div>

        {/* Highlight Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl"
        >
          <div className="p-4 rounded-2xl glass-panel glow-card text-left">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Entrance Rank</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Top 0.1%</div>
            <div className="text-xs text-zinc-400 mt-0.5">150,000+ candidates</div>
          </div>

          <div className="p-4 rounded-2xl glass-panel glow-card text-left">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Sharif CE GPA</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">17.68 / 20</div>
            <div className="text-xs text-zinc-400 mt-0.5">Rigorous curriculum</div>
          </div>

          <div className="p-4 rounded-2xl glass-panel glow-card text-left">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Mentorship</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">7x TA Roles</div>
            <div className="text-xs text-zinc-400 mt-0.5">ML, Compilers, Alg.</div>
          </div>

          <div className="p-4 rounded-2xl glass-panel glow-card text-left">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Systems</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Enterprise</div>
            <div className="text-xs text-zinc-400 mt-0.5">Spring Boot & .NET</div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1.5 text-zinc-400"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-zinc-400" />
      </motion.div>
    </section>
  );
}

function GraduationCap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}
