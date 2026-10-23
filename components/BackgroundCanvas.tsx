'use client';

import React, { useEffect, useState } from 'react';

export function BackgroundCanvas() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient background dark base */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 subtle-grid opacity-60" 
        style={{
          maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)',
        }}
      />

      {/* Ambient radial glows */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[130px]" />
      <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Dynamic Cursor Spotlight (desktop only) */}
      {mounted && (
        <div
          className="absolute inset-0 transition-opacity duration-300 hidden md:block"
          style={{
            background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.055), transparent 80%)`,
          }}
        />
      )}
    </div>
  );
}
