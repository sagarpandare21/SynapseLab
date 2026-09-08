import { Pattern } from "./types";

export const PATTERNS: Pattern[] = [
  {
    name: "CAT",
    vector: [1, 1, 0, 1, 0, 0, 1, 0],
    neuronIndex: 0,
  },
  {
    name: "DOG",
    vector: [1, 0, 1, 1, 0, 1, 0, 1],
    neuronIndex: 1,
  },
  {
    name: "BIRD",
    vector: [0, 1, 1, 0, 1, 0, 1, 1],
    neuronIndex: 2,
  },
  {
    name: "CAR",
    vector: [1, 0, 0, 1, 1, 1, 0, 0],
    neuronIndex: 3,
  },
];