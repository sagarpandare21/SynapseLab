"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 bg-[#070b14]">
      <Link
        href="/"
        className="text-xl font-bold tracking-widest text-white"
      >
        SYNAPSELAB
      </Link>

      <div className="hidden md:flex gap-8 text-sm text-gray-400">
        <Link
          href="/experiment"
          className="hover:text-cyan-400 transition"
        >
          Experiment
        </Link>

        <Link
          href="/how-it-works"
          className="hover:text-cyan-400 transition"
        >
          How It Works
        </Link>

        <Link
          href="/bdh/evidence"
          className="hover:text-cyan-400 transition"
        >
          BDH
        </Link>

        <Link
          href="/evidence"
          className="hover:text-cyan-400 transition"
        >
          Evidence
        </Link>

        <Link
          href="/limits"
          className="hover:text-cyan-400 transition"
        >
          Limits
        </Link>
      </div>
    </nav>
  );
}