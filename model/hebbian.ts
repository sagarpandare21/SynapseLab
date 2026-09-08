import { Pattern, Weights } from "./types";

const LEARNING_RATE = 0.25;
const DECAY_RATE = 0.10;

export function createInitialWeights(): Weights {
  return [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

export function hebbianUpdate(
  weights: Weights,
  pattern: Pattern
): Weights {
  const updated = weights.map((row) => [...row]);

  const neuron = pattern.neuronIndex;

  // Small decay represents loss of temporary synaptic strength.
  for (let n = 0; n < updated.length; n++) {
    for (let i = 0; i < updated[n].length; i++) {
      updated[n][i] = Math.max(
        0,
        updated[n][i] - DECAY_RATE
      );
    }
  }

  // Hebbian strengthening for the newly learned pattern.
  pattern.vector.forEach((activity, index) => {
    if (activity === 1) {
      updated[neuron][index] += LEARNING_RATE;
    }
  });

  return updated;
}