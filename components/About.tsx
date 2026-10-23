'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Brain, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export function About() {
  const pillars = [
    {
      icon: Shield,
      title: 'Enterprise Architecture & DDD',
      description: 'Disciplined application of Clean Architecture, Domain-Driven Design, and Hexagonal abstractions in Java Spring Boot and .NET Core. I treat database transactions and asynchronous message streaming with production-grade rigor.',
    },
    {
      icon: Brain,
      title: 'Agentic AI & Closed-Loop Reasoning',
      description: 'Moving beyond single-pass inference. My ongoing research focuses on iterative perception-feedback loops where autonomous agents evaluate multimodal generation (CLIP + custom PerceptionEncoder) and self-correct semantic drift.',
    },
    {
      icon: Code,
      title: 'Algorithmic Intuition & Systems Foundations',
      description: 'Shaped by rigorous education at Sharif University of Technology, high-level competitive mathematics (Top 0.1% nationwide), and mentoring 7 departmental university courses from Compilers to Machine Learning.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2">
          Engineering Mindset & Narrative
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Architecting Resilient Backends & Verifiable AI
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      {/* Main Narrative Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-3xl p-6 sm:p-10 mb-12 border border-zinc-800/80 shadow-2xl relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a Computer Engineering graduate from <strong className="text-white font-semibold">Sharif University of Technology</strong>, widely recognized as Iran’s foremost engineering institution. Having ranked among the <strong className="text-white font-semibold">top 0.1%</strong> out of 150,000+ applicants in the National University Entrance Exam, I have channeled this passion for problem-solving into both large-scale industrial software engineering and cutting-edge artificial intelligence research.
            </p>
            <p>
              In industry, at <strong className="text-white font-semibold">Mohaymen ICT Group</strong>, I build scalable enterprise microservices using <span className="text-sky-300 font-mono">Java Spring Boot</span> and <span className="text-sky-300 font-mono">.NET Core (C#)</span>, orchestrating event-driven pipelines through <span className="text-sky-300 font-mono">Apache Kafka</span> and <span className="text-sky-300 font-mono">RabbitMQ</span>. Previously, I delivered dynamic precious metals trading systems with React and Django at Hojjre, and high-throughput advertising analytics dashboards at Tapsell.
            </p>
            <p>
              Concurrently, in research, I investigate <strong className="text-white font-semibold">Agentic Multimodal AI Systems</strong>. Standard diffusion models generate imagery probabilistically without validation. My ongoing research introduces an iterative, closed-loop agentic framework combining CLIP evaluation and custom perception embeddings to enable self-directed prompt repair and autonomous generation refinement.
            </p>
          </div>

          <div className="w-full md:w-72 shrink-0 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 font-mono text-xs">
            <div className="text-zinc-400 uppercase text-[10px] tracking-widest font-semibold border-b border-zinc-800 pb-2">
              Fast Facts
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-zinc-500">Degree</div>
                <div className="text-zinc-200 font-medium">B.Sc. Computer Engineering</div>
                <div className="text-sky-400 text-[11px]">Sharif University of Tech</div>
              </div>
              <div>
                <div className="text-zinc-500">Cumulative GPA</div>
                <div className="text-zinc-200 font-medium">17.68 / 20.00</div>
              </div>
              <div>
                <div className="text-zinc-500">National Konkur Rank</div>
                <div className="text-emerald-400 font-medium">Top 0.1% (150k+ pool)</div>
              </div>
              <div>
                <div className="text-zinc-500">Teaching Experience</div>
                <div className="text-zinc-200 font-medium">7 University Appointments</div>
              </div>
              <div>
                <div className="text-zinc-500">Spoken Languages</div>
                <div className="text-zinc-200 font-medium">English (Fluent) • Persian (Native)</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Core Engineering Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
