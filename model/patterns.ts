import { Pattern } from "./types";

export const PATTERNS: Pattern[] = [
  {
    id: "CAT",
    name: "CAT",
    vector: [1, 1, 0, 1, 0, 0, 1, 0],
    neuronIndex: 0,
  },
  {
    id: "DOG",
    name: "DOG",
    vector: [1, 0, 1, 1, 0, 1, 0, 1],
    neuronIndex: 1,
  },
  {
    id: "BIRD",
    name: "BIRD",
    vector: [0, 1, 1, 0, 1, 0, 1, 1],
    neuronIndex: 2,
  },
  {
    id: "CAR",
    name: "CAR",
    vector: [1, 0, 0, 1, 1, 1, 0, 0],
    neuronIndex: 3,
  },
];