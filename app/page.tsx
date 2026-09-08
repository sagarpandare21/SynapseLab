"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* Navigation */}
      <Navbar />


      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">

        <p className="text-sm tracking-[0.3em] text-cyan-400 mb-6">
          AN INTERACTIVE MEMORY LAB
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Can a memory live
          <br />
          in a connection?
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
          Explore how short-term memory can emerge from
          rapidly changing synaptic connections — and how
          new learning can interfere with what came before.
        </p>

        {/* Neural network preview */}
        <div className="my-12 flex items-center justify-center">

          <div className="flex items-center gap-8">

            <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

            <div className="w-20 h-[2px] bg-cyan-400" />

            <div className="w-8 h-8 rounded-full border-2 border-cyan-400 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.5)]" />

            <div className="w-20 h-[2px] bg-cyan-400" />

            <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

          </div>

        </div>

        {/* Start button */}
       <Link
  href="/experiment"
  className="rounded-full bg-cyan-400 px-8 py-4 font-semibold
             text-black transition hover:scale-105
             hover:bg-cyan-300"
>
  Start Experiment →
</Link>
        <p className="mt-5 text-sm text-gray-500">
          Learn → Strengthen → Interfere → Remember
        </p>

      </section>

      {/* Claim */}
      <section className="border-t border-white/10 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm tracking-widest text-gray-500 mb-4">
            THE CENTRAL CLAIM
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Learning changes the connections.
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed">
            In our simplified model, learning changes synaptic
            weights. Those changing weights become the temporary
            state used during recall.
          </p>

        </div>

      </section>

    </main>
  );
}