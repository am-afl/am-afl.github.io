'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Terminal, 
  FolderGit2, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  Mail, 
  FileDown, 
  Copy, 
  ExternalLink,
  X
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { useToast } from './Toast';
import { PERSONAL_INFO } from '@/lib/data';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const commands = [
    {
      id: 'section-about',
      title: 'About & Philosophy',
      category: 'Navigation',
      icon: Terminal,
      action: () => scrollToSection('about'),
    },
    {
      id: 'section-research',
      title: 'Agentic AI Research',
      category: 'Navigation',
      icon: Sparkles,
      action: () => scrollToSection('research'),
    },
    {
      id: 'section-projects',
      title: 'Featured Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => scrollToSection('projects'),
    },
    {
      id: 'section-experience',
      title: 'Work Experience',
      category: 'Navigation',
      icon: Briefcase,
      action: () => scrollToSection('experience'),
    },
    {
      id: 'section-skills',
      title: 'Technical Skills',
      category: 'Navigation',
      icon: Terminal,
      action: () => scrollToSection('skills'),
    },
    {
      id: 'section-teaching',
      title: 'Sharif Teaching Experience',
      category: 'Navigation',
      icon: BookOpen,
      action: () => scrollToSection('teaching'),
    },
    {
      id: 'section-education',
      title: 'Education & Honors',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => scrollToSection('education'),
    },
    {
      id: 'action-copy-email',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Quick Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        showToast('Email address copied to clipboard!');
      },
    },
    {
      id: 'action-github',
      title: 'Open GitHub Profile (@am-afl)',
      category: 'Links',
      icon: GithubIcon,
      action: () => window.open(PERSONAL_INFO.github, '_blank'),
    },
    {
      id: 'action-download-cv',
      title: 'Download Curriculum Vitae (PDF)',
      category: 'Quick Actions',
      icon: FileDown,
      action: () => {
        window.open('/resume.pdf', '_blank');
        showToast('Opening CV in new tab...');
      },
    },
    {
      id: 'action-contact',
      title: 'Send an Email',
      category: 'Quick Actions',
      icon: Mail,
      action: () => window.location.href = `mailto:${PERSONAL_INFO.email}`,
    },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-xl rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl overflow-hidden z-10 backdrop-blur-2xl"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800/80">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search sections..."
                className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="px-1.5 py-0.5 text-[11px] font-mono rounded bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 border border-zinc-700/60"
              >
                ESC
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-zinc-900">
              {filtered.length === 0 ? (
                <div className="py-10 text-center text-sm text-zinc-500">
                  No matching commands found.
                </div>
              ) : (
                <div className="space-y-1">
                  {filtered.map((cmd, idx) => {
                    const Icon = cmd.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={cmd.id}
                        onClick={() => {
                          cmd.action();
                          onClose();
                        }}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm transition-all ${
                          isSelected
                            ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                            : 'text-zinc-300 hover:bg-zinc-900 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-sky-400' : 'text-zinc-400'}`} />
                          <span className="font-medium">{cmd.title}</span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                          {cmd.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/40 border-t border-zinc-800/60 text-[11px] text-zinc-500 font-mono">
              <div className="flex items-center gap-2">
                <span>↑↓ Navigate</span>
                <span>•</span>
                <span>↵ Select</span>
              </div>
              <div>Linear / Raycast Experience</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
