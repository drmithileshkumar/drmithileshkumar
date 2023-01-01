import { writable } from "svelte/store";

export const chapters = [
    'Sets', 'Relations and functions 11', 'Trigonometric functions', 'Principle of mathematical induction', 'Complex numbers','Quadratic equations', 'Linear inequalities', 'Permutations and combinations', 'Binomial theorem', 'Sequences and series', 'Straight lines', 'Circle', 'Ellipse', 'Parabola', 'Hyperbola', 'Indroduction to 3D geometry', 'Limits','Derivatives', 'Mathematical reasoning', 'Statistics', 'Probability', 'Relations and functions 12', 'Inverse trigonometric functions', 'Matrices', 'Determinants', 'Continuity','Differentiability', 'Application of derivatives', 'Indefinite Integrals', 'Definite Integrals', 'Application of integrals', 'Differential equations', 'Vector algebra', 'Three dimensional geometry', 'Linear programming'
]
export const selectedChapter = writable('');
export const selectedGenerator = writable(null);
export const generators = writable({})