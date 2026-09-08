"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { PATTERNS } from "../../model/patterns";

export default function ExperimentPage() {
  const [selectedPattern, setSelectedPattern] = useState("CAT");
  const [weights, setWeights] = useState<number[]>([]);
  const [step, setStep] = useState(0);
  const [lastRecall, setLastRecall] = useState<number | null>(null);
  const [beforeStrength, setBeforeStrength] = useState(0);
  const [afterStrength, setAfterStrength] = useState(0);
  const [interferenceValue, setInterferenceValue] = useState(0);
  const [learnCount, setLearnCount] = useState(0);

  const pattern =
    PATTERNS.find((p: any) => p.id === selectedPattern) || PATTERNS[0];

  // Learn the selected pattern
  function learnPattern() {
    const newWeights = pattern.vector.map(
      (value: number) => value
    );

    setWeights(newWeights);
    setLearnCount((count) => count + 1);
    setStep(1);
  }

  // Recall the learned pattern
  function recallPattern() {
    if (weights.length === 0) return;

    const strength =
      weights.reduce(
        (sum, value) => sum + Math.abs(value),
        0
      ) / weights.length;

    setLastRecall(strength);
    setBeforeStrength(strength);
    setStep(2);
  }

  // Apply interference
  function applyInterference() {
    if (weights.length === 0) return;

    const newWeights = weights.map(
      (value) => value * 0.6
    );

    setWeights(newWeights);

    const before =
      weights.reduce(
        (sum, value) => sum + Math.abs(value),
        0
      ) / weights.length;

    const after =
      newWeights.reduce(
        (sum, value) => sum + Math.abs(value),
        0
      ) / newWeights.length;

    setBeforeStrength(before);
    setAfterStrength(after);

    const interference =
      before === 0
        ? 0
        : ((before - after) / before) * 100;

    setInterferenceValue(interference);
    setLastRecall(after);
    setStep(3);
  }

  // Reset experiment
  function resetExperiment() {
    setWeights([]);
    setLastRecall(null);
    setBeforeStrength(0);
    setAfterStrength(0);
    setInterferenceValue(0);
    setLearnCount(0);
    setStep(0);
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Navbar />

      <main className="px-6 py-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <p className="text-cyan-400 text-sm tracking-[0.3em]">
              SYNAPSELAB / EXPERIMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Synaptic Memory Experiment
            </h1>

            <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
              Learn a pattern, recall it, introduce new learning,
              and observe how interference changes the stored state.
            </p>
          </div>

          {/* Pattern Selection */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              1. Choose a pattern
            </h2>

            <div className="flex flex-wrap gap-3 mt-5">
              {PATTERNS.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedPattern(item.id);
                    resetExperiment();
                  }}
                  className={`px-5 py-3 rounded-xl border transition ${
                    selectedPattern === item.id
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                      : "border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name || `Pattern ${item.id}`}
                </button>
              ))}
            </div>
          </section>

          {/* Experiment Steps */}
          <section className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              2. Run the experiment
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mt-6">

              {/* Learn */}
              <button
                onClick={learnPattern}
                className="rounded-xl bg-cyan-400 text-black px-5 py-4 font-semibold hover:bg-cyan-300 transition"
              >
                🧠 Learn
              </button>

              {/* Recall */}
              <button
                onClick={recallPattern}
                disabled={weights.length === 0}
                className="rounded-xl border border-cyan-400/40 px-5 py-4 font-semibold hover:bg-cyan-400/10 transition disabled:opacity-30"
              >
                🔍 Recall
              </button>

              {/* Interference */}
              <button
                onClick={applyInterference}
                disabled={weights.length === 0}
                className="rounded-xl border border-white/20 px-5 py-4 font-semibold hover:bg-white/10 transition disabled:opacity-30"
              >
                ⚡ Interfere
              </button>

            </div>
          </section>

          {/* Current State */}
          <section className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              3. Synaptic State
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              {/* Selected Pattern */}
              <div>
                <p className="text-gray-500 text-sm">
                  Selected Pattern
                </p>

                <p className="text-2xl font-semibold mt-1">
                  {pattern.name || `Pattern ${selectedPattern}`}
                </p>
              </div>

              {/* Learning Events */}
              <div>
                <p className="text-gray-500 text-sm">
                  Learning Events
                </p>

                <p className="text-2xl font-semibold mt-1">
                  {learnCount}
                </p>
              </div>

            </div>

            {/* Weight Visualization */}
            <div className="mt-8">
              <p className="text-gray-500 text-sm mb-3">
                Synaptic weights
              </p>

              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {weights.length > 0
                  ? weights.map((weight, index) => (
                      <div
                        key={index}
                        className="h-16 rounded-lg border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center"
                      >
                        <span className="text-cyan-400 text-sm">
                          {weight.toFixed(2)}
                        </span>
                      </div>
                    ))
                  : Array.from({ length: 8 }).map(
                      (_, index) => (
                        <div
                          key={index}
                          className="h-16 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center"
                        >
                          <span className="text-gray-600">
                            —
                          </span>
                        </div>
                      )
                    )}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mt-6 grid md:grid-cols-3 gap-6">

            {/* Before */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                Before Interference
              </p>

              <p className="text-3xl font-bold mt-2">
                {beforeStrength.toFixed(2)}
              </p>
            </div>

            {/* After */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                After Interference
              </p>

              <p className="text-3xl font-bold mt-2">
                {afterStrength.toFixed(2)}
              </p>
            </div>

            {/* Interference */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                Interference
              </p>

              <p className="text-3xl font-bold text-cyan-400 mt-2">
                {interferenceValue.toFixed(0)}%
              </p>
            </div>

          </section>

          {/* Experiment Status */}
          <section className="mt-6 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-500 text-sm">
              Experiment status
            </p>

            <p className="text-lg font-semibold mt-2">
              {step === 0 && "Ready to learn"}
              {step === 1 && "Pattern learned — try recall"}
              {step === 2 &&
                "Recall completed — introduce interference"}
              {step === 3 &&
                "Interference applied — recall changed"}
            </p>

            {lastRecall !== null && (
              <p className="text-gray-400 mt-2">
                Current recall strength:{" "}
                <span className="text-white font-semibold">
                  {lastRecall.toFixed(2)}
                </span>
              </p>
            )}
          </section>

          {/* Reset */}
          <button
            onClick={resetExperiment}
            className="mt-6 rounded-full border border-white/20 px-6 py-3 text-sm text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            ↺ Reset Experiment
          </button>

          {/* Back */}
          <div className="mt-8">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-cyan-400 transition"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}