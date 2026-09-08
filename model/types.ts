export type PatternName = "CAT" | "DOG" | "BIRD" | "CAR";

export type Pattern = {
  name: PatternName;
  vector: number[];
  neuronIndex: number;
};

export type Weights = number[][];

export type RecallResult = {
  prediction: PatternName;
  scores: Record<PatternName, number>;
};