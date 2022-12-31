import { w as writable } from "./index2.js";
const chapters = [
  "Sets",
  "Relations and functions 11",
  "Trigonometric functions",
  "Principle of mathematical induction",
  "Complex numbers",
  "Quadratic equations",
  "Linear inequalities",
  "Permutations and combinations",
  "Binomial theorem",
  "Sequences and series",
  "Straight lines",
  "Circle",
  "Ellipse",
  "Parabola",
  "Hyperbola",
  "Indroduction to 3D geometry",
  "Limits",
  "Derivatives",
  "Mathematical reasoning",
  "Statistics",
  "Probability"
];
const selectedChapter = writable("");
const selectedGenerator = writable(null);
const generators = writable({});
export {
  selectedChapter as a,
  chapters as c,
  generators as g,
  selectedGenerator as s
};
