'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileDown, Copy, Phone, ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '@/lib/data';
import { useToast } from './Toast';

export function ContactSection() {
  const { showToast } = useToast();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5" />
          Initiate Collaboration
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Let’s Build the Future Together
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-zinc-800/80 shadow-2xl relative overflow-hidden text-center">
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Open to <strong className="text-white">Software Engineering & AI Research roles</strong> at top-tier global teams (Google, OpenAI, Anthropic, DeepMind, Meta, Microsoft) and <strong className="text-white">M.Sc. / Ph.D. graduate research opportunities</strong> at premier European institutions.
        </p>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {/* Email */}
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-sky-500/30 transition-all flex flex-col justify-between items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-zinc-400 mb-1">Direct Inquiries</div>
            <div className="text-sm font-semibold text-white break-all mb-4">
              {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center gap-2 w-full">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 py-1.5 px-3 rounded-lg bg-sky-500 text-zinc-950 font-semibold text-xs hover:bg-sky-400 transition-colors"
              >
                Send Email
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'Email address')}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                title="Copy email"
                aria-label="Copy email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* GitHub */}
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-sky-500/30 transition-all flex flex-col justify-between items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-zinc-400 mb-1">Source Repositories</div>
            <div className="text-sm font-semibold text-white mb-4">
              github.com/{PERSONAL_INFO.githubUsername}
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-1.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* Phone / Direct */}
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-sky-500/30 transition-all flex flex-col justify-between items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-zinc-400 mb-1">Phone / Telegram</div>
            <div className="text-sm font-semibold text-white mb-4">
              {PERSONAL_INFO.phone}
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone number')}
              className="w-full py-1.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>Copy Number</span>
            </button>
          </div>
        </div>

        {/* Download CV CTA */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 hover:scale-[1.02] flex items-center gap-2"
          >
            <FileDown className="w-4 h-4 text-sky-600" />
            <span>Download Verified Curriculum Vitae (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
