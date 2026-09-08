import { PATTERNS } from "./patterns";
import { RecallResult, Weights } from "./types";

export function recall(weights: Weights): RecallResult {
  const scores: Record<string, number> = {};

  for (const pattern of PATTERNS) {
    const neuronWeights = weights[pattern.neuronIndex];

    let score = 0;

    for (let i = 0; i < pattern.vector.length; i++) {
      score += neuronWeights[i] * pattern.vector[i];
    }

    scores[pattern.name] = Number(score.toFixed(2));
  }

  const prediction = PATTERNS.reduce((best, pattern) => {
    return scores[pattern.name] > scores[best.name] ? pattern : best;
  }, PATTERNS[0]);

  return {
    prediction: prediction.name,
    scores: scores as RecallResult["scores"],
  };
}
