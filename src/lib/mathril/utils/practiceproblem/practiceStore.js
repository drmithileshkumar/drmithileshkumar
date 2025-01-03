import { derived, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';

export let attempted = writable(false);
export let saved = writable(true);
export let newChapter = writable(false);
export const workoutClass = writable(1);
export const workoutChapter = writable('');
export const workoutChapterN = writable(1);
export const workoutTimes = writable(0);
export const attemptedN = writable(0);
export const correctN = writable(0);
export const fastest = writable(10000);
export const slowest = writable(0);