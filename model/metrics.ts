import { Pattern, Weights } from "./types";

export function memoryStrength(
  weights: Weights,
  pattern: Pattern
): number {
  const neuronWeights = weights[pattern.neuronIndex];

  let strength = 0;

  for (let i = 0; i < pattern.vector.length; i++) {
    strength += neuronWeights[i] * pattern.vector[i];
  }

  return Number(strength.toFixed(2));
}

export function interference(
  before: number,
  after: number
): number {
  if (before === 0) {
    return 0;
  }

  const change = ((before - after) / before) * 100;

  return Number(Math.max(0, change).toFixed(1));
}