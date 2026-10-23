import Link from 'next/link';
import { Terminal, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 font-mono text-2xl font-bold">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-sm text-zinc-400 max-w-md mb-8 leading-relaxed font-mono">
        The requested endpoint does not exist or has been shifted in coordinate space.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg"
      >
        <Home className="w-4 h-4 text-sky-600" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
