"use client";

import { Weights } from "../model/types";

type NeuralNetworkProps = {
  weights: Weights;
};

export default function NeuralNetwork({
  weights,
}: NeuralNetworkProps) {
  const memoryRows = weights.length > 0 ? weights : [];

  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[700px] flex items-center justify-center gap-16">

        {/* INPUT LAYER */}
        <div className="flex flex-col gap-5">
          <p className="text-xs text-gray-500 text-center mb-2">
            INPUT
          </p>

          {[0, 1, 2, 3].map((node) => (
            <div
              key={node}
              className="w-10 h-10 rounded-full border-2 border-cyan-400
                         flex items-center justify-center
                         text-xs text-cyan-400"
            >
              {node + 1}
            </div>
          ))}
        </div>

        {/* SYNAPTIC CONNECTIONS */}
        <div className="flex flex-col gap-5">
          <p className="text-xs text-gray-500 text-center mb-2">
            SYNAPSES
          </p>

          {memoryRows.length > 0 ? (
            memoryRows.map((row, rowIndex) => {
              const average =
                row.reduce((sum, value) => sum + value, 0) /
                Math.max(row.length, 1);

              const strength = Math.max(
                0,
                Math.min(Math.abs(average), 1)
              );

              return (
                <div
                  key={rowIndex}
                  className="w-28 h-1 rounded-full transition-all duration-500"
                  style={{
                    opacity: 0.2 + strength * 0.8,
                    transform: `scaleY(${1 + strength * 2})`,
                    backgroundColor: "rgb(34, 211, 238)",
                  }}
                />
              );
            })
          ) : (
            <div className="text-xs text-gray-600">
              No learned weights
            </div>
          )}
        </div>

        {/* MEMORY LAYER */}
        <div className="flex flex-col gap-5">
          <p className="text-xs text-gray-500 text-center mb-2">
            MEMORY
          </p>

          {memoryRows.length > 0 ? (
            memoryRows.map((row, index) => {
              const strength =
                row.reduce((sum, value) => sum + Math.abs(value), 0) /
                Math.max(row.length, 1);

              const normalizedStrength = Math.min(
                strength,
                1
              );

              return (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border-2
                             border-cyan-400 flex items-center
                             justify-center text-xs
                             transition-all duration-500"
                  style={{
                    backgroundColor:
                      `rgba(34,211,238,${normalizedStrength * 0.6})`,
                    boxShadow:
                      `0 0 ${normalizedStrength * 30}px rgba(34,211,238,${normalizedStrength})`,
                  }}
                >
                  {index + 1}
                </div>
              );
            })
          ) : (
            <div className="w-10 h-10 rounded-full border border-white/10
                            flex items-center justify-center text-gray-600">
              —
            </div>
          )}
        </div>

      </div>
    </div>
  );
}