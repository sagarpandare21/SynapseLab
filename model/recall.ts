import { PATTERNS } from "./patterns";
import { PatternName, RecallResult, Weights } from "./types";

export function recall(weights: Weights): RecallResult {
  const scores: Record<PatternName, number> = {
    CAT: 0,
    DOG: 0,
    BIRD: 0,
    CAR: 0,
  };

  for (const pattern of PATTERNS) {
    const neuronWeights = weights[pattern.neuronIndex];

    if (!neuronWeights) continue;

    let score = 0;

    for (let i = 0; i < pattern.vector.length; i++) {
      score += neuronWeights[i] * pattern.vector[i];
    }

    scores[pattern.name] = Number(score.toFixed(2));
  }

  const prediction = PATTERNS.reduce(
    (best, pattern) =>
      scores[pattern.name] > scores[best.name] ? pattern : best,
    PATTERNS[0]
  );

  return {
    prediction: prediction.name as PatternName,
    scores,
  };
}