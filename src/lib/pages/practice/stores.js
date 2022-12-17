import { writable } from "svelte/store";

export const chapters = [
    'Sets', 'Relations and functions 11', 'Trigonometric functions', 'Principle of mathematical induction', 'Complex numbers and quadratic equations', 'Linear inequalities', 'Permutations and combinations', 'Binomial theorem', 'Sequences and series', 'Straight lines', 'Conic sections', 'Indroduction to 3D geometry', 'Limits and derivatives', 'Mathematical reasoning', 'Statistics', 'Probability', 'Relations and functions 12', 'Inverse trigonometric functions', 'Matrices', 'Determinants', 'Continuity and differentiability', 'Application of derivatives', 'Integrals', 'Application of integrals', 'Differential equations', 'Vector algebra', 'Three dimensional geometry', 'Linear programming'
]
export const selectedChapter = writable('');
export let selectedGenerator = writable(null);