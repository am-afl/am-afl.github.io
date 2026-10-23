'use client';

import React, { useState } from 'react';
import { BackgroundCanvas } from '@/components/BackgroundCanvas';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ResearchSection } from '@/components/ResearchSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Skills } from '@/components/Skills';
import { TeachingSection } from '@/components/TeachingSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';

export default function HomePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 flex flex-col selection:bg-sky-500/30 selection:text-white">
      {/* Dynamic ambient interactive background */}
      <BackgroundCanvas />

      {/* Floating dynamic island navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1 z-10">
        <Hero />
        <About />
        <ResearchSection />
        <ProjectsSection />
        <ExperienceSection />
        <Skills />
        <TeachingSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Engineering Footer */}
      <Footer />

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
