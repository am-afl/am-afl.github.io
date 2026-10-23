'use client';

import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-zinc-900 bg-zinc-950/80 text-zinc-400 text-xs font-mono relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sharif University of Technology</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-zinc-400">
            Crafted for Next-Gen Engineering
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
